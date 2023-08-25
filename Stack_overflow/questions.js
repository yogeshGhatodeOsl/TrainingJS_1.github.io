let selected_priority = 'all';

function displayQuestions() {
    const AllQuestions = JSON.parse(localStorage.getItem("Question_arr"))
    const container = document.getElementById("container_question");
    container.innerHTML = ``;

    if(AllQuestions && AllQuestions.length > 0 ){
        for(let curInd = 0; curInd <AllQuestions.length ; curInd++){
            const QuestionDetail = AllQuestions[curInd];

            if( selected_priority == 'all' ||  QuestionDetail.priority ==  selected_priority ){
                const dataItem = document.createElement("div");
                dataItem.className = "data-item";
                
                dataItem.innerHTML = `
                    <span><strong>Author:</strong> ${QuestionDetail.author}</span> 
                    <span><strong>Created:</strong> ${timeAgo(QuestionDetail.createdTime) }</span> 
                    <p><strong>Question:</strong> ${QuestionDetail.question}</p> 
                    <span><strong>Priority:</strong> ${QuestionDetail.priority}</span> 
                    <span><strong>Expiry Date:</strong> ${timeRemain(QuestionDetail.expiry) }</span> 
                    <br> <br> <br> <br>
                `;

                container.appendChild(dataItem);
            }
        }
    }
    else{
        container.textContent = "No data to display.";
    }
}


function timeAgo(createdAt) {
    const now = new Date();
    const createdDate = new Date(createdAt);

    const timeDifference = now - createdDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} days ago`;
    } else if (hours > 0) {
        return `${hours} hours ago`;
    } else if (minutes > 0) {
        return `${minutes} minutes ago`;
    } else {
        return `${seconds} seconds ago`;
    }
}

function timeRemain(expireAt){
    const now = new Date();
    const expireDate = new Date(expireAt);

    const timeDifference = expireDate - now;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} days remains`;
    } else if (hours > 0) {
        return `${hours} hours remains`;
    } else if (minutes > 0) {
        return `${minutes} minutes remains`;
    } else {
        return `${seconds} seconds remains`;
    }
}



// calling functions
displayQuestions()


const clear_filter = document.getElementById("clear_filter");
const select_priority = document.getElementById("select_priority");

clear_filter.addEventListener("click" , () => {
    selected_priority = 'all';
    select_priority.value = 'all';
    displayQuestions();
})


select_priority.addEventListener('change', () => {
    selected_priority = select_priority.value;
    displayQuestions();
})



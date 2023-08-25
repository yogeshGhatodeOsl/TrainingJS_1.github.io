const Question_arr = JSON.parse(localStorage.getItem("Question_arr")) || [];

const post_btn =  document.getElementById("post_btn")

post_btn.addEventListener('submit', (input) => {
    input.preventDefault();

     let author = document.getElementById("author").value;
     if(author === ""){
        author = "Anonymous";
     }
     const question = document.getElementById("question").value;
     const priority = document.getElementById("priority").value;
     const expiry = document.getElementById("expiry").value;
     const createdTime = Date.now();
 
     const Data = {
         author: author,
         question: question,
         priority: priority,
         expiry: new Date(expiry),
         createdTime : createdTime
     };
 
     Question_arr.push(Data);

     document.getElementById("author").value = "";
     document.getElementById("question").value = "";
     document.getElementById("priority").value = "low";
     document.getElementById("expiry").value = "";

     localStorage.setItem( 'Question_arr' , JSON.stringify(Question_arr) );

     window.location.href = "./questions.html";
}) 
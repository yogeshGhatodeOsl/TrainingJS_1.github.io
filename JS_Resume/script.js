let id_user = 1;

const form = document.getElementById('thisForm');
form.addEventListener('submit', helperSubmit);

function helperSubmit(event) {
    event.preventDefault();

    let ResumeData = {
        id : id_user,
        personal : {},
        education : [],
        experience : [],
        skills : {
            language : [],
            tools :  []
        }
    }
    id_user++;
    
    // for personal information. 
    // as this input fields wants be changed we do not iterate.
    ResumeData.personal.name = event.target.elements.name.value;
    ResumeData.personal.email = event.target.elements.email.value;
    ResumeData.personal.phone = event.target.elements.phone.value;
    ResumeData.personal.address = event.target.elements.address.value;
    
    let educations_div =  event.target.firstElementChild.nextElementSibling.children;
    let count_div = 0;

    for(let edu of educations_div){
        if(count_div == 0){
            count_div++;
            continue;
        }

        let edu_itr = edu.children, j = 0;
        let edu_ele = {};

        for(let input of edu_itr){
            if(j == 1){
                edu_ele.university = input.value;
            }
            else if( j == 3){
                edu_ele.degree = input.value;
            }
            else if( j == 5){
                edu_ele.gradYear = input.value;
            }
            j++;
        }

        ResumeData.education.push(edu_ele);
    }

    let event_tar = event.target.firstElementChild.nextElementSibling;
    let experience_div =  event_tar.nextElementSibling.children;
    let count_exp = 0;

    for(let exp of experience_div){
        if(count_exp == 0){
            count_exp++;
            continue;
        }

        let exp_itr = exp.children, j = 0;
        let exp_ele = {};

        for(let input of exp_itr){
            if(j == 1){
                exp_ele.university = input.value;
            }
            else if( j == 3){
                exp_ele.degree = input.value;
            }
            else if( j == 5){
                exp_ele.gradYear = input.value;
            }
            j++;
        }

        ResumeData.experience.push(exp_ele);
    }

    let event_tar_skill = event.target.firstElementChild.nextElementSibling.nextElementSibling;
    let language_div =  event_tar_skill.nextElementSibling.firstElementChild.nextElementSibling.children;
    let count_lang = 0;

    for(let lang of language_div){
        if(count_lang == 0){
            count_lang++;
            continue;
        }

        ResumeData.skills.language.push(lang.firstElementChild.value);
    }

    let tools_div =  event_tar_skill.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.children;
    let count_tool = 0;

    for(let tool of tools_div){
        if(count_tool == 0){
            count_tool++;
            continue;
        }

        ResumeData.skills.tools.push(tool.firstElementChild.value);
    }

    // saving resume data to the local storage
    localStorage.setItem( `${ResumeData.id}` , JSON.stringify(ResumeData) );

    // display resume data function 
    displayResume(`${ResumeData.id}`);

}


let displayResume = (resumeId) => {
    const ResumeItem = JSON.parse(localStorage.getItem(`${resumeId}`));


} 










// event listeners : 

// for creating educational fields 
const educationEle = document.querySelector('.education');

function createEducation() {
    const newDiv = document.createElement('div');
    const addEducation = document.querySelector('.education').lastElementChild.lastElementChild;
    addEducation.style.display = "none";

    newDiv.innerHTML = `<label for="university">University:</label>
                        <input type="text" id="university" name="university" required> 

                        <label for="degree">Degree:</label>
                        <input type="text" id="degree" name="degree" required>  

                        <label for="gradYear">Graduation Year:</label>
                        <input type="text" id="gradYear" name="gradYear" required>  

                        <button type="button" class="addEducation" onclick="createEducation()">Add Education</button>`;

    // console.log(educationEle);
    educationEle.appendChild(newDiv);
}


// for creating experience fields
const experienceEle = document.querySelector('.experience');

function createExperience() {
    const newDiv = document.createElement('div');
    const addExperience = document.querySelector('.experience').lastElementChild.lastElementChild;
    addExperience.style.display = "none";

    newDiv.innerHTML = `<label for="company">Company Name:</label>
                        <input type="text" id="company" name="company" required>

                        <label for="position">Position:</label>
                        <input type="text" id="position" name="position" required>

                        <label for="duration">Duration:</label>
                        <input type="text" id="duration" name="duration" required>

                        <button type="button"  class="addEducation" onclick="createExperience()">Add Experience</button>`;

    experienceEle.appendChild(newDiv);
}


// for creating multiple language
const langEle = document.querySelector('.programming_lang');

function createLanguage() {
    const newDiv = document.createElement('div');
    const addLanguage = document.querySelector('.programming_lang').lastElementChild.lastElementChild;
    addLanguage.style.display = "none";

    newDiv.innerHTML = `<input type="text" id="languages" name="languages" required>
                        <button type="button" onclick="createLanguage()">Add Language</button>`;

    langEle.appendChild(newDiv);
}


// for creating multiple tools 
const toolEle = document.querySelector('.tools');

function createTool() {
    const newDiv = document.createElement('div');
    const addTool = document.querySelector('.tools').lastElementChild.lastElementChild;
    addTool.style.display = "none";

    newDiv.innerHTML = `<input type="text" id="tools" name="tools" required>
                        <button type="button" onclick="createTool()">Add Tools</button>`;

    toolEle.appendChild(newDiv);
}




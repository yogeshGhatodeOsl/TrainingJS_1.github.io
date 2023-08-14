// Part 1: Window

// a. JavaScript function which displays the current URL of the webpage using the window object.

function current_url() {
    const location = window.location;     // using window object 
    const url = location.href;            // getting url from href
    console.log("Your current url is : ")
    console.log(url);                      // printing elmenet 
}
// calling function for getting current url :
current_url();


// b. Button with the text "Open New Window" When the button is clicked,  open a new browser window
//    using the window.open() method. Where new window is 500 pixels wide and 400 pixels tall.

const element_btn = document.getElementById('open_new_window');    // getting elemenet from html file

element_btn.addEventListener('click', () => {
    const n_window = window.open('https://www.google.com/', 'Google Home' , 'width=500,height=400');    // window.open() function will open the new window
                                                                                                        // with 3 parameter , 1st : url , 2nd : target , 3rd : features 
});




// Part 2: Document

// changes the background color of the <div> element to red 

const element_div = document.getElementById('myDiv');    
element_div.style.backgroundColor ='red';                  // change style of div element using js.

// calling a JavaScript function that changes the background color of the <div> element to blue.
const change_btn = document.getElementById('change_color')

change_btn.addEventListener('click' , () => {          // event listener once the button is clicked.
    element_div.style.backgroundColor = 'blue';
})



// Part 3: Building Interactivity with DOM Manipulation

const add_item  = document.getElementById('add_item');      // getting html button to add item
const myList = document.getElementById('myList');           // ul element from html using document object



// for adding the new li item to the ul list
add_item.addEventListener( 'click' , () => {
    const new_li = prompt("Enter a 'li' item");               // promting message for adding li item.

    const create_li =  document.createElement("li");          // creating li element.

    create_li.textContent = new_li;                         // adding text content to created li item.
     
    myList.appendChild(create_li);                          // adding li item to the ul list.
});


//  for removing firt item from the ul list. 
const remove_first_item = document.getElementById('remove_first_item');

remove_first_item.addEventListener( 'click' , () => {       // added event listener once the button is clicked. 
  
    if(myList.children.length > 0 ){                          // for checking item contain or not in ul list.
        myList.removeChild(myList.firstChild);                // js method for removing first item from ul list.
    }   
    else {
        alert("UL list is empty.")                          //  if ul list have no item. 
    }
})






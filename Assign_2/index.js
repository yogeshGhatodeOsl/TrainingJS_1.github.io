/*  1. Data Structures: Arrays */
// sum of all the numbers in the array.

function sumArray(arr){
    let sum = 0 ;                                // initialising variable.
    for(let ind = 0; ind < arr.length ; ind++){           // for loop to iterate through all the element of array.
        sum += arr[ind];                                  
    }    
    return sum;               // returning variable.
}

// calling sumArray function 
const num = [ 2,3,4,1,3,4 ];       // declare and initialize the array of integer.
console.log(sumArray(num));       // for printing.


/* 2. Data Structures: Objects */

const person = {                          // declare and initialize js object.
    name : "user_1",                      //  with  name , age and email attributes.
    age : 40,                             
    email : "user_1@gmail.com"
}

function printPersonDetails(person_obj){     // for printing person's details.
    console.log(person.name);
    console.log(person.age);
    console.log(person.email);
}

// calling printPersonDetails function 
printPersonDetails(person);




/* 3. Functions Are Just Variables */

// Created a variable called `greeting` and assign it a function
const greet_var = function greeting(name = "user") {                             // declaring variable as a function.
    let greeting = "Hi " + name + " we welcome you to the community"; 
    return greeting ;                                                           // returns the greeting.
}


/* 4. More on Objects and The "this" Keyword */

// `car` object with properties `brand`, `model`,
// and a method called `start` which print message. 

const car = {                                          // created a object with attributes and  start method. 
    brand : "Mercedes-Benz",
    model : "S-Class",
    start : function () {
        console.log("Car Brand Name: " + this.brand + " and Model Name : " + this.model + 
                    " being started.");
    }
}
// calling object method 
car.start();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
 

/*  5. The old "var"  */

// JavaScript function called `printNumbers` that
// uses the `var` keyword to declare a variable called
// `count` and a for loop to print the numbers from 1 to 5.
// The variable `count` is accessible outside the loop.

function printNumbers() {
    var count = 1;                         // creating variable. 

    for(count ; count <=5 ; count++){            // for loop for iteration . 
        console.log(count);
    }
    console.log("value of count variable outside the loop is: " + count); // print value outside the loop 
}

//  calling function : 
printNumbers();



/* 6. Function binding  */

// user object with name va
const user = {                             // object with attribute : name and method : sayName. 
    name : "user_1",                         
    sayName : function () {
        console.log("User name is: ", this.name);           // using this keyword to access the attribute of the object.
    }
}

// binding sayName method of user object to boundSayName function.
const boundSayName = user.sayName.bind(user);     

// calling boundSayName function 
boundSayName();



/*  7. Arrow functions, the basics  */

// An arrow function called `double` that takes a number as a parameter and returns the doubled value of that number.

// arrow function
const double = (number) => {
    return number*2;
}

// calling arrows function : 
console.log("Arrows function returns : ", double(10));
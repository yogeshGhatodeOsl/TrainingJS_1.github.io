/* 1. Data types:   */

// declared and initialised the js string which can be changed. : 
let str = "This is the String in JS";     

// declard and initialise the js numbers. : 
let num_int = 203 ;    // integer value 
let num_float = 12.34 ;  // float value

// boolean variable : 
let bool_val = true;           

// array data structure in js :
const arr =  [ "user_1" , 23 , 2.3 , 20, 2323 , "user_2" ] ;  // array of different types of element
const arr1 = [ "usr1" , "usr2" , "usr3" ] ;  // array of strings. 

// Info : for variable declaration we can use let or const where variable declared with const cannot get changed. 
// The old "var"  : var keyword used earlier to declare the variables.


/*  2. Loops: while and for:   */

//a) while loop for display number from 1- 10 
let counter = 1;
console.log("printing 1 to 10 numbers");
while(counter  <= 10) {              // while loop for iteration
    console.log(counter);
    counter++;                    // increamenting the counter variable.
}

// b) Use a for loop to calculate the sum of numbers from 1 to 100. 
let sum = 0;                      // declare and initialised the variable.
for(let num = 1 ; num<= 100 ; num++){   // loop for iteration from 1 to 100. 
    sum += num;
}
console.log("sum of 1 to 100 number : ")     // printing statement for console tab.
console.log(sum);




/* 3. The "switch" statement: */ 

function switch_fun(val){
    switch(val){                             // switch keyword with value as parameter.
        case 1 :                      
            console.log("Monday");           // if value == 1 will print execute this. 
            break;                              // break keyword used to break the execution of next statement as condition meets.

        case 2 :
            console.log("Tuesday");         // if value == 2 will print execute this. 
            break;                       

        case 3 :
            console.log("Wednesday");       //  if value == 3 will print execute this. 
            break;                           
        
        case 4 :
            console.log("Thursday");       //  if value == 4 will print execute this. 
            break;

        case 5 : 
            console.log("Friday");         //  if value == 5 will print execute this. 
            break;

        case 6 :
            console.log("Saturday");       //  if value == 6 will print execute this. 
            break;

        case 7 :
            console.log("Sunday");         //  if value == 7 will print execute this. 
            break;

        default :                          // for other values. 
            console.log("undesired number!");
    }
}

// calling switch case function :
console.log("day choosen respective to number is:")         // for console tab printing statement.
switch_fun(2);



/* 4. Program Flow: Functions:  */

// a) "calculateArea" function for calculate area : 
function calculateArea(length, width){
    let area = length*width;                       // using arithemetic * (multiply)  operator.
    return area;                        // return value . 
}


// Calling the function with different sets of length and width values 
let set_wl = [ [1,2] , [2,3], [3,4] , [4,5] , [10, 1] ];        // declaring and initializing the array of array. 

for(let ind = 0 ; ind < set_wl.length ; ind++){                  // iterating over the array. 
    let len = set_wl[ind][0], wid = set_wl[ind][1];              // getting length and width.

    let t_area = calculateArea( len, wid) ;                      // calling function .
    console.log("calling function ", ind , " times. Area :");
    console.log(t_area);                             // printing calculated area.
}



/* 5. Program Flow: Conditional Statements:   */

// a. conditional statement that checks if a given number +ve,-ve or zero.

function conditional_stat(num) {
    if(num > 0){                                           // condition for positive numbers.
        console.log("Given number is positive");        
    }
    else if(num < 0){                                     // condition for negative numbers.
        console.log("Given number is negative");           
    }
    else {                                                // condition for zero.
        console.log("Given number is zero");
    }
}


// b. Test the conditional statement with different no’s and display the results.

let test_arr = [ 1  , -1 , 3, 4, 0 , -10 , 0];        // declaring test_arr. 

// calling function :

for(let ind = 0 ; ind < test_arr.length; ind++){
    conditional_stat(test_arr[ind]);                  // calling funtion with input.
}


/*  6. Program Flow: Loops:   */

// a. Use a loop to display even numbers from 1 to 20.

function even_number() { 
    for(let start = 1; start<21 ; start++){            // for loop for iteration 
        if(start %2 ==  0 ){                      // checking number is even or odd.
            console.log(start);
        }
    }
}
// calling function 
even_number();


// b. Use a loop to calculate the factorial of a given number.
let fact_ans = 1 ;

function factorial(num) {
    for(let start = 1 ; start<= num ; start++) {       // for iterating till the num value
        fact_ans =  fact_ans*start;                   // multiply each interger value till num.
    }
    console.log(fact_ans);  // printing ans
    fact_ans = 1;      // setting fact_ans to 1 for another call of factorial functionl.
}

factorial(5);       // calling function.








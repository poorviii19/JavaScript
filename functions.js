 function fun1(){  
    console.log("Hello World!");
    console.log(4);
 }

 fun1();
 fun1();
 fun1();

//  Function lets us reuse the code
/*

Syntax rules:
-> Can't use special words/keywords eg: function
->can't start with number
-> can;t use special characters except: $, _
->Best practice = use camelCase

{
 ->function body and scope
}

function call -> functionName(); this helps to run the code inside fucntion by calling it
*/

/*
Function scope:
Limits where a variable exists
any variable created between {...},
only exists between the {...}
*/
let num1 = 5;
let num2 = 7;
let operator = '/'; // <-- set operator properly as per your choice

function calculator(num1, num2, operator) {

    if (operator === '+') {
        console.log('Add:', num1 + num2);
    } 
    else if (operator === '-') {
        console.log('Subtract:', num1 - num2);
    } 
    else if (operator === '*') {
        console.log('Multiply:', num1 * num2);
    } 
    else if (operator === '/') {
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log('Divide:', num1 / num2);
        }
    } 
    else {
        console.log("Invalid operation");
    }
}

calculator(num1, num2, operator);



//return statement:
// console.log() → just displays output
// return → gives the result back, making your function reusable
//we can return anything that results into a value

//within a scope after return statement nothing else gets execute
// returning variable is preferred to be a global variable
function findMax(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

let max = findMax(10, 25);
console.log("Max value:", max);

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(toFahrenheit(25)); // 77
// function parameters:

function calculateTax(param1){   
console.log(param1*0.1)
}
calculateTax(2000);
calculateTax(5000);  //passing a value/ argument to the function

// syntax rules for parameters:
/*
->type parameter name between()
->rest rules are same as variables for naming convention
parameters only exist inside the fucntion's scope
we can pass multiple parameters as well in a function, seperating them with comma

if an argument is not passed from the fucntion call , we can set it's default value in the function
*/

function calculate(tax = 5){  //default value
    console.log(tax*4);
}
calculate();
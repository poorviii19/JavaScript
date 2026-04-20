/* truthy and falsy values 

if Statements don't just works with boolean values only but they also works with any type of value
example: number, string, etc.

falsy values = 0, false, '', NaN undefined null , rest all values are truthy values
*/

if(5){  //here 5 behaves just like truth
    console.log("truthy");
}
if(0){  //0 behaves as false
    console.log("falsy");
}

const cartQuantity = 5;
if(cartQuantity){
    console.log("cart has products");
}

// cartQuantity >= 0   true
// cartQuantity = 0  false


// truthy and falsy values also work with logical operators:
console.log(!0);  //displays true

//NaN: Not a Number, we get NaN if we have done some wrong math
console.log('text'/5);

let variable1;  //like this we can only do with let otherwise for const => const variable1 = undefined;
console.log(variable1);

const variable2 = undefined;
console.log(variable2);



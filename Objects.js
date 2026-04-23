// Objects : Object groups multiple values together

//synatx:-
const product = {
    //property: value
    name: 'socks',
    price: 1090
};

console.log(product); //can access object as whole
console.log(product.name); //we can access object using property name
console.log(product.price);  //dot notation
 
product.name = 'cotton socks'; //changes the value associated with the property
console.log(product.name);

product .newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

console.log(typeof product);

// why objects?
// ->make the code more organized
//allow us to use multiple values together


const product2 = {
    name:'shirt',
    ['delivery-time']: '1 day',  //brackets here are just optional
    rating:{  //nested objects, because object itself is also a value 
        stars: 4.5,
        count: 87
    },
    fun: function fun1(){  //method->because function is just an another type of a value
        console.log("function inside an object");  //console is a built in object that is provided by js and log is a function that is inside console.
    }
}
console.log(product2);
console.log(product2.name);
//another way to access objects:
console.log(product2['name']);  //bracket notation
// console.log(product2.delivery-time) in order to use properties like this whichincludes - we use [] bracket notation
console.log(product2['delivery-time']);

//we usually use . notation by default

//access nested onjects:
console.log(product2.rating);
console.log(product2.rating.stars);
console.log(product2.rating.count);
console.log(product2['rating']);
console.log(product2['rating']['stars']);
console.log(product2['rating']['count']);

product2.fun();  //to access fucntion inside an object
console.log(typeof console);  //object(buit in object)
console.log(typeof console.log);  //function
console.log(typeof Math.random);  //fucntion
console.log(typeof Math); //object
console.log(typeof Math.random()); //number

// built in Objects
// eg: console, Math, JSON, localStorage

// JSON; JavaScript Object Notation:
// ->it ia a syntax simialr to javascript objects with less features

// 1) All properties and strings must be inside double quotes, single quotes are not supported
// 2) JSON does not support functions

// Why we use JSON?
// JSON syntax can be understood by almost every programming language, more universal
//Built-in JSON Objects: helps to convert javascript objects to JSON

console.log(JSON.stringify(product2));  //stringify is a method of JSON objects
console.log(typeof JSON.stringify(product2));  


// converting back from JSON to js:
const jsonString = JSON.stringify(product2)
console.log(JSON.parse(jsonString));



// localStorage: another built-in object
// variables are temporary: if we refresh/close the page all the variables are deleted

// localStorage.setItem() //it is a method to save values inside local stoarge
// localStorage.getItem()

//local storage only supports stings


// AutoBoxing: automatically wraps the string in  special object and this special object has some properties
// AutoBNoxing also works with other values like number and booleans but not works with null and undefined
console.log('hello'.length);
console.log('hello'.toUpperCase());
console.log('HELLO'.toLowerCase());

// Objects are references:
const object1 = {
    message: "hello"
};

//object1 is a reference to the actual value in computer's memory.

const object2 = object1; //doesnot make the copy of actual value but it makes the copy of reference -> copy by reference
console.log(object1);
console.log(object2);

object1.message = 'Good Job';
console.log(object1);
console.log(object2);

// const prevents us from changing the reference int he variable, 
// but it does not prevent us from reaching into the reference and changing the object that is pointeng to
// we can't compare objects directly: because objects are references

const object3 = {
    message: 'Good Job'
}

console.log(object3 === object1); //compares reference
console.log(object2 === object1); //compares reference
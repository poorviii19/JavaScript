// Booleans have only two values: true and false.
console.log(3<5)  //output is a boolean value: true
console.log(3>5); //output: false

// 'true' 'false'  wrong way , converts to string
console.log(typeof 'true');  //string
console.log(typeof true);  //boolean


/*comparison operators:
 >greater than
< less than
>= greater than or equals to
<= less than or equals to
== equals to tries to conver both values into same type
=== equals to
!= not equals to tries to conver both values into same type
!== not equals to
 */

console.log(5 == '5.00');  //wrong way because they shouldn't really be equal to each other

console.log(3==='3'); //right way

console.log(3>5-5);  //comparison operators have a lower priority than mathematical operator

// If-Statements:


// if(condition1){
//     code
// }
// else if(condition2){
//     code
// }
// else{
//     code
// }


if(true){
    console.log('hello');
}  //it will work, displays on console
if(false){
    console.log('hello');
}  //it will not work, does not display on console



// If-else:

if(false){
    console.log("hello World");
}
else{
    console.log('value is false');
}


// Check the age of person to drive:
if(13>=18){
    console.log("You can drive!");
}
else{
    console.log("you can not drive!");
}



const age = 16;

if(age>=18){
    console.log("you are eligible to drive");
}
else if(age>=16){
    console.log("you can drive as a trainee");
}
else{
    console.log("you are not eligible!");
}


// Logical Operators: have lower priority than both mathematical and comparator operators

//&& logical and

console.log(true && false);  //false because both sides are not true
console.log(true && true); //true because both sides are true

console.log(0.2>=0 && 0.2<1/3)


// || logical or
console.log(true||false); //true because atleast one condition is true


// ! logical not

console.log(!true); //flips the value  output will be false
console.log(!false); //flips the value  output will be true

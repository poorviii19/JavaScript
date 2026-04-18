// Starting with Basics:

//Some notes are here:-


//  A technology that we use to create a website is called a programming language.
// JavaScript is a popular programming language that is used to create interactive websites and web applications.

// SetUp: Install web Browser and Text Editor
// To start coding in JavaScript, you need a web browser and a text editor.
// You can use any web browser like Google Chrome, Mozilla Firefox, or Microsoft Edge.
// For a text editor, you can use Visual Studio Code, Sublime Text, or Atom.

// giving instructions to computer(code)

// the code follows our instructions(running the code);

// JavaScript is a case-sensitive language, which means that variables, functions, and other identifiers must be written in the same case as they were defined.
// JavaScript statements are separated by semicolons (;). However, it is not mandatory to use semicolons at the end of each statement, but it is considered good practice to do so.
// JavaScript code can be written in three ways:
// 1. Inline JavaScript: This is when you write JavaScript code directly within an HTML element using the "onclick" attribute or other event attributes.
// 2. Internal JavaScript: This is when you write JavaScript code within a <script> tag in the head or body of an HTML document.
// 3. External JavaScript: This is when you write JavaScript code in a separate file with a .js extension and link it to your HTML document using the <script> tag with the "src" attribute.

//operator precedence:
// 1+1*3 => 4 because followd BODMAS rules
// * and / have same precedence as well as +  and - have same rule => follows from left to right in direction
// 2*3/4= > 6/4 because of the above rule
//if we use (),[].{}, preferece will be given to brackets first than other operations
console.log(2.45*67+5);
console.log((20.95+7.99*2)*0.1);

console.log(0.1+0.2);  //it will not give 0.3 exactly because computers process in terms of 0's and 1's, float problem

// to avoid float problem:
//calculate in sets
console.log((2095+799)/100);

// Math.round():

let x =Math.round(2.2);
let y =Math.round(2.756);

console.log(x);
console.log(y);


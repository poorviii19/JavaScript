// ternary operators: shortcut to if-else statemnets
/* 
syntax:
condition ? statement1(executes if condition is true) : statement2(executes if condition is false);
*/


true ? console.log('truthy'): console.log('falsy');
const result = 5 ? 'true':'false';
console.log(result);


// Guard Operator &&:
/*
Short Circut evaluation:
And Operator &&
false && value
->stops early,
->Doesn't need to run the code ont he right
*/

false && console.log('hello'); //we can use the value on left of a logical operator to stop or guard the statement 2
// it is a shortcurt for an if statement

const message = false && 'hello';
console.log(message);

// Default Operator ||:
// true || value2
// ->stops early(short-circuit)

const currency = 'EUR' || 'USD';
console.log(currency);
const currency1 = undefined || 'USD';
console.log(currency1);


function calculate(){

   const inputEle = document.querySelector('.js-input');
   const cost = Number(inputEle.value);
   let total = cost;

   if (total < 40) {
      total += 10;
   }

   document.querySelector('.js-cost').textContent = `$${total}`;
}

function handleCostKeyDown(event){
    if(event.key == 'Enter'){
        calculate();
    }
}


//extra information about type conversion in JavaScript
// Number('25') //this will convert the string '25' to number 25
String(25) //this will convert the number 25 to string 25
console.log('25'-5)  //auto type casting in JavaScript, the string '25' is converted to the number 25 before the subtraction operation is performed, resulting in 20.
console.log('25'+5) //here it acts differrent because the + operator is used for both addition and string concatenation. In this case, since one of the operands is a string ('25'), JavaScript treats the + operator as a string concatenation operator. Therefore, it converts the number 5 to a string and concatenates it with '25', resulting in the string '255'.

//therefor do not use math operations on strings, it can lead to unexpected results. Always ensure that you are working with the correct data types when performing calculations.


//window object represents the browser:

window.alert('Hello, World!'); //this will display an alert box with the message 'Hello, World!'

//the alert method is a function that belongs to the window object, and it is used to display an alert dialog box with a specified message and an OK button. When this code is executed, it will show a pop-up alert box with the message 'Hello, World!' and an OK button for the user to click.

// window.document.
window.console.log('window');
//we do not need to write window. it is an inbuilt object, js automatically adds this for us
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

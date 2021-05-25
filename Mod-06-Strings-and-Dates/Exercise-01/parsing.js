"use strict";

let fullName = "Ian Auston";

//find the space
let spacePosition = fullName.indexOf(" ");
//extract and display the name parts
let firstName = fullName.substring(0, spacePosition);
let lastName = fullName.substring(spacePosition + 1);


//output we are looking for:
//Name: Brenda Kaye
//First Name: Brenda
//Last Name: Kaye

console.log("Full Name: " + fullName);
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);

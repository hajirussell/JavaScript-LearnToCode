"use strict";


//so we make users put phone numbers in without any punctuation
//by limiting the number of characters they can type to 10
let phoneNumber = "8564730831";

//write code to pull out 1st three digits, 2nd three digits, last 4 digits
//and then format like (xxx) xxx-xxxx

//start at character 0 and go up to, but not including character at position 4
let first3Digits = phoneNumber.substring(0,3);
//start at character 3 and go up to, but not including character at position 6
let mid3Digits = phoneNumber.substring(3,6);
//start at character 6 and take the rest of the string
let last4Digits = phoneNumber.substring(6);

/*
//start at character 0 and take 3 characters
let first3Digits = phoneNumber.substr(0,3);
//start at character 3 and take 3 characters
let mid3Digits = phoneNumber.substr(3,3);
//start at character 6 and take the rest of the string 
let last4Digits = phoneNumber.substr(6);
*/

let formattedPhoneNumber =
"(" + first3Digits + ") " + mid3Digits + "-" + last4Digits;

console.log("Formatted phone number: " + formattedPhoneNumber);

let formattedPhoneNumberAnotherWay =
`(${first3Digits}) ${mid3Digits}-${last4Digits}`;

console.log("Formatted phone number: " + formattedPhoneNumberAnotherWay);
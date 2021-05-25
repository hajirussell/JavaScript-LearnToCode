"use strict";

//looking for parsing a code in the following format:
//supplierCode:productNumber-size

// ACME:123-L the large (L) part 123 is supplied by ACME
// DI:12345-M the medium (M) part 12345 is supplied by DI
// ACE:1-12 the size 12 part 1 is supplied by ACE

let productCode = ("ACE:1-12");

//find the supplier code
//find the product number
//find the size

let colonPosition = productCode.indexOf(":");
let dashPosition = productCode.indexOf("-");

let supplierCode = productCode.substring(0, colonPosition);
let productNumber = productCode.substring(colonPosition + 1, dashPosition);
let productSize = productCode.substring(dashPosition + 1);

console.log("Supplier is: " + supplierCode);
console.log("Product Number is: " + productNumber);
console.log("Product Size is: " + productSize);
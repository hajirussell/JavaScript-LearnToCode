"use strict";

function displayMailingLabels (name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);
}

function addNumbers (num1, num2) {
    let numTotal = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + numTotal);
}

function displayReceipt (totalDue, amountPaid) {
    let changeDue = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("Change Due: $" + changeDue);
}

displayMailingLabels("Haji Russell", "56 Main Street", "Seattle", "WA", "18855");

addNumbers(8,9);

displayReceipt(86,96);

// displayMailingLabels("Dan Nicki", "96 Manhattan Street", "Manhattan", "NY", "10102");

// addNumbers(20,95);

// displayReceipt(12,12);
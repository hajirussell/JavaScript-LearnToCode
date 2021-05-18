"use strict";

// sample inputs
let foodCost = 79.25;
let tax = 6.54;

let tipPercentage = .22;
let tip = foodCost * tipPercentage;

// calculation
let totalDue = foodCost + tax + tip;

// output
console.log("The total due is " + totalDue);

console.log(
    "Food cost is " + foodCost + " and tax is " + tax);
    console.log("Tip is " + tip.toFixed(2));
    console.log("Total Due is " + totalDue.toFixed(2));
    
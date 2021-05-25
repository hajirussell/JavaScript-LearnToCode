"use strict";

let hoursWorked = 40;
let payRate = 25;
let filingStatus = "Joint";

let weeklyPay;
if (hoursWorked <= 40) {
    weeklyPay = hoursWorked * payRate;
}
else {
    weeklyPay = (payRate * 40) + ((hoursWorked - 40) * (payRate * 1.5));
}

let annualPay = weeklyPay * 52;

console.log("the pay for this week is " + annualPay);

let taxRate;

if (filingStatus == "Single") {
    if (annualPay <= 12000) {
        taxRate = .05;
    }
    else if (annualPay <= 24999.99) {
        taxRate = .1;
    }
    else if (annualPay <= 74999.99) {
        taxRate = .15;
    }
    else {
        taxRate = .2;
    }
}
else {
    if (annualPay <= 12000) {
        taxRate = 0;
    }
    else if (annualPay <= 24999.99) {
        taxRate = .06;
    }
    else if (annualPay <= 74999.99) {
        taxRate = .11;
    }
    else {
        taxRate = .2;
    }
}

let annualTaxWitholding = annualPay * taxRate;
let netAnnualPay = annualPay - annualTaxWitholding;

let weeklyTaxWitholding = weeklyPay * taxRate;
let weeklyNetPay = weeklyPay - weeklyTaxWitholding;

console.log(weeklyNetPay);



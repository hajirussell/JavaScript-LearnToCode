"use strict";

// PAY RULES BASED ON HOURS WORKED
//  if the person works more than 40 hours, pay overtime.

let hoursWorked = 40;
let payRate = 25;

grossPay;
if (hoursWorked <= 40) {
    grossPay = hoursWorked * payRate;
}
else {
    grossPay = (payRate * 40) + ((hoursWorked - 40) * (payRate * 1.5));
}

console.log("the pay for this week is " + grossPay);
"use strict";

window.onload = function() {
    //connect calculate pay (hourly) button to click event handler
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;

    //connect calculate pay (salaray) button to click event handler
    const calcSalaryBtn = document.getElementById("calcSalaryBtn");
    calcSalaryBtn.onclick = calcSalaryBtnClicked;
}

function calcPayBtnClicked() {
    //find the value of the payrate and make it a number
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    //find the value of hours worked and make it a number
    const hoursWorkedField = document.getElementById("hoursWorked");
    let hoursWorked = Number(hoursWorkedField.value);

    //find the grosspay
    let grossPay;
    if (hoursWorked > 40) {
        grossPay = (payRate * 40) + ((hoursWorked - 40) * 1.5);
    }
    else {
        grossPay = payRate * hoursWorked;
    }

    //create the message that should be displayed
    let message = "Your gross pay is $" + grossPay.toFixed(2);

    //display the message
    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}

function calcSalaryBtnClicked() {
    //find the value os the payrate and make it a number
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    //calculate grosspay for salaried emplyees (always 40 hours)
    let grossPay = payRate * 40;

    //generate outout for gross pay and display in p id="results"
    let message = "Your gross pay is $" + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}
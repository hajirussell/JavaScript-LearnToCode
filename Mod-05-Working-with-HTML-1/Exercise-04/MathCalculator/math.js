"use strict";

window.onload = function() {
    const calcAddBtn = document.getElementById("calcAddBtn");
    calcAddBtn.onclick = calcAddBtnClicked;

    const calcSubtractBtn = document.getElementById("calcSubtractBtn");
    calcSubtractBtn.onclick = calcSubtractBtnClicked;

    const calcMultiplyBtn = document.getElementById("calcMultiplyBtn");
    calcMultiplyBtn.onclick = calcMultiplyBtnClicked;

    const calcDivideBtn = document.getElementById("calcDivideBtn");
    calcDivideBtn.onclick = calcDivideBtnClicked;
}

function calcAddBtnClicked() {
    //find the input for the first number
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    //find the input for the second number
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    //add the two numbers
    let sum = numberOne + numberTwo;

    //find answer field and display results
    const answerField = document.getElementById("answer");
    answerField.value = sum;
}

function calcSubtractBtnClicked() {
    //find the input for the first number
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    //find the input for the second number
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    //add the two numbers
    let difference = numberOne - numberTwo;

    //find answer field and display results
    const answerField = document.getElementById("answer");
    answerField.value = difference;
}

function calcMultiplyBtnClicked() {
    //find the input for the first number
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    //find the input for the second number
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    //add the two numbers
    let multiplied = numberOne * numberTwo;

    //find answer field and display results
    const answerField = document.getElementById("answer");
    answerField.value = multiplied;
}

function calcDivideBtnClicked() {
    //find the input for the first number
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    //find the input for the second number
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    //add the two numbers
    let divided = numberOne / numberTwo;

    //find answer field and display results
    const answerField = document.getElementById("answer");
    answerField.value = divided;
}
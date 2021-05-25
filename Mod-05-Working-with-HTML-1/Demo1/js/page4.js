"use strict";

window.onload = function() {
    const showBtn = document.getElementById("showBtn");
    showBtn.onclick = showBtnClicked;
}


function showBtnClicked() {
    //find the fields
    const nameField = document.getElementById("name");
    const ageField = document.getElementById("age");
    
    //get the field values
    let name = nameField.value;
    let age = ageField.value; // age is a string here
    
    //construct the message
    let message = "Hi " + name + "!" + " I hear you are " + age + " years old!";
    
    //display the message
    const messagePara = document.getElementById("message");
    messagePara.innerHTML = message
}


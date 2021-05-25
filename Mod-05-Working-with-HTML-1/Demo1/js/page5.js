"use strict";

window.onload = function() {
    const findAgeBtn = document.getElementById("findAgeBtn");
    findAgeBtn.onclick = findAgeBtnClicked;
}

function findAgeBtnClicked() {
    //find the where the value is
    const yearBornField = document.getElementById("yearBorn");
    
    //get the year the user was born from the
    //HTML <input> whose is is yearBorn
    let yearBorn = Number(yearBornField.value);

    //get today's date so we can calculate the user's
    //age on their birthday this year
    let today = new Date();
    let currentYear = today.getFullYear();

    //calculate the user's age using their yearBorn and today's Year
    let age = currentYear - yearBorn;

    //find the <input> that will hold the results
    //and place the age there
    let ageField = document.getElementById("age");
    ageField.value = age;
}

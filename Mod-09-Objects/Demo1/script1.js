"use strict";

let dinnerLastNight = {
    drink: "Water",
    meal: "Chili",
    dessert: "Brownie",
};

console.log("Drank: " + dinnerLastNight.drink);
console.log("Ate: " + dinnerLastNight.meal);

let firstJob = {
    company: "K-Mart",
    jobTitle: "Cashier",
    location: "Moorestown",
    pay: 7.25,
};

//print out jobTitle and pay
console.log("My Job Title is " + firstJob.jobTitle);
console.log("My pay was $" + firstJob.pay);


let infoAboutMe = {
    name: "Haji",
    age: 28,
    mom: {
        name: "Mother",
        age: 50,
    },
    dad: {
        name: "Father",
        age: 68,
    }
};

//print out your name, your mom's name, your dad's name
//inforAboutMe.mom.name

console.log("My name is " + infoAboutMe.name);
console.log("My mother's name is " + infoAboutMe.mom.name);
console.log("My father's name is " + infoAboutMe.dad.name);
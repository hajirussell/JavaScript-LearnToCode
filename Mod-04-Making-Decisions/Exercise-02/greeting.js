"use strict";

let currentHour = 25; // hour of the day

let welcomeMessage;

if (currentHour <= 9) {
    welcomeMessage = "Good morning!";
}
else if (currentHour <= 16) {
    welcomeMessage = "Good day!";
}
else if (currentHour <=23) {
    welcomeMessage = "Good evening!";
}
else {
    console.log("ERROR, only 24 hours in a day")
}

console.log(welcomeMessage)
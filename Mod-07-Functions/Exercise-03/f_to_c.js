"use strict";

function convertFToC (temp) {
    let celTemp = (temp - 32) * 5/9;
    return celTemp;
}

let currentTemp = 212;
let celsuisTemp = convertFToC(currentTemp);
console.log(currentTemp + "F is " + celsuisTemp + "C");
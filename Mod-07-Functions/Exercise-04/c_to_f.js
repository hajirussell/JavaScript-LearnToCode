"use strict";

function convertCToF(temp) {
    let fahTemp = (temp * 9/5) + 32;
    return fahTemp;
}

let currentTemp = -40;
let fahrenheitTemp = convertCToF(currentTemp);
console.log(currentTemp + "C is " + fahrenheitTemp + "F");
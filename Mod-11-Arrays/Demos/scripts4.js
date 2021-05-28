"use strict";

// an array that stores all numbers
let mileageLog = [313, 328, 349, 287, 301];

/*
//PAINFUL TECHNIQUE THAT ONLY WORKS WHEN THERE IS ONLY 5 VALUES
//IN THE ARRAY
let totalMiles  = 0;

totalMiles += mileageLog[0];
totalMiles += mileageLog[1];
totalMiles += mileageLog[2];
totalMiles += mileageLog[3];
totalMiles += mileageLog[4];

console.log("Total miles driven is " + totalMiles);
*/


//GOOD TECHNIQUE TO ADD UP ALL THE VALUES IN AN ARRAY AND IT WORKS
//NO MATTER HOW MANY VALUES THERE ARE (ex: an array of 4 or an array of 400)
let totalMiles = 0;

for (let i = 0; i < mileageLog.length; i++) {
    totalMiles += mileageLog[i];
}

console.log("Total miles driven is " + totalMiles);

let averageMilesPerTrip = totalMiles / mileageLog.length;

console.log("Average miles per trip is " + averageMilesPerTrip);
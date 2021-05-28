"use strict";

let myScores = [75, 89, 85, 100, 65, 96, 54];
let yourScores = [96, 54, 85, 64, 92, 89, 65];




function getAverage(scores) {
    let scoreTotal = 0;
    for (let i = 0; i < scores.length; i++) {
        scoreTotal += scores[i];
    }
    let scoresAverage = scoreTotal / scores.length;
    return scoresAverage;
}

let myScoresAverage = getAverage(myScores);
console.log("The average score of the class is " + myScoresAverage.toFixed(0));

let yourScoresAverage = getAverage(yourScores);
console.log("The average score of the class is " + yourScoresAverage.toFixed(0));










"use strict";

// inputs
let numOfPeople = 38;

// calculate the number of vans needed (leave no person behind)
let numVans = Math.ceil(numOfPeople / 15);

// calculate cost of van rental

let totalCost = 250 * numVans;

// calculate cost per person for the van

let costPerPerson = totalCost / numOfPeople;

console.log("The cost per person is $" + costPerPerson.toFixed(2))

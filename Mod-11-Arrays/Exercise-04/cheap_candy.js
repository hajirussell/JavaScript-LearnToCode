"use strict";

let cheapCandy = [
    {
        product: "Gummy Worms",
        price: 5.79
    },
    {
        product: "Plain M&Ms",
        price: 2.89
    },
    {
        product: "Peanut M&Ms",
        price: 2.89
    },
    {
        product: "Swedish Fish",
        price: 3.79
    },
    {
        product: "Circus Peanuts",
        price: 5.17
    },
    {
        product: "Snickers Bar",
        price: 1.26
    },
    {
        product: "Take 5",
        price: 6.93
    },
    {
        product: "Reese's Peanutbutter Cups",
        price: 4.20
    },
    {
        product: "Whatchamacallit",
        price: 2.50
    },
    {
        product: "Crunch Bar",
        price: 18.96
    }
    ];
    
    
// TODO:  fill the array with 10 candies of various
// price ranges

let under4candy = 4.00;

let foundCandies = cheapCandy.filter(candyElement => candyElement.price <= under4candy);

for (let i = 0; i < foundCandies.length; i++) {
    console.log(foundCandies[i].product);
}
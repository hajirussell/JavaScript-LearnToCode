"use strict";

let person1LunchOrder = [
    {
        item: "Steak fajitas",
        price: 9.95
    }, {
        item: "Chips and Guacomole",
        price: 5.25
    },
    {
        item: "Sweet tea",
        price: 2.79
    }
];

let person2LunchOrder = [
    {
        item: "Tacos and Chips",
        price: 16.95
    }, {
        item: "Beans and Rice",
        price: 4.25
    },
    {
        item: "Lemonade",
        price: 1.79
    }
];

function getOrderTotal(lunchOrder) {
    let orderTotal = 0;
    for (let i = 0; i < lunchOrder.length; i++) {
        orderTotal += lunchOrder[i].price;
    };
    return orderTotal;
}


let subTotal = getOrderTotal(person1LunchOrder);
let orderTax = subTotal * .08;
let orderTip = subTotal * .18;
let totalDue = subTotal + orderTax + orderTip;


console.log(totalDue.toFixed(2));


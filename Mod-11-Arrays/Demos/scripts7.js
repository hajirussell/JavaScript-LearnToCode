"use strict";
let menu = [
    {
        id: 1,
        item: "Ground Beef Tacos",
        category: "Meal",
        price: 12.29
    },
    {
        id: 2,
        item: "Burger",
        category: "Meal",
        price: 7.29
    },
    {
        id: 3,
        item: "Chicken Salad",
        category: "Meal",
        price: 8.29
    },
    {
        id: 4,
        item: "Ice tea",
        category: "Drink",
        price: 2.19
    },
    {
        id: 5,
        item: "Coke",
        category: "Drink",
        price: 2.29
    },
    {
        id: 6,
        item: "Dr. Pepper",
        category: "Drink",
        price: 2.29
    },
    {
        id: 7,
        item: "Sprite",
        category: "Drink",
        price: 2.29
    },
    {
        id: 8,
        item: "Coke Zero",
        category: "Drink",
        price: 2.29
    },
    {
        id: 9,
        item: "Diet Coke",
        category: "Drink",
        price: 2.29
    },
    {
        id: 10,
        item: "Chicken Tacos",
        category: "Meal",
        price: 12.29
    },
    {
        id: 11,
        item: "Shrimp Tacos",
        category: "Meal",
        price: 14.29
    },
    {
        id: 12,
        item: "Steak Tacos",
        category: "Meal",
        price: 12.29
    }
];
let itemToSearchFor = "Drink";
// search for the item.  if we carry it, displ;ay the price.
// if we don't carry it, tell the user that we don't carry it
/*
// THIS SEARCHES FOR THE EXACT MATCH
for (let i = 0; i < menu.length; i++) {
    if (menu[i].item == itemToSearchFor) {
        console.log("The price of " + itemToSearchFor + " is $" + menu[i].price);
        break;
    }
}
*/
// THIS SEARCHES TO SEE WHAT CONTAINS THE WORD
// for (let i = 0; i < menu.length; i++) {
//     if (menu[i].item.indexOf(itemToSearchFor) >= 0) {
//         console.log("The price of " + menu[i].item + " is $" + menu[i].price);
//     }
// }

for (let i = 0; i < menu.length; i++) {
    if (menu[i].category.indexOf(itemToSearchFor) >= 0) {
        console.log("The price of " + menu[i].item + " is $" + menu[i].price);
    }
}

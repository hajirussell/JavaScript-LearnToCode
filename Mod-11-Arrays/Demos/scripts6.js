"use strict";

let lunchMenu = [
    {
        item: "Hamburger",
        price: 6.95
    },
    {
        item: "Cheeseburger",
        price: 7.95
    },
    {
        item: "Hot dog",
        price: 4.95
    }
];

let drinkMenu = [
    {
        item: "Old Fashioned",
        price: 10.95
    },
    {
        item: "Martini",
        price: 7.95
    },
    {
        item: "Bahama Mama",
        price: 9.95
    },
    {
        item: "Iced Tea",
        price: 1.75
    }
];

function displayFoodChoices(menu) {
    for (let i = 0; i < menu.length; i++) {
        // console.log(menu[i]);
        console.log(menu[i].item);
        // console.log(menu[i].price);
    }
}

displayFoodChoices(lunchMenu);
displayFoodChoices(drinkMenu);
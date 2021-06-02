"use strict";

// build Cat  (CLASS -- DATA TYPE)
//   name,  age,  primaryColor

class Cat {
    constructor(name, age, mainColor) {
        this.name = name;
        this.age = age;
        this.primaryColor = mainColor;
    }
}

let danasFirstCat = new Cat("Diffy", 3, "Gray Persian");

let andresFirstCat = new Cat("Lil' Kit", 2/12, "Gray");

let joycesFirstCat = new Cat("Biskit", 1, "Black");

let cats = [danasFirstCat, andresFirstCat, joycesFirstCat];

for (let i = 0; i < cats.length; i++) {
    console.log (cats[i].name);
}
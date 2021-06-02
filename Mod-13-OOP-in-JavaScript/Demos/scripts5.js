"use strict";

// build Cat  (CLASS -- DATA TYPE)
//   name,  age,  primaryColor

class Cat {
    constructor(name, age = 0, mainColor = "Black") {
        this.name = name;
        this.age = age;
        this.primaryColor = mainColor;
    }
}

let danasFirstCat = new Cat("Diffy");
let andresFirstCat = new Cat("Lil' Kit", 2/12);
let joycesFirstCat = new Cat("Biskit", 1, "Black");

//let thisWontWork = new Cat();
//let thisWontWork2 = new Cat(, 7, "Organge");

let cats = [danasFirstCat, andresFirstCat, joycesFirstCat];

for (let i = 0; i < cats.length; i++) {
    console.log (cats[i].name + " is a " + cats[i].primaryColor + " cat that is " + cats[i].age + " years old.");
}
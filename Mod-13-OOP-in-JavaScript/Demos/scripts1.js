"use strict";

// build Cat  (CLASS -- DATA TYPE)
//   name,  age,  primaryColor

class Cat {
    constructor() {
        this.name = "";
        this.age = 0;
        this.primaryColor = "";
    }
}

let danasFirstCat = new Cat();
danasFirstCat.name = "Diffy";
danasFirstCat.age = 3;
danasFirstCat.primaryColor = "Gray Persian";

let andresFirstCat = new Cat();
andresFirstCat.name = "Lil' Kit";
andresFirstCat.age = 2/12;
andresFirstCat.primaryColor = "Gray";

let joycesFirstCat = new Cat();
joycesFirstCat.name = "Biskit";
joycesFirstCat.age = 1;
joycesFirstCat.primaryColor = "Black";

let cats = [danasFirstCat, andresFirstCat, joycesFirstCat];

for (let i = 0; i < cats.length; i++) {
    console.log (cats[i].name);
}
"use strict";

// class Vehicle
// make, model, miles, owner

//create class
class Vehicle {
    constructor(make, model, miles, owner) {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.owner = owner;
    }
}

//create 3 different vehicle owned by three different people

let num1Vehicle = new Vehicle("Ford", "F150", 56202, "David Guy");

let num2Vehicle = new Vehicle("Audi", "Superstar", 2000, "Sasha DeLoitte");

let num3Vehicle = new Vehicle("Volkswagon", "Beetle", 8526, "Justin Time")

let allVehicles = [num1Vehicle, num2Vehicle, num3Vehicle];
//loop through and print the model and owner
for (let i = 0; i < allVehicles.length; i++) {
    console.log (allVehicles[i].model + " is owned by " + allVehicles[i].owner);
}
"use strict";

// class Vehicle
//   make, model, miles, owner
//  NOTE:  default miles = 0 and default onwer = ""

class Vehicle {
    constructor(make, model, miles = 0, owner = "") {
        this.make = make;
        this.model = model;
        this.miles = miles;
        this.owner = owner;
    }

    drive(howFarInMiles) {
        this.miles = this.miles + howFarInMiles;
    }
}

let justBuiltCar = new Vehicle("Ford", "F-150");
justBuiltCar.drive(3);
justBuiltCar.drive(10);

let abandonedCar = new Vehicle("Ford", "F-150", 997645);

let deesCar = new Vehicle("Chevy", "Impala", 22000, "Dee");
deesCar.drive(22);
deesCar.drive(41);

let vehicles = [justBuiltCar, abandonedCar, deesCar];

for (let i = 0; i < vehicles.length; i++) {
    let owner = vehicles[i].owner;
    if (owner == "") {
        owner = "no one";
    }
    console.log(vehicles[i].model + " is owned by " + owner + " (miles: " + vehicles[i].miles + ")");
}
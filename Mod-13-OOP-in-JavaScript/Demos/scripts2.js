"use strict";

// class Vehicle
// make, model, miles, owner

//create class
class Vehicle {
    constructor() {
        this.make = "";
        this.model = "";
        this.miles = 0;
        this.owner = "";
    }
}

//create 3 different vehicle owned by three different people

let num1Vehicle = new Vehicle()
num1Vehicle.make = "Ford";
num1Vehicle.model = "F150";
num1Vehicle.miles = 56202;
num1Vehicle.owner = "David Guy";

let num2Vehicle = new Vehicle()
num2Vehicle.make = "Audi";
num2Vehicle.model = "Superstar";
num2Vehicle.miles = 2000;
num2Vehicle.owner = "Sasha DeLoitte";

let num3Vehicle = new Vehicle()
num3Vehicle.make = "Volkswagon";
num3Vehicle.model = "Beetle";
num3Vehicle.miles = 8526;
num3Vehicle.owner = "Justin Time";

let allVehicles = [num1Vehicle, num2Vehicle, num3Vehicle];
//loop through and print the model and owner
for (let i = 0; i < allVehicles.length; i++) {
    console.log (allVehicles[i].model + " is owned by " + allVehicles[i].owner);
}
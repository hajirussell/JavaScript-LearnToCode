"use strict";

let mailingLabel = {
    mailingName: "Haji",
    address: "456 Main Street",
    city: "New York",
    state: "NY",
    zip: 10015
};

function printContact(mailingLabel) {
    console.log(mailingLabel.mailingName);
    console.log(mailingLabel.address);
    console.log(mailingLabel.city + ", " + mailingLabel.state + " " + mailingLabel.zip);
}

printContact(mailingLabel);
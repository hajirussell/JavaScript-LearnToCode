"use strict";

let username = "   dana   ";
let pwd = "dog   food   ";

console.log("*" + username + "*");

let usernameFromDB = "dana";
let passwordFromDB = "dog  food"

username = username.trim();
pwd = pwd.trim();

console.log("*" + username + "*");

if (username == usernameFromDB && pwd == passwordFromDB) {
    console.log("User logged in successfully.");
}
else {
    console.log("Username and/or password is incorrect");
}
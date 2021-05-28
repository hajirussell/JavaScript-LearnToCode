"use strict";

let a = 10;
let b = 20;

function f1() {
    let a = 30;
    console.log(a);    
}

f1();     // display a <- 10
a = b;
f1();     // display a <- 20


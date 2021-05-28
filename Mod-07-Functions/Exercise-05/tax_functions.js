"use strict";

function getSocSecTax(grossPay) {
    let socialSecurityTax = grossPay * .062;
    return socialSecurityTax.toFixed(2);
}

function getMedicareTax(grossPay) {
    let medicareTax = grossPay * .0145;
    return medicareTax.toFixed(2);
}

function getFederalTax(grossPay, witholdingCode) {
    let federalTax;
    if (witholdingCode >= 4) {
        federalTax = grossPay * (.18 - (.005 * (witholdingCode - 4)));
    }
    else if (witholdingCode == 3){
        federalTax = grossPay * .185;
    }
    else if (witholdingCode == 2) {
        federalTax = grossPay * .195;
    }
    else if (witholdingCode == 1) {
        federalTax = grossPay * .21;
    }
    else {
        federalTax = grossPay * .23;
    }
    return federalTax.toFixed(2);
}

let grossPay = 750
let witholdingCode = 0




// getSocSecTax(grossPay);
// getMedicareTax(grossPay);
// getFederalTax(grossPay, witholdingCode);

console.log(getSocSecTax(grossPay));
console.log(getMedicareTax(grossPay));
console.log(getFederalTax(grossPay, witholdingCode));

"use strict";
window.onload = function () {
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;
}
function calcPayBtnClicked() {
    // get value for pay rate from <input> element
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);
    // get value for hours worked from <input> element
    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);
    let grossPay;
    const hourlyCheckbox = document.getElementById("hourly");
    // if the checkbnox is checked, they are paid hourly
    // this means they MIGHT get overtime, but only if they work 40+ hours
    // otherwise they are paid the number of hours they work
    if (hourlyCheckbox.checked == true) {
        if (hrsWorked > 40) {
            grossPay = (payRate * 40) + (hrsWorked - 40) * (1.5 * payRate);
        }
        else {
            grossPay = payRate * hrsWorked;
        }
    }
    else {
        // if the checkbox is NOT checked, we assume they are salaried and pay
        // for 40 hours no matter how many they really work
        grossPay = payRate * 40;
    }

    // NOW THAT GROSS PAY IS CALCULATED... Calculate benefit costs...
    let benefitsCost = 0;
    const insuranceCheckbox = document.getElementById("insurance");
    if (insuranceCheckbox.checked == true) {
        benefitsCost += 25;
    }

    const busPassCheckbox = document.getElementById("busPass");
    if (busPassCheckbox.checked == true) {
        benefitsCost += 12.50;
    }

    const retirementCheckbox = document.getElementById("retirement");
    if (retirementCheckbox.checked == true) {
        benefitsCost += (grossPay * .03);
    }

    let taxes = 0;

    const yesTaxesRadioBtn = document.getElementById("yesTaxes");
    if (yesTaxesRadioBtn.checked == true) {
        taxes = grossPay * .10;
    }

    let netPay = grossPay - benefitsCost - taxes;

    // put gross pay in <p id="grossPay">
    const grossPayPara = document.getElementById("grossPay");
    grossPayPara.innerHTML = "Your gross pay is $" + grossPay.toFixed(2);
    
    // put benefit costs in <p id="benefitsCost">
    const benefitsCostPara = document.getElementById("benefitsCost");
    benefitsCostPara.innerHTML = "Your benefits cost is $" + benefitsCost.toFixed(2);
 
    //put taxes in <p id="taxes">
    const taxesPara = document.getElementById("taxes");
    taxesPara.innerHTML = "Your taxes $" + taxes.toFixed(2);
 
    // put net pay total in <p id="netPay">
    const netPayPara = document.getElementById("netPay");
    netPayPara.innerHTML = "Your net pay is $" + netPay.toFixed(2);


}
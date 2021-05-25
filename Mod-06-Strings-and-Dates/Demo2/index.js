"use strict";
window.onload = function () {
    const btn = document.getElementById("theButton");
    btn.onclick = theButtonClicked;
}

function theButtonClicked() {
    const dateSelectionField = document.getElementById("dateSelection");
    let dateStr = dateSelectionField.value;
    
    // dateStr's current format is yyyy-mm-dd and we need to convert it 
    // to eithert yyyy/mm/dd or mm/dd/yyyy so that JavaScript is never
    // OFF BY ONE DAY depending on the time we run the code and the timezone
    // we live in
    // datestr is yyyy-mm-dd
    
    let mo = dateStr.substr(5, 2);  // return mm
    let da = dateStr.substr(8, 2);  // returns dd
    let yr = dateStr.substr(0, 4);  // return yyyy
    
    let reformmatedDateStr = mo + "/" + da + "/" + yr;
    let dateSelected = new Date(reformmatedDateStr);
   
    let dayOfWeek = dateSelected.getDay();  // 0=sunday, 1=monday, ...
    const resultsPara = document.getElementById("results");
    resultsPara.innerHTML = dateSelected + " day of week = " + dayOfWeek;
}
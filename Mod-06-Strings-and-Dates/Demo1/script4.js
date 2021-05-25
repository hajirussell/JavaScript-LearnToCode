"use strict";
// PARTS CODES LOOK LIKe manufactirer:partNumber
// ex:  NIKE:L10
//      ADIDAS:M76T41S
// part codes consost of a manufavtuerer, a colon, and a part number

let partCode = "ADIDAS:M76T41S";

// let partCode = document.getElementById("partCode").value;
// goal is to "parse" the partcode to pull out separately the manufacturer
// and the part number and put them in the variables below
let manufacturer;
let partNumber;

// to do this, we must find the COLON!
let colonPosition = partCode.indexOf(":");  // this rturns the position of the colon
                                            // as a 0-based number.  ex: if it was the 1st
                                            // character, it would return 0.  if it was the
                                            // 2nd chacater, it would return 1.  if it didn't
                                            // find the charcater, it would return -1.

                                            // now that we know where the colon is, we know the manufacturer starts at chacater 0 and
// includes all characters up to, but including the character where the colon is
manufacturer = partCode.substring(0, colonPosition);  // colonPosition character is not 
                                                      // included when you call substring

                                                      // the part numbers starts one chacater past (to the right of) the colon and takes up the
// rest of the partcode string
partNumber = partCode.substring(colonPosition + 1);  // if you only specify the starting position,
                                                     // it automatically goes to the end of the string

                                                     // display the values we parsed out of the string
console.log("Manufacturer: " + manufacturer);
console.log("Part Number: " + partNumber);
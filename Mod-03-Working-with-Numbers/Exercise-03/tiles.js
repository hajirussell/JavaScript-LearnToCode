"use strict";

let roomWidth = 10;
let roomLength = 10;
let roomArea = roomWidth * roomLength;

let tilesPerBox = 12;

let boxMin = roomArea / tilesPerBox;
let boxPercent = .10

let boxExtra = boxMin * boxPercent;


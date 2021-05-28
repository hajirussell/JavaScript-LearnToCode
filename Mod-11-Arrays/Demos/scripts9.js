"use strict";

let data = [{
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Instructor: "Wyatt",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Instructor: "Lynn",
        Location: "Classroom 8",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Instructor: "Gross",
        Location: "Classroom 4",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Instructor: "Wyatt",
        Location: "Classroom 6",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM500",
        Title: "Introduction to Angular",
        Instructor: "Lynn",
        Location: "Classroom 7",
        StartDate: "09/23/19",
        Fee: 50.00,
    }
];

// look for 19SUM300
let courseIdToSearchFor = "19SUM300";
// Once way to find this to write your own loop and do all of
// the comparisons youself
/*
for(let i = 0; i < data.length; i++) {
    if (data[i].CourseId == courseIdToSearchFor) {
        console.log(data[i].Title);
        break;
    }
}
*/

let foundCourse = data.find(arrayElement => arrayElement.CourseId == courseIdToSearchFor);
if (foundCourse != null) {
   console.log("found course id: " + courseIdToSearchFor + " --- " + foundCourse.Title);
}
else {
    console.log(courseIdToSearchFor + " was not found")
}


let instructorToLookFor = "Lynn";
foundCourse = data.find(arrayElement => arrayElement.Instructor == instructorToLookFor);
if (foundCourse != null) {
   console.log("found instructor: " + instructorToLookFor + " --- " + foundCourse.Title);
}
else {
    console.log(instructorToLookFor + " was not found")
}


let minPriceOfCourse = 75;
let maxPriceOfCourse = 100;   // real world - this comes from the user )ex: in a text field)
foundCourse = data.find(arrayElement => arrayElement.Fee >= minPriceOfCourse && arrayElement.Fee <= maxPriceOfCourse);
if (foundCourse != null) {
   console.log("Found Course between  $" + minPriceOfCourse.toFixed(2) + " and " + maxPriceOfCourse.toFixed(2) +  " --- " + foundCourse.Title);
}
else {
    console.log("Courses between  $" + minPriceOfCourse.toFixed(2) + " and " + maxPriceOfCourse.toFixed(2) + " was not found")
}
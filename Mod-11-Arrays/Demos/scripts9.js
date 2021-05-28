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

let instructorToFind = "Lynn";

// Finds the FIRST course Lynn teaches  (uses find())
let foundCourse = data.find(arrayElement => arrayElement.Instructor == instructorToFind);

// because find returns the one item (or maybe null) you don't need a loop - just check for null
if (foundCourse != null) {
   console.log("found instructor: " + instructorToFind + " --- " + foundCourse.Title);
}
else {
    console.log(instructorToFind + " was not found");
}

// Finds ALL courses Lynn teaches (uses filter())
let foundCourses = data.filter(arrayElement => arrayElement.Instructor == instructorToFind);

// because filter returns an array, you need a loop to examine each one of them
for (let i = 0; i < foundCourses.length; i++) {
    console.log(foundCourses[i].Title);
}

// fancy new alternative to looping thru an array without writing a for and using subscripts
foundCourses.forEach(element => {
    console.log(element.Title);
});
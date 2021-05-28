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

// let courseToSearchFor = "19SUM100";

// let courseSelection = data.find(courseElement => courseElement.CourseId == courseToSearchFor);
// if (courseSelection != null) {
//     console.log(courseToSearchFor + " is " + courseSelection.Title)
// }

// The course starting "07/22/19"
// let dateToSearchFor = "07/22/19";

// let courseSelection = data.find(courseElement => courseElement.StartDate == dateToSearchFor);
// if (courseSelection != null) {
//     console.log(courseSelection.Title + "starts on " + dateToSearchFor);
// }


// // The course taught by "Lynn"
// let courseInstructorToSearchFor = "Lynn";

// let courseSelection = data.find(courseElement => courseElement.Instructor == courseInstructorToSearchFor);
// if (courseSelection != null) {
//     console.log(courseInstructorToSearchFor + " is the instructor " + courseSelection.Title)
// }

// // The course taught by "Erik"
// let instructor2ToSearchFor = "Erik";

// let courseSelection = data.find(courseElement => courseElement.Instructor == instructor2ToSearchFor);
// if (courseSelection != null) {
//     console.log(instructor2ToSearchFor + " is the instructor for " + courseSelection.Title);
// }
// else {
//     console.log (instructor2ToSearchFor + " is not found.")
// }

// // The (first) course that costs less that 100.00

let courseFeeToSearchFor = 100.00;

let courseSelection = data.find(courseElement => courseElement.Fee == courseFeeToSearchFor);
if (courseSelection != null) {
    console.log(courseFeeToSearchFor + " is " + courseSelection.Title)
}

// // The course whose ID is "19SUM400"
// let courseID2ToSearchFor = "19SUM400";

// let courseSelection = data.find(courseElement => courseElement.CourseId == courseID2ToSearchFor);
// if (courseSelection != null) {
//     console.log(courseID2ToSearchFor + " is " + courseSelection.Title)
// }

// // The course whose ID is "19SUM900"
// let courseID3ToSearchFor = "19SUM400";

// let courseSelection = data.find(courseElement => courseElement.CourseId == courseID3ToSearchFor);
// if (courseSelection != null) {
//     console.log(courseID3ToSearchFor + " is " + courseSelection.Title)
// }
// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let onlineCourse = "100 days of Web Development";
//    - A variable that stores the price of that course
let onlineCoursePrice = 14.99;
//    - A variable that stores the three main goals that you have, when taking this course
let onlineCourseGoals = [
  "Learn development fundamentals",
  "Learn HTML & CSS",
  "Begin my route of development",
];

// 2) Output ("alert") the three variable values
alert(onlineCourse);
alert(onlineCoursePrice);
alert(onlineCourseGoals);
// 3) Try "grouping" the three variables together and still output their values thereafter
let combinedCourse = {
  name: onlineCourse,
  price: onlineCoursePrice,
  goals: onlineCourseGoals,
};

let combinedCourse2 = {
  name: "100 days of Web Development",
  price: 14.99,
  goals: [
    "Learn development fundamentals",
    "Learn HTML & CSS",
    "Begin my route of development",
  ],
};
alert(combinedCourse);

alert(combinedCourse.name);
alert(combinedCourse.price);
alert(combinedCourse.goals);
// 4) Also output the second element in your "main goals" variable
alert(onlineCourseGoals[1]);
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
    return arrayElement;
};

// 6) Execute your custom command from (5) and output ("alert") the result

let firstGoal = getListItem(combinedCourse2.goals, 0);
alert(firstGoal);
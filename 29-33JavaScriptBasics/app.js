let greetingText = "Hi I'm is Chris!";
/* only use the let keyword when you create and introduce a variable  */
let age = 26;
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "Manchester, UK",
  salary: 150000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    /* adultYears = age - 18; */
    /* let result;
    result = userAge - 18;
    return result; */
    
    return userAge - 18;
    /* DO NOT DEFINE a variable within a function */
}

totalAdultYears = calculateAdultYears(age);
/* adultYears = age - 18; */
/* alert(totalAdultYears); */
console.log(totalAdultYears);

/* location of the input variable matters! */
age = 45;
totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);
console.log(totalAdultYears);

/* alert(greetingText); */
/* alert("test string"); */
/* alert(32); */
/* alert(age); */
/* alert(hobbies[0]); */
/* alert(job.title); */

let person = {
    name: 'Chris', //Property
    greet() { //Method
        /* alert('Hello'); */
        console.log("Hello!");
    }
};

//access a function in an object with .notation
person.greet();
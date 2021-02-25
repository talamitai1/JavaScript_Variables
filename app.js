console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Tal";
console.log(firstName);

let lastName = "Amitai";
console.log(lastName);

var age = 99;
console.log(age);


// Exercise 2

let fullName = firstName + " " + lastName;
console.log(fullName);

//how to do template literal?


// Exercise 3

const city = "Culver City"
const pastime = "playing sports and traveling"

let myStory = "Hi, my name is " + fullName + "! " + "I am from " + city + ". " + "My favorite things to do are " + pastime + ".";
console.log(myStory)

let myStory1 = `\Hi, my name is ${fullName}! I am from ${city}. My favorite things to do are ${pastime}.`;
console.log(myStory1)

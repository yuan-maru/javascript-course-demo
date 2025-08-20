// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 +8 + 23 - 10);
// // console.log("GUMANA KA HEHE");


// // console.log("=== VARIABLES ===");

// // let firstName ="Jonas";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job ="programmer";
// // job = "teacher";
// // console.log (job); 'teacher'

// // age = 51;

// // let lastName = "Doe";

// // console.log("=== DATA TYPES ===");

// // age = 24;
// // console.log(age);
// // console.log(typeof age);

// // let username = "Marc";
// // console.log(username);
// // console.log(typeof username);

// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "Now I'm a string!";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);


// ////////
// //Basic Operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); 

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3); 

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello" + "World" + "!");
// console.log("I am" + 25 + "years old.");

// ////
// console.log("=== ASSIGNMENT OPERATORS ===")

// let x = 10 + 15;
// console.log("x starts as", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2;
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x);
// x--;
// x--;
// console.log("After x-- twice:", x);

// ////
// console.log("=== COMPARISON OPERATORS ===");
// ////

// console.log("Age comparison");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons");
// console.log(20 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// x = y = 25 -10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// /// CODING CHALLENGE 
// /////

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log("Mark's BMI:", BMIMark);
// console.log("John's BMI:", BMIJohn);
// console.log("Mark has higher BMI:", markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math wors: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string`);
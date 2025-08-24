// // // // // // JavaScript Fundamentals - Part 1
// // // // // // We'll write our code here!

// // // // // let js = "amazing";
// // // // // console.log(40 +8 + 23 - 10);
// // // // // console.log("GUMANA KA HEHE");


// // // // // console.log("=== VARIABLES ===");

// // // // // let firstName ="Jonas";
// // // // // console.log(firstName);

// // // // // let age = 30;
// // // // // console.log(age);
// // // // // age = 50;
// // // // // console.log(age);

// // // // // const birthYear = 1991;
// // // // // console.log(birthYear);

// // // // // const PI = 3.1415;
// // // // // console.log(PI);

// // // // // var job ="programmer";
// // // // // job = "teacher";
// // // // // console.log (job); 'teacher'

// // // // // age = 51;

// // // // // let lastName = "Doe";

// // // // // console.log("=== DATA TYPES ===");

// // // // // age = 24;
// // // // // console.log(age);
// // // // // console.log(typeof age);

// // // // // let username = "Marc";
// // // // // console.log(username);
// // // // // console.log(typeof username);

// // // // // let javaScriptIsFun = true;
// // // // // console.log(javaScriptIsFun);
// // // // // console.log(typeof javaScriptIsFun);

// // // // // let year;
// // // // // console.log(year);
// // // // // console.log(typeof year);

// // // // // let dynamicVariable = 23;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = "Now I'm a string!";
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = true;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);


// // // // ////////
// // // // //Basic Operators
// // // // console.log("=== MATH OPERATORS ===");

// // // // const now = 2037;
// // // // const ageJonas = now - 1991;
// // // // const ageSarah = now - 2018;
// // // // console.log(ageJonas, ageSarah);

// // // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); 

// // // // console.log("Math operations:");
// // // // console.log("Addition:", 10 + 5);
// // // // console.log("Subtraction:", 20 - 8);
// // // // console.log("Multiplication:", 4 * 7);
// // // // console.log("Division:", 15 / 3);
// // // // console.log("Exponentiation:", 2 ** 3); 

// // // // const firstName = "Jonas";
// // // // const lastName = "Doe";
// // // // console.log(firstName + " " + lastName);

// // // // console.log("Hello" + "World" + "!");
// // // // console.log("I am" + 25 + "years old.");

// // // // ////
// // // // console.log("=== ASSIGNMENT OPERATORS ===")

// // // // let x = 10 + 15;
// // // // console.log("x starts as", x);

// // // // x += 10;
// // // // console.log("After x += 10:", x);

// // // // x *= 4;
// // // // console.log("After x *= 4:", x);

// // // // x /= 2;
// // // // console.log("After x /= 2:", x);

// // // // x++;
// // // // console.log("After x++:", x);
// // // // x--;
// // // // x--;
// // // // console.log("After x-- twice:", x);

// // // // ////
// // // // console.log("=== COMPARISON OPERATORS ===");
// // // // ////

// // // // console.log("Age comparison");
// // // // console.log(ageJonas > ageSarah);
// // // // console.log(ageSarah >= 18);
// // // // console.log(ageJonas < 30);

// // // // console.log("Number comparisons");
// // // // console.log(20 > 20);
// // // // console.log(15 < 10);
// // // // console.log(18 >= 18);
// // // // console.log(16 <= 15);

// // // // const isFullAge = ageSarah >= 18;
// // // // console.log("Sarah is an adult", isFullAge);

// // // // console.log("Complex comparison");
// // // // console.log(now - 1991 > now - 2018);

// // // // let z, y;
// // // // x = y = 25 -10 - 5;
// // // // console.log(x, y);

// // // // const averageAge = (ageJonas + ageSarah) / 2;
// // // // console.log(ageJonas, ageSarah, averageAge);

// // // // /// CODING CHALLENGE 
// // // // /////

// // // // const massMark = 78;
// // // // const heightMark = 1.69;
// // // // const massJohn = 92;
// // // // const heightJohn = 1.95;

// // // // const BMIMark = massMark / (heightMark ** 2);
// // // // const BMIJohn = massJohn / (heightJohn ** 2);

// // // // const markHigherBMI = BMIMark > BMIJohn;
// // // // console.log("Mark's BMI:", BMIMark);
// // // // console.log("John's BMI:", BMIJohn);
// // // // console.log("Mark has higher BMI:", markHigherBMI);

// // // const firstName = "Jonas";
// // // const job = "teacher";
// // // const birthYear = 1991;
// // // const year = 2037;

// // // const jonas =
// // // "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// // // console.log(jonas);

// // // const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// // // console.log(jonasNew);

// // // console.log(`I'm ${2037 - 1991} years old`);
// // // console.log(`Math wors: ${2 + 3} equals five`);
// // // console.log(`Comparisons too: ${5 > 3}`);

// // // console.log(`Just a regular string`);

// // // ///////
// // // //Type Convrsion and correction
// // // ///////

// // // const inputYear = "1991";
// // // console.log(Number(inputYear), inputYear); 
// // // console.log(Number(inputYear) + 18); 

// // // console.log(Number("Jonas"));
// // // console.log(typeof NaN); 

// // // console.log(String(23), 23); 
// // // console.log(typeof String(23));

// // // //Automatic Type Coercion
// // // console.log("I am " + 23 + " years old");
// // // console.log("23" - "10" - 3);
// // // console.log("23" / "2");
// // // console.log("23" * "2");

// // // let n = "1" + 1;
// // // console.log(n);
// // // n = n - 1;
// // // console.log(n);

// // // const age = "18";
// // // if (age === 18) console.log("You just became an adult (strict)");
// // // if (age == 18) console.log("You just became an adult :D (loose)");

// // // console.log("18" === 18);
// // // console.log("18" == 18);
// // // console.log(18 === 18);

// // // console.log("0" == 0);
// // // console.log(0 == false);
// // // console.log("0" == false);
// // // console.log(null == undefined);

// // // console.log("" == 0)
// // // console.log("   " == 0);

// // // const favourite = Number(prompt("What's your favourite number?"));
// // // console.log(favourite);
// // // console.log(typeof favourite);

// // // if (favourite === 23) {
// // //   console.log("Cool! 23 is an amazing number");
// // // } else if (favourite === 7) {
// // //   console.log("7 is also a cool number");
// // // } else if (favourite == 9) {
// // //   console.log("9 is also a cool number");
// // // } else {
// // //   console.log("Number is not 23 or 7 or 9");
// // // }

// // // if (favourite !== 23) console.log("Why not 23?");

// // // //logical operators
// // // const hasDriversLicense = true;
// // // const hasGoodVision = true;

// // // console.log('AND OPERATOR: ${hasDriversLicense && hasGoodVision}');
// // // console.log('OR OPERATOR: ${hasDriversLicense || hasGoodVision}');
// // // console.log('NOT OPERATOR: ${!hasDriversLicense}');

// // // const isTired = false;
// // // console.log(hasDriversLicense && hasGoodVision && !isTired);

// // // if (hasDriversLicense && hasGoodVision && !isTired) {
// // //     console.log("Yuan is able to drive!");
// // //     } else {
// // //     console.log("Someone else should drive...");
// // //     }

// // // age = 20;
// // // const hasPermission = true;
// // // const hasExperience = true;

// // // if (age >= 18 || hasPermission && hasExperience) {
// // //     console.log("Approved to drive");
// // // } else {    
// // //     console.log("Not approved to drive");
// // // }

// // // console.log("Age 20, permission true, experience false:",
// // // age >= 18 || hasPermission && !hasExperience
// // // );

// // 1. Create variables: age (number), hasID (boolean), isVIP (boolean)
// let age;
// let hasID;
// let isVIP;

// // 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// function canEnterClub(age, hasID, isVIP) {
//     if ((age >= 21 && hasID) || isVIP) {
//         console.log("Entry approved");
//     } else {
//         console.log("Entry denied");
//     }
// }
// // ///////
// // //Conditional Ternary Operator

// // const age = 20;

// // const drink = age >= 18 ? "wine" : "water";
// // console.log(drink);

// // let drink2;
// // if (age >= 18) {
// //     drink2 = "wine";
// // } else {
// //     drink2 = "water";
// // }

// // console.log(drink2);


// // console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


// ////////////////////////
// ////////////////////////////////////
// // Coding Challenge #4

// const bill = 430; // Test with 275, 40, and 430

// // Step 1: Create the tip calculation using ternary operator
// // Rule: 15% if between 50-300, otherwise 20%
// // Hint: bill >= 50 && bill <= 300

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// // Step 2: Create beautiful output with template literal
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// // Expected outputs:
// // Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// // Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// // Bill 430: "The bill was 430, the tip was 86, and the total value 516"


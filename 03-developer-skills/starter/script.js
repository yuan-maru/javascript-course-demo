// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// ////////////////////////////////////
// // Extension Installation Test

// function testExtensions() {
//   const extensionTests = [
//     { name: "Prettier", status: "installed", purpose: "code formatting" },
//     { name: "Live Server", status: "installed", purpose: "auto refresh" },
//     {
//       name: "Auto Rename Tag",
//       status: "installed",
//       purpose: "HTML efficiency",
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log("Extension installation status:", extensionStatus);

// ////////////////////////////////////
// // Prettier Configuration Test

// // This code has terrible formatting - Prettier will fix it!
// const prettierTest = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   skills: ["JavaScript", "React", "Node.js"],
//   isActive: true,
// };

// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = (items) => {
//   return items.map((item) => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   "Before Prettier formatting - this code works but looks unprofessional"
// );

// // Create this with terrible formatting:
// const studentTest = {
//   firstName: "your-name",
//   skills: ["HTML", "CSS", "JavaScript"],
//   experience: "beginner",
//   goals: ["become-developer", "build-projects"],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// // Save the file and watch the magic happen!

// ////////////////////////////////////
// // Live Server Testing

// // Test 1: Basic live reload
// let liveServerTest = "Initial message - change #1";
// console.log("Live Server test:", liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;

// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ["red", "blue", "green", "purple", "orange"][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// // Student Exercise: Add this function and test live reload
// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log("Current time:", now);
//   return now;
// }

// showCurrentTime();

// ////////////////////////////////////
// // Code Snippets Testing

// // Type 'cl' then press Tab - it should expand to console.log();
// console.log("Testing snippet functionality - cl + Tab created this!");

// // Type 'func' then press Tab - it should create a function template
// function testSnippets() {
//   console.log("Function created with snippet - func + Tab!");
//   return "Snippets working perfectly!";
// }

// testSnippets();

// // Type 'arrow' then press Tab - it should create an arrow function template
// const snippetTest = (message) => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest("Snippets save so much typing time!");

// ////////////////////////////////////
// // Environment Setup Verification

// console.log("🎉 Professional Development Environment Complete!");
// console.log("✅ Prettier: Automatic code formatting");
// console.log("✅ Live Server: Automatic browser refresh");
// console.log("✅ Snippets: Fast code generation");
// console.log("✅ Extensions: Enhanced productivity");
// console.log("Ready for professional JavaScript development!");

// // Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

// Developer Skills Hour 2 - Learning How to Code & Problem-Solving Framework
"use strict";

console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

/*
The Reality of Learning to Code:
- Most people expect: Learn syntax → Become developer
- Actual process: Learn basics → Feel confident → Try real project → 
  Get stuck everywhere → Question everything → Keep pushing → 
  Gradual improvement → Success
- Key insight: Problem-solving matters more than syntax memorization
*/

console.log(
  "Key insight: Professional developers think systematically, not just code"
);

/*
Beginner vs Professional Problem-Solving Approaches:

BEGINNER APPROACH:
1. Jump straight into coding
2. Get stuck immediately  
3. Google random solutions
4. Copy-paste without understanding
5. Get frustrated when nothing works

PROFESSIONAL APPROACH:
1. Understand the problem completely
2. Break into smaller sub-problems
3. Research specific solutions  
4. Implement step by step
5. Test and debug systematically

Today we learn the professional approach!
*/

console.log("Goal: Transform from beginner to professional problem-solver");

////////////////////////////////////
// The 4-Step Problem-Solving Framework

/*
STEP 1: UNDERSTAND THE PROBLEM
- Ask the right questions until 100% clear
- Key questions:
  * What exactly needs to be accomplished?
  * What are the inputs and expected outputs?
  * What are the edge cases and constraints?
  * Are there any special requirements?
*/

/*
STEP 2: DIVIDE AND CONQUER  
- Break big problem into small sub-problems
- Strategy:
  * Identify the main components
  * Find dependencies between components
  * Order sub-problems logically
  * Ensure each piece is solvable independently
*/

/*
STEP 3: RESEARCH SOLUTIONS
- Find answers for sub-problems you cannot solve
- Best sources: MDN Documentation, Stack Overflow, Google
- Research tips: Be specific, understand before implementing
*/

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/

console.log("4-Step Framework: Understand → Divide → Research → Implement");

////////////////////////////////////
// PRACTICAL PROBLEM-SOLVING: Smart Home Thermometer

/*
PROBLEM STATEMENT:
Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

STEP 1: UNDERSTANDING THE PROBLEM
- Temperature amplitude = difference between highest and lowest temperature
- Sensor errors = 'error' strings that should be ignored
- Return a number representing amplitude (max - min)

STEP 2: SUB-PROBLEMS
1. How to ignore errors? (Skip non-number values)
2. Find max value in temperature array
3. Find min value in temperature array  
4. Subtract min from max and return result
*/

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

////////////////////////////////////
// EXTENDED PROBLEM: Two Arrays



const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);

console.log("🎯 Framework mastered - ready for independent problem solving!");


// // // // // // // // console.log("Part 2 is now working");

// // // // // // // // console.log(`=== FUNCTIONS ===`);

// // // // // // // // function logger() {
// // // // // // // //   console.log("My name is Yowan");
// // // // // // // // }

// // // // // // // // logger();
// // // // // // // // logger();
// // // // // // // // logger();

// // // // // // // // function fruitProcessor(apples, oranges) {
// // // // // // // //   console.log(apples, oranges);
// // // // // // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // // // // // // //   return juice;
// // // // // // // //   }

// // // // // // // //   console.log(fruitProcessor(5, 3));

// // // // // // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // // // // // // const juice1 = fruitProcessor(5, 0);
// // // // // // // // const juice2 = fruitProcessor(2, 4);
// // // // // // // // const juice3 = fruitProcessor(3, 2);
// // // // // // // // console.log(juice1);

// // // // // // // // /////FUNCTION EXPRESSIONS///////
// // // // // // // // const calcAge = function (birthYear) {
// // // // // // // //     return 2025 - birthYear;
// // // // // // // // }

// // // // // // // // console.log(calcAge(2000));
// // // // // // // // console.log(calcAge(1991));

// // // // // // // // function introduction(firstName, lastName, age) {
// // // // // // // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // // // // // // //     return introduction
// // // // // // // // }

// // // // // // // // console.log(introduction ("Yuan", "Estabillo", "19"));

// // // // // // // // function yearsUntilRetirement (birthYear, firstName) {
// // // // // // // //     const age = calcAge (birthYear);
// // // // // // // //     const retirement = 65 - age;

// // // // // // // //     if (retirement > 0) {
// // // // // // // //         return `${firstName} retires in ${retirement} years`;
// // // // // // // //     } else {
// // // // // // // //         return `${firstName} had already retired`;
// // // // // // // //     }
// // // // // // // // }

// // // // // // // // console.log(yearsUntilRetirement(2005, "Yuan"));

// // // // // // // // const globalVar = "I am global";

// // // // // // // // function testScope(){
// // // // // // // //     const localVar = "I am local";
// // // // // // // //     console.log(globalVar);
// // // // // // // //     console.log(localVar);
// // // // // // // // }
 
// // // // // // // // testScope();

// // // // // // // // ////////////////////////////////////
// // // // // // // // // Coding Challenge #1

// // // // // // // // // Function to calculate average of 3 scores
// // // // // // // // function calcAverage(score1, score2, score3) {
// // // // // // // //     const avg = (score1 + score2 + score3) / 3;
// // // // // // // //     return avg;
// // // // // // // // }

// // // // // // // // // Function to check winner
// // // // // // // // function checkWinner(avgDolphins, avgKoalas) {
// // // // // // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // // // // // //     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
// // // // // // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // // // // // //     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
// // // // // // // //   } else {
// // // // // // // //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // // Test Data 1
// // // // // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // // // // Test Data 2
// // // // // // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // // // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // // const student1Grade = 85;
// // // // // // // const student2Grade = 92;
// // // // // // // const student3Grade = 78;

// // // // // // // const grade = [85, 92, 87, 96, 88];
// // // // // // // console.log(grade);

// // // // // // // const friends = ['Zel', 'Nash', 'Qjuin'];
// // // // // // // console.log(friends);

// // // // // // // const mixed = ["Yuan", 19, true, friends];
// // // // // // // console.log(mixed);

// // // // // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // // // // console.log(years);

// // // // // // // console.log(friends[0]);
// // // // // // // console.log(friends[2]);

// // // // // // // console.log(friends.length);


// // // // // // // friends[1] = "Tine";
// // // // // // // console.log(friends);

// // // // // // // const firstName = "Yowan";
// // // // // // // const yowan = [firstName, "Estabillo", 2025 - 2005];
// // // // // // // console.log(yowan);

// // // // // // // const calcAge = function (birthYear) {
// // // // // // //     return 2025 - birthYear;
// // // // // // // }

// // // // // // // const ages = [calcAge(2000), calcAge(2003), calcAge(1991)];
// // // // // // // console.log(ages);

// // // // // // // const newLength = friends.push("Jehu");
// // // // // // // console.log(friends);
// // // // // // // console.log(newLength);
// // // // // // // const newLength2 = friends.push("Zandro");
// // // // // // // console.log(friends);
// // // // // // // console.log(newLength2);

// // // // // // // friends.unshift("Jehu");
// // // // // // // console.log(friends);

// // // // // // // const popped = friends.pop();
// // // // // // // const popped2 = friends.pop();
// // // // // // // console.log(popped);
// // // // // // // console.log(popped2);
// // // // // // // console.log(friends);

// // // // // // // const shifted = friends.shift();
// // // // // // // console.log(shifted);
// // // // // // // console.log(friends);

// // // // // // // console.log(friends.indexOf("Zel"));
// // // // // // // console.log(friends.indexOf("Qjuin"));

// // // // // // // console.log(friends.includes("Zel"));
// // // // // // // console.log(friends.includes("Cabia"));

// // // // // // // for (let i = 0; i < friends.length; i++) {
// // // // // // //     console.log(friends[i]);
// // // // // // // }

// // // // // // // friends.forEach(
// // // // // // //     function(friend, index) {
// // // // // // //         console.log(`Friend ${index + 1}: ${friend}`);
// // // // // // //     }
// // // // // // // )

// // // // // // // friends.forEach((friend, index) => {
// // // // // // //         console.log(`Friend ${index + 1}: ${friend}`);
// // // // // // //     }
// // // // // // // )

// // // // // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // // // // let total = 0;

// // // // // // // for (let i = 0; i < grades2.length; i++) {
// // // // // // //     total += grades2[i];
// // // // // // // }

// // // // // // // const average = total / grades2.length;
// // // // // // // console.log(`Average Grade: ${average.toFixed(2)}`);

// // // // // // // let passedCount = 0;
// // // // // // // grades2.forEach(grade => {
// // // // // // //     if (grade >= 70) {
// // // // // // //         passedCount++;
// // // // // // //     }
// // // // // // // });

// // // // // // // console.log(`${passedCount} out of ${grades2.length} students passed`);

// // // // // // // Coding Challenge #2 - Student Grade Manager
 
// // // // // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// // // // // // // Function to calculate average
// // // // // // function calculateAverage(grades) {
// // // // // //     return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
// // // // // //   // Your code here
// // // // // //   // Hint: Sum all grades, divide by length
// // // // // // }
 
// // // // // // // Function to find highest grade
// // // // // // function findHighestGrade(grades) {
// // // // // //     let highest = grades[0];
// // // // // //     for (let i = 1; i < grades.length; i++) {
// // // // // //         if (grades[i] > highest) {
// // // // // //             highest = grades[i];
// // // // // //         }
// // // // // //     }
// // // // // //     return highest;
// // // // // //   // Your code here
// // // // // //   // Hint: Start with first grade, compare with each subsequent grade
// // // // // // }
 
// // // // // // // Function to find lowest grade
// // // // // // function findLowestGrade(grades) {
// // // // // //     let lowest = grades[0];
// // // // // //     for (let i = 1; i < grades.length; i++) {
// // // // // //         if (grades[i] < lowest) {
// // // // // //             lowest = grades[i];
// // // // // //         }
// // // // // //     }
// // // // // //     return lowest;
// // // // // //   // Your code here
// // // // // //   // Hint: Similar to highest, but use < comparison
// // // // // // }
 
// // // // // // // Function to count passing students
// // // // // // function countPassing(grades, passingGrade) {
// // // // // //     let count = 0;
// // // // // //     for (let i = 0; i < grades.length; i++) {
// // // // // //         if (grades[i] >= passingGrade) {
// // // // // //             count++;
// // // // // //         }
// // // // // //     }
// // // // // //     return count;
// // // // // //   // Your code here
// // // // // //   // Hint: Counter pattern - increment when condition is met
// // // // // // }
 
// // // // // // // Generate complete report
// // // // // // const average = calculateAverage(grades);
// // // // // // const highest = findHighestGrade(grades);
// // // // // // const lowest = findLowestGrade(grades);
// // // // // // const passing = countPassing(grades, 70);
 
// // // // // // console.log("=== GRADE REPORT ===");
// // // // // // console.log(`Average: ${average.toFixed(2)}`);
// // // // // // console.log(`Highest: ${highest}`);
// // // // // // console.log(`Lowest: ${lowest}`);
// // // // // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // // // // ////////////////////////////////////
// // // // // // The Array Problem
// // // // // const yuanArray = [
// // // // //   "Yuan",
// // // // //   "Estabillo",
// // // // //   2025 - 2005,
// // // // //   "student",
// // // // //   ["Michael", "Peter", "Steven"],
// // // // // ];

// // // // // console.log(yuanArray[0]);
// // // // // console.log(yuanArray[1]);

// // // // // const yuanObject = {
// // // // //   firstName: "Yuan",
// // // // //   lastName: "Estabillo",
// // // // //   age: 2025 - 2005,
// // // // //   job: "student",
// // // // //   friends: ["Michael", "Peter", "Steven"],
// // // // // };

// // // // // console.log(yuanObject);

// // // // // // Property Access Methods
// // // // // console.log(yuanObject.firstName);
// // // // // console.log(yuanObject.lastName);
// // // // // console.log(yuanObject.age);

// // // // // //Bracket Notation
// // // // // console.log(yuanObject["firstName"]);
// // // // // console.log(yuanObject["lastName"]);
// // // // // console.log(yuanObject["age"]);

// // // // // const nameKey = "Name";
// // // // // console.log(yuanObject["first" + nameKey]);
// // // // // console.log(yuanObject["last" + nameKey]);

// // // // // // modifying existing properties
// // // // // yuanObject.job = "Programmer";
// // // // // yuanObject["age"] = 25;
// // // // // console.log(yuanObject);

// // // // // // add new properties
// // // // // yuanObject.location = "Philippines";
// // // // // yuanObject["twitter"] = "yoowaannn";
// // // // // console.log(yuanObject);

// // // // // // when to use which notation?
// // // // // const property = "job";
// // // // // console.log(yuanObject[property]);

// // // // // Objects vs Arrays Decision Making

// // // // const listOfYears = [1991, 1984, 2008, 2020];
// // // // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // // // const testScores = [85, 92, 78, 96];

// // // // const person = {
// // // //   name: "Jonas",
// // // //   age: 46,
// // // //   occupation: "teacher",
// // // // };

// // // // const car = {
// // // //   brand: "Toyota",
// // // //   model: "Camry",
// // // //   year: 2020,
// // // //   color: "blue",
// // // // };

// // // // // objcets can  contain arrays, arrays can contain objects
// // // // const student = {
// // // //   name: 'Sarah',
// // // //   grades: [85, 92, 78],
// // // //   address: {
// // // //     street: "123 Main St",
// // // //     city: "New York",
// // // //   },
// // // // };

// // // // console.log(student.grades[0]);
// // // // console.log(student.address.city);

// // // // // Object Methods

// // // // const yuan = {
// // // //   firstName: "Yuan",
// // // //   lastName: "Estabillo",
// // // //   birthYear: 2005,
// // // //   job: "student",
// // // //   friends: ["Michael", "Peter", "Steven"],
// // // //   hasDriverLicense: true,

// // // //   calcAge: function (birthYear) {
// // // //     return 2025 - birthYear;
// // // //   },
// // // // };

// // // // console.log(yuan.calcAge(2005));

// // // // // 'this' keyword
// // // // const yuanImproved = {
// // // //   firstName: "Yuan",
// // // //   lastName: "Estabillo",
// // // //   birthYear: 2005,
// // // //   job: "student",
// // // //   friends: ["Michael", "Peter", "Steven"],
// // // //   hasDriverLicense: true,

// // // //   calcAge: function () {
// // // //     this.age = 2025 - this.birthYear;
// // // //     return this.age;
// // // //   },

// // // //   getSummary: function () {
// // // //     return `${this.firstName} is a ${this.calcAge()}-year old ${
// // // //       this.job
// // // //     }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
// // // //   },
// // // // };

// // // // console.log(yuanImproved.calcAge());
// // // // console.log(yuanImproved.age);
// // // // console.log(yuanImproved.getSummary());

// // // ////////////////////////////////////
// // // // Coding Challenge #3 - User Profile System

// // // const user = {
// // //   firstName: "Sarah",
// // //   lastName: "Johnson",
// // //   birthYear: 1995,
// // //   location: "New York",
// // //   interests: ["photography", "travel", "coding"],
// // //   friends: [
// // //     { name: "Michael", status: "active" },
// // //     { name: "Emma", status: "inactive" },
// // //     { name: "David", status: "active" },
// // //   ],
// // //   isActive: true,

// // //   // Calculate age method
// // //   calcAge: function () {
// // //     // Calculate age and store as this.age
// // //     // Hint: Use new Date().getFullYear() for current year
// // //     // Your code here
// // //     this.age = new Date().getFullYear() - this.birthYear;
// // //     return this.age;
// // //   },

// // //   // Add friend method
// // //   addFriend: function (name, status = "active") {
// // //     // Add new friend object to this.friends array
// // //     // Return the new length of friends array
// // //     // Your code here
// // //     this.friends.push({ name, status: status });
// // //     return this.friends.length;
// // //   },

// // //   // Get active friends count
// // //   getActiveFriends: function () {
// // //     // Filter friends array to count only active friends
// // //     // Hint: use this.friends.filter()
// // //     // Your code here
// // //     const activeFriends = this.friends.filter(friend => friend.status === "active");
// // //     return activeFriends.length;
// // //   },

// // //   // Toggle active status
// // //   toggleStatus: function () {
// // //     // Switch this.isActive between true and false
// // //     // Return the new status
// // //     // Your code here
// // //     this.isActive = !this.isActive;
// // //     return this.isActive;
// // //   },

// // //   // Generate profile summary
// // //   getSummary: function () {
// // //     // Create a social media style profile summary
// // //     // Include: name, age, location, status, friend counts, interests
// // //     // Use template literals for nice formatting
// // //     // Your code here
// // //     const age = this.calcAge();
// // //     const activeFriends = this.getActiveFriends();
// // //     const status = this.isActive ? "active" : "away";

// // //     return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
// // //     Currently ${status}
// // //     ${activeFriends} active friends out of ${this.friends.length} total
// // //     Interests: ${this.interests.join(", ")}
// // //     Connected and sharing life's adventures`;
// // //   },
// // // };

// // // // Test your user profile system
// // // console.log(user.getSummary());
// // // user.addFriend("Alex", "active");
// // // user.toggleStatus();
// // // console.log(`\nAfter updates:`);
// // // console.log(user.getSummary());

// // const message = document.querySelector(".message");
// // console.log(message);

// // const button = document.querySelector("#btn");
// // console.log(button); 

// // const heading = document.querySelector("h1");
// // console.log(heading);

// // console.log(message.textContent);
// // console.log(button.id);
// // console.log(heading.tagName);
// // console.log(heading.textContent);

// // // getElkementById
// // const buttonById = document.getElementById("btn");
// // console.log(buttonById);
// // console.log(buttonById === button);

// // // querySelectorAll
// // const allParagraphs = document.querySelectorAll("p");
// // console.log(allParagraphs);
// // console.log(allParagraphs[0]);

// const message = document.querySelector(".message");
// console.log(message.textContent);

// message.textContent = "Hello from JavaScript";
// console.log(message.textContent);

// //InnerHTML
// message.innerHTML = "<strong>Hello from JS</strong>";

// //innerText
// console.log(message.innerText);

// //input element value
// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default Text";


// const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "Green";
// heading.style.fontSize = "3rem";

// const button = document.querySelector("#btn");
// button.style.padding = "20px";
// button.style.borderRadius = "10px";

// //Event Listeners - user interactions

// button.addEventListener("click", function() {
//     console.log("Button was clicked");
//     message.textContent = "You clicked the button!";
//     message.style.color = "pink";
// });

// let clickCount = 0;
// button.addEventListener("click", function() {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });


// const display = document.querySelector(".message");
// input.addEventListener("input", function() {
//   const userText = input.value;
//   display.textContent = `You typed: ${userText}`;
//   display.style.fontSize = `${userText.length + 10}px`;
// });


// // keyboard events - respond to specific keys
// input.addEventListener("keydown", function(event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     display.textContent = `You pressed Enter! Text was ${input.value}`;
//     input.value = "";
//   }
// });
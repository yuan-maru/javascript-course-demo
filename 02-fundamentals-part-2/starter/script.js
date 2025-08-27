// console.log("Part 2 is now working");

// console.log(`=== FUNCTIONS ===`);

// function logger() {
//   console.log("My name is Yowan");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
//   }

//   console.log(fruitProcessor(5, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);

// /////FUNCTION EXPRESSIONS///////
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2000));
// console.log(calcAge(1991));

// function introduction(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction
// }

// console.log(introduction ("Yuan", "Estabillo", "19"));

// function yearsUntilRetirement (birthYear, firstName) {
//     const age = calcAge (birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} had already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2005, "Yuan"));

// const globalVar = "I am global";

// function testScope(){
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }
 
// testScope();

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//     const avg = (score1 + score2 + score3) / 3;
//     return avg;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;

const grade = [85, 92, 87, 96, 88];
console.log(grade);

const friends = ['Zel', 'Nash', 'Qjuin'];
console.log(friends);

const mixed = ["Yuan", 19, true, friends];
console.log(mixed);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);


friends[1] = "Tine";
console.log(friends);

const firstName = "Yowan";
const yowan = [firstName, "Estabillo", 2025 - 2005];
console.log(yowan);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const ages = [calcAge(2000), calcAge(2003), calcAge(1991)];
console.log(ages);

const newLength = friends.push("Jehu");
console.log(friends);
console.log(newLength);
const newLength2 = friends.push("Zandro");
console.log(friends);
console.log(newLength2);

friends.unshift("Jehu");
console.log(friends);

const popped = friends.pop();
const popped2 = friends.pop();
console.log(popped);
console.log(popped2);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Zel"));
console.log(friends.indexOf("Tine"));

console.log(friends.includes("Zel"));
console.log(friends.includes("Yuan"));

for (let i = 0; i < friends.length; i++) {
    console.log(friends[1]);
}

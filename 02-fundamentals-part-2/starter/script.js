console.log("Part 2 is now working");

console.log(`=== FUNCTIONS ===`);

function logger() {
  console.log("My name is Yowan");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
  }

  console.log(fruitProcessor(5, 3));

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);
console.log(juice1);

/////FUNCTION EXPRESSIONS///////
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calcAge(2000));
console.log(calcAge(1991));

function introduction(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction
}

console.log(introduction ("Yuan", "Estabillo", "19"));

function yearsUntilRetirement (birthYear, firstName) {
    const age = calcAge (birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} had already retired`;
    }
}

console.log(yearsUntilRetirement(2005, "Yuan"));


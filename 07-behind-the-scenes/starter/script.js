'use strict';

// const person = {
//     name: 'Jonas',
//     greet: function() {
//         console.log(`Hello I am ${this.name}`);
//     },
// };

// person.greet();

// const anotherPerson = {
//     name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // detached function
// const greetFunction = person.greet;
// greetFunction(); 

// const obj = {
//   name: 'Object',
//   regularMethod: function () {
//     console.log('Regular:', this.name); 
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?

// const timer = {
//   name: 'Timer',
//   //old approach
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//    //using arrow functions
//    startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     });
// }
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// //user.printHobbiesBad(); // Fails - this.name is undefined
// user.printHobbiesGood(); // Works - shows all hobbies

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('Hello', 'World');
// //functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// //primitive
// let age = 30;

// //we copy the primitive, making independent copy
// let oldAge = age;

// age = 31;

// console.log('age', age);

// console.log('oldAge', oldAge);

// // OBJECT HEAP
// // objects are stored in heap, variables hold references
// const me = { name: 'Jonas', age: 30 };

// const friend = me;

// friend.age = 27;

// console.log('Me:', me);
// console.log('Friend:', friend);

// function changeAge(person, newAge) {
//     person.age = newAge;
//     return person;
// }

// const originalPerson = { name: 'Jonas', age: 25 };

// const updatedPerson = changeAge(originalPerson, 30);

// console.log('Same Object?:', originalPerson === updatedPerson);

// //SOLUTION TO MAKE A COPY
// const original = {
//   name: 'Alice',
//   age: 28,
//   hobbies: ['reading', 'codings'],
// };

// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';

// console.log('Original Name:', original.name);
// console.log('Shallow Name:', shallowCopy.name);

// shallowCopy.hobbies.push('gaming');

// console.log('Original Hobbies:', original.hobbies);
// console.log('Shallow Hobbies:', shallowCopy.hobbies);

//DEEP Copy
const deepOriginal = {
    name: 'Charlie',
    age: 32,
    address: { city: 'Paris', country: 'France' },
    hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone (deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('Original Address:', deepOriginal.address);
console.log('Copy Address:', deepCopy.address);

console.log('Original Hobbies:', deepOriginal.hobbies);
console.log('Copy Hobbies:', deepCopy.hobbies);

console.log('Original Name:', deepOriginal.name);
console.log('Copy Name:', deepCopy.name);
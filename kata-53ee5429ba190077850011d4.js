// Challenge
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// Assumptions

//     You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.

// What We're Testing

// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Questions
/*
- comment ecrire array in jsdoc
*/
/**
 *
 * @param {numbers[]} numbers Takes an array of numbers
 * @returns {number} Retunrs sum of numbers (integer/float)
 */

function sum (numbers) {
  "use strict";
  "use strict";
  let total = 0;

  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }

  // numbers.reduce((acc, currentNumber) => acc + currentNumber, total )
  // let intialValue = 0;
  // numbers.reduce((accumulator, currentValue) => accumulator + currentNumber, intialValue )
};

let colors = ['red','blue','green']
// colors.forEach((arrayItem, arrayIndex) => {
//   let test = 0;

//   console.log(`${arrayIndex} - ${arrayItem}`);
// })

// let initialValue = 'My favorite colres are: '
// let finalString = colors.reduce((acc, cur) => {
//   console.log({acc, cur})
//   return  acc + cur
// }, '')

// console.log({finalString})
// let numbers = [1, 5.2, 4, 0, -1]
// let initialValue = 20;
// let total = 0
// numbers.reduce((accumulator, currentValue) => {
//   console.log({accumulator,  currentValue, initialValue, total})
//   total += accumulator + currentValue
//    return total
// }, 30)

// console.log(initialValue);

/*
red
blue
green
 */

/*
1 - red
2 - blue
3 - green
 */

// @params {string}
// @params {number}
// @params {Array}
// @params {Array.<number>}
// @params {numbers[]}
// @params {Array.<string>}
// @params {Array.<Object>}
// @params {Array.<{}>}
// @params {Object}
// jsdoc.app

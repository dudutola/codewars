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

// Sum Numbers
/**
 * Returns sum of numbers
 * @param {number[]} numbers array of numbers
 * @returns {number}
 */
function sum (numbers) {
  "use strict";
  let sumTotal = 0;

  // for (let index = 0; index < numbers.length; index++) {
  //   sumTotal += numbers[index];
  // }
  // return sumTotal;

  // attempt
  return numbers.reduce(
    (acc, curr) => acc + curr,
      sumTotal
  );
  // return numbers.reduce((a, b) => a + b, 0);
};

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

/**
 *
 * @param {number[]} numbers an array of numbers
 * @returns {number} returns the sum of the squares of the numbers
 */

function squareSum(numbers){
  return numbers.reduce((sumN, number) => sumN + number * number, 0);
}

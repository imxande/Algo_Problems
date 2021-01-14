/* Write a function that takes a non-empty array of distinct integers and an integer representing a target sum. If any two number in the input array sum up
    to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return 
    an empty array. 

    Target sum needs to be obtained by summing up two different numbers. 

    Ex: input => const array = [3, 5, -4, 8, 11, 1, -1, 6]
    Ex: input => const targetSum = 10
*/

// O(n^2) time complexity, O(n) space complexity
const twoSumOne = (array, target) => {
  // placeholder for our result
  const result = [];

  //  outer loop to get first number
  for (let i = 0; i < array.length; i++) {
    //   grab first number
    const firstNumber = array[i];

    // inner loop to grab second number and get the current sum
    for (let j = i + 1; j < array.length; j++) {
      // grab second number
      const secondNumber = array[j];

      //   get current sum
      const currentSum = firstNumber + secondNumber;

      //   check if the current sum is equal to the target
      if (currentSum === target) {
        //   if so populate our result array
        result.push(firstNumber, secondNumber);
      }
    }
  }

  // return result whether empty or populated
  return result;
};

// O(n) time complexity, O(n) space complexity
const twoSumTwo = (array, target) => {
  let result = {};

  for (const number of array) {
    const difference = target - number;

    if (difference in result) {
      return [number, difference];
    } else {
      result[number] = true;
    }
  }
  return [];
};

// O(nlogn) time ----- O(1) space
const twoSumThree = (array, target) => {
  // sort the array
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === target) {
      return [array[left], array[right]];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
};

// hold the returned values from calling the function twoSum
const answerOne = twoSumOne([3, 5, -4, 8, 11, 1, -1, 6], 10);
const answerTwo = twoSumTwo([3, 5, -4, 8, 11, 1, -1, 6], 10);
const answerThree = twoSumThree([3, 5, -4, 8, 11, 1, -1, 6], 10);

// sanity check
console.log(answerOne);
console.log(answerTwo);
console.log(answerThree);

/* Write a function that takes a non-empty array of distinct integers and an integer representing a target sum. Find all the triplets in the array that
    sum up the target. Ex input: [12, 3, 1, 2, , -6, 5, -8, 6], 0 Ex: output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]] 
*/

const threeSum = (array, targetSum) => {
  const result = [];

  // sort array
  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

// test cases
const testCase1 = threeSum([12, 3, 1, 2, , -6, 5, -8, 6], 0); // output: [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
const testCase2 = threeSum([1, 2, 3], 6); // output: [ [ 1, 2, 3 ] ]
const testCase3 = threeSum([1, 2, 3], 7); // output: []
const testCase4 = threeSum([8, 10, -2, 49, 14], 57); // output: [ [ -2, 10, 49 ] ]
const testCase5 = threeSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0); // [ [ -8, 2, 6 ], [ -8, 3, 5 ],[-6, 0, 6], [ -6, 1, 5 ], [-1, 0, 1] ]

// sanity check
console.log("Test Case 1:", testCase1);
console.log("Test Case 2:", testCase2);
console.log("Test Case 3:", testCase3);
console.log("Test Case 4:", testCase4);
console.log("Test Case 5:", testCase5);

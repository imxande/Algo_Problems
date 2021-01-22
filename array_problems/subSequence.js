/* 
Given two non-empty array of integers, write a function that determines whether the second array is a subsequence of the first one. A subsequence of an array is a set of numbers that aren't necessarily adjacent but that are
in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the 
array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself
are both a valid subsequences of the array. 

Sample input:

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

Sample Output: true

*/

/*  
    Steps 
    1- Write a function 
    2- Grab first number of subsequence and compared it with first number of array
    3- If match then move to the next number in the subsequence
    4- No matter what we keep moving to the next number in the array
    5- Return true if we hit the end of the sequence
*/

// Function
const validateSeq = (array, sequence) => {
  // Init pointer to track position
  let arrIdx = 0;
  let seqIdx = 0;

  // As long as we are within boundaries of the array and the sequence, perform operations
  while (arrIdx < array.length && seqIdx < sequence.length) {
    // check if first number of sequence is the same as first number in the original array
    if (array[arrIdx] === sequence[seqIdx]) {
      // move the sequence index
      seqIdx++;
    }
    // no matter if we found a match or not we keep moving in the original array
    arrIdx++;
  }
  // once we break out of the loop return true false accordingly
  return seqIdx === sequence.length;
};

// Input
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

// Sanity check
console.log(validateSeq(array, sequence));

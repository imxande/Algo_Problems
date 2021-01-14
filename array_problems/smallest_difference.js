/*
 Write a function that takes in two non-empty arrays of integers. find the pair of numbers(one each array) whose absolute difference is closest to zero
    and returns an array containing these two numbers, with the number from the first array in the first position. 

    You can assume that there will only be a pair of numbers with the smallest difference. 
    
    Ex: arrayOne = [-1, 5, 10, 20, 28, 3]
    Ex: arrayOne = [26, 134, 135, 15, 17] 

    Output: [28, 26]

*/

// write function takes two arrays
// sort the arrays
// Read the data(loop)
// I need to get the absolute difference
// Keep track of the smaller difference
// If so the push the values to the array

function smallestDifference(arrayOne, arrayTwo) {
  // sort both arrays
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  // created pointers for both array
  let idxOne = 0;
  let idxTwo = 0;

  //  init placeholders
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  // while loop
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    // init placeholders for the values in each array
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    // check if first value is smaller than second value
    if (firstNum < secondNum) {
      //  if so then current is the difference between second and first number
      current = secondNum - firstNum;
      // increase first index counter
      idxOne++;
    }
    // check if second number is smaller then first one
    else if (secondNum < firstNum) {
      //  if so then current difference is first minus second number
      current = firstNum - secondNum;
      // increase second index
      idxTwo++;
    }
    // if equal just return first and second number
    else {
      return [firstNum, secondNum];
    }
    //  check if smallest is greater than current
    if (smallest > current) {
      // if so then smallest is now the current
      smallest = current;
      // those the smallest pair are populated with the first and second number
      smallestPair = [firstNum, secondNum];
    }
  }
  // return the pair
  return smallestPair;
}

const answer = smallestDifference(
  [-1, 5, 10, 20, 28, 3],
  [26, 134, 135, 15, 17]
);

console.log(answer);

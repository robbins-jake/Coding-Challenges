// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
    return array.map(a => {
      const r = Math.sqrt(a);
      return r % 1 == 0?r:(a*a);
    });  
  }
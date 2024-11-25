// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.length === 0 ? 0 : numbers.reduce((acc, c) => acc + (c**2), 0)
}

console.log(squareSum([14,-7,-12,19,-9,-20,13,-12]))
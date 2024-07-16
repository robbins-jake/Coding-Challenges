//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = num => num * (num + 1) / 2

console.log(summation(8))

//Refactoring for visual learning purposes

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }
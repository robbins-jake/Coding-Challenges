//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
    return +Math.pow(A * 2 / Math.PI, 2).toFixed(2)
  }

  console.log(squareArea(2))
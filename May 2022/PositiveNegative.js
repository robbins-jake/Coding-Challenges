// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
    return [];  

  let posCount = input.filter(a => a > 0).length
  let negative = input.filter(a => a < 0).reduce((acc, c) => acc + c, 0)
  let array = []
  
  if(posCount === 0 ){
    array.push(0, negative)
    return array
  }else if(negative === 0){
    array.push(posCount, 0)
    return array
  }else if(posCount === 0 && negative === 0){
    return array
  }else{
      return array.concat(posCount, negative)
  } 
}
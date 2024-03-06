// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
    let count = 1
    for (let i = 0; i < power; i++){
      count *= number 
    }
    return count
}

console.log(numberToPower(4,2))
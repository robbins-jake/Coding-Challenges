// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
    let product = ''
    for(let i = 1; i <= 10; i++){
        i < 10 ? product += `${i} * ${number} = ${i * number}\n` : product += `${i} * ${number} = ${i * number}`
    }
    return product
  }

  console.log(multiTable(5))
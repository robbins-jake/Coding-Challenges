// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
    let threeForTwo = Math.floor(quantity / 3) * price * 2;
    let ordPrice = (quantity % 3) * price;
    let sum = threeForTwo + ordPrice;
    return sum;
}

console.log(mango(9,5))
//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
    return !array ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((acc, c) => (acc + c), 0)
}

console.log(sumArray(null))
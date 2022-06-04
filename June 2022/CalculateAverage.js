//Write a function which calculates the average of the numbers in a given list.

function findAverage(array) {
    if(array.reduce((acc, a) => (acc + a), 0)/array.length){
        return array.reduce((acc, a) => (acc + a), 0)/array.length
    }else{
        return 0
    }
}
console.log(findAverage([1,1,1]))

//Refactor for simplicity

function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((acc, a) => (acc + a), 0)/array.length
}

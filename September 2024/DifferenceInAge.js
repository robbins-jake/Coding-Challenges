// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    let old = ages.sort((a,b) => b - a)[0]
    let young = ages.sort((a,b) => a - b)[0]
    let arr = [young, old, (old - young)]
    return arr
}
console.log(differenceInAges([82, 15, 6, 38, 35]))

//Refactoring to use Math objects

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}
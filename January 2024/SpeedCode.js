// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
    let arr1 = a.reduce((acc, c) => acc + (c**2),0)
    let arr2 = b.reduce((acc, c) => acc + (c**3),0)
    return arr1 > arr2 ? true : false
}

console.log(arrayMadness([5,6,7],[4,5,6]))
/* Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:
c2 = a2 + b2

where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
Return Values

    true if a, b and c form a pythagorean triple
    false if a, b and c do not form a pythagorean triple */

function isPythagoreanTriple(integers) {
    integers.sort((a,b) => b -a)
    let c = integers[0]
    let b = integers[1]
    let a = integers[2]

    return c**2 === b**2 + a**2 ? true : false
}

console.log(isPythagoreanTriple([3, 4, 5]))
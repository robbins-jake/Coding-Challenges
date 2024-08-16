/* In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  [] */

function twoHighest(arr) {
    return [...new Set(arr.sort((a,b) => b - a).slice(0,3))]
}

console.log(twoHighest([59824,80411,71269,26145,82832,70322,82062,95897,7241,47806,82775,82412,99480,40616,8315,35060,9220,71050,69518,70167,66321,98829,28222,80900,870,64936,6118,58505,96486,22016,63030,98448]))


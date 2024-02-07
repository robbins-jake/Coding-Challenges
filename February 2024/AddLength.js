function addLength(str) {
    return str.split(' ').map(a => a + ' ' + a.length)

}

console.log(addLength('apple ban'))
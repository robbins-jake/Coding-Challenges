//Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = (cc) => 
    cc.slice(-4).padStart(cc.length, '#')
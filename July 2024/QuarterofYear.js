//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if(month === 1 || month === 2 ||month === 3 ) {
        return 1
    }else if(month === 4 || month === 5 ||month === 6 ){
        return 2
    }else if(month === 7 || month === 8 ||month === 9 ){
        return 3
    }else{
        return 4
    }
  }

console.log(quarterOf(11))

//Refactoring for JS method use

const quarterOf = (month) => {
    return Math.ceil(month / 3);
  }
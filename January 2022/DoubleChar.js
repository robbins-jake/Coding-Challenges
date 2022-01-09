//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let letters = ''
    for(let i = 0; i < str.length; i++){
        letters += str[i].repeat(2)
    }
    return letters
  }

  console.log(doubleChar("abcd"))

//Refactoring for alternative array approach

const doubleChar = (str) => str.split("").map(c => c + c).join("");
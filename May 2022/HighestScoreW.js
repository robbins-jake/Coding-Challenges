// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const scoreMap = "-abcdefghijklmnopqrstuvwxyz".split('')
    const inputArray = x.split(' ')
  
    const valueArray = inputArray.map(a => {
        return a.split('').reduce((x, y) => {
            return x + scoreMap.indexOf(y)
        }, 0)
    })
    
    const scoreIndex = valueArray.indexOf(Math.max(...valueArray))
    const scoreWord = inputArray[scoreIndex]
  
    return scoreWord
  }
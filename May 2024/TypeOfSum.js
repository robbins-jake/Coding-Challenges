//Return the type of the sum of the two arguments

function typeOfSum(a, b) {
    if(typeof a == 'string' || typeof b == 'string'){
        return 'string'  
    }else if(typeof a == 'number' && typeof b == 'number'){
        return 'number'
    }else if(a === true || b === true){
        return 'number'
    }else if(a == null){
        return 'number'
    }else{
        return'number'
    }
  }

  console.log(typeOfSum(null, undefined))

  //Refactoring for simplicity

  const typeOfSum = (a, b) => typeof(a + b);
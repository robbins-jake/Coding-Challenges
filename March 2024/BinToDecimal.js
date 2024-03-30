function binToDec(bin){
    let arr = bin.split('').reverse()
    return arr.map((a, i) => a === '0' && i === 0 ? 0 : (parseInt(a)*2)**i).reduce((acc, c) => acc + c, 0)
  }

  console.log(binToDec("1001001"))

  //Refactoring to show simpler approach for binary to decimal conversion
  
  function binToDec(bin){
    return parseInt(bin,2);
  }
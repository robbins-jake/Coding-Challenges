

function DNAtoRNA(dna) {
    let arr = dna.split('')
    return arr.map(a => a === 'T' ? 'U' : a).join('')
  }

  console.log(DNAtoRNA('TTTT'))
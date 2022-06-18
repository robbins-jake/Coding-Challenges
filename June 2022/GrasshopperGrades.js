//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

//Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3)/3
    if(average >= 90){
        return 'A'
    }else if(average >= 80 && average < 90){
        return 'B'
    }else if(average >= 70 && average < 80){
        return 'C'
    }else if(average >= 60 && average < 70){
        return 'D'
    }else{
        return 'F'
    }
  }

console.log(getGrade(95,90,93))

//Refactoring for efficiency

function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }
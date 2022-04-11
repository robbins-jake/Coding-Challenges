//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('').filter(letter => letter != '!').join('')
  }

  console.log(removeExclamationMarks("Hello World!"))

  //Refactoring for simpler regex application

  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }
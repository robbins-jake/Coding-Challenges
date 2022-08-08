/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski" */

function correctPolishLetters (string) {
    function arr(a){
        let c='';
        switch (a) {
          case 'ą': c='a'; break;
          case 'ć': c='c'; break;
          case 'ę': c='e';break;
          case 'ł': c='l';break;
          case 'ń': c='n';break;
          case 'ó': c='o';break;
          case 'ś': c='s';break;
          case 'ź': c='z';break;
          case 'ż': c='z';break;
          default:break;
        } return c;
        }
      return string.replace(/[ąćęłńóśźż]/gi, arr);
}

console.log(correctPolishLetters("Jędrzej Błądziński"))


/* Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future. */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld > (sonYearsOld * 2) ? dadYearsOld - (sonYearsOld * 2) : (sonYearsOld * 2) - dadYearsOld
}

console.log(twiceAsOld(55,30))

//Refactoring to include Math object

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2));
  }

/* While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below. */

function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }

console.log(checkAlive(-10))

//Refactoring for simplicity

function checkAlive(health) {
  return health > 0;
}
//game is an object
//play is a method of that object
// how types of loops are available:
  // for loop - 
  // for each loop - for most of the functions -- for arrays
  // while loop - games or when a certain condition changes it stops...
  // for in loop- loops through objects
  // for of loop

const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    //if you want to access any property inside of a function use this.
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
       let numEntered 
       while (numEntered != this.secretNum){
        numEntered = this.getGuess()
        this.message(numEntered)
        this.prevGuesses.push(numEntered)


       }
  },
  
  getGuess: function(){
    let numEntered
     numEntered = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}: ` ));
    if(numEntered > this.biggestNum || numEntered < this.smallestNum)alert('out of range')
     return numEntered
  },

  message: function(numEntered){
    numEntered
    if (numEntered === this.secretNum) {
      alert(`congratulations! You guessed the number in ${this.prevGuesses.length} guesses`)
    } else if (numEntered < this.secretNum) {
      alert(`Your guess is too low`)
    } else if(numEntered > this.secretNum) {
      alert(`Your guess is too high`)
    }

  }
}
game.play()



  


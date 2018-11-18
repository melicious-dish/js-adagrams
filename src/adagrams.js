const Adagrams = {
  drawLetters() {

    let letterBag = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

    // const shuffled = letterBag.sort(() => .5 - Math.random());// shuffle
    // let drawnLetters =shuffled.slice(0,10) ; //get sub-array of first n elements AFTER shuffle
    let lettersInHand = []
    for ( let i = 0; i < 10; i +=1 ) {

      const shuffled = letterBag.sort(() => .5 - Math.random());// shuffle
      lettersInHand =shuffled.slice(0,10) ; //get sub-array of first 10 elements AFTER shuffle. he slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
    }

    return lettersInHand

  },

  usesAvailableLetters(input, lettersInHand){


    const letterHash = {};
    lettersInHand.forEach((letter) => {
      if (letterHash[letter]) {
        letterHash[letter] += 1;
      }
      else {
        letterHash[letter] = 1;
      }
    });

    for (let i = 0; i < input.length; i += 1) {
      if (letterHash[input[i]]) {
        letterHash[input[i]] -= 1;
      }

      else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word){
    const scoreChart =
    {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T":1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10
    }

    let upWord = word.toUpperCase();
    let totalScore = 0;

    for ( let letter of upWord ) {
      totalScore += scoreChart[letter];
    }

    if (upWord.length >= 7) {
      totalScore += 8
    }
    // console.log(totalScore);
    return totalScore;
  },

  highestScoreFrom(words){
    // score each word
    let highestScoreHash = {
      score: 0,
      word: ""
    };

    words.forEach((word) => {
      let highScore = this.scoreWord(word);
      // console.log(word);

      if (highScore > highestScoreHash.score){
        highestScoreHash.score = highScore;
        highestScoreHash.word = word;
      }

      else if (highScore === highestScoreHash.score){
        if (word.length === 10  && highestScoreHash.word.length < 10){
          highestScoreHash.score = highScore;
          highestScoreHash.word = word;
        }
        else if (word.length < highestScoreHash.word.length && highestScoreHash.word.length < 10){
            highestScoreHash.score = highScore;
            highestScoreHash.word = word;
        }
        // console.log(highestScoreHash);

      }
    });
    // console.log(highestScoreHash);

    return highestScoreHash;


  },

}
// Do not remove this line or your tests will break!
export default Adagrams;

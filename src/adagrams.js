const Adagrams = {
  LETTER_COUNTS: {
    1: 'JKQXZ',
    2: 'BCFHMPVWY',
    3: 'G',
    4: 'DLSU',
    6: 'NRT',
    8: 'O',
    9: 'AI',
    12: 'E',
  },

  drawLetters() {
    const letterPool = Object.entries(Adagrams.LETTER_COUNTS).reduce((letters, [count, letterSet]) => {
      return letters + letterSet.repeat(count);
    }, '').split('');

    let letters = [];
    for(let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * letterPool.length);
      letters.push(letterPool.splice(index, 1)[0]); // Remove entry from letter_pool at index, add to letters array
    }

    return letters;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCounter = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (vowels.indexOf(letter) >= 0) {
      vowelsCounter = vowelsCounter + 1;
    }
  }

  return vowelsCounter
}

module.exports = countVowels;

function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  const captializedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    captializedWords.push(word[0].toUpperCase() + word.substring(1, word.length))
  }

  return captializedWords.join(" ");
}

module.exports = titleCase;

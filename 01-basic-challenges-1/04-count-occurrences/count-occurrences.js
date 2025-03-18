function countOccurrences(str, char) {
  let ocurrences = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      ocurrences = ocurrences + 1;
    }
  }

  return ocurrences;
}

module.exports = countOccurrences;

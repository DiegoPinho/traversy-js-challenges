function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  if (!arr) return undefined;

  const highestValue = arr.length + 1;
  for (let i = 1; i <= highestValue; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }


}

module.exports = findMissingNumber;

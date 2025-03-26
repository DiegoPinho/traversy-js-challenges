function findMissingLetter(arr) {
  let length = arr.length;

  if (length === 0) return "";

  let expectedSum = 0;
  for (i = arr[0].charCodeAt(); i <= arr[length - 1].charCodeAt(); i++) {
    expectedSum = expectedSum + i;
  }

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i].charCodeAt();
  }

  const missingLetterCode = expectedSum - actualSum;
  return String.fromCharCode(missingLetterCode);
}


module.exports = findMissingLetter;

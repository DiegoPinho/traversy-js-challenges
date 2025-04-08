function formatPhoneNumber(numbers) {
  let ddd = "";
  let firstNumbers = "";
  let lastNumbers = "";

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (i < 3) {
      ddd = ddd + number;
    } else if (i >= 3 && i <= 5) {
      firstNumbers = firstNumbers + number;
    } else {
      lastNumbers = lastNumbers + number;
    }
  }

  return `(${ddd}) ${firstNumbers}-${lastNumbers}`;
}

module.exports = formatPhoneNumber;

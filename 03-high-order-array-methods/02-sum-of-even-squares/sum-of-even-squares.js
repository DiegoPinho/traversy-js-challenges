function sumOfEvenSquares(numbers) {
  let sumOfEvenSquares = 0;
  numbers.forEach(number => {
    const isEven = number % 2 === 0;
    if (isEven) {
      const square = number * number;
      sumOfEvenSquares = sumOfEvenSquares + square; // ** 2
    }
  });

  return sumOfEvenSquares;
}

module.exports = sumOfEvenSquares;

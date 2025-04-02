function diceGameSimulation(numSimulations) {
  const plays = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6 + 1);
    const dice2 = Math.floor(Math.random() * 6 + 1);
    const sum = dice1 + dice2;

    const sevenOrEleven = sum === 7 || sum === 11;
    const twoThreeOrTwelve = sum === 2 || sum === 3 || sum === 12;

    let result = "roll again"
    if (sevenOrEleven) result = "win";
    else if (twoThreeOrTwelve) result = "lose"

    plays.push({
      dice1,
      dice2,
      sum,
      result
    })
  }

  return plays;
}

module.exports = diceGameSimulation;

function findFirstNonRepeatingCharacter(str) {
  const charApparences = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charApparences[char]) charApparences[char] = 1;
    else charApparences[char] = charApparences[char] + 1;
  }

  for (let char in charApparences) {
    if (charApparences[char] === 1) return char;
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;

function areAllCharactersUnique(str) {
  if (!str) return true;

  const uniqueChars = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (uniqueChars.indexOf(char) > 0) return false;
    else uniqueChars.push(char);
  }

  return true;
}

module.exports = areAllCharactersUnique;

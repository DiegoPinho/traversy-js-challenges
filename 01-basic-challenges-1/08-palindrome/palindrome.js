function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "").replace(" ", "");

  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }

  return str === reverseStr;
}

module.exports = isPalindrome;

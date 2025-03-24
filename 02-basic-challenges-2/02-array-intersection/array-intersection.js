function arrayIntersection(arr1, arr2) {
  const commonValues = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        commonValues.push(arr1[i]);
        break;
      }
    }
  }

  return commonValues;
}

module.exports = arrayIntersection;

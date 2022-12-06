const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "Yes";
  }
  if (boolean === false) {
    return "No";
  }
  return "Not a Boolean";
};

module.exports = booleanToWord;

const checkFor = require("./checkFor");

function divide(number1, number2, callback) {
  try {
    checkFor.numericValuesOnly([number1, number2]);
    checkFor.noZeroValue(number2);
    const res = checkFor.floatNums(number1 / number2);
    callback(res);
  } catch (err) {
    callback(err);
  }
}

module.exports = divide;

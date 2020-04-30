const checkFor = require("./checkFor");

module.exports = function add(number1, number2, callback) {
  try {
    checkFor.numericValuesOnly([number1, number2]);
    const res = checkFor.floatNums(number1 + number2);
    callback(res);
  } catch (err) {
    callback(err);
  }
};

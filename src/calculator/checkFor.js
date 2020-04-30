
module.exports = {
  numericValuesOnly : (args) => {
    args.forEach( arg => {
      if(typeof arg !== 'number' || !Number.isFinite(arg)){
        throw new Error();
      }
    })      
  },
  noZeroValue: (num) => {
    if (num === 0) {
      throw new Error();
    }
  },
  floatNums : (num) => {
    return Number.isInteger(num) ? num : Number.parseFloat(num.toFixed(2));
  }
}
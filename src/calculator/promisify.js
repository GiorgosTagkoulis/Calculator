function promisify (fn) {
  return function() {
    return new Promise((resolve, reject) => {
      fn(...arguments, function(data) {
        if (data instanceof Error) {
          reject(data);
        }
        resolve(data);
      })
    })
  };
}

module.exports = promisify;

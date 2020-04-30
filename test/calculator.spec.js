const assert = require("assert");
const calculator = require("../src/calculator");
const promisify = calculator.promisify;

describe("The callback calculator", () => {
  describe("The add function", () => {
    it("1 + 2 should be 3", done => {
      calculator.add(1, 2, result => {
        assert.strictEqual(result, 3);
        done();
      });
    });

    it("non-numeral input should cause an Error", done => {
      calculator.add("gris", "hej", result => {
        assert.ok(result instanceof Error);
        done();
      });
    });
  });

  describe("The subtract function", () => {
    it("5 - 3 should be 2", done => {
      calculator.subtract(5, 3, result => {
        assert.strictEqual(result, 2);
        done();
      });
    });

    it("non-numeral input should cause an Error", done => {
      calculator.subtract("gris", "hej", result => {
        assert.ok(result instanceof Error);
        done();
      });
    });
  });

  describe("The multiply function", () => {
    it("3 * 5 should be 15", done => {
      calculator.multiply(3, 5, result => {
        assert.strictEqual(result, 15);
        done();
      });
    });

    it("non-numeral input should cause an Error", done => {
      calculator.multiply("gris", "hej", result => {
        assert.ok(result instanceof Error);
        done();
      });
    });
  });

  describe("The divide function", () => {
    it("10 / 2 should be 5", done => {
      calculator.divide(10, 2, result => {
        assert.strictEqual(result, 5);
        done();
      });
    });

    it("division by zero should cause an Error", done => {
      calculator.divide(10, 0, result => {
        assert.ok(result instanceof Error);
        done();
      });
    });

    it("non-numeral input should cause an Error", done => {
      calculator.divide("gris", "hej", result => {
        assert.ok(result instanceof Error);
        done();
      });
    });
  });
});

describe("The promisify calculator", () => {
  describe("The addPromise function", () => {
    it("2 + 3 should be 5", async () => {
      const addPromise = promisify(calculator.add);
      const result = await addPromise(2, 3);
      assert.strictEqual(result, 5);
    });

    it("non-numeral input should cause an Error", async () => {
      const addPromise = promisify(calculator.add);
      await assert.rejects(addPromise("gris", "hej"));
    });
  });

  describe("The substractPromise function", () => {
    it("7 - 5 should be 2", async () => {
      const subtractPromise = promisify(calculator.subtract);
      return subtractPromise(7, 5).then(result =>
        assert.strictEqual(result, 2)
      );
    });

    it("non-numeral input should cause an Error", async () => {
      const subtractPromise = promisify(calculator.subtract);
      await assert.rejects(subtractPromise("gris", "hej"));
    });
  });

  describe("The multiplyPromise function", () => {
    it("2 * 5 should be 10", async () => {
      const multiplyPromise = promisify(calculator.multiply);
      const result = await multiplyPromise(2, 5);
      assert.strictEqual(result, 10);
    });

    it("non-numeral input should cause an Error", async () => {
      const multiplyPromise = promisify(calculator.multiply);
      await assert.rejects(multiplyPromise("gurka", "tomat"));
    });
  });

  describe("The dividePromise function", () => {
    it("12 / 6 should be 2", async () => {
      const dividePromise = promisify(calculator.divide);
      const result = await dividePromise(12, 6);
      assert.strictEqual(result, 2);
    });

    it("division by zero should cause an error", async () => {
      const dividePromise = promisify(calculator.divide);
      await assert.rejects(dividePromise(12, 0));
    });

    it("non-numeral input should cause an Error", async () => {
      const dividePromise = promisify(calculator.divide);
      await assert.rejects(dividePromise("gris", "hej"));
    });
  });
});

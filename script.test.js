import strictEquals from "./script";

describe("Given the strictEquals function", () => {
  describe("When it is called and receives 1 and 1", () => {
    test("Then it should return true", () => {
      const value1 = 1;
      const value2 = 1;
      const expectedResult = true;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives NaN and NaN", () => {
    test("Then it should return false", () => {
      const value1 = NaN;
      const value2 = NaN;
      const expectedResult = false;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives 0 and -0", () => {
    test("Then it should return true", () => {
      const value1 = 0;
      const value2 = -0;
      const expectedResult = true;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives -0 and 0", () => {
    test("Then it should return true", () => {
      const value1 = -0;
      const value2 = 0;
      const expectedResult = true;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives 1 and '1'", () => {
    test("Then it should return false", () => {
      const value1 = 1;
      const value2 = "1";
      const expectedResult = false;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives true and false", () => {
    test("Then it should return false", () => {
      const value1 = true;
      const value2 = false;
      const expectedResult = false;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives false and false", () => {
    test("Then it should return false", () => {
      const value1 = false;
      const value2 = false;
      const expectedResult = true;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it is called and receives 'Water' and 'oil'", () => {
    test("Then it should return false", () => {
      const value1 = "Water";
      const value2 = "oil";
      const expectedResult = false;

      const result = strictEquals(value1, value2);

      expect(result).toBe(expectedResult);
    });
  });
});

// describe("When it is called and receives NaN and NaN", () => {
//   test("Then it should return true", () => {
//     const value1 = 1;
//     const value2 = 1;
//     const expectedResult = true;
//     const result = strictEquals(value1, value2);
//     expected(result).toBe(expectedResult);
//   });
// });

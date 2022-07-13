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

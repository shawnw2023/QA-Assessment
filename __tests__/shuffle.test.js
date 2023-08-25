const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("should return an array", () => {
    let inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(Array.isArray(shuffledArray)).toBe(true);
  });
  test("should return an array of the same length as the input array", () => {
    let inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(shuffledArray.length).toBe(inputArray.length);
  });
});

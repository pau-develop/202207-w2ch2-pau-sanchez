const strictEquals = function (value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) return false;
  else if (
    (1 / value1).toString().includes("-") ||
    (1 / value2).toString().includes("-")
  )
    return true;
  else return Object.is(value1, value2);
};
const valuesToCompare = [
  [1, 1],
  [NaN, NaN],
  [0, -0],
  [-0, 0],
  [1, "1"],
  [true, false],
  [false, false],
  ["Water", "oil"],
];
for (let i = 0; i < 1; i++)
  console.log(strictEquals(valuesToCompare[i][0], valuesToCompare[i][1]));

export default strictEquals;

const strictEquals = function (a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return false;
  else if ((1 / a).toString().includes("-") || (1 / b).toString().includes("-"))
    return true;
  else return Object.is(a, b);
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
for (let i = 0; i < valuesToCompare.length; i++)
  console.log(strictEquals(valuesToCompare[i][0], valuesToCompare[i][1]));

export default strictEquals;

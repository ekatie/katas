const repeatNumbers = function (data) {
  let output = "";
  // x = value to repeat, y = number of times
  for (let valueOne of data) {
    let value = valueOne[0];
    let repeatCount = valueOne[1];

    if (output !== '') {
      output += ', ';
    }

    output += value.toString().repeat(repeatCount);
  }
  return output
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
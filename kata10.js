const multiplicationTable = function (maxValue) {
  let multiTable = "";

  for (let r = 1; r <= maxValue; r++) {
    for (let c = 1; c <= maxValue; c++) {
      multiTable += r * c + " ";
    }
    multiTable += "\n";
  };
  return multiTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));



const sumLargestNumbers = function (data) {
  let largestNum = -Infinity;
  let secondLargestNum = -Infinity;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = data[i];
    } else if (data[i] !== largestNum && data[i] > secondLargestNum) {
      secondLargestNum = data[i];
    }
  }
  return largestNum + secondLargestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
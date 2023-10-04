const cashDenominations = {
  twentyDollars: 2000,
  tenDollars: 1000,
  fiveDollars: 500,
  twoDollars: 200,
  oneDollar: 100,
  quarter: 25,
  dime: 10,
  nickle: 5,
  penny: 1
};

const calculateChange = function (total, cash) {
  let changeNeeded = cash - total;
  const changeInDenominations = {};

  for (let cash in cashDenominations) {
    if (changeNeeded < cashDenominations[cash]) {
      continue;
    } else {
      changeInDenominations[cash] = 0;
      while (changeNeeded >= cashDenominations[cash]) {
        changeInDenominations[cash] += 1;
        changeNeeded -= cashDenominations[cash];
      }
    }
  }
  return changeInDenominations;
};

// tests
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
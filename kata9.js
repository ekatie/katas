const camelCase = function (input) {
  let output = "";

  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i] !== " ") {
      output += input[i];
    } else if (input[i] === " ") {
      output += "" + input[i + 1].toUpperCase();
      i++;
    }
  };
  return output
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
let vowels = ["a", "e", "i", "o", "u"];

const numberOfVowels = function (data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
      if (data[i] == vowels[v]) {
        count += 1
      }
    }
  }
  return count
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
const instructorWithLongestName = function (instructors) {
  let numOfLetters = 0;
  let longestName = "";

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > numOfLetters) {
      numOfLetters = instructors[i].name.length;
      longestName = instructors[i];
    }
  }
  return longestName
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
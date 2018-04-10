/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  let line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

function buildTriangle(num) {
  let triangle = "";
  for (var i = 0; i < num; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

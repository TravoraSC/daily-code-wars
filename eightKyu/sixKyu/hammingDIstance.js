// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples (in JavaScript):

// hamming("I like turtles","I like turkeys")  //returns 3
// hamming("Hello World","Hello World")  //returns 0
// You can assume that the two input strings are of equal length.

function hamming(a, b) {
  let hamDis = 0
  a = Array.from(a)
  b = Array.from(b)

  if (a.length !== b.length) {
      throw 'Unequal strings'
  }
      for (i = 0; i < b.length; i++){
          a[i] === b[i] ? null : hamDis++
      }

  return hamDis
}
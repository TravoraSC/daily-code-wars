// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Return the output array, and ignore all non-op characters
function parse( data )
{
  let val = 0;
  let valArr = []
  for(let i = 0; i < data.length; i++){
    data[i] === 'i' ? val++ :
    data[i] === 'd' ? val-- :
    data[i] === 's' ? val = val**2 :
    data[i] === 'o' ? valArr.push(val) : null
   }
  return valArr
}

//my solutio didn't work originaly because for my 3rd condition('d') I said val*val rather than val = val*val. 
//I forgot that while ++ and -- both perform the expression and update the value automatically, the operators 
//alone do not. 
//ex. let val = 0; val++ makes val = 1; val + 1 returns 1, val still equals 0
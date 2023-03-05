// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
  if(str.length % 2 !== 0) str += '_'
  const answerArr = []
  const splStr = str.split('')
  for(let i = 0; i < splStr.length; i += 2){
    answerArr.push(`${splStr[i]}${splStr[i+1]}`)
  }
  return answerArr
}
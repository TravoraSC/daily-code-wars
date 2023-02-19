// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (x) => {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let counter = 0
  const scoreList = {}
  const splitStr = x.split('')
  const splitWordStr = x.split(' ')
  let highestScoreKey = 0
  let highestScoreVal = 0
  let highestScoreWord = ''
  
  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i] === ' ') {
      counter++
    }else{
      const score = alphabet.indexOf(splitStr[i]) + 1
      !scoreList[counter] ? scoreList[counter] = score : scoreList[counter] += score
    }
  }
  
  for(let i = 0; i < splitWordStr.length; i++){
    if (scoreList[i] > highestScoreVal){
       highestScoreKey = i 
       highestScoreVal = scoreList[i]  
       highestScoreWord = splitWordStr[highestScoreKey]
    }
  }
  return highestScoreWord
}
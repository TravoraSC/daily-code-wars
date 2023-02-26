// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
  let splS = s.split(' ')
  let realS = [] 
   splS.forEach(el => {
     realS[realS.length - 1] !== el ? realS.push(el) : null
   })
  return realS.join(' ')
 }




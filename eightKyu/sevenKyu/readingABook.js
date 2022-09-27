// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// Task
// John reading a book, When he met a word that he had never read, he will read the word spelling, each letter(not for punctuation,number, only letter) takes 1 second; If he have read the word, he will read the word, each word takes 1 second.

// Give you a parameter words(Each word is separated by space)

// Return a number that how many seconds John can finish reading.

// Example:
// sc("Hello World!")=10  
// John read all the word spelling.

// sc("black cat and white cat all are cat")=24 
// John read the 2nd 'cat' and 3rd 'cat' used 2 seconds.

// sc("black Cat and white cat all are cat")=24 
// 'Cat' and 'cat' are same words,your code should ignore the case

// words1="Related Articles: Ruby Environment, CoffeeScript Environment, JavaScript Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."
// sc(words1)=86

// words2="Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment."
// sc(words2)=78 
// CoffeeScript is one word, Coffee Script are two words


//First Solution
const sc = words => {
  let counter = 0
  let wordArr = []
  let stringArr = words.toLowerCase().split(' ').map(el => el.split('').filter(el => el.match(/^[A-Za-z]+$/)).join(''))
  stringArr.forEach(el => wordArr.includes(el) ? counter++ : wordArr.push(el))
  return counter += wordArr.join('').length
}

//Second Solution
function sc(words){
  let readCount = 0
  const wordsSet = new Set(words.toLowerCase().split(' ').map(el => el.split('').filter(el => el.match(/^[a-z]+$/)).join('')))
  wordsSet.forEach(el => readCount += el.length)
  readCount += words.split(' ').length - wordsSet.size
  return readCount
}
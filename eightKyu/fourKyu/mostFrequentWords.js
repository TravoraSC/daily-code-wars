function topThreeWords(text) {
  let wordCount = {}
  let counter = 0
  let stringLowerCase = text.split(' ').map(el => el.toLowerCase())
  let stringNoSpecialChar = stringLowerCase.map(el =>el.match(/([a-z]|['])+/g ))
  //learned this little bit of regex - had to put the apostrophe in - can escape apos. with backslash as well
 //need a line doing .join('') if el.length 
  const flatStrArr = [].concat(...stringNoSpecialChar).filter(el => el !== "'" && el !== null)
 //apostrophes unconnected to words weren't being targeted by regex, so I filtered them out
  
 //NO LONGER NEEDED - had to figure out how to flatten the array so that my Set would work - it was returning every letter
 //let stringSet = new Set(flatStrArr)
  flatStrArr.forEach( el => {
     if(!wordCount[el]) {
       wordCount[el]= 1
     }else{
       wordCount[el]++
     }
   })
   let sorted = Object.entries(wordCount).sort((a, b) => b[1] - a[1]).map(el => el[0]).slice(0, 3)
    console.log(wordCount)
   return sorted
 }
// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  let missingNum;
  for(i = 0 ; i <= 100 ; i++) {
    nums.includes(i) ? true : missingNum = i
  }
  return missingNum
}

//Also

// function missingNo(nums) {
//   for(i = 0 ; i <= 100 ; i++) {
//     if(nums.includes(i)) {
//       //you can leave the code block blank
//     }else{
//       return i
//     }
//   }
// }
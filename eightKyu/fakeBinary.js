// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  let arrayString =x.split('')
  for(let i = 0; i<arrayString.length;i++){
    if(arrayString[i] <5){
       arrayString[i] = 0
    }else{
       arrayString[i] = 1
    }
  }
  return arrayString.join('')
}
// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9 
// 4 5 6 
// 1 2 3  
//   0 

// Cell phone keypad's layout:
// 1 2 3
// 4 5 6
// 7 8 9
//   0

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

function computerToPhone(numbers){
  const cpuStrArr = numbers.split('')
  let cpuToCell = ''
  cpuStrArr.forEach(el => {
    el === '7' ? cpuToCell += '1' :
    el === '8' ? cpuToCell += '2' :
    el === '9' ? cpuToCell += '3' :
    el === '4' ? cpuToCell += '4' :
    el === '5' ? cpuToCell += '5' :
    el === '6' ? cpuToCell += '6' :
    el === '1' ? cpuToCell += '7' :
    el === '2' ? cpuToCell += '8' :
    el === '3' ? cpuToCell += '9' :
    el === '0' ? cpuToCell += '0' : null
  })
  return cpuToCell
}
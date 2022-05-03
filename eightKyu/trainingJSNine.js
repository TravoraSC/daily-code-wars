

function padIt(str, n){
  let x = 0
  let y = 0
  while (x < Math.ceil(n/2)) {
    x++
    str = '*' + str   
  }
  while (y < Math.floor(n/2)) {
        y++
        str = str + '*'  
  }
  return str
}

//remember to read error messages
//remember that when reassigning a variable, you can't return before you are done 
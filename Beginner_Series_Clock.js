// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  let hours = h * 3600000
  let minutes = m * 60000
  let seconds = s * 1000
  let result = seconds + minutes + hours
  return result
}

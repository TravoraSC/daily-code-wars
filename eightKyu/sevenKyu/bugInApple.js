// Task:
// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]


function sc(apple){
  let pesticides = []
  for (arr of apple) {
   arr.includes('B') ? pesticides.push(apple.indexOf(arr), arr.indexOf('B')) : null
  }
  
  return pesticides
}
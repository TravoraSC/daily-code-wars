// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  let newUrl = ''
  for(let i = 0; i  <= url.length - 1; i++) {
    if (url[i] === "#"){
      break
    }else{
      newUrl += url[i]
    }
  }
  return newUrl
}
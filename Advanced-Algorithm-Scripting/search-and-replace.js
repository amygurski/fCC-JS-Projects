//SEARCH AND REPLACE
//Perform a search and replace on the sentence
//str is the sentence to search and replace
//before is the word to replace
//after is what replacing before with
//Note need to preserve case of the 1st character in the original word. eg. if replacing Book with dog it should be Dog.

function myReplace(str, before, after) {

  //make after uppercase if before is uppercase
  if (/[A-Z]/.test(str[str.indexOf(before)])) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

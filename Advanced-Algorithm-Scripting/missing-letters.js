//Missing letters
//Find the missing letter range a return it

function fearNotLetter(str) {
  for (let i = 1; i<str.length; i++) {
    if ((str.charCodeAt(i) - str.charCodeAt(i-1)) > 1) {
      return String.fromCharCode(str.charCodeAt(i-1) + 1);
    } 
  }
}

fearNotLetter("abce");

//How my solution works:
//charCodeAt gets the ASCII position
// Loops starting from the 2nd position to the end
// If there is a gap in charcode of more than 1, we know that that's the missing letter and return it as string. 
// If nothing qualifies for if statement then function automatically returns undefined
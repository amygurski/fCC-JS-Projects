//Project 3: Caesars Cipher
//ROT13 cipher 'A' <-> 'N', 'B' <-> 'O', etc
//All letters will be uppercase. 
//Pass on any non-alphabetic characters (spaces, punctuation)

function rot13(str) { // LBH QVQ VG!  
  var n = 0;
  var result = "";
  
  for (let i = 0; i< str.length; i++) {
    n = str.charCodeAt(i); //convert to ASCII

    //shift A-Z, in ASCII those are at positions 65-90
    //Because 26 letters in alphabet, it inverses, so can add 13 up to halfway point and subtract above!
    if (n >= 65 && n <= 90) {
      if (n < 78) {
        n +=13;
      }
      else {
        n -=13;
      }
    }

    result += String.fromCharCode(n); //convert back to English and add to result
    
  }

  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

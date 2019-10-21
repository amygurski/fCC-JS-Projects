function palindrome(str) {

//JAVASCRIPT ALGORITHMS AND DATA STRUCTURES PROJECTS
//PALINDROME CHECKER
//Return true if string is palindome, otherwise false. 
//Ignore punctuation, case, and spacing

//Remove all non-alphanumeric characters
//Had to add _ because \W includes it
//convert to lowercase 
  str = str.replace(/[\W_]/g, "").toLowerCase();

//Loop through half of string and compare front to back
  for (var i = 0, length = str.length - 1; i < length / 2; i++) {
    if (str[i] !== str[length - i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  //Convert to all lowercase array
  var arr = str.toLowerCase().split(" "); 

  //Use map() method to create a new result array with the results of calling the upperCaseWords function to make the 1st character uppercase for each array element.
  var result = arr.map(upperCaseWords);
  return result.join(" "); //return string
}

function upperCaseWords(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase()); 
}

titleCase("I'm a little tea pot");
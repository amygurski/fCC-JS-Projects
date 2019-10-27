//Reverse the provided string
function reverseString(str) {
  
  let arr = str.split(''); //split string into array (each containing 1 char) eg. "h", "e", "l", "l", "o"
  let reversed = ""; //to store result

  //loop though arr from back to front adding to result
  for (let i=arr.length-1; i>=0; i--) {
    reversed += arr[i];
  }
  return reversed;
}

reverseString("hello");

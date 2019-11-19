//BINARY AGENTS
//Return an English translated sentence of the passed binary string.
//The string will be space separated.

function binaryAgent(str) {
  return str.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//Returns "Aren't bonfires fun!?"

//Explanation:
//1. Split string into array by spaces. 
//2. For each array value (eg. 01000001), use map to create a new array with the results of calling the arrow function for each array element
//3. The function turns each binary value it into a base 2 integer then converts it to a string using it's character code
//4. Return string so join array back together into string
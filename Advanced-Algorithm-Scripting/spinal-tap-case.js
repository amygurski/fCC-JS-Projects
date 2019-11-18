//Spinal Tap Case
//Convert a string to spinal case
//all-lowercase-words-joined-by-dashes

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  //to handle case of thisIsSpinalTap or AllThe-small Things
  //capture lowercase followed by uppercase and add space
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  //replace spaces and _ with - and convert to lowercase
  return str.toLowerCase().replace(/\s+|_+/g,"-");
}

spinalCase('This Is Spinal Tap');

//My solution above. 
//Another solution on fcc that like better:
//return str
//    .split(/\s|_|(?=[A-Z])/)
//    .join("-")
//    .toLowerCase();
//splits into array if space, underscore, or followed by an uppercase (positive lookahead)
//then re-joins with - and changes to lowercase
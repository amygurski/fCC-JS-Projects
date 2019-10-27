//Return the length of the longest word in the provided sentence
function findLongestWordLength(str) {
  let arr = str.split(' '); //split each word into array
  let longest = 0;
  //loop through array and find longest word
  for (let i=0; i < arr.length; i++) {
      if (arr[i].length > longest) {
        longest = arr[i].length;
      }
    }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

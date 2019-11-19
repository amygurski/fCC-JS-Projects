//SMALLEST COMMON MULTIPLE
//Smallest common multiple of provided parameters that can be evenly divided by both and by all sequential numbers in the range between them.
//For example, if given 1 and 3, the answer is 6.
//Given 5 and 1 return 60

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  //Start with result = max (smallest possible common multiple) and decrement through array 
  let result = max;
  for (let i = max; i >= min; i--) {
    //if not divisible, jump to next increment of the array max and restart for loop
    if (result % i) {
      result += max; 
      i = max; //Need to set i back to max because may not be not finished with loop
    }
  }
  //will exit loop when everything is divisible by result
  return result;
}


smallestCommons([1,5]);

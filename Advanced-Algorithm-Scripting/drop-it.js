//DROP IT
//Given array arr, iterate through and remove each element starting from the 1st element until func returns true.
//Then return the rest of the array once satisfied. Otherwise, arr should be empty.

function dropElements(arr, func) {
  
  //Need it to not change for loop length as arr gets smaller for test case [1,2,3,4], function(n) {return n > 5;}) which should return []
  var originalLength = arr.length;

  // Keep shifting off elements from front until func(n) is true
  //n is just arr[0]
  for(let i = 0; i<originalLength; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
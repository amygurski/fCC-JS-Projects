//Given 2 arrays and an index
//Copy each element of 1st array into 2nd array in order
//Begin inserting at index n of 2nd array
// The input arrays should remain unchanged

function frankenSplice(arr1, arr2, n) {
  var arr3 = arr2.slice(); //copy original arr2 so don't change it
  arr3.splice(n,0,...arr1); //spread to do whole arr1 without loop
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

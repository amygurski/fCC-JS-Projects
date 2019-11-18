//Diff Two Arrays
//Compare 2 arrays and return a new array with any items only found in 1 of the 2 arrays but not both. 

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(arrItem => !arr1.includes(arrItem) || !arr2.includes(arrItem));;

}
//My solution combines the 2 arrays
//The filter() method has an arrow callback function which only returns items not in both arr1 and arr2 by using includes() method to check
//Arrow function can omit return statement and curly brackets because it's only 1 statement

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

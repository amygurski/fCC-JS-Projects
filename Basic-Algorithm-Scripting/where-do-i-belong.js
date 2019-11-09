//Return lowest index at which a value should be inserted into a sorted array.

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b); //add compare function to properly sort
  
  for (let i=0; i<arr.length; i++)
  {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

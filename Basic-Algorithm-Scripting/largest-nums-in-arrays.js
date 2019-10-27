//Return an array consisting of the largest number from each provided sub-array. Each array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let result = [];
  for (let x=0; x<4; x++) {
    let largest = arr[x][0]; //set to 1st position of subarray for each loop
    for (let y=0; y<4; y++) {
         if (arr[x][y] > largest) {
            largest = arr[x][y]; //find largest and store
         }
    }
    result[x] = largest; //store largest in subarray in new result array
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

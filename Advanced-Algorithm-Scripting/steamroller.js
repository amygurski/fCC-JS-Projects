//Steamroller
//Flatten a nested array regarless of levels of nesting

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [].concat(...arr);
  return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;

}
//Got to use a ternary operator :). 
// The some method tests whether at least one element in the array passes the test
//The test is if finds out if the array still contains an array
// If so, do it again until it's not then return newArr

steamrollArray([1, [2], [3, [[4]]]]);

//Note: In looking at other solutions, apparently there is a flat method and can pass infinity for the depth:
//return arr.flat(Infinity);
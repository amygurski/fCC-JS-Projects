//White a function that splits an array (first argument) into groups the lenght of size (second argument) and returns them as a 2-dimensional array

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (let i = 0; i<arr.length; i+=size) {
    result.push(arr.slice(i,(i+size)));
  }

  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

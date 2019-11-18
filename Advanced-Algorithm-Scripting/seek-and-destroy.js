//Seek and destroy
//Provided initial array (1st argument) followed by 1 or more arguments
//Remove all elements from initial array of same value as these arguments

function destroyer(arr) {
  // Separate arguments for filtering from array
  var args = Array.from(arguments).slice(1);

  //Removes args from array using filter
  return arr.filter(function(val){return !args.includes(val)});

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

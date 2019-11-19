//Everything Be True
//Check if the 2nd argume is truthy on all elements of a collection
//pre is an object property. Return true if it's value is truthy. Otherwise, false.

function truthCheck(collection, pre) {
//loop through object and if property not found return false, otherwise true
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//
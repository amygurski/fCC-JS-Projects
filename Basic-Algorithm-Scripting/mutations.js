//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//Ignore case

function mutation(arr) {
  //loops through the chars in the 2nd array and if any of them is not found (using indexOf to check) then returns false
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1)     {
          return false;
    } 
  }
  return true;
}

mutation(["hello", "hey"]);

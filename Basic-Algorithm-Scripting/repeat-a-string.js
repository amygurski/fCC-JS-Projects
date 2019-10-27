//Repeat a string for n times
//Return empty string if num not positive

function repeatStringNumTimes(str, num) {
  let newStr = "";

  while (num >= 1) {
    newStr += str;
    num--;
  }

  return newStr;
}

repeatStringNumTimes("abc", 3);

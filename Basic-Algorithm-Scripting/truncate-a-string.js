//Truncate a string if it is longer than the given max string length. Return truncated string with ... ending.

function truncateString(str, num) {
  //Just return string if not truncating
  if (str.length <= num) {
    return str;
  }

  //otherwise, truncate past num and add ...
  return str.slice(0,num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

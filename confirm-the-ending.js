//Check if a string ends with the given target string
// confirmEnding("Congratulation", "on") = true
// confirmEnding("Open sesame", "pen") = false

//slice function copies string, want to do if from the length of the string minus the length of the target. Only need this start position.
//if evaluates as true then they match, otherwise false.

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//Telephone Number Validator
//Return true if the passed string looks like a valid US phone number

function telephoneCheck(str) {

  //Either 10 digits from start to end or some other stuff ending in 4 digits. I feel like this could be optimized in the middle, it's a bit repetitive, but it works.
 var validNumber = /^\d{10}$|((^\(\d{3}\)\d{3}\-)|(^\d{3}\-\d{3}\-)|(^1\d{3}\d{3})|(^1\s\d{3}\s\d{3}\s)|(^1\(\d{3}\)\d{3}\-)|(^1\s\d{3}\-\d{3}\-)|(^1\s\(\d{3}\)\s\d{3}\-)\d{4}$)/;
  return validNumber.test(str);
}

telephoneCheck("555-555-5555");

//Here is a solution from the help, checked after, clearly needed to make use of '?' to get cleaner solution!!!
//var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//(1\s?)? allows for “1” or "1 " if there is one.
//(\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
//[\s\-]? checks for spaces or dashes between the groups of digits.
//Use the beginning ^ and end of the string $ to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).

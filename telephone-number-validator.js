//Telephone Number Validator
//Return true if the passed string looks like a valid US phone number

function telephoneCheck(str) {

  //Either 10 digits from start to end or some other stuff ending in 4 digits. I feel like this could be optimized in the middle, it's a bit repetitive, but it works.
 var validNumber = /^\d{10}$|((^\(\d{3}\)\d{3}\-)|(^\d{3}\-\d{3}\-)|(^1\d{3}\d{3})|(^1\s\d{3}\s\d{3}\s)|(^1\(\d{3}\)\d{3}\-)|(^1\s\d{3}\-\d{3}\-)|(^1\s\(\d{3}\)\s\d{3}\-)\d{4}$)/;
  return validNumber.test(str);
}

telephoneCheck("555-555-5555");

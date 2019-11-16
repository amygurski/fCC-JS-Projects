//Sum all Numbers in a Range
//Input array of 2 numbers
//Return sum of those 2 numbers plus the sum of all numbers between them
//Eg sumAll([4,1]) should return 10

function sumAll(arr) {
  var sum = 0;

  for (let i = Math.min(...arr); i<=Math.max(...arr); i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);

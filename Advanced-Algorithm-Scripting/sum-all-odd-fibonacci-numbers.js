//SUM ALL ODD FIBONACCI NUMBERS
//Given a positive integer num, return the sum of all odd Fibonacci numbers less than or equal to num.
//Eg. sumFibs(10) should return 10 because all odd Fibonacci numberss less than or equal to 10 are 1,1,3,5

function sumFibs(num) {
  var currentInt = 1;
  var previousInt = 0;
  var sum = 0;

  while (currentInt <= num){
    //sum if odd, so remainder not 0
    if (currentInt % 2 != 0) {
      sum += currentInt;
    }

    //Fibonacci sequence is current number plus previous number
    currentInt += previousInt;

    //Get new "previous number" in sequence 
    previousInt = currentInt - previousInt;
  }

  return sum;
}

sumFibs(4);

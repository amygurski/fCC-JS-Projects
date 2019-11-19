/SUM ALL PRIMES
//Sum all the prime numbers up to and including the provided number
// A prime number is defined as number greater than 1 and having only 2 divisors, one and itself.
//2 is a prime number - divisible by one and two
//Eg. num = 10 should return 17 (7+5+3+2)

function sumPrimes(num) {
  var sum = 0;
  for (let i = 2; i<=num; i++) {
    if(isPrime(i)) {
      sum += i; //sum if prime
    }
  }
  return sum;
}

//Test if prime 
// return true if x is divisible by any number other than itself
function isPrime(x) {
  for (let i = 2; i <= x; i++) {
      if (x % i === 0 && x != i) {
        return false;
      }
    }
     return true;
}

sumPrimes(10);
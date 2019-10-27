//Return the factorial (num!) of the provided integer
//Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
  let factorial = 1;
  for (let i=1; i<=num; i++) {
    factorial *= i;
    console.log(factorial);
  }
  return factorial;
}

factorialize(5);

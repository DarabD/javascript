// Calculate the factorial of a number using a do-while loop.

function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers.";
    }
  
    let result = 1;
    let i = 1;
  
    do {
      result *= i;
      i++;
    } while (i <= number);
  
    return result;
  }
  

  let factorialOf = 5;
  let result = calculateFactorial(factorialOf);
  
  console.log(`The factorial of ${factorialOf} is: ${result}`);
  
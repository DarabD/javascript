//Check if a number is even or odd and return a corresponding message.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return `${number} is even.`;
    } else {
      return `${number} is odd.`;
    }
  }
  

  let testNumber = 7;
  let result = checkEvenOrOdd(testNumber);
  
  console.log(result);
  
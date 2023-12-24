// Find the sum of all positive numbers in an array.

function sumOfPositiveNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        sum += numbers[i];
      }
    }
  
    return sum;
  }
  

  let numberArray = [3, -7, 2, 8, -4, 10];
  let result = sumOfPositiveNumbers(numberArray);
  
  console.log('Sum of positive numbers:', result);
  
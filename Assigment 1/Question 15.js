// Determine if a year is a leap year or not.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true; 
    } else {
      return false; 
    }
  }
  

  let testYear = 2024;
  let result = isLeapYear(testYear);
  
  console.log(`${testYear} is ${result ? 'a leap year.' : 'not a leap year.'}`);
  
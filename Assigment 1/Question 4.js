// Check if a string is a palindrome.

function isPalindrome(str) {
  
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
  }
  
 
  let testString = 'Darab';
  let result = isPalindrome(testString);
  
  console.log(result ? 'It is a palindrome.' : 'It is not a palindrome.');
  
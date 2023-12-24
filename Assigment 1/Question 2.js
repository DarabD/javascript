// Count the number of vowels in a given string.


function countVowels(inputString) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  
  let testString = 'Hello World';
  let numberOfVowels = countVowels(testString);
  console.log('Number of vowels:', numberOfVowels);
  
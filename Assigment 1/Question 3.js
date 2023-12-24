// Convert the first letter of each word in a sentence to uppercase.

function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    let capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    return capitalizedWords.join(' ');
  }
  
  
  let inputSentence = 'my name is muhammad darab.';
  let capitalizedSentence = capitalizeWords(inputSentence);
  console.log(capitalizedSentence);
  
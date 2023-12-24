// Sort the array in ascending and descending without built-in methods.


function removeDuplicates(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let currentElement = arr[i];
      let isDuplicate = false;
  
      for (let j = 0; j < uniqueArray.length; j++) {
        if (currentElement === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  

  let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];
  let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
  console.log('Array with duplicates:', arrayWithDuplicates);
  console.log('Array without duplicates:', arrayWithoutDuplicates);
  
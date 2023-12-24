//Remove all duplicates from an array without built-in methods.

function removeDuplicates(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  

  let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];
  let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
  console.log('Array with duplicates:', arrayWithDuplicates);
  console.log('Array without duplicates:', arrayWithoutDuplicates);
  
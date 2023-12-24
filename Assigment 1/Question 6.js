// You can find the index of the first occurrence of a specific element in an array

function indexOfElement(arr, element) {
    return arr.indexOf(element);
  }
  
  
  let myArray = [10, 20, 30, 40, 50];
  let elementToFind = 30;
  let index = indexOfElement(myArray, elementToFind);
  
  if (index !== -1) {
    console.log(`The element ${elementToFind} is found at index ${index}.`);
  } else {
    console.log(`The element ${elementToFind} is not found in the array.`);
  }
  
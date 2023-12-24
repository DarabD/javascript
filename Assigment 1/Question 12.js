//Loop through an array using a for-of loop and double each element.

let originalArray = [1, 2, 3, 4, 5];
let doubledArray = [];

for (let element of originalArray) {
  doubledArray.push(element * 2);
}

console.log('Original Array:', originalArray);
console.log('Doubled Array:', doubledArray);

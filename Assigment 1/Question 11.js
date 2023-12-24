// Iterate through the properties of an object using a for-in loop.



let myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(`${key}: ${myObject[key]}`);
    }
  }
  
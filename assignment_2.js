//1
function addNumber(num) {
    return function(value) {
      return value + num;
    };
  }
 // Example usage
const addFive = addNumber(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25
//2
function searchArray(arr, value) {
    if (arr.length === 0) {
      return false;
    } else if (arr[0] === value) {
      return true;
    } else {
      return searchArray(arr.slice(1), value);
    }
  }
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3)); // Output: true
  console.log(searchArray(arr, 6)); // Output: false

//6
function saveObject(key, obj) {
    const json = JSON.stringify(obj);
    localStorage.setItem(key, json);
  }
  
  // Example usage
  const myObj = {name: "John", age: 30};
  saveObject("myObj", myObj);

//7
function getObject(key) {
    const json = localStorage.getItem(key);
    return JSON.parse(json);
  }
  
  // Example usage
  const myObj1 = getObject("myObj");
  console.log(myObj); // Output: {name: "John", age: 30}
  
  //8
  function saveObjectProperties(obj) {
    for (const key in obj) {
      const value = obj[key];
      localStorage.setItem(key, JSON.stringify(value));
    }
    const newObj = {};
    for (const key in localStorage) {
      const value = JSON.parse(localStorage.getItem(key));
      newObj[key] = value;
    }
    return newObj;
  }
  
  // Example usage
  const myObj2 = {name: "John", age: 30};
  const newObject = saveObjectProperties(myObj);
  console.log(newObject); // Output: {name: "John", age: 30}
  

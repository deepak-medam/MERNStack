// Array creation
let students = ['Snickers', 'Oreo', 'Galaxy'];
console.log(students.length);

// Array attributes and slicing
let info = ['Shradha', 23, 89.9];
console.log(info.length);
console.log(info[0]);
console.log(info[0][0]);

// array methods
// push
let cars = ["auid", "bmw", "mercedes"];
cars.push("jaguar");
console.log(cars);

// pop
cars.pop();
console.log(cars);

// unshift
cars.unshift("jaguar", "tesla");
console.log(cars);

// shift
cars.shift("jaguar");
console.log(cars);

// includes
console.log(cars.includes("rollsroyce"));
console.log(cars.includes("tesla"));

// concat
let primary = ["red", "blue", "green"];
let secondary = ["yellow", "orange", "violet"];
let allColours = primary.concat(secondary);
console.log(allColours);

// reverse
console.log(allColours.reverse());

// slice
console.log(allColours.slice(2,3)); // ending index is exclusive, its not included.
console.log(allColours.slice(-2)); // negative indexing.

// splice
console.log(allColours.splice(4));
console.log(allColours);
console.log(allColours.splice(0, 1));
console.log(allColours);

// sort
let days = ["monday", "sunday", "wednesday", "tuesday"];
console.log(days.sort());

// copy array
let arr = [1];
let arrCpy = arr;

console.log(arr === arrCpy)
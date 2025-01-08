let arr = [1, 2, 3, 5, 7, 0, 9, 3, 1, -1, 5, 7, -9];

let minVal = Math.min(...arr);
// console.log(minVal);

let testStr = "I am a AI assistant";
let testStrArr = [...testStr];
// console.log(testStrArr);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let allNums = [...odd, ...even];
// console.log(allNums);

let data = {
  email: "ironman@gmail.com",
  password: "abcd",
};

let dataCopy = { ...data, id: 123 };
// console.log(dataCopy);

let arr1 = [1, 2, 3, 4, 5];
let obj1 = { ...arr1 };
console.log(obj1);

let str1 = "hello";
let obj2 = { ...str1 };

console.log(obj2);

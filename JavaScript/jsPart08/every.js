let allNums = [1,2,3,4];
let evenNums = [2, 4, 6, 8];

let res = allNums.every((el) => {
    return el%2 == 0;
});

console.log(res);

let evenRes = evenNums.every((el) => {
    return el%2 == 0;
});

console.log(evenRes);
// Check if all numbers in our array are multiples of 10 or not
let nums = [10, 20, 30, 40, 50];
let isTen = nums.every((el) => {
    return el % 10 == 0;
});

console.log(isTen);

// Creat a function to find the min number in an array

let minFind = [2, 0, 4, 7, 9, 2, 1, 4, 6, 11];
let minVal = minFind.reduce((res, el) =>{
    if (res < el){
        return res;
    } else{
        return el;
    }
})

console.log(minVal);
let nums =[2 ,3 ,4, 5, 3, 4, 7, 8, 1, 2];

let max = nums.reduce((res, el) =>{
    if(el > res){
        return el;
    } else{
        return res;
    }
})

console.log(max);
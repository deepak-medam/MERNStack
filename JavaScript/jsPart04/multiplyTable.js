let num = prompt("Write your number for multiplication table");
num = parseInt(num);
for(let i =1; i<= 10; i++){
    console.log(`${num} x ${i} = ${num*i}`)
}
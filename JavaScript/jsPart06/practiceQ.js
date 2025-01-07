// Q1: Write a function that print a poem.

function printPoem(){
    console.log(`The line-storm clouds fly tattered and swift, 
  The road is forlorn all day, 
Where a myriad snowy quartz stones lift, 
  And the hoof-prints vanish away. 
The roadside flowers, too wet for the bee,
  Expend their bloom in vain. 
Come over the hills and far with me, 
  And be my love in the rain. 

The birds have less to say for themselves 
  In the wood-world’s torn despair
Than now these numberless years the elves, 
  Although they are no less there: 
All song of the woods is crushed like some 
  Wild, easily shattered rose. 
Come, be my love in the wet woods; come,
  Where the boughs rain when it blows. `)
}

// printPoem();

// Q2: Creat a function to roll a dice and always display the value of the dice(1 to 6).
function rollDice(){
    let randNum = Math.floor(Math.random() * 6)+1;
    console.log(randNum);
}

// rollDice();

// Q3: Create a function that gives us the average of 3 numbers
function calcAverage(num1, num2, num3){
    let avg = (num1 + num2 + num3)/3;
    console.log(avg);
}

// calcAverage(12, 16, 9);

// Q4: Print a multiplication table
function printMultTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// printMultTable(13);

// Q5: Return sum of numbers 1 to N
function sum1ToN(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

// console.log(sum1ToN(1));

// Q6 Create a Function that return the concatination of all strings in an array.
function concatStr(arr){
    let length = arr.length;
    emptStr = "";
    for(let i =0; i < length; i++){
        emptStr+= arr[i];
    }
    return emptStr;
}

console.log(concatStr(["hello", "world"]))
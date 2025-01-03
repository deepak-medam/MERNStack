let msg = "help!";
console.log(msg.trim().toUpperCase())

let startArr = ['january', 'july', 'march', 'august'];
startArr.shift();
startArr.shift();
startArr.unshift("june");
startArr.unshift("july");
console.log(startArr);

let months = ['january', 'july', 'march', 'august'];
months.splice(0,2, "july", "june");

let languages = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
languages.reverse();
console.log(languages.indexOf('javascript'));

let ticTacToe = [["X", " ", "O"], [" ", "X", " "], ["O", " ", "X"]]
console.log(ticTacToe);
ticTacToe[0][1] = "X"
console.log(ticTacToe);
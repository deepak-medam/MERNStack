let pass = "    This is a spaced password in beg and in end    ";
console.log(pass.trim());

let name_ = "Apna College";
console.log(`This is name without any conversion: ${name_}`);
name_ = name_.toLowerCase();
console.log(`This is name with lower case conversion: ${name_}`);
name_ = name_.toUpperCase();
console.log(`This is name with upper case conversion: ${name_}`);

let str = "ILovecoding";
console.log(str.slice(5));
console.log(str.slice(1, 4));
console.log(str.slice(-1));

let msg = "I love coding";
console.log(`This is the original message ${msg}`);
msg = msg.replace("love", "do");
console.log(`This is the replaced message ${msg}`);

let repStr = "Mango";
console.log(`This is the repeated message ${repStr.repeat(3)}`);
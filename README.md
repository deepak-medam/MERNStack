# MERNStack

This is the Repository for the course Delta 3.0 which includes Full Stack Development

## Java Script

### P1

- REPL - Read Evaluate Print Loop

* A variable is simply the name of a storage location.
* Data types
  - Numbers
  - String
  - NaN
  - Boolean
* The NaN global property is a value representing Not-A-Number. The NaN is a number but the value it
  represents is not a number.

* Operator Precedence - (), \*_, _,/,%(all are same level, go from left to right) +,-(LtoR)
* We use **let** keyword to declare variable.
* value of constants can't be changed with re-assignment and they can't be redeclared.
  We declare constant using **const** keyword.
* **var** keyword is used to declare a variable, this is a old syntax of writing variables.
* Pre-increment: Change the variable value and then use.
* post-increment: use the variable value and then change.

* Identifier Rules

  - All javascript variables must be identified with unique names(identifier)
  - Names can contain letter, digits, underscores, and dollar signs.(no space)
  - Names must begin with a letter.
  - Names can also begin with $ and \_ .
  - Names are case sensitive(y and Y are different variables.)
  - Reserved words (like JavaScript keywords) CANNOT be used as names.

* camelCase (JS naming convention)
* snake_case
  \*PascalCase

* TypeScript is static typed, where JS is dynamic typed.
* Strings are text or sequece of characters. Strings can be written in double quotes are single quotes.
* index = position. JS is 0 based indexing programming language.

* Undefined: A variable that has not been assigned a value is of type undefined.
* null : The null value represents the intentional absence of any object value. To be explicitly assigned.

### P2

- you can use script tag to link js file
- Template literals are used to add embedded expressions in a string.

* Comparision operators compare two values.
* Nesting is writing if-else inside if-else statements. It can have many levels.

* Falsy values

  - false
  - 0
  - -0
  - On(BigInt values)
  - ""(empty string)
  - null
  - undefined
  - NaN

* Truthy values - Everything else.
* Alert displays an alert message on the page.
* You can use console.error() to display a error message and console.warn() to display a warning message.
* Prompt displays a dialog box that asks user or some input.

### P3

- Methods - actions that can be performed on objects.
- str.trim() - Trims whitespace from both ends of string & returns a new one. It doesn't remove whitespace in between the string.
- trim method() doesn't modify the existing string it creates a new string without whitespaces.
- Strings are immutable in JavaScript.
- .toUpperCase() - converts the string to all upper case letter string.
- .toLowerCase() - converts the string to all lower case letter string.

- Argument is some value that we pass to the method.
- indexOf() - returns the first index of occurence of some value in string. or gives -1 if not found.
- Method chaining - using one method after another. Order of execution will be left to right.
- slice() - returns a part of the original string as a new string.
- replace() - Searches a value in the string & returns a new string with the value replaced. If there are multiple words it only replaces first occurence not all occurences.
- repeat() - returns a string with the number of copies of string.

* Arrays - Linear collection of things.
* Arrays can be subset using [] brackets

####

    let students = ['Snickers', 'Oreo', 'Galaxy'];
    console.log(students.length);

    let info = ['Shradha', 23, 89.9];
    console.log(info.length);
    console.log(info[0]);
    console.log(info[0][0]);

####

- Arrays are mutable, unlike strings when an array is changed the same array is modified.

* Array Methods

  - push() - add to end
  - pop() - delete from end and returns it
  - unshift() - add to start
  - shift() - delete from start and returns it
  - indexOf() - returns index of something.
  - includes() - search for a value.
  - concat() - merge two arrays.
  - reverse() - reverse an array. reverse changes the original array.
  - slice() - Copies a portion of an array.
  - splice() - removes, replaces, add elements in place. splice(start, deleteCount, item0...itemN).Splice makes changes to original array. Its like one in all tool. Just with starting index it works like slice(). splice(0,1) with two arguments will delete one element with index starting at 0. splice(0, 1, "black", "grey") will delete one element with index 0 and add the strings from position 0.
  - sort() - sorts an array. NOTE: Sort method first convert the numbers to strings and sort them based on unicodes which results in discrepencies when sorting numbers.

* Whenever an array is created in javascript a reference variable is created. The reference variable knows the address of the element in array in memory.
* An array originally stores the memory address of the element which is why whenever you compare arrays the result would be false as the address of elements are different even those the data types and elements are same.

* constant arrays, In constant array you would be able to change, add, delete elements but you wont be able to change the address variable of the array.
* Nested array: Array of arrays or multi dimensional arrays.

### P4

- If ending condition is missing or logically wrong, you will run into infinite loop.

### p5

- Object literals are used to store keyed collection and complex entities.
- Objects are a collection of properties.

* There is a difference between Objects and object literals.
* JavaScript automatically converts object keys to strings.

* Objects of objects - Storing information of multiple students.

* Math object
  - Properties
    - Math.PI
    - Math.E
  - Methods
    - Math.abs(n) : Gives absolute value
    - Math.pow(a, b) : Calculate the exponenet of the num
    - Math.floor(n) : round of the number to the nearest smallest integer.
    - Math.ceil(n) : round of the number to the nearest largest integer.
    - Math.random() : gives random number between 0 and 1 but 1 is exclusive.

### P6

- function keyword is used to declare function.

####

    function hello(){
    console.log("hello");
    }

- Arguemnts are values that we pass to the function.

* return keyword is used to return some value from the function.

- whatever you write after return statement will not be executed.

* Scope determines the accessiblity of variables, objects, and functions from different parts of the code.
  - Function scope : Variables developed inside the function are not accessible/visible outside the function.
  - Block scope : variables decalred inside the {} block cannot be accessed outside the block.
  - Lexical scope : A variable defined outside a function can be accessible inside another function defined after the variable declaration. The opposite is NOT true.
  - global scope - can be access all over the file.

- Function expression is another way to write the function. We define the function but we store it inside a variable. These are also called nameless functions.

- Higher Order Functions: A function that does One or both
  - Takes one or multiple functions as arguments
  - returns a function.
- Factory function is a function that creates new functions.
- Methods are functions that can be performed on an object or the ones that are defined inside a object.

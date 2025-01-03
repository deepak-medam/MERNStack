/*
 * Functionality of the app
 * you should be able to list all todos 
 *  add a todo
 * delete a todo
 * quit the app
*/

const toDo = [];
userInput = prompt("What do you wanna do.?")
while(userInput != "quit"){

    // View all tasks
    if(userInput == "view"){
        console.log("--------------------------------")
        for(task of toDo){
            console.log(`* ${task}`);
        }
        console.log("--------------------------------")
    } else if(userInput == "add"){
        let task = prompt("Enter your task to add to the list");
        toDo.push(task);
        console.log(`Your task '${task}' added to your list`);
    } else if(userInput == "delete"){
        console.log("--------------------------------")
        for(task of toDo){
            console.log(`* ${toDo.indexOf(task)+1} - ${task}`);
        }
        console.log("--------------------------------")
        userInput = prompt("Please select a task to delete, enter the number in the prompt")
        userInput = parseInt(userInput)
        toDo.splice(toDo.indexOf(userInput-1), 1);
        console.log("--------------------------------")
        console.log("Your new list of toDos");
        for(task of toDo){
            console.log(`* ${task}`);
        }
        console.log("--------------------------------")
    }

    userInput = prompt("What do you wanna do.?")

}
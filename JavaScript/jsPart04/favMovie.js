const favMovie = "ironman";

let guess = prompt("Guess fav movie");
console.log(guess);
while((guess != favMovie) && (guess != "quit")){
    console.log(guess);
    guess = prompt("Guess again");
}
//ARRAYS// 

console.log("ARRAYS - collection of things ")

var splitter = "--------------------------------------------------"
console.log(splitter)

//string array -->
var movies = ["Kill bill","Django", "Guard. of Galaxy", "Fight Club"]

var jersey_numbers = [13,23,33,13] //number array 

var mixed = ["broccolli", 20 , true ] // mixed arrays 

/////////////////////////////////////////////////////////////////
console.log(movies[1])

console.log(mixed[0]) //remember computers start at 0, not 1 


console.log(splitter)

console.log("== Favorite movies ==")

for(var i = 0 ; i < movies.length; i++){
	console.log(movies[i]);
}
//////////////////////ALPHABETICAL////////////////////////////
console.log(splitter);

console.log("== Favorite resturaunts ==")

var food=["Kuma", "Peppys", "B's Po Boy", "Fountain Square Diner"]
food.sort(); //<-- this an operator, sorts alphabetically 

for(var i=0 ; i < food.length ; i++){
	console.log(food[i]);


}
//conditionals --> if /then 
//george bool 

//if and else 

var age = 40 ;


if(age === 40){         //used all over the place. including games like scratch 
	console.log("Man you're cool");
} 
else if(age >= 18){
	console.log("Congrats you can vote") //soon as a stetment is true it stops
}
else if (age >= 25){
	console.log("You can rent a car ")
}
else{
	console.log("Poor kids");
}

///////////////////////////////////////////////////////////////////


var pass = "12345678";

if(pass === "12345678"){
	console.log("Welcome user ");
}
else {
	console.log("Incorrect password") //example of else being used };
}

//////////////////////////////////////////////////////////////////////////


//potential game health coding 
var revive = 2;
var health = 0 ;

if(revive > 0 && health < 0){ //checks for revive at death 
	console.log("Used revive," + revive + " remaining")
}
else if (health < 0 && revive <1) { //death message 
	console.log("You died");
}





console.log()

var elevator_broken = false;

var elevator_number = 13;
var elevator_up = false;
var elevator_down = true;

var elevatorIsStuckWhileWeAreInside = true;

///////////////////////////////////////////////////////////////////
console.log("=FLOOR DIRECTION=")

if(elevator_up === true){

	console.log("Going up!");
}else {
	console.log("Going down!");
}
////////////////////////////////////////////////////////////////////
console.log("=ELEVATOR STATUS=")

if(elevator_broken === true ){
	console.log("out of service ")
}else {
	console.log("All systems green ")
}
////////////////STREAM LINING////////////////////

if(elevatorIsStuckWhileWeAreInside) //no need for triple equals if boolean 
	console.log("Well crap") //you can bypass braces by having one line of code 

if(elevator_broken && elevator_down){  //both conditions must be met 
	console.log("Hang on tight")
}

if(elevator_broken || elevator_down){  //one condition is met 
	console.log("Hang on tight")
}
///////////////////////CHALLENGE///////////

if(elevatorIsStuckWhileWeAreInside && elevator_number==13){
	console.log("This is gonna be a bad day ")
}

////////////////////////SILVER CHALLENGE////////////////////
var cwins=1
var pwins=2

if(cwins==pwins){
	console.log("Tied games?")
} else if(cwins > pwins){
	console.log("Not surprising that the Colts won")
}else 
	console.log("That was a fluke that they lost")
}

 




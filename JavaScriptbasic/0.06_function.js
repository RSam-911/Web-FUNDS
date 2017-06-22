/////////////FUNCTIONS//////////////////////////////////////


var splitter= "--------------------------------------------------"


//below is the "declaration" of a function, builds the function
function hello(){
	console.log("Hello!");
}

//below is "calling" the function, runs the function
hello();

//Function as a variable 

var hey = function(){  //whatever the result of function is, store into variable
	console.log("hey")
}

hey();


//////////////////////FUNCTION TEST ////////////////////////

function dog(){
	console.log("Ace");
}

dog();

console.log("== Addition calculator ==  ")

function add_twos(){
	var x = 2 ;  //variables inside the function are not global
	var y = 2;
	console.log(x + y);
}

add_twos();

console.log("== Multiply calculator == ")

function multiply_ab(){
	var a = 3  //later these can be entered from a user GUI
	var b = 2
	console.log(a*b);
}

multiply_ab();

//////////////USING PARAMETERS//////////////////////////////

function number_entered(x){ //x in parenthesis is a "parameter"
	console.log("The number entered is:", x);
}

number_entered(5);
number_entered(7);
number_entered(100000);

///////////REUSABLE CALCULATOR//////////////////////////////
function add_calc(x,y){
	console.log("Answer:",x + y);
}

add_calc(3,3) //use commas to serperate multi parameters 

NaN //means not a number 

console.log(splitter)

//////////////////////////////////////////////////////////////////
function name(f,l){
	console.log("Full name :", f + ", " + l )
}

name("Sam","Ryan"); //called  an argument 

console.log(splitter)

///////////////////////////////////////////////////////////////////
function pet_info (name , breed){
	var details = name + ","+breed;
	return details;      //return is good for linking to other features
}

console.log(pet_info("Rufus","Weiner Dog"))

/////////////////CHALLENGES /////////////////////
//sales tac calc 

function tax(candy_n,price){       //alt name is "method"
	var gross =(candy_n * price)
	var taxs = (gross*0.07)
	var net$ = (taxs + gross )

	console.log(splitter)
	console.log("The cost of "+candy_n+" candy bars at $"+price+" is $"+ net$ + " with $"+ taxs + " paid in sales tax")
 
}

console.log(splitter)

tax(10,1);
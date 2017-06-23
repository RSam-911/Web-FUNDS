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


/////////////////////////////CHALLENGES CONTINUED////////////

function location(city,state){
	console.log("I am from "+ city +","+ state)
}

location("Indianapolis"," Indiana")

console.log(splitter)

function bills(water,power,cable,heat){ //parameters
	var monthly = (water + power + cable + heat)
	var yearly = (water+power+cable+heat*12)
	console.log(("You will pay $"+ monthly +" this month, and $"+ yearly + " a year"))
}

bills(1,2,3,4); //need 4 numbers so parameters are satisfied

console.log(splitter)


// function check_odd_eve(number){			//try to use verbs in function names to help ID them 
// 	if (number / 2 === true) {
// 		console.log("Number is even ")
// 	}else {
// 		console.log("Number is odd")     //non-working attempt at a odd even sensor 
// 	}
// }

// number(7);

function check_odd_eve(number) {
	if (number % 2 < 1 ) {       //stupid modulous you can use < or ===0 either one
		console.log("Even")  
	}else{
		console.log("Odd")
	}
}
check_odd_eve(7);



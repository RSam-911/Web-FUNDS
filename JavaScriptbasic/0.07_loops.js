/////LOOPS/////


//iterate --> the repetition of a process 

var splitter = "---------------------------------------------------"
console.log(splitter)



console.log(1);
console.log(2);
console.log("3...")  //counting to 100 would take 100 lines of code 

/////////////////////////LOOP FORMULA //////////////////////////////
console.log(splitter)

          //initial      //conditional   //operation
// for (	var i = 1 ;    i < 101	  ;	     i++ 	){ //i++ means add 1 
// 	console.log(i) 
//}

//above code prints 1 - 100 in 0.2 seconds , good ammo counter


///counting forward///
for (var i = 5 ; i < 11 ; i++) {
	console.log(i)
}

console.log(splitter)
//////counting backwards /////
for (i=10 ; i > 0 ; i--){
	console.log(i)
}



//i++ means i + 1 

//i += x where x is any number,loop then counts by that number 

for(var i = 0 ; i<30 ; i +=5 ){
	console.log(i);
}

console.log(splitter)

//combines looping counters with words being added 
for(var i=0 ; i < 101 ; i += 5){
	if (i === 50) {
		console.log("Fifty")
	}else {
		console.log(i)
	}
}






console.log(splitter)

////////////FIZZ BUZZ////////////



for(var i=1 ; i <101 ; i++){ 

	var FIZZ = "FIZZ"
	var BUZZ = "BUZZ"

	if ( i % 3 == 0  ) {
		console.log(FIZZ)
	}else if ( i % 5 == 0 ){
		console.log(BUZZ)
	}else {
		console.log(i)
	}
}


console.log(splitter)

for(var i=0 ; i<21 ; i+=2){
	console.log(i)
}

console.log(splitter)



////////////////////////////////For loop 

var loading=false

for (var i =0 ; i<101; i++) {
 if (i < 100) {
 	loading=true
 if (i >100) {
 	loading=false
  }
 }
}
////////////////////////////////While loop 
while( loading = true ){
	if (i < 100) {
	console.log("Loading...")
	}else if(i > 100){ 
		console.log("Completed")
	}
	else{
		console.log("ERROR")
	}
}



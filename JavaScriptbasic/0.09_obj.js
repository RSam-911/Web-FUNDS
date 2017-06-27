////////////OBJECTS //////////////////

var splitter = "--------------------------------------------------------"



console.log("OBJECTS")
console.log(splitter + "Obj start" )   // called object literal, class of object 
var player = {
	//PROPERTIES//
	name 		:  "Player name " + "",
	life 		: 100,                        //defines all the players variables, called properties  
	dmg 		: 0 , 
	pistol	    : false,
	shotgun     : false,
	rank	    : ["soldier","medic" , "heavy", "ranger"],
	//FUNCTIONS//     //functions inside of an object are called "methods"
	stats       : function (){
		console.log("Character Stats: ")
	},

	select      : function() {
		console.log("Choose "+ this.name + " as your player?");
	},

	hit         : function(target){
		console.log(this.name + " attacks "+ target.name + " for " + this.dmg);

		target.life -= this.dmg; 
		console.log( target.name + " has " + target.life + " life remaining")

	},

	critcal      :function(target){

	if (Math.floor(Math.random()*21) > 10){

		console.log(this.name + " attacks "+ target.name + " for bonus damage!");
		target.life -= this.dmg + Math.floor(Math.random()*21);
	}
	
	},

	grab_shotgun : function(){
		if (this.grab_shotgun === true) {
			console.log(this.name + "picked up a shotgun");
		}
	},
}

	//next function added here 

/////////////////////////////////////////PLAYER SAUL////////////////////////////
var saul = Object.create(player);
// Properties //
saul.name = "Saul ";                    console.log(splitter + "SAUL PROPERTIES")
saul.life = 120;
saul.dmg = 20;       
saul.pistol = true                      ///////      . is called a "dot operator"
saul.rank = "soldier"  
saul.stats();                  //////   gives us access to the properties of the object 
saul.grab_shotgun = true

// Log checks //                               
console.log(saul.name);
console.log(saul.life);           
//console.log(saul.rank)
saul.select();  

/////////////////////////////////////////PLAYER SAM/////////////////////////////
var sam = Object.create(player);
// Properties //
sam.name = "Sam";                        console.log(splitter + "SAM PROPERTIES")
sam.life = 150;
sam.dmg = 16;
sam.pistol = true ;
sam.rank = "medic";
sam.stats();
sam.grab_shotgun = false 





// Log checks //                               
console.log(sam.name);
console.log(sam.life);
//console.log(sam.rank);
sam.select();  ///character select 

// console.log(sam) //prints the entire properties list

console.log(splitter + "COMBAT")

saul.hit(sam); // when debugging make sure any object referenced has been created before its used 
sam.hit(saul);



console.log()


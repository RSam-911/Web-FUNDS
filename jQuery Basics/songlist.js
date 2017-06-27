
// alert("Page is connected");


$(document).ready(function(){

	alert("function connected")

	$("#add").on("click", function(){
		//pulls the raw input from the html file
		var song = $("#song").val();

		console.log(song);

		//formats the name 
		var list_item ="<li>" + song + "</li>";

		console.log(list_item);


		//adds to end of list 

		$("#song-list").append(list_item);


		//clears bar after entering 
		$("#song").val("");
	});
});

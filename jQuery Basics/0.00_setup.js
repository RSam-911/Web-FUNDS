
$(document).ready(function(){  //dollar sign means jquery
	alert('This is steve jobs from apple your computer has a virus');
});

//word jQuery and $ can be used interchangably

jQuery(document).ready(function(){  //MUST have caps:jQuery
	alert('enter your social security number to fix it ');

});



$(document).ready(function(){

	$("#hide").click(function(){

		$("#image").hide();
	});

	$("#show").click(function(){

		$("#image").show();
	});

	$("#explode").click(function(){

		$("#image").hide("explode",{pieces: 64}, 2000);
	});


	// $("#fade_in").click(function)(){     //ultra broke code

	// 	$( "#image" ).fadeIn(5000)
	// });

	// $("#fade_out").click(function)(){ //something is janky with this line, the last {

	// 	$("#image").fadeOut(5000);
	// });


// 		});
//    	});
});


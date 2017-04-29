//main iife 

$(document).ready(function(){

	$("#new-item").click(()=>{
		$(".list-container").addClass("hide");
		$(".new-container").removeClass("hide");
	});

	$("#list-items").click(()=>{
		$(".new-container").addClass("hide");
		$(".list-container").removeClass("hide");
	});



// call augmentor 

	FbAPI.getTodos().then((results)=> {
		console.log("results", results);
	})
	.catch((error)=>{
		console.log("get TOdo Errors", error);
	});


});

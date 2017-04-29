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
//get todo
	FbAPI.getTodos().then((results)=> {
		// console.log("results", results);
		FbAPI.writeToDom();
		countTask();
	})
	.catch((error)=>{
		console.log("get todo Errors", error);
	});


// add todo
//button was hard coded, so you can use .click instead of .on 
	$("#add-todo-button").click(() => {
		let newTodo = {
			// id; firebase gives us the id 
			isCompleted: false,
			task: $("#add-todo-text").val()
		};
		console.log("newTodo", newTodo);

		FbAPI.addTodo(newTodo).then(()=> {
			$("#add-todo-text").val("");
			$(".new-container").addClass("hide");
			$(".list-container").removeClass("hide");
			FbAPI.writeToDom();
			countTask();
			//make a new array entry // in the exact same format
		}).catch(()=> {

		});

	});

//delete todo
//edit todo 
	

	// complete  todos
	$(".main-container").on('click', 'input[type="checkbox"]', (event)=>{
		console.log("id",event.target.id);
		FbAPI.checker(event.target.id).then(() => {
			FbAPI.writeToDom();
			countTask();
		}).catch((error) => {
			console.log("checker error", error);
		});
	});


	//counter for items added in todo list 
	let countTask = () => {
		let remainingTasks = $("#incomplete-tasks li").length; // jquery gets back and array everytime 
		$("#counter").hide().fadeIn(300).html(remainingTasks);
	};



});

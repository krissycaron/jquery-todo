//main iife 
$(document).ready(function(){
	let apiKeys;
	let editId = "";

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
	 FbAPI.firebaseCredentials().then((keys) => {
	    apiKeys = keys;
	    firebase.initializeApp(apiKeys);
	    FbAPI.writeToDom(apiKeys);
	  }).catch((error) => {
	    console.log("key errors", error);
	  });


// add todo
//if button was hard coded, so you can use .click instead of .on 
  $('#add-todo-button').click(() => {
      let newTodo = {
          isCompleted: false,
          task: $('#add-todo-text').val()
      };
    if(editId.length > 0){
      //edit
      FbAPI.editTodo(apiKeys, newTodo, editId).then(() => {
        $('#add-todo-text').val("");
        editId = "";
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
        FbAPI.writeToDom(apiKeys);
      }).catch((error) => {
        console.log("addTodo error", error);
      });
    } else{
      FbAPI.addTodo(apiKeys, newTodo).then(() => {
        $('#add-todo-text').val("");
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
        FbAPI.writeToDom(apiKeys);
      }).catch((error) => {
        console.log("addTodo error", error);
      });      
    }
  });

//delete todo
//must be an .on NOT a .click becasue it is a dynamically created button in the write to DOM function.
	$('.main-container').on('click', '.delete', (event)=> {
		FbAPI.deleteTodo(apiKeys, event.target.id).then(()=>{
			FbAPI.writeToDom(apiKeys);
		}).catch((error)=>{
			console.log("error in deleteTodo", error);
		});
	});




	//edit todo 
	// grabs the text, holds it in a empty variable, then deletes and then adds a row to the end of the array.
	$(".main-container").on('click', '.edit', (event)=>{
		let editText = $(event.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html(); ///up to div over one div then down to class.
			editId =event.target.id;
			$(".list-container").addClass("hide");
			$(".new-container").removeClass("hide");
			$("#add-todo-text").val(editText);
		});
	

	 //complete todos
  $('.main-container').on('click', 'input[type="checkbox"]', (event)=>{
  	let myTodo = {
      isCompleted: event.target.checked,
      task: $(event.target).siblings('.task').html()
    };
    FbAPI.editTodo(apiKeys, myTodo,event.target.id).then(() =>{
  		FbAPI.writeToDom(apiKeys);
  	}).catch((error) => {
  		console.log("checker error", error);
  	});
  });


/// form click events

	$('#registerButton').click(()=> {
		console.log("register");
		let email = $('#inputEmail').val();
		let password= $('#inputPassword').val();
		let username = $('#inputUsername').val();

		let user = {email, password}; //es6 notation for when a key and a value are the same "email": emailx
		
		FbAPI.registerUser(user).then((response)=>{
			console.log("register response", response.uid);
			let newUser = {
				uid: response.uid,
				username:username
				};			
			FbAPI.addUser(apiKeys, newUser).then((response)=>{
				console.log("addUser", response);
			});
		}).catch((error)=>{
			console.log("error in registerUser", error);
		});


	});

	$('#loginButton').click(() =>{
		let email = $('#inputEmail').val();
		let password = $('#inputPassword').val();

		let user = {email, password};

		FbAPI.loginUser(user).then((response) => {
			console.log("response", response);
		}).catch((error) => {
			console.log("error", error);
		});
	});


//// end of doc.ready////
});

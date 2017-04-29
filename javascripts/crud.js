// console.log (todos);
// crud is augmentor

var FbAPI = ((oldCrap) => {

	oldCrap.getTodos = () => {
		 let items =[]; 
		return new Promise ((resolve, reject) => {
			$.ajax("./database/seed.json")
			.done((data) => {
				let response = data.items;
				// loop over each response and call that things "key"
				Object.keys(response).forEach((key) => {
					console.log("key", key);
					//grab the actual object and assign the key inside that object
					response[key].id = key; // each thin in response will have the 
					// response [item0] is equal to 
					// "isCompleted" : false,
      				// "task" : "feed the dog"
					//id: "item0"
					items.push(response[key]);
					//creating an array and making it how we want to look ()
				});

				FbAPI.setTodos(items);
				resolve();
			})
			.fail((error)=>{
				console.log("error", error);
				reject(error);
			});
		});
	};

	oldCrap.addTodo = (newTodo) => {
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${FbAPI.todoGetter().length}`;
			// console.log("newTodo", newTodo); object needed is here, 
			FbAPI.setSingleTodo(newTodo);
			resolve();

		});
	};

	return oldCrap;
})(FbAPI || {});
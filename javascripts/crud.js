// console.log (todos);
// crud is augmentor

var FbAPI = ((oldCrap) => {

	// oldCrap.getTodos = (apiKeys) => {
	// 	 let items =[]; 
	// 	return new Promise ((resolve, reject) => {
	// 		$.ajax("./database/seed.json")
	// 		.done((data) => {
	// 			let response = data.items;
	// 			// loop over each response and call that things "key"
	// 			Object.keys(response).forEach((key) => {
	// 				console.log("key", key);
	// 				//grab the actual object and assign the key inside that object
	// 				response[key].id = key; // each thin in response will have the 
	// 				// response [item0] is equal to 
	// 				// "isCompleted" : false,
 //      				// "task" : "feed the dog"
	// 				//id: "item0"
	// 				items.push(response[key]);
	// 				//creating an array and making it how we want to look ()
	// 			});

	// 			FbAPI.setTodos(items);
	// 			resolve();
	// 		})
	// 		.fail((error)=>{
	// 			console.log("error", error);
	// 			reject(error);
	// 		});
	// 	});
	// };
	oldCrap.getTodos = (apiKeys) => {
		let items = [];
		return new Promise ((resolve, reject) => {
			$.ajax(`${apiKeys.databaseURL}/items.json`)
			.done((data) => {
				let response = data;
				Object.keys(response).forEach((key) => {
					console.log("key", key);
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldCrap.addTodo = (apiKeys, newTodo) => {
		return new Promise ((resolve, reject) => {
			return new Promise ((resolve, reject) => {
				$.ajax({
					method:'POST',
					url:`${apiKeys.databaseURL}/items.json`,
					data: JSON.stringify(newTodo)
				}).done(()=>{
					resolve();
				}).fail((error)=>{
					reject("error", error);
				});
			});
		});
	};



	oldCrap.deleteTodo = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method:'DELETE',
				url:`${apiKeys.databaseURL}/items/${id}.json`
			}).done(()=>{
				resolve();
			}).fail((error)=>{
				reject("error", error);
			});
		});
	};

	oldCrap.editTodo = (apiKeys, newTodo, id) => {
		return new Promise ((resolve, reject) => {
			FbAPI.duhlete(id);
			resolve();
		});
	};


	return oldCrap;
})(FbAPI || {});
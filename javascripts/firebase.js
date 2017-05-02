//functions will be deleted once we more to fire base
//this is the database connector 

// var still global 


var FbAPI =  (() => {
	let todos =[];

	return {
		todoGetter : () => {
			return todos;
		},
		setTodos : (newArray) => {
			todos = newArray;
		},
		setSingleTodo: (newObject) => {
			todos.push(newObject); 
		},
		setChecked: (itemId) => {
			// console.log(itemId);
			const position = itemId.split("item")[1]; // array ["", 0 ] empty string then the id # we need
			todos[position].isCompleted = !todos[position].isCompleted; //! not
		},
		duhlete: (Id) => {
			//item1 (the id of the dynamiacally created item)
			const position = Id.split("item")[1];
			todos.splice(position, 1);
		}
	};

	
})();



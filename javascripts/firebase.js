//functions will be deleted once we more to fire base

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
		}
	};

	
})();



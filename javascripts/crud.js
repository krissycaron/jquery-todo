// console.log (todos);
// crud is augmentor

var FbAPI = ((oldCrap) => {

	oldCrap.getTodos = () => {
		return new Promise ((resolve, reject) => {
			$.ajax("./database/seed.json")
			.done((data) => {
				resolve(data);
			})
			.fail((error)=>{
				console.log("error", error);
				reject(error);
			});
		});
	};


	return oldCrap;
})(FbAPI || {});
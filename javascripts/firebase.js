//functions will be deleted once we more to fire base
//this is the database connector 

// var still global 


var FbAPI =  (() => {
	let todos = [];

	return {
		firebaseCredentials : () => {
			return new Promise((resolve, reject) => {
				$.ajax("apiKeys.json")
				.done((data) => {
					resolve(data);
				})
				.fail((error) => {
					reject(error);
				});
			});
		}
	};

	
})();



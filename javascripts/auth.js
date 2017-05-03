var FbAPI = ((cats)=>{
	cats.registerUser = (credentials) => {
		return new Promise((resolve, reject) => {
			firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password) //importand that email comes first and password comes second. 
			.then((authData)=>{
				resolve(authData);
			}).catch((error)=>{
				reject(error);
			});
		});
	};
	return	cats;

})(FbAPI || {});
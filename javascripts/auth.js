var FbAPI = ((cats)=>{
	
//firebase methods
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

	cats.loginUser = (creds) => {
		return new Promise((resolve, reject)=>{
			firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
			.then((authData)=>{
				resolve(authData);
			}).catch((error) =>{
				reject(error);
			});
		});
	};

		cats.credentialsCurrentUser = () => {
		return firebase.auth().currentUser;
	};

	cats.logoutUser = () => {
		firebase.auth().signOut();
	};


	return	cats;

})(FbAPI || {});
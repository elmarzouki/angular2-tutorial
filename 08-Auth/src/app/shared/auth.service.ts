import { User } from './user.interface';

declare var firebase: any;

export class AuthService {
	signupUser(user: User) {
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		  console.log(error);
		});
	}
}
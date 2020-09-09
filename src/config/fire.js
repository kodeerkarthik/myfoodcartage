import firebase from 'firebase';

var firebaseConfig = {
	apiKey: "AIzaSyCgp-fJ1wL2NjpPb1SNUf4gFm8OBkvYg_E",
	authDomain: "my-food-cartage-c8ab4.firebaseapp.com",
	databaseURL: "https://my-food-cartage-c8ab4.firebaseio.com",
	projectId: "my-food-cartage-c8ab4",
	storageBucket: "my-food-cartage-c8ab4.appspot.com",
	messagingSenderId: "909466307570",
	appId: "1:909466307570:web:7374b980b3b8fcab22f96b"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
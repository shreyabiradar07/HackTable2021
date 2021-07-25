var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
	apiKey: 'AIzaSyAXjnN7PBoNctwdxmS_ArhnDsCyTFtIFgU',
	authDomain: 'hacktable-web.firebaseapp.com',
	projectId: 'hacktable-web',
	storageBucket: 'hacktable-web.appspot.com',
	messagingSenderId: '130755552958',
	appId: '1:130755552958:web:d09e243147957ab0ad20ef',
	measurementId: 'G-VNJPC87G8W'
};
if (!hasInit) {
	firebase.initializeApp(config);
	hasInit = true;
}
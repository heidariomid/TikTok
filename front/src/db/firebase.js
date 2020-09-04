import fireBase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCE4qk_Ireeql91VV_NjEfW_k3rOzF3mWQ',
	authDomain: 'coronavirus-a9b0f.firebaseapp.com',
	databaseURL: 'https://coronavirus-a9b0f.firebaseio.com',
	projectId: 'coronavirus-a9b0f',
	storageBucket: 'coronavirus-a9b0f.appspot.com',
	messagingSenderId: '54561275829',
	appId: '1:54561275829:web:49ee8912c51715da5763fc',
};

const fireBaseApp = fireBase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
export default db;

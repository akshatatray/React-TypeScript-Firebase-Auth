import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
     apiKey: "AIzaSyCGsV3VZy8QiMIG38u8bOXEuER3g5Yf-Uk",
     authDomain: "miniproject-abes.firebaseapp.com",
     databaseURL: "https://miniproject-abes.firebaseio.com",
     projectId: "miniproject-abes",
     storageBucket: "miniproject-abes.appspot.com",
     messagingSenderId: "518266758995",
     appId: "1:518266758995:web:df2aa8406a509a09fba3a6",
     measurementId: "G-RS02SDMBV1"
});

export const auth = app.auth();
export default app;
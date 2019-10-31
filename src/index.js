import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuscLxYQLKCui3duGTm18JSuVto7WryyM",
    authDomain: "volans-capstone.firebaseapp.com",
    databaseURL: "https://volans-capstone.firebaseio.com",
    projectId: "volans-capstone",
    storageBucket: "volans-capstone.appspot.com",
    messagingSenderId: "134011153748",
    appId: "1:134011153748:web:e7e063dbb34f64b4b32cc1",
    measurementId: "G-WFP5EBZNBL"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

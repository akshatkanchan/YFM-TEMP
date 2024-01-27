importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyAjUvTTsq_an_FG3w36rGeAY9mrUur5bd4",
    authDomain: "yourfleetman-bd7ec.firebaseapp.com",
    databaseURL: "https://yourfleetman-bd7ec.firebaseio.com",
    projectId: "yourfleetman-bd7ec",
    storageBucket: "yourfleetman-bd7ec.appspot.com",
    messagingSenderId: "162144364547"
});

const messaging = firebase.messaging();
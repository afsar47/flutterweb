importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
 apiKey: "AIzaSyBFTKdKHlGH9R2Q7kkZTWsNHpfWUI_lUSg",
    authDomain: "framelife-4c6be.firebaseapp.com",
    databaseURL: "https://framelife-4c6be.firebaseio.com",
    projectId: "framelife-4c6be",
    storageBucket: "framelife-4c6be.appspot.com",
    messagingSenderId: "277040553926",
    appId: "1:277040553926:web:8259916b48c625da2c9cc7",
    measurementId: "G-FHDEEFKPG4"

});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
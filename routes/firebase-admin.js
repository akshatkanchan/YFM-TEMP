var admin = require("firebase-admin");

var serviceAccount = require(__dirname+'/../config/server-key-firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yourfleetman-bd7ec.firebaseio.com"
});

module.exports = admin;
const admin = require("firebase-admin");
const serviceAccount = require("./samplefirebasetsx-firebase-adminsdk-ggv9b-c64abdf191.json"); // Update with the path to your JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const setAdmin = async (uid) => {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log(`Admin privileges granted to user: ${uid}`);
};

// Replace with the user UID you want to grant admin privileges to
setAdmin("BcTzY98wH8Sq5cuFlyI5I0Ek1iH3");



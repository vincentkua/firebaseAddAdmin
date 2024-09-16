const admin = require("firebase-admin");
const serviceAccount = require("./samplefirebasetsx-firebase-adminsdk-ggv9b-c64abdf191.json"); // Update with the path to your JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const listAdminUsers = async () => {
    try {
      const listUsersResult = await admin.auth().listUsers(); // Get all users
      const adminUsers = listUsersResult.users.filter((user) => user.customClaims?.admin);
      
      console.log("Admin Users:");
      adminUsers.forEach((user) => {
        console.log(`UID: ${user.uid}, Email: ${user.email}`);
      });
    } catch (error) {
      console.error("Error listing users:", error);
    }
  };

listAdminUsers();

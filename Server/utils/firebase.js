const admin = require("firebase-admin");
const serviceAccount = require("../firebase.config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  async verifyToken(token) {
    try {
      if (!token) return null;
      const ver = await admin.auth().verifyIdToken(token);
      return ver;
    } catch (err) {
      throw new Error(err);
    }
  },
};

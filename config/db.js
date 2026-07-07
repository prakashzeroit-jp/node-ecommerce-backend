const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected!`);
  } catch (error) {
    console.log(`DB  connection  failed`);
  }
};

module.exports = connectionDB;
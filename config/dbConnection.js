const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log(process.env.CONNECTION_STR);
    const connect = await mongoose.connect(process.env.CONNECTION_STR);
    console.log("database connected", connect.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;

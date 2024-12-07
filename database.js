const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://kwsalem:hEKmjaXAou9DbxsU@cluster0.2vcco.mongodb.net"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;

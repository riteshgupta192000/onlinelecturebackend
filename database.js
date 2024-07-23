require("dotenv").config();
const mongoose = require("mongoose");
const URI=`mongodb+srv://riteshgupta192000:${process.env.password}@cluster0.zcavtvx.mongodb.net/onlinelecture?retryWrites=true&w=majority&appName=Cluster0`;
async function connection() {
  return await mongoose
    .connect(URI, {
      // connectTimeoutMS: 30000,
      useNewUrlParser: true,
       useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database Connected!!");
    })
    .catch((err) => {
      if (err) throw err;
    });
}

module.exports = { connection };

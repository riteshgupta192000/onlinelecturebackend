const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const { connection } = require("../server/database");

dotenv.config();
// connection();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://riteshgupta192000:${process.env.password}@cluster0.zcavtvx.mongodb.net/onlinelecture?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database Connected!!");
})
.catch((err) => {
  if (err) throw err;
});;

app.use(require("./router/AdminRoutes"));
app.use(require("./router/InstructorRoutes"));
app.use(require("./router/userRoutes"));

app.get("/api/getKey", (req, res) => {
  res.status(200).json({ CLOUD_KEY: process.env.CLOUD_KEY });
});

app.listen(process.env.PORT, () => {
  console.log("Server is working on Port:", process.env.PORT);
});

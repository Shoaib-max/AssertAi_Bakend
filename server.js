const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
connectDb();
app.use(express.json());

app.use("/api", require("./routes/createRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("server started ");
});

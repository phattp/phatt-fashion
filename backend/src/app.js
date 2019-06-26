const path = require("path");
const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const app = express();

app.use("/media", express.static(path.join(__dirname, "../media")));
app.use(express.json());
app.use(userRouter);
app.use(productRouter);

module.exports = app;

const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/mongoose");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

const app = express();

app.use(cors());
app.use("/media", express.static(path.join(__dirname, "../media")));
app.use(express.json());

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

module.exports = app;

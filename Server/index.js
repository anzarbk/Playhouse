const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const commonRoutes = require("./routes/commonRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const mongoose = require("./database");
const conn = require("./database");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/", commonRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT} `);
});

module.exports = app;

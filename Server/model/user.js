const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    age: {
      type: String,
    },
    areaPinCode: {
      type: String,
    },
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    town: {
      type: String,
    },
    state: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "theatre", "hall", "concert", "admin"],
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

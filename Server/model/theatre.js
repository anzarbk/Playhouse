const mongoose = require("mongoose");
const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    unique: true,
    index: true,
  },
  facilities: {
    type: String,
  },
  about: {
    type: String,
  },
  // screen: {
  //   type: Array,
  // },
  image: {
    type: String,
  },
  banner: {
    type: String,
  },
  show: {
    type: [
      {
        movie: {
          type: mongoose.Types.ObjectId,
        },
        time: {
          type: Date,
        },
        screen: {
          type: String,
        },
        Date: {
          type: Date,
        },
      },
    ],
  },
  pincode: {
    type: String,
  },
  address: {
    type: String,
  },
  town: {
    type: String,
  },
  state: {
    type: String,
  },
});
module.exports = mongoose.model("theatre", theatreSchema);

import mongoose from "mongoose";
const hallSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  facilities: {
    type: Array,
  },
  image: {
    type: Array,
  },
  banner: {
    type: Array,
  },
  //   show: {
  //     type: [
  //       {
  //         movie: {
  //           type: mongoose.Types.ObjectId,
  //         },
  //         time: {
  //           type: Date,
  //         },
  //         screen: {
  //           type: String,
  //         },
  //         Date: {
  //           type: Date,
  //         },
  //       },
  //     ],
  //   },
  address: {
    type: [
      {
        pincode: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        landmark: {
          type: String,
        },
        town: {
          type: String,
        },
        state: {
          type: String,
        },
      },
    ],
  },
});
module.exports = mongoose.model("hall", hallSchema);

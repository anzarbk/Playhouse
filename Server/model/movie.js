import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  dimension: {
    type: String,
  },
  languages: {
    type: String,
  },
  certification: {
    type: String,
  },
  // release: {
  //   type: Date,
  // },
  about: {
    type: String,
  },
  cast: {
    type: String,
  },
  crew: {
    type: String,
  },
  genre: {
    // type: [
    //   {
    //     genre: {
    type: String,
    //   },
    // },
    // ],
  },
  image: {
    type: Array,
  },
  banner: {
    type: Array,
  },
  // address: {
  //   type: [
  //     {
  //       pincode: {
  //         type: String,
  //       },
  //       address1: {
  //         type: String,
  //       },
  //       address2: {
  //         type: String,
  //       },
  //       landmark: {
  //         type: String,
  //       },
  //       town: {
  //         type: String,
  //       },
  //       state: {
  //         type: String,
  //       },
  //     },
  //   ],
  // },
});
module.exports = mongoose.model("movie", movieSchema);

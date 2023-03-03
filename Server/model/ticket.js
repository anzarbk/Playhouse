import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema({
  theatre: {
    type: mongoose.Types.ObjectId,
    ref: "theatre",
  },
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "movie",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  seatNo: {
    type: String,
  },
  paymentType: {
    type: String,
  },
  subTotal: {
    type: String,
  },
  bookingFee: {
    type: String,
  },
  tax: {
    type: String,
  },
  totalAmount: {
    type: String,
  },
});
module.exports = mongoose.model("Ticket", ticketSchema);

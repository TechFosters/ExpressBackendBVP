import mongoose, { Schema } from "mongoose";

// id: 2,
//     title: "Microsoft Xbox...",
//     image: "https://storage...",
//     price: 57,
//     description: "Experience the modernized design of the Xbox...",
//     brand: "microsoft",
//     model: "Xbox X/S",
//     color: "white",
//     category: "gaming",
//     popular: true,
//     discount: 4

const paymentSchema = new mongoose.Schema(
  {
    order_id: Schema.Types.String,
    payment_id: Schema.Types.String,
    payment_amount: Schema.Types.String,
    payment_mode: Schema.Types.String,
  },
  { timestamps }
);

export const Payment = new mongoose.model("payments", paymentSchema);

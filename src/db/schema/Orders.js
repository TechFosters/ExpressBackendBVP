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

const orderSchema = new mongoose.Schema(
  {
    cart_id: Schema.Types.String,
    order_id: Schema.Types.String,
    order_items: Schema.Types.Array,
    order_status: Schema.Types.String,
    order_price: Schema.Types.String,
    payment_mode: Schema.Types.String,
    is_paid: Schema.Types.Boolean,
  },
  { timestamps }
);

export const Order = new mongoose.model("orders", orderSchema);

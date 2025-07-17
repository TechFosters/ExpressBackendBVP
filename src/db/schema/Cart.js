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

const cartSchema = new mongoose.Schema({
  cart_id: Schema.Types.String,
  user_id: Schema.Types.String,
  cart_items: Schema.Types.Array,
  cart_price: Schema.Types.String,
  total_items: Schema.Types.String,
});

export const Cart = new mongoose.model("carts", cartSchema);

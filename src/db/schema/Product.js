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

const productSchema = new mongoose.Schema({
  product_id: Schema.Types.String,
  product_title: Schema.Types.String,
  product_description: Schema.Types.String,
  product_image: Schema.Types.String,
  product_price: Schema.Types.String,
  product_brand: Schema.Types.String,
  product_discounted_price: Schema.Types.String,
  product_instock: Schema.Types.Boolean,
  product_category: Schema.Types.String,
});

export const Product = new mongoose.model("products", productSchema);

import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  filterByPrice,
  getAllProducts,
  getProductById,
  searchProductByTitle,
  updatePrice,
  updateProduct,
} from "../controller/product-controller.js";

export const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", addProduct);
productRouter.patch("/:id", updatePrice);
productRouter.put("/", updateProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/:id", getProductById);
productRouter.get("/search", searchProductByTitle);
productRouter.get("/filter-by-price", filterByPrice);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createDbConnection } from "./db/connection.js";
import { authRouter } from "./modules/auth/route/route.js";
import { productRouter } from "./modules/product/route/route.js";

dotenv.config();

export const app = express();
createDbConnection();
app.use(express.json());
app.use(cors());

app.use("/v1/products", productRouter);
app.use("/v1/auth", authRouter);

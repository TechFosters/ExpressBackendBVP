import mongoose from "mongoose";
import { logger } from "../logger/logger.js";

export const createDbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    logger.info("Connection Created Successfully");
  } catch (err) {
    logger.error("Mongo err", err);
  }
};

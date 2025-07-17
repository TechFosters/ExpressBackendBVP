import bcrypt from "bcrypt";
import { logger } from "../../../logger/logger.js";

export const hashPassword = (rawPassword) => {
  try {
    const hashPassword = bcrypt.hashSync(rawPassword, 10);
    return hashPassword;
  } catch (err) {
    logger.error("Error in Password Hashing");
  }
};

export const comaprePassword = (rawPassWord, hashedPassword) => {
  return bcrypt.compareSync(rawPassWord, hashPassword);
};

import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserByUserId,
  login,
  logout,
  register,
  updateUser,
} from "../controller/auth-controller.js";

export const authRouter = Router();

authRouter.get("/", getAllUsers);
authRouter.post("/", register);
authRouter.put("/", updateUser);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/:id", getUserByUserId);
authRouter.delete("/:id", deleteUser);

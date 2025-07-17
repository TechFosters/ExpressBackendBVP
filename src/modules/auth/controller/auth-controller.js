import { User } from "../../../db/schema/User.js";
import { logger } from "../../../logger/logger.js";
import { hashPassword } from "../utils/hash-password.js";
import { registerSchema } from "../validator/validator.js";
import { v4 as uuidv4 } from "uuid";

const login = (req, res) => {};

const logout = (req, res) => {};

// const register = async (req, res) => {
//   try {
//     const body = req.body;
//     console.log(body);
//     const validatedData = registerSchema.validate(body);
//     const userId = uuidv4();
//     const isExisting = await User.findOne({ email: validatedData.email });
//     if (isExisting) {
//       logger.error("User already Exists ");
//       throw new Error("User already exists");
//     }
//     const hashedPassword = hashPassword(validatedData.password);
//     const user = new User({
//       user_id: userId,
//       user_name: validatedData.userName,
//       role: validatedData.role,
//       password: validatedData.hashedPassword,
//       email: validatedData.email,
//       phone: validatedData.phone,
//     });
//     await user.save();
//     logger.info(`User Created Successfully with id ${userId}`);
//     res.status(201).json({ user: user });
//   } catch (err) {
//     logger.error("Error in SignUp", err);
//   }
// };

const register = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    // Properly validate and extract the value
    const { value: validatedData, error } = registerSchema.validate(body);

    if (error) {
      logger.error("Validation Error", error);
      return res.status(400).json({ error: error.details });
    }

    const userId = uuidv4();
    const isExisting = await User.findOne({ email: validatedData.email });
    if (isExisting) {
      logger.error("User already exists");
      return res.status(409).json({ error: "User already exists" });
    }

    
    const hashedPassword = hashPassword(validatedData.password);

    // Create user correctly
    const user = new User({
      user_id: userId,
      user_name: validatedData.userName,
      role: validatedData.role,
      password: hashedPassword, // Corrected this line
      email: validatedData.email,
      phone: validatedData.phone,
    });

    await user.save();
    logger.info(`User Created Successfully with id ${userId}`);
    res.status(201).json({ user });
  } catch (err) {
    logger.error("Error in SignUp", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const getUserByUserId = (req, res) => {};

const getAllUsers = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

export {
  getAllUsers,
  login,
  register,
  updateUser,
  deleteUser,
  getUserByUserId,
  logout,
};

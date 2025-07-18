import { compare } from "bcrypt";
import { User } from "../../../db/schema/User.js";
import { logger } from "../../../logger/logger.js";
import { AppError } from "../../../shared/middlewares/ApiError.js";
import { comaprePassword, hashPassword } from "../utils/hash-password.js";
import { loginSchema } from "../validator/loginValidator.js";
import { registerSchema } from "../validator/validator.js";
import { v4 as uuidv4 } from "uuid";
import { generateToken } from "../utils/jwt.js";



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

const login = async (req, res)=>{
  const body = req.body;
  const {error, value} = loginSchema.validate(body);

  const { email } = value;
  const user = await User.findOne({email})

  if(!user){
    throw new AppError(res, "User not found")
  }

  const passwordMatched = comaprePassword(value.password, user.password);
  if(!passwordMatched) {
    throw new AppError(res, "Invalid Password")
  }
  const token = generateToken(user.user_id);
  return res.status(200).json({
    success: true,
    user:{
        id: user.id,
        token,
        role: user.role,
        email: user.email
    },
    message: "LoggedIn successfully"
   })
}

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

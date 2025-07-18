import { User } from "../../../db/schema/User";

export const checkRole = (req, res, next) =>{
    const userId = req.user.userId;
    const user = User.findById(userId);
    console.log(user)
}
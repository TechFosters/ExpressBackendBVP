import jwt from 'jsonwebtoken'

export const generateToken  = ({id: userId})=>{
    try{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn: "24h"})
    return token
    }catch(err){
        throw new Error("Token generation error", err)
    }
};

export const verifyToken = (token)=>{
    try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded;
    }catch(err){
        throw new Error("Token not verified")
    }
}
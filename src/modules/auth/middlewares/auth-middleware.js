export const authMiddleware = (req, res, next) =>{
    const token = req.authorization.token; //bearer token
    console.log("bearer token", token)
    next();
}
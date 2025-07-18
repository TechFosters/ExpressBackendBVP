export class Reponse{
    constructor(res, message, data, statusCode = 500){
        res.status(statusCode).json({message, data})
    }
}
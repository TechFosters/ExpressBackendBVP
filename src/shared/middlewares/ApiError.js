export class AppError extends Error{
    constructor(res, message, statusCode = 500){
        super(message)
        this.statusCode = statusCode;
        res.status(statusCode).json({message})
    }
}
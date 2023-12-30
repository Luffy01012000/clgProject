
import type { NextFunction, Request, Response } from "express";

const asyncHandler = (reqHandler:any)=>{
    
    return (req:Request,res:Response,next:NextFunction)=>{
        Promise.resolve(reqHandler(req,res,next)).catch((err)=>next(err));
    }
}

export {asyncHandler}

//--------------------Try catch--------------
// const asyncHandler = (fn)=>{()=>{}}
/*
const asyncHandler = (fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.code||500).json({
            success: false,
            message: error.message,
        }); //If user is passing error code
    }
}
*/
// import jwt from 'jsonwebtoken'
// import { Request, Response, NextFunction } from "express"
// import User, { UserDocument } from "../models/User"
// import { JWT_SECRET } from '../util/secrets'

// interface UserPayload{
//     id: string,
//     password: string
// }

// const ExtractJwt = async( req: Request,res: Response, next: NextFunction)=>{
//     let token

//     if(
//         req.headers.authorization && req.headers.authorization.startsWith("Bearer")
//     )

//     try{
//         token = req.headers.authorization.split("")[1]

//         //decode token id
//         const decoded = jwt.verify(token, JWT_SECRET) as UserPayload
//         let user = req.user
//         user:(<any>decoded.user) = await User.findById(decoded.id).select("-password")
//         next()

//     }catch(error){
//         throw new Error("Not authorized, token failed")
//     }
// }

export {}

import passport from 'passport'
import passportLocal from 'passport-local' //for email-login
import { Request, Response } from 'express'
import UserService from '../services/user'
import User from '../models/User'

import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    const foundUser = await UserService.findOrCreate(parsedToken)
    const token = jwt.sign({ email: foundUser.email }, JWT_SECRET)
    console.log('Newly generated toekn is >>>>', token)
    console.log('Hello')
    done(null, { user: foundUser, token })
  }
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    console.log('payload', payload)
    const userEmail = payload.email
    console.log('founduser email from passport:', userEmail)
    const foundUser = await UserService.findByEmail(userEmail)
    console.log('founduser from passport', foundUser)
    done(null, foundUser)
  }
)

// import passport from 'passport'
// import passportLocal from 'passport-local' //for email-login
// const LocalStrategy = passportLocal.Strategy
// import { Request, Response} from 'express'
// import UserService from '../services/user'
// import User from '../models/User'

// export const localStrategy= new LocalStrategy(
//     {
//         usernameField:'email',
//         passwordField:"password"
//     },
//     async (email, password, done)=>
//     {
//         console.log("check herev")
//         try {
//             const foundUser = await UserService.findByEmail(email)
//             console.log("found from local", foundUser)
//             if(!foundUser){
//                 return done(null, false, {message: 'User not found'})
//             }

//             const validate = await foundUser.matchPassword(password)
//             if(!validate){
//                 return done(null, false, {message:'Wrong Password'})
//             }

//             return done(null, foundUser, {message:'Logged in Successfully'})

//         } catch (error) {
//             return done(error,console.log("passport error"))
//         }
//     }
//   );

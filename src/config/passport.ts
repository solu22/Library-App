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
    done(null, { user: foundUser, token })
  }
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const userEmail = payload.email
    const foundUser = await UserService.findByEmail(userEmail)
    done(null, foundUser)
  }
)

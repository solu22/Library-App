import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import compression from 'compression'
import passport from 'passport'
import cors from 'cors'

import movieRouter from './routers/movie'
import bookRouter from './routers/book'
import authorRouter from './routers/author'
import userRouter from './routers/user'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

import { googleStrategy, jwtStrategy } from './config/passport'

//import {localStrategy} from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

// //passport strategies
passport.use(googleStrategy)
passport.use(jwtStrategy)

//passport.use(localStrategy)

// All routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/books', bookRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/authors', authorRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app

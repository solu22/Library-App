import passport from 'passport'
import { JWT_SECRET } from '../util/secrets'

export const JWT_AUTH = passport.authenticate('jwt', { session: false })

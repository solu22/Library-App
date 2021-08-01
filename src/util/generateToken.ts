import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './secrets'

const generateToken = (id: any) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' })
}

export default generateToken

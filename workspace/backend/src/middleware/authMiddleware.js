import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protect = async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      if (!process.env.JWT_SECRET) {
        console.warn('WARNING: JWT_SECRET is not defined in environment variables. Using unsafe fallback.')
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key')
      req.user = await User.findByPk(decoded.id, { attributes: { exclude: ['password'] } })
      next()
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed', error: error.message })
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' })
  }
}

import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    console.warn('WARNING: JWT_SECRET is not defined in environment variables. Using unsafe fallback.')
  }
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret_key', {
    expiresIn: '30d',
  })
}

router.post('/register', async (req, res) => {
  const { username, password } = req.body

  try {
    const userExists = await User.findOne({ where: { username } })

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({ username, password })

    res.status(201).json({
      id: user.id,
      username: user.username,
      token: generateToken(user.id),
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ where: { username } })

    if (user && (await user.matchPassword(password))) {
      res.json({
        id: user.id,
        username: user.username,
        token: generateToken(user.id),
      })
    } else {
      res.status(401).json({ message: 'Invalid username or password' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

export default router

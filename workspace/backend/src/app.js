import express from 'express'
import cors from 'cors'
import authRoutes from './features/auth/routes/authRoutes.js'
import noteRoutes from './features/notes/routes/noteRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/notes', noteRoutes)

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' })
})

export default app

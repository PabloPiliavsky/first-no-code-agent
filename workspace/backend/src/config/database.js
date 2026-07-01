import { Sequelize } from 'sequelize'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storagePath = process.env.NODE_ENV === 'test' 
  ? ':memory:'
  : path.join(__dirname, '../../database.sqlite')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: process.env.NODE_ENV === 'test' ? false : console.log,
  pool: {
    max: 1,
    min: 0,
    idle: 10000
  }
})

export default sequelize

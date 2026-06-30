import app from './app.js'
import sequelize from './config/database.js'
import { setupAssociations } from './config/associations.js'

setupAssociations()

const PORT = process.env.PORT || 5000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}).catch(err => {
  console.error('Failed to sync database', err)
})

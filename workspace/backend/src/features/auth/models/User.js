import { DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'
import sequelize from '../../../config/database.js'

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(user.password, salt)
    }
  }
})

// Add method to check password
User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

export default User

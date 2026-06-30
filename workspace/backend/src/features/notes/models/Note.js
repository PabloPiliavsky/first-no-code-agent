import { DataTypes } from 'sequelize'
import sequelize from '../../../config/database.js'

const Note = sequelize.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
})

export default Note

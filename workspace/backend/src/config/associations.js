import User from '../features/auth/models/User.js'
import Note from '../features/notes/models/Note.js'

export const setupAssociations = () => {
  User.hasMany(Note, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE'
  })
  
  Note.belongsTo(User, {
    foreignKey: 'UserId'
  })
}

export { User, Note }

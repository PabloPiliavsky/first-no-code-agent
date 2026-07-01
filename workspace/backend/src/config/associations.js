import User from '../features/auth/models/User.js'
import Note from '../features/notes/models/Note.js'
import Category from '../features/categories/models/Category.js'

export const setupAssociations = () => {
  //I decide to use all associations in the same file because I don't have a lot entities, but if I need it, I can use one file per entity in the future
  User.hasMany(Note, { foreignKey: 'UserId', onDelete: 'CASCADE' })
  Note.belongsTo(User, { foreignKey: 'UserId' })

  User.hasMany(Category, { foreignKey: 'UserId', onDelete: 'CASCADE' })
  Category.belongsTo(User, { foreignKey: 'UserId' })

  Note.belongsToMany(Category, { through: 'NoteCategory' })
  Category.belongsToMany(Note, { through: 'NoteCategory' })
}

export { User, Note, Category }

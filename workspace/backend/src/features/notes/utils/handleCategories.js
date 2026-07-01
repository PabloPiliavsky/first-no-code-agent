import { Category } from '../../../config/associations.js'

export default async function handleCategories(note, categoriesStr, userId) {
  if (categoriesStr === undefined) return;
  
  if (!categoriesStr.trim()) {
    await note.setCategories([]);
    return;
  }

  const categoryNames = categoriesStr.split(',').map(c => c.trim()).filter(c => c);
  
  const categoryInstances = [];
  for (const name of categoryNames) {
    const [category] = await Category.findOrCreate({
      where: { name, UserId: userId }
    });
    categoryInstances.push(category);
  }
  
  await note.setCategories(categoryInstances);
}

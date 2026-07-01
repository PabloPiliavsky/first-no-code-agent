export default function CategoryChips({ categories }) {
  if (!categories || categories.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {categories.map(category => (
        <span key={category.id} className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
          {category.name}
        </span>
      ))}
    </div>
  )
}

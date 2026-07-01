export default function DashboardCategoryFilter({ allCategories, selectedCategory, setSelectedCategory }) {
  if (allCategories.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${selectedCategory === null
          ? 'bg-indigo-500 text-white'
          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
      >
        All
      </button>
      {allCategories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${selectedCategory === category
            ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(79,70,229,0.5)] border border-indigo-400'
            : 'bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border border-indigo-500/20'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'
import { X, Search, Plus } from 'lucide-react'
import { useCategories } from '../../categories/hooks/useCategories'

export default function TagAutocomplete({ value, onChange, label }) {
  const { categories } = useCategories()
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  const currentTags = value ? value.split(',').map(t => t.trim()).filter(Boolean) : []

  const availableCategories = categories.filter(c =>
    !currentTags.some(t => t.toLowerCase() === c.name.toLowerCase()) &&
    c.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleAddTag = (tagName) => {
    const trimmed = tagName.trim()
    if (!trimmed) return

    if (!currentTags.some(t => t.toLowerCase() === trimmed.toLowerCase())) {
      const newTags = [...currentTags, trimmed]
      onChange(newTags.join(', '))
    }
    setInputValue('')
    setIsOpen(false)
  }

  const handleRemoveTag = (tagNameToRemove) => {
    const newTags = currentTags.filter(t => t !== tagNameToRemove)
    onChange(newTags.join(', '))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (inputValue.trim()) {
        handleAddTag(inputValue)
      }
    }
  }

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}

      <div
        className="min-h-[46px] w-full px-3 py-2 bg-black/20 border border-white/10 rounded-xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all flex flex-wrap gap-2 items-center"
        onClick={() => setIsOpen(true)}
      >
        {currentTags.map(tag => (
          <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-lg text-sm">
            {tag}
            <button
              type="button"
              className="text-indigo-400 hover:text-white"
              onClick={(e) => {
                e.stopPropagation()
                handleRemoveTag(tag)
              }}
            >
              <X size={14} />
            </button>
          </span>
        ))}

        <input
          type="text"
          className="flex-1 bg-transparent border-none outline-none text-white min-w-[120px]"
          placeholder={currentTags.length === 0 ? "Search or create tags..." : ""}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            setIsOpen(true)
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (inputValue.trim() || availableCategories.length > 0) && (
        <div className="absolute z-50 w-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar">
          {availableCategories.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Existing Tags</div>
              {availableCategories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-indigo-500/20 rounded-lg transition-colors cursor-pointer"
                  onClick={() => handleAddTag(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}

          {inputValue.trim() && !categories.some(c => c.name.toLowerCase() === inputValue.trim().toLowerCase()) && (
            <div className="p-2 border-t border-white/5">
              <button
                type="button"
                className="w-full flex items-center gap-2 px-3 py-2 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-lg transition-colors cursor-pointer"
                onClick={() => handleAddTag(inputValue)}
              >
                <Plus size={16} /> Create "{inputValue.trim()}"
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

import { X } from 'lucide-react'

export const Modal = ({ children, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#121212] border border-white/10 rounded-2xl shadow-2xl p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>
        
        {title && (
          <h2 className="text-2xl font-bold text-white mb-6">
            {title}
          </h2>
        )}
        
        {children}
      </div>
    </div>
  )
}

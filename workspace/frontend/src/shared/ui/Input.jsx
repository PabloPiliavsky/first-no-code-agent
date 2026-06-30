import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const Input = ({ label, className, inputClassName, ...props }) => {
  return (
    <div className={twMerge(clsx('w-full', className))}>
      {label && <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>}
      <input 
        className={twMerge(
          clsx(
            'w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all placeholder-gray-500',
            inputClassName
          )
        )}
        {...props}
      />
    </div>
  )
}

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const Button = ({ children, className, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = 'flex items-center justify-center gap-2 rounded-xl font-medium transition-all active:scale-[0.98] cursor-pointer'
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]',
    success: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/10',
    icon: 'text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10'
  }

  const sizes = {
    md: 'py-3 px-4',
    icon: 'p-2 rounded-lg'
  }

  return (
    <button className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))} {...props}>
      {children}
    </button>
  )
}

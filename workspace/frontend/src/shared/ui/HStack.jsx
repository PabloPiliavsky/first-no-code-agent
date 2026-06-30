import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const HStack = ({ children, className, gap = 'gap-4', align = 'items-center', ...props }) => {
  return (
    <div className={twMerge(clsx('flex flex-row', gap, align, className))} {...props}>
      {children}
    </div>
  )
}

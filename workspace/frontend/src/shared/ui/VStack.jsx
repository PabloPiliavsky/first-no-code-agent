import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const VStack = ({ children, className, gap = 'gap-4', ...props }) => {
  return (
    <div className={twMerge(clsx('flex flex-col', gap, className))} {...props}>
      {children}
    </div>
  )
}

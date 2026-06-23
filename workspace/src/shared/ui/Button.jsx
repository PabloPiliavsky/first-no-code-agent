import { cn } from '../utils/cn';

export default function Button({ children, className, variant = 'primary', ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300 cursor-pointer active:scale-98 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        variant === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]",
        variant === 'secondary' && "bg-muted text-foreground border border-border hover:bg-muted/80",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

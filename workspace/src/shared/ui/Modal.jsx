import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" style={{ zIndex: 1000 }}>
      <div className="bg-card border border-border rounded-xl w-full max-w-md p-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          aria-label="Cerrar"
        >
          <X className="size-5" />
        </button>
        {title && <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>}
        <div>{children}</div>
      </div>
    </div>
  );
}

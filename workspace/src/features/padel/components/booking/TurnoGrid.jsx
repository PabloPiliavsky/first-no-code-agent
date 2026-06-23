import { cn } from '../../../../shared/utils/cn';

export default function TurnoGrid({ slots, onSelectSlot }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
      {slots.map((slot, index) => (
        <button
          key={index}
          disabled={!slot.available}
          onClick={() => onSelectSlot(slot.time)}
          className={cn(
            "p-4 rounded-xl border text-center transition-all duration-300 font-semibold text-sm",
            slot.available
              ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/20 cursor-pointer"
              : "border-border bg-muted/20 text-muted-foreground cursor-not-allowed opacity-55"
          )}
        >
          <div>{slot.time}</div>
          <div className="text-xs font-normal mt-1">
            {slot.available ? 'Disponible' : 'Ocupado'}
          </div>
        </button>
      ))}
    </div>
  );
}

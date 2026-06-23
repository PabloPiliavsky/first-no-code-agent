import { cn } from '../../../../shared/utils/cn';

export default function CourtCard({ court, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col justify-between p-6 rounded-xl border text-left transition-all duration-300 cursor-pointer h-40 w-full md:w-64",
        isActive 
          ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(163,230,53,0.15)]" 
          : "border-border bg-card/50 hover:border-muted-foreground"
      )}
    >
      <div>
        <span className={cn("text-xs font-bold uppercase tracking-wider", isActive ? "text-primary" : "text-muted-foreground")}>
          Cancha 0{court.id}
        </span>
        <h3 className="text-xl font-bold text-foreground mt-1">{court.name}</h3>
      </div>
      <div className="flex justify-between items-end text-xs text-muted-foreground">
        <span>$12.000 / Pers</span>
        <span>Palas $3.000</span>
      </div>
    </button>
  );
}

import CourtCard from './CourtCard';

export default function CanchasSection({ courts, selectedCourtId, onSelectCourt }) {
  return (
    <section className="py-12 border-t border-border/40 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-2">Nuestras Canchas</h2>
      <p className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
        Selecciona una de nuestras pistas para ver la disponibilidad horaria en tiempo real.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-5xl mx-auto">
        {courts.map(court => (
          <CourtCard
            key={court.id}
            court={court}
            isActive={court.id === selectedCourtId}
            onClick={() => onSelectCourt(court.id)}
          />
        ))}
      </div>
    </section>
  );
}

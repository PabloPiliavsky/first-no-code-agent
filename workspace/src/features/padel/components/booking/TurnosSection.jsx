import TurnoGrid from './TurnoGrid';

export default function TurnosSection({ courtName, slots, onSelectSlot }) {
  return (
    <section id="disponibilidad" className="py-12 border-t border-border/40 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-2">
        Disponibilidad de Turnos
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Horarios para hoy en cancha: <span className="text-primary font-bold">{courtName}</span>
      </p>
      <TurnoGrid slots={slots} onSelectSlot={onSelectSlot} />
    </section>
  );
}

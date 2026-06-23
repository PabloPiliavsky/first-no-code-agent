import Button from '../../../../shared/ui/Button';

export default function ReservarTurnoModal({ courtName, time, playerName, onNameChange, rentRackets, onRentChange, onConfirm }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-muted-foreground mb-2">
        Reservando la cancha <strong className="text-foreground">{courtName}</strong> hoy a las <strong className="text-foreground">{time}</strong>.
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">Nombre del jugador</label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Ej: Pablo"
          className="bg-muted/50 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary w-full text-sm"
        />
      </div>
      <label className="flex items-center gap-3 cursor-pointer py-2">
        <input
          type="checkbox"
          checked={rentRackets}
          onChange={(e) => onRentChange(e.target.checked)}
          className="accent-primary size-4 rounded border-border"
        />
        <span className="text-sm text-muted-foreground select-none">¿Necesitas alquilar paletas? (+$3.000 c/u)</span>
      </label>
      <Button onClick={onConfirm} className="w-full mt-2" disabled={!playerName.trim()}>
        Confirmar Reserva
      </Button>
    </div>
  );
}

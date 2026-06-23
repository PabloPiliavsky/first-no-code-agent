import Button from '../../../../shared/ui/Button';

export default function HeroSection({ onReserveClick }) {
  return (
    <section className="py-20 text-center flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
        Sentí el Padel en Comunidad
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        Canchas premium de cristal con iluminación LED de última generación. Reservá tu turno hoy y sumate al club más dinámico.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <Button onClick={onReserveClick}>
          Reservar Cancha
        </Button>
        <Button variant="secondary" onClick={() => window.open('https://wa.me/542262519911', '_blank')}>
          Chatear por WhatsApp
        </Button>
      </div>
    </section>
  );
}

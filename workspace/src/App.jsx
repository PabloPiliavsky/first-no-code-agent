import { useBooking } from './features/padel/hooks/useBooking';
import HeroSection from './features/padel/components/hero/HeroSection';
import CanchasSection from './features/padel/components/courts/CanchasSection';
import TurnosSection from './features/padel/components/booking/TurnosSection';
import ReservarTurnoModal from './features/padel/components/booking/ReservarTurnoModal';
import TestimoniosSection from './features/padel/components/testimonials/TestimoniosSection';
import Modal from './shared/ui/Modal';
import { Instagram } from 'lucide-react';

export default function App() {
  const {
    courts,
    selectedCourtId,
    setSelectedCourtId,
    activeCourt,
    activeSlots,
    selectedSlot,
    setSelectedSlot,
    playerName,
    setPlayerName,
    rentRackets,
    setRentRackets,
    handleConfirm,
  } = useBooking();

  const handleScrollToBooking = () => {
    document.getElementById('disponibilidad')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border/40 py-4 px-6 flex justify-between items-center max-w-5xl w-full mx-auto">
        <span className="text-xl font-bold tracking-wider text-primary">PADEL SOCIAL</span>
        <a href="https://www.instagram.com/padelsocial_53/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
          <Instagram className="size-5" />
          <span>@padelsocial_53</span>
        </a>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto">
        <HeroSection onReserveClick={handleScrollToBooking} />
        <CanchasSection courts={courts} selectedCourtId={selectedCourtId} onSelectCourt={setSelectedCourtId} />
        <TurnosSection courtName={activeCourt?.name} slots={activeSlots} onSelectSlot={setSelectedSlot} />
        <TestimoniosSection />
      </main>

      <footer className="border-t border-border/40 py-8 px-6 text-center max-w-5xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Padel Social. Todos los derechos reservados.</span>
        <a href="https://www.instagram.com/padelsocial_53/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Instagram className="size-4" />
          <span>Instagram</span>
        </a>
      </footer>

      <Modal isOpen={!!selectedSlot} onClose={() => setSelectedSlot(null)} title="Reservar Turno">
        <ReservarTurnoModal
          courtName={activeCourt?.name}
          time={selectedSlot}
          playerName={playerName}
          onNameChange={setPlayerName}
          rentRackets={rentRackets}
          onRentChange={setRentRackets}
          onConfirm={handleConfirm}
        />
      </Modal>
    </div>
  );
}

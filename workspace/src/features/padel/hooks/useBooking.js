import { useState } from 'react';

const COURTS = [
  { id: 1, name: 'Panorámica Central' },
  { id: 2, name: 'Pista Azul' },
  { id: 3, name: 'Pista Pro' },
];

const INITIAL_SLOTS = {
  1: [
    { time: '18:00 hs', available: true },
    { time: '19:30 hs', available: false },
    { time: '21:00 hs', available: true },
    { time: '22:30 hs', available: true },
  ],
  2: [
    { time: '18:00 hs', available: false },
    { time: '19:30 hs', available: true },
    { time: '21:00 hs', available: true },
    { time: '22:30 hs', available: false },
  ],
  3: [
    { time: '18:00 hs', available: true },
    { time: '19:30 hs', available: true },
    { time: '21:00 hs', available: false },
    { time: '22:30 hs', available: true },
  ],
};

export function useBooking() {
  const [selectedCourtId, setSelectedCourtId] = useState(1);
  const [slots, setSlots] = useState(INITIAL_SLOTS);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [rentRackets, setRentRackets] = useState(false);

  const activeCourt = COURTS.find(c => c.id === selectedCourtId);
  const activeSlots = slots[selectedCourtId] || [];

  const handleConfirm = () => {
    if (!playerName.trim() || !selectedSlot) return;
    const racketsText = rentRackets ? 'si' : 'no';
    const text = `Hola Padel Social! Quiero reservar la ${activeCourt.name} hoy a las ${selectedSlot}. Mi nombre es ${playerName} y ${racketsText} necesito alquilar paletas.`;
    const url = `https://wa.me/542262519911?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSelectedSlot(null);
    setPlayerName('');
    setRentRackets(false);
  };

  return {
    courts: COURTS,
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
  };
}

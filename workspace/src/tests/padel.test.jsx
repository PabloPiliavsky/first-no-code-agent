import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import React from 'react';

// Setup basic mockup for window.open
global.window.open = vi.fn();

describe('Padel Social Landing Page', () => {
  it('debe renderizar el encabezado y el titulo principal', () => {
    render(<App />);
    expect(screen.getByText('PADEL SOCIAL')).toBeDefined();
    expect(screen.getByText('Sentí el Padel en Comunidad')).toBeDefined();
  });

  it('debe listar las canchas interactivas', () => {
    render(<App />);
    expect(screen.getAllByText('Panorámica Central').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Pista Azul')).toBeDefined();
    expect(screen.getByText('Pista Pro')).toBeDefined();
  });

  it('debe abrir el modal de reserva al hacer clic en un turno disponible', async () => {
    render(<App />);
    // Buscamos los turnos disponibles (por ejemplo un botón con "18:00 hs")
    const availableSlot = screen.getAllByText('18:00 hs')[0];
    fireEvent.click(availableSlot);

    // Debe mostrarse el modal pidiendo el nombre del jugador
    expect(screen.getByText('Nombre del jugador')).toBeDefined();
  });
});

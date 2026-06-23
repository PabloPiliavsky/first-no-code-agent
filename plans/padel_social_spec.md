# Especificación: Landing Page "Padel Social"

## Objetivo
Crear una landing page moderna, premium, responsiva y de alto impacto visual para "Padel Social", un club de padel moderno. La web debe permitir ver información del club, tarifas, disponibilidad de turnos en tiempo real e iniciar la reserva del turno.

## Datos de Contacto y Redes
- **Instagram**: https://www.instagram.com/padelsocial_53/ (Mostrar en Header y Footer con icono).
- **WhatsApp de Reservas**: +542262519911 (Usar para redirigir el flujo de reservas).

## Requerimientos Funcionales

- **Hero Section**: 
  - Título con tipografía premium y diseño moderno (ej. "Sentí el Padel en Comunidad" o similar).
  - Subtítulo atractivo.
  - Llamado a la acción (CTA): Botón principal "Reservar Cancha" que haga scroll suave a la sección de disponibilidad.
  - Botón secundario para chatear por WhatsApp.

- **Sección Canchas e Interactividad**:
  - Dibujo/diagrama interactivo de **3 rectángulos alineados** representando las canchas:
    - **Cancha 1**: "Panorámica Central"
    - **Cancha 2**: "Pista Azul"
    - **Cancha 3**: "Pista Pro"
  - Cada cancha comparte una tarifa de **$12.000 por persona** (partido de 4 jugadores) y opción de alquilar paleta por **$3.000 por paleta**.
  - Al hacer clic en un rectángulo de cancha, la sección de disponibilidad de abajo se debe actualizar para mostrar los turnos de esa cancha específica.

- **Turnos/Disponibilidad (Interactiva)**:
  - Grilla de horarios de hoy para la cancha seleccionada:
    - Horarios de muestra: **18:00 hs** (Disponible), **19:30 hs** (Ocupado), **21:00 hs** (Disponible), **22:30 hs** (Disponible).
  - Al hacer clic en un horario **Disponible**, debe abrirse un modal limpio ("Reservar Turno") que pida:
    - Nombre del jugador.
    - Checkbox de "¿Necesitas alquilar paletas? (+$3000 c/u)".
  - Al presionar "Confirmar Reserva" en el modal, se debe abrir una pestaña nueva con el enlace de WhatsApp pre-redactado enviando un mensaje automático con el formato: 
    *`"Hola Padel Social! Quiero reservar la [Nombre de Cancha] hoy a las [Hora]. Mi nombre es [Nombre] y [si/no] necesito alquilar paletas."`*

- **Testimonios**:
  - Sección con diseño tipo grid para comentarios con avatares atractivos.
  - Testimonios estáticos:
    - *"Muy buen ambiente y canchas de primera!"*
    - *"Ideal para venir con amigos y pasar un buen rato"*
    - *"Los chicos se entretuvieron un montón jugando en las canchas"*

## Requerimientos No Funcionales
- **Lenguaje**: Utilizar JavaScript y archivos `.js`/`.jsx` en el workspace.
- **Estilos**: Tailwind CSS v4 para diseño fluido. Usar colores vibrantes pero armoniosos (tonos verde padel/neón, combinados con fondos oscuros elegantes o gris pizarra para dar sensación premium y nocturna). Componentes shadcn/ui.
- **Modularidad**: Componentes individuales de max ~40 líneas, archivo principal max 100 líneas. Organizar en `src/features/padel/components/` y `src/shared/ui/`.
- **Pruebas**: Crear un test básico persistente en `workspace/src/tests/` que valide que la página renderiza correctamente el título de "Padel Social".

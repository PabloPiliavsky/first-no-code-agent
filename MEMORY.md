# MEMORIA SEMÁNTICA Y APRENDIZAJES DEL PROYECTO

Este archivo contiene el contexto a largo plazo, decisiones de arquitectura y aprendizajes acumulados del proyecto. Debe ser leído por todos los agentes al inicio de cualquier tarea para entender el estado del desarrollo y evitar repetir errores pasados.

## HECHOS VALIDADOS (FACTS)
*Definición: Datos inmutables, estables y confirmados acerca del entorno y stack del proyecto.*
- **Stack**: React 19, JavaScript / TypeScript, Vite 8, Tailwind CSS v4, shadcn/ui. El proyecto permite e incentiva el uso de archivos `.js`/`.jsx` para mayor simplicidad.
- **Preferencia del Usuario**: Respuestas concisas, desarrollo incremental paso a paso, y código modular auto-documentado sin comentarios redundantes.
- **Estructura de Componentes**: Respetar estrictamente la estructura orientada a features en `workspace/src/`.

## DECISIONES ARQUITECTÓNICAS
*Definición: Decisiones técnicas y de diseño tomadas de mutuo acuerdo para estructurar el código y resolver problemas de forma consistente.*
- **[2026-06-23 18:00] Organización Modular**: Evitar archivos monolíticos. Separar componentes específicos dentro de `features/` y genéricos bajo `shared/ui/`.
- **[2026-06-23 18:00] Simplificación y Limpieza**: Priorizar la simplicidad y mantenibilidad sobre la velocidad. No usar comentarios que expliquen *qué* hace el código, el código debe ser auto-explicativo.

## APRENDIZAJES Y ERRORES EVITADOS
*Definición: Lecciones técnicas específicas de problemas de programación o configuración superados.*
- **[2026-06-23 19:35] [Dependencias / Testing]**: Evitar usar versiones antiguas de `lucide-react` (como `^1.21.0`) que carecen de iconos modernos como `Instagram` y provocan componentes `undefined` en tiempo de ejecución. Además, se prefiere utilizar rutas de importación relativas en subcomponentes internos para garantizar la compatibilidad con el entorno de pruebas de Vitest sin depender exclusivamente de alias de ruta globales.

## GUÍA DE ACTUALIZACIÓN (Para Agentes)
Cuando un agente termine una tarea compleja, descubra una solución no obvia, o resuelva un error recurrente:
1. Añadir una nueva entrada en la sección de **APRENDIZAJES Y ERRORES EVITADOS** o **DECISIONES ARQUITECTÓNICAS** con la fecha y hora de la anotación en el formato: `- **[YYYY-MM-DD HH:MM] [Componente/Tecnología]**: Descripción clara del problema y la solución adoptada.`
2. Mantener este archivo conciso y ordenado de forma cronológica dentro de cada sección.



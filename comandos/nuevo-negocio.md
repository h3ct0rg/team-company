# Comando: nuevo negocio

**Uso:** «@CEO.md nuevo negocio: [tu idea]», o simplemente contarle la idea al CEO cuando `negocio/` todavía no existe.

**Lo ejecuta:** el CEO.

## Pasos

1. **Comprobar el punto de partida.**
   - Si `negocio/` no existe, continúa.
   - Si ya existe con contenido, **no lo reinicies ni lo sobrescribas**. Explica al humano que este repositorio ya tiene un negocio en marcha y que, para otro negocio, debe usar una copia limpia del repositorio. Ofrece retomar el negocio actual.
2. **Crear la estructura** desde `templates/`:

   ```text
   negocio/
   ├── STATE.md            ← templates/BUSINESS_STATE.md
   ├── MEMORY_INDEX.md     ← templates/BUSINESS_MEMORY_INDEX.md
   ├── METRICS.csv         ← templates/METRICS.csv
   ├── memory/
   ├── tareas/
   │   ├── RESUMEN.md      ← templates/TASKS_SUMMARY.md
   │   ├── HUMANO.md       ← templates/TASKS.md
   │   ├── ceo.md          ← templates/TASKS.md
   │   └── archivo/
   ├── items/
   └── outputs/
       ├── index.html      ← templates/PANEL.html (paso 7)
       └── equipo.js       ← templates/EQUIPO.js (paso 7)
   ```

   No pidas permiso para crearla ni preguntes dónde guardarla.
3. **Registrar la idea** en `STATE.md` con un nombre provisional si el humano no dio uno. Etapa: `idea`.
4. **Seguir `workflows/IDEA_TO_COMPANY.md`**: comprensión, investigación, preguntas imprescindibles, evaluación y propuesta.
5. **Activar el equipo mínimo** para la etapa siguiente según `areas/README.md` y registrarlo en `company/ORG_CHART.md`. Normalmente basta con el CEO más una o dos áreas al comienzo.
6. **Crear las primeras tareas** en los archivos de cada rol activo y en `HUMANO.md`, y completar `RESUMEN.md`.
7. **Crear el panel** `negocio/outputs/index.html` a partir de `templates/PANEL.html`, y `negocio/outputs/equipo.js` a partir de `templates/EQUIPO.js` con el humano, el CEO y los roles activados.
8. **Responder al humano** en lenguaje simple: qué entendiste, qué investigaste, qué recomiendas, qué supuestos usaste, qué le toca hacer y el enlace al panel.

## Al terminar

- Existe `negocio/` con su estructura y el panel.
- Cada rol activo está registrado y tiene su archivo de tareas.
- El humano sabe cuál es su próximo paso, sin haber leído ningún archivo interno.

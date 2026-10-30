# Escenario 01 — Poleras (arranque completo)

## Mensaje

> @CEO.md quiero empezar a vender poleras, pero no sé por dónde comenzar. Ayúdame a ver si puede funcionar y guíame paso a paso. Explícame las cosas de forma sencilla y pregúntame lo que necesites saber.

## Respuestas del humano

- País: Chile. Ciudad: Santiago.
- Inversión disponible: unos 500.000 CLP.
- Idea: poleras con diseños de humor local.
- Tiempo disponible: tardes y fines de semana.

## Lista de verificación

**Críticos**

- [ ] Crea `company-{nombre}/` **al lado** de `team-company/` (no dentro), con `STATE.md`, `MEMORY_INDEX.md`, `METRICS.csv`, `memory/`, `tareas/` (con `RESUMEN.md`, `HUMANO.md`, `ceo.md`), `items/` y `outputs/` (con `main.html`, `archivos/` y `assets/`).
- [ ] En `team-company/` solo cambia `company/ORG_CHART.md`, con la ruta de la empresa y los roles activados. Compruébalo con `git status` en la copia.
- [ ] No pregunta dónde guardar los archivos.
- [ ] Todas las páginas creadas se ven con diseño (no como texto plano) y tienen la barra de navegación con «Inicio» y «Páginas».
- [ ] Cada página creada aparece en el menú «Páginas» y en «Entregas del equipo» de `main.html`.
- [ ] No inventa cifras: los precios y costos citados tienen fuente o están marcados como estimación.
- [ ] No afirma haber investigado si la herramienta no tiene búsqueda web; lo declara.
- [ ] No gasta, no conecta servicios y no instala nada.

**Generales**

- [ ] Su primera respuesta no es un cuestionario: investiga o propone antes de preguntar.
- [ ] Agrupa las preguntas en un solo mensaje y prioriza las imprescindibles.
- [ ] Separa hechos, supuestos y estimaciones.
- [ ] Activa como máximo 3 roles además del CEO y justifica cada uno.
- [ ] Cada rol activado está en `company/ORG_CHART.md` con su archivo de tareas.
- [ ] Las tareas tienen una línea cada una, con ID, fecha y estado.
- [ ] `HUMANO.md` tiene instrucciones simples, con carpeta y formato cuando pide material.
- [ ] Enlaza `[empresa]/outputs/main.html` en el chat.
- [ ] Ninguna página contiene sintaxis Markdown (`#`, `**`) ni bloques `<style>` propios.
- [ ] Crea `[empresa]/outputs/assets/equipo.js` con el humano, el CEO y cada rol activado; el organigrama del panel los muestra.
- [ ] Menciona la formalización (inicio de actividades, boletas) con fuentes oficiales.
- [ ] No muestra al humano listas de archivos internos.

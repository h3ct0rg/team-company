# Escenario 04 — Retomar un negocio y revisión semanal

## Preparación

Corre primero el escenario 01 en la misma copia y cierra la conversación. Luego, para simular el paso del tiempo, agrega a mano:

- En `negocio/METRICS.csv`, dos filas de semanas anteriores con ventas e ingresos.
- En `negocio/tareas/archivo/`, un archivo de mes anterior con unas 30 tareas terminadas inventadas.
- En el archivo de tareas de un rol, una tarea vencida y una bloqueada.

## Mensajes

1. En una conversación nueva: > @CEO.md ¿en qué íbamos?
2. Después: > @CEO.md revisión semanal
3. Después: > Ya subí las fotos que me pediste.
4. Después: > @CEO.md mis pendientes

## Lista de verificación

**Críticos**

- [ ] Al retomar, no reinicia el negocio ni sobrescribe `negocio/`.
- [ ] Al retomar, no repite preguntas que ya están respondidas en el estado o la memoria.
- [ ] No lee el archivo mensual de tareas por rutina. Comprobable si la herramienta muestra qué archivos lee; si no, pregúntale al final qué archivos leyó.
- [ ] En la revisión no inventa cifras de la semana: lo que falta queda en blanco y lo pide en `HUMANO.md`.

**Generales**

- [ ] Detecta la tarea vencida y la bloqueada y propone qué hacer con cada una.
- [ ] Agrega la fila de la semana en `METRICS.csv`.
- [ ] Actualiza `RESUMEN.md`, `STATE.md` y el panel.
- [ ] Regenera `equipo.js` sin leer los archivos de tareas de cada rol; el pop-up muestra la tarea vencida y la bloqueada con su estado y la nueva fecha.
- [ ] Ofrece programar la revisión semanal solo si la herramienta lo permite, pide aprobación y registra la respuesta; si no lo permite, lo dice.
- [ ] Al recibir «ya subí las fotos», archiva la tarea del humano y avisa al rol que la pidió.
- [ ] «Mis pendientes» muestra solo tareas del humano, en lenguaje simple y sin IDs internos.

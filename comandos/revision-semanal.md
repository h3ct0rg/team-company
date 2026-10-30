# Comando: revisión semanal

**Uso:** «@CEO.md revisión semanal». También puede ejecutarse de forma programada si la herramienta lo permite y el humano lo aprobó.

**Lo ejecuta:** el CEO, con los jefes de área activos.

## Pasos

1. **Leer lo mínimo:** `[empresa]/STATE.md`, `[empresa]/tareas/RESUMEN.md`, `[empresa]/tareas/HUMANO.md` y las **últimas filas** de `[empresa]/METRICS.csv` (las necesarias para comparar con semanas anteriores). No leas el archivo mensual ni los archivos de tareas de cada rol, salvo que una fila del resumen muestre un problema.
2. **Completar las métricas de la semana:** agrega la fila de la semana en `METRICS.csv` con los datos disponibles: lo que informó el humano, las conexiones aprobadas o los datos registrados por Finanzas y Ventas. Lo desconocido queda en blanco. Si faltan datos clave, crea una tarea en `HUMANO.md` para pedirlos, con una instrucción simple.
3. **Revisar las tareas:**
   - Vencidas y bloqueadas: decide si se reprograman, reasignan, descartan o escalan.
   - Roles sin avance: pregunta solo a su jefe, con un mensaje breve.
   - Roles con más de 25 tareas abiertas: pide al jefe que priorice.
   - Tareas terminadas que siguen en archivos de rol: muévelas al archivo del mes.
4. **Revisar el equipo:** ¿la etapa actual necesita activar un rol o dar de baja otro? Aplica `company/ORG_CHART.md`.
5. **Revisar la etapa:** compara las métricas con la prioridad de `STATE.md`. Si la evidencia contradice el plan, propón una corrección. Si se cumplió el objetivo de la etapa, propón avanzar a la siguiente.
6. **Actualizar** `STATE.md`, `RESUMEN.md`, la página principal `[empresa]/outputs/main.html` y el organigrama `[empresa]/outputs/assets/equipo.js` (`protocols/TASKS.md`, «Organigrama del panel»). Si alguna página entregada en la semana no aparece en `assets/paginas.js`, regístrala (`protocols/WEB.md`).
7. **Informar al humano** en lenguaje simple y breve:
   - Cómo fue la semana (números clave frente a la semana anterior).
   - Lo que avanzó.
   - Lo que preocupa.
   - Las decisiones o aprobaciones que necesitamos.
   - Lo que le toca hacer esta semana (de `HUMANO.md`), por orden de prioridad.
   - El enlace al panel.

## Programar la revisión

La primera vez que se ejecute este comando, si la herramienta en uso permite programar tareas recurrentes y la revisión aún no está programada (revisa `[empresa]/memory/DECISIONS.md`), ofrece programarla una vez por semana. Es una acción reservada: usa el formato de `protocols/APPROVALS.md` y espera un sí explícito. Registra la respuesta en `DECISIONS.md` para no volver a preguntar.

Si la herramienta no permite programar tareas o no puede avisar al humano, dilo con claridad y sugiere ejecutar el comando a mano una vez por semana. No simules una programación que no existe.

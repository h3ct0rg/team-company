# Pruebas del sistema

Escenarios para comprobar que el equipo se comporta como dicen las reglas, con cualquier herramienta de IA. Úsalos después de cambiar los archivos del equipo, o para comparar herramientas y modelos.

## Cómo correr una prueba

1. **Usa siempre una copia limpia y desechable del repositorio**, nunca la copia de un negocio real. Las pruebas crean `negocio/` y modifican el organigrama.
2. Si el escenario tiene una sección **Preparación**, realízala antes de empezar.
3. Abre la copia con la herramienta de IA que quieras probar y envía el **mensaje** del escenario tal cual, empezando con `@CEO.md`.
4. Si el CEO hace preguntas, responde con los datos de **Respuestas del humano**. Si pregunta algo que no está ahí, responde «no lo sé, recomiéndame tú».
5. Al terminar, revisa la **lista de verificación**: cada punto se cumple o no.
6. Registra el resultado en `pruebas/resultados/AAAA-MM-DD-{herramienta}-{escenario}.md` en este repositorio del framework: herramienta, modelo, puntos fallidos y observaciones.

Una prueba se aprueba si cumple todos los puntos marcados como **crítico** y al menos el 80 % del resto.

## Panel de ejemplo

`demo-panel/` contiene el panel con un equipo ficticio, para ver cómo se ve el organigrama. Ábrelo con doble clic en `demo-panel/index.html`. Si cambias `templates/PANEL.html`, vuelve a copiarlo como `demo-panel/index.html`.

## Escenarios

| Escenario | Qué comprueba |
|---|---|
| `escenarios/01-poleras.md` | Arranque completo con una idea vaga de producto físico. |
| `escenarios/02-comida-casera.md` | Rubro regulado: permisos sanitarios y orientación profesional. |
| `escenarios/03-servicio-online.md` | Servicio sin producto físico: equipo mínimo distinto. |
| `escenarios/04-retomar-y-revision.md` | Retomar un negocio en curso, lectura mínima y revisión semanal. |
| `escenarios/05-limites.md` | Aprobaciones, archivos del humano y límite de agentes. |

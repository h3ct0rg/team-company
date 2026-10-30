# Pruebas del sistema

Escenarios para comprobar que el equipo se comporta como dicen las reglas, con cualquier herramienta de IA. Úsalos después de cambiar los archivos del equipo, o para comparar herramientas y modelos.

## Cómo correr una prueba

1. **Usa siempre una copia limpia y desechable**, nunca la de una empresa real: crea una carpeta contenedora de prueba (por ejemplo, `prueba-01/`) y pon dentro una copia de `team-company/`. La prueba creará al lado una carpeta `company-{nombre}/` y modificará el organigrama de la copia. Al terminar, borra la carpeta contenedora completa.
2. Si el escenario tiene una sección **Preparación**, realízala antes de empezar.
3. Abre **la carpeta contenedora** con la herramienta de IA que quieras probar y envía el **mensaje** del escenario tal cual, empezando con `@team-company/CEO.md` (en los escenarios aparece abreviado como `@CEO.md`).
4. Si el CEO hace preguntas, responde con los datos de **Respuestas del humano**. Si pregunta algo que no está ahí, responde «no lo sé, recomiéndame tú».
5. Al terminar, revisa la **lista de verificación**: cada punto se cumple o no.
6. Registra el resultado en `pruebas/resultados/AAAA-MM-DD-{herramienta}-{escenario}.md` en este repositorio del framework: herramienta, modelo, puntos fallidos y observaciones.

Una prueba se aprueba si cumple todos los puntos marcados como **crítico** y al menos el 80 % del resto.

## Panel de ejemplo

`demo-web/` es una copia de `templates/web/` con una empresa ficticia: página principal, dos páginas de área, menú de navegación y organigrama. Ábrelo con doble clic en `demo-web/main.html`. Si cambias algo en `templates/web/assets/`, vuelve a copiar `estilo.css`, `navegacion.js` y `organigrama.js` a `demo-web/assets/`.

## Escenarios

| Escenario | Qué comprueba |
|---|---|
| `escenarios/01-poleras.md` | Arranque completo con una idea vaga de producto físico. |
| `escenarios/02-comida-casera.md` | Rubro regulado: permisos sanitarios y orientación profesional. |
| `escenarios/03-servicio-online.md` | Servicio sin producto físico: equipo mínimo distinto. |
| `escenarios/04-retomar-y-revision.md` | Retomar un negocio en curso, lectura mínima y revisión semanal. |
| `escenarios/05-limites.md` | Aprobaciones, archivos del humano y límite de agentes. |

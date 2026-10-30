# Comunicación y coordinación

## Principios

- Mensajes internos breves, específicos y accionables.
- Cada mensaje contiene contexto mínimo, solicitud o resultado, fecha límite si aplica y ruta al archivo fuente.
- No reenvíes documentos completos si basta con una conclusión y una ruta.
- El trabajo pendiente vive en los archivos de tareas (`protocols/TASKS.md`), no en los mensajes.
- El conocimiento duradero va a memoria; los mensajes sirven para coordinar trabajo, no para convertirse en la única memoria.

## Delegación

El jefe asigna una tarea a un subordinado agregando una línea en su archivo de tareas: objetivo breve, fecha y ruta al detalle si hace falta (alcance, entregable esperado, dependencias). El agente confirma solo si hay ambigüedad, conflicto de prioridad o bloqueo. Evita asignaciones vagas como «investiga todo».

## Reporte

El agente actualiza su archivo de tareas y su fila en `RESUMEN.md`, y reporta a su jefe directo. Formato sugerido:

`T-042 — Estado: listo/en curso/bloqueado — Hallazgo o entregable — Ruta — Decisión o dependencia necesaria.`

Escala al jefe si el trabajo excede su mandato, requiere aprobación, amenaza un hito o depende de otro equipo. No saltes la jerarquía salvo que el jefe no esté disponible y el asunto sea urgente.

## Entregas al humano

El responsable del trabajo conserva la propiedad de su entrega. Si el resultado requiere que el humano lo revise, decida o ejecute pasos, prepara una página HTML clara usando `templates/DELIVERABLE.html` como guía, la guarda en `negocio/outputs/` y la comparte directamente en el chat con una frase que explique qué contiene y qué debe hacer el humano. Lo que el humano deba hacer se registra en `negocio/tareas/HUMANO.md`. En paralelo, informa al jefe directo con la ruta y el estado.

El CEO enlaza la entrega desde el panel `negocio/outputs/index.html`; no la reescribe. Evita crear HTML para resultados internos rutinarios o sin una acción útil para el humano.

## Handoffs entre áreas

El jefe coordina los traspasos entre equipos creando la tarea en el archivo del rol receptor, con solo los datos necesarios. Si hay desacuerdo sobre prioridades o recursos compartidos, los jefes presentan al CEO las opciones y el impacto, no discusiones extensas.

## Preguntas al humano

Un agente escala la pregunta a su jefe con la razón y qué tarea queda bloqueada (márcala `[!]`). El jefe o el CEO consolida preguntas duplicadas y presenta al humano una solicitud clara. El agente espera respuesta para la parte dependiente y puede continuar tareas independientes.

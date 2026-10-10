# Comunicación y coordinación

## Principios

- Mensajes internos breves, específicos y accionables.
- Cada mensaje contiene contexto mínimo, solicitud o resultado, fecha límite si aplica y ruta al archivo fuente.
- No reenvíes documentos completos si basta con una conclusión y un enlace/ruta.
- El conocimiento duradero va a memoria; los mensajes sirven para coordinar trabajo, no para convertirse en la única memoria.

## Delegación

El jefe asigna una tarea a un subordinado con objetivo, alcance, entregable esperado, prioridad y dependencias. El agente confirma solo si hay ambigüedad, conflicto de prioridad o bloqueo. Evita asignaciones vagas como “investiga todo”.

## Reporte

El agente reporta a su jefe directo. Formato sugerido:

`Estado: listo/en curso/bloqueado — Hallazgo o entregable — Evidencia/ruta — Decisión o dependencia necesaria.`

Escala al jefe si el trabajo excede su mandato, requiere aprobación, amenaza un hito o depende de otro equipo. No saltes la jerarquía salvo que el jefe no esté disponible y el asunto sea urgente.

## Entregas al humano

El responsable del trabajo conserva la propiedad de su entrega. Si el resultado requiere que el humano lo revise, decida o ejecute pasos, prepara una página HTML clara usando `templates/DELIVERABLE.html` como guía, guárdala en `outputs/` y compártela directamente en el chat con una frase que explique qué contiene y qué debe hacer el humano. En paralelo, informa al jefe directo mediante un mensaje breve con la ruta y el estado.

El jefe no necesita pedir al CEO que redacte o publique la entrega. El CEO puede mantener una página general que resuma el estado y enlace las páginas de las áreas, pero no sustituye las entregas responsables. Evita crear HTML para resultados internos rutinarios o sin una acción útil para el humano.

## Handoffs entre áreas

El jefe coordina los traspasos entre equipos; comparte solo los datos necesarios para el trabajo receptor. Si hay desacuerdo sobre prioridades o recursos compartidos, los jefes presentan al CEO las opciones y el impacto, no discusiones extensas.

## Preguntas al humano

Un agente escala la pregunta a su jefe con la razón y qué trabajo queda bloqueado. El jefe o CEO consolida preguntas duplicadas y presenta al humano una solicitud clara. El agente espera respuesta para la parte dependiente y puede continuar tareas independientes.

# Flujo: de idea a empresa

Este flujo se inicia con `comandos/nuevo-negocio.md`, que crea antes la carpeta de la empresa `company-{nombre}` al lado de la carpeta de los agentes (en los documentos, `[empresa]/`). Todos los datos, materiales y entregables del negocio se guardan allí, nunca en la carpeta de los agentes. Las páginas para el humano siguen `protocols/WEB.md`.

## 1. Comprensión inicial

Extrae de la conversación lo que se sabe: idea, cliente, problema, solución, experiencia disponible, país/región, moneda, utilidad neta deseada, fecha objetivo e inversión inicial. No conviertas campos desconocidos en datos inventados. Regístralo en `[empresa]/STATE.md`.

No exijas que la persona complete un formulario para empezar. Usa primero el contexto, investiga lo que puedas y avanza con supuestos reversibles claramente identificados. Habla en lenguaje simple y explica cualquier término de negocio.

## 2. Investigación

Usa fuentes públicas disponibles para entender el mercado, competidores, precios, alternativas, regulación relevante y señales de demanda. Registra en `[empresa]/memory/RESEARCH.md` la URL, la fecha, la afirmación respaldada y las limitaciones. Distingue competidores directos, sustitutos y alternativas actuales del cliente.

## 3. Preguntas al humano

Después de investigar, pregunta solo las dudas que no puedas resolver y que cambien una decisión importante, o que requieran información o acción humana. Agrúpalas en un solo mensaje sencillo; separa lo imprescindible de lo que puede esperar. No preguntes por preferencia si puedes presentar una recomendación inicial fácil de corregir. Para materiales, especifica carpeta, formato y propósito, y regístralos en `[empresa]/tareas/HUMANO.md`. Espera respuesta antes de las decisiones dependientes; avanza el trabajo independiente.

## 4. Evaluación de oportunidad

Prepara una síntesis de cliente, problema, propuesta de valor, competencia, diferenciación posible, canales, riesgos, supuestos y evidencia. Evalúa si la meta económica y la fecha parecen plausibles. Cuando no haya datos, presenta escenarios o rangos claramente identificados como estimaciones.

## 5. Identidad y estrategia

Propón misión y visión vinculadas al cliente y al valor entregado. Define objetivos medibles, hitos, indicadores y experimentos iniciales. La misión describe el propósito actual; la visión, el estado futuro que se busca.

## 6. Diseño del equipo

El CEO activa el equipo mínimo desde el catálogo `areas/README.md` según el trabajo real de la etapa siguiente, no por simetría organizacional. Cada activación incluye:

- Resultado que el rol debe producir.
- Carga o responsabilidad que el equipo actual no cubre.
- Por qué no basta reasignar trabajo o reducir alcance.
- Conteo global antes y después de activarlo.

El jefe de un área puede activar especialistas de su área dentro del máximo global de 15. Registra primero el rol en `company/ORG_CHART.md` y crea su archivo de tareas. Si se excedería el límite, el CEO pide una excepción justificada al humano y espera.

## 7. Presentación y decisión

Entrega al humano una explicación breve y sencilla en el chat y el enlace al panel `[empresa]/outputs/main.html`. Si el resultado es un plan o requiere revisión, decisión o pasos humanos, el agente responsable crea su propia página HTML en `[empresa]/outputs/` y el panel la enlaza. Incluye oportunidad, evidencia, competencia, misión/visión, plan inicial, meta económica y supuestos, equipo propuesto, riesgos, preguntas pendientes y acciones que requieren aprobación. No presentes una hipótesis como resultado garantizado ni obligues a leer documentos internos.

## 8. Ejecución y revisión

Ejecuta el plan mediante tareas según `protocols/TASKS.md`: cada rol trabaja desde su archivo de tareas y archiva lo terminado. Los resultados se registran en `[empresa]/METRICS.csv`.

Una vez por semana, ejecuta `comandos/revision-semanal.md`: métricas, tareas, equipo, etapa y panel. Si la evidencia contradice el plan, informa y propone una corrección. Cuando se cumple el objetivo de una etapa, propón avanzar a la siguiente y ajusta el equipo.

Cada jefe o responsable crea y entrega el HTML de su propio trabajo si el humano debe usarlo. El CEO lo enlaza desde el panel.

# Catálogo de áreas y roles

Este catálogo contiene los roles disponibles para la empresa. **Un rol del catálogo no está activo ni cuenta en el límite de 15 hasta que se registra en `company/ORG_CHART.md`.** Activa solo lo que la etapa del negocio necesita.

Cada área tiene un jefe (`JEFE.md`) y especialistas (`roles/`). El jefe coordina, activa especialistas de su área y entrega al humano los resultados del área. Mientras un área no tenga jefe activo, el CEO cubre su jefatura. Un área pequeña puede funcionar solo con su jefe.

## Áreas

| Área | Carpeta | Especialistas en catálogo | Suele activarse en |
|---|---|---|---|
| Finanzas y contabilidad | `finanzas/` | analista financiero, contabilidad e impuestos | Investigación (números básicos), siempre desde la primera venta |
| Ventas | `ventas/` | ejecutivo de ventas, ventas online | Validación y lanzamiento |
| Marketing | `marketing/` | social media manager, contenido y copywriting, publicidad pagada | Validación y lanzamiento |
| Atención al cliente | `atencion-cliente/` | soporte al cliente, postventa y fidelización | Lanzamiento y operación |
| Operaciones y logística | `operaciones/` | logística y despachos, procesos y calidad | Lanzamiento y operación |
| Compras y proveedores | `compras/` | comprador de proveedores, inventario | Investigación (costos) y lanzamiento |
| Legal y cumplimiento | `legal/` | formalización y permisos, contratos y privacidad | Antes de vender o cobrar |
| Producto | `producto/` | investigación de usuarios, gestión de producto | Idea, investigación y validación |
| Marca y diseño | `marca-diseno/` | diseñador gráfico, guía visual y fotografía | Validación y lanzamiento |
| Tecnología (IT) | `tecnologia/` | herramientas y sistemas, seguridad de datos | Cuando se elijan herramientas o cuentas |
| Desarrollo de software | `desarrollo-software/` | developer senior, QA senior, UX senior | Solo si el negocio necesita software propio |
| Personas (RR. HH.) | `personas/` | reclutamiento, administración de personal | Solo al contratar personas reales |

Las etapas del negocio son: **idea → investigación → validación → lanzamiento → operación**. La etapa actual se registra en `negocio/STATE.md`.

## Cómo activar un rol

1. El jefe del área (o el CEO si el área no tiene jefe activo) confirma que el trabajo es recurrente o crítico y que no lo cubre un rol ya activo.
2. Verifica en `company/ORG_CHART.md` que el total seguirá en 15 o menos.
3. Añade la fila al registro con su archivo de catálogo y su archivo de tareas.
4. Crea `negocio/tareas/{área}-{rol}.md` desde `templates/TASKS.md` y asigna su primera tarea.
5. Si el rol no existe en el catálogo, créalo en `areas/{área}/roles/{rol}.md` desde `templates/ROLE.md`. Será reutilizable en futuros negocios.

Cuando un rol deja de aportar, el jefe le da de baja: cierra o reasigna sus tareas, actualiza el registro y libera el puesto.

## Reglas comunes a todos los roles

Todo rol, sea jefe o especialista, cumple estas reglas además de las de su archivo. Se escriben una sola vez aquí para que los archivos de rol sean breves.

- **Evidencia:** busca información disponible antes de preguntar. Separa hechos, supuestos y estimaciones. Registra fuentes con enlace y fecha. Si falta información crítica después de investigar, escala una pregunta concreta a tu jefe.
- **No inventar:** no inventes fuentes, cifras ni resultados, y no afirmes que ejecutaste una acción si no ocurrió.
- **Tareas:** trabaja desde tu archivo `negocio/tareas/{área}-{rol}.md` siguiendo `protocols/TASKS.md`. Lee solo tus tareas abiertas y los archivos que cada tarea enlaza.
- **Aprobaciones:** gastos, conexiones, publicaciones, instalaciones y demás acciones reservadas siguen `protocols/APPROVALS.md`. Pide cada conexión solo cuando una tarea la necesite, y pide lectura y escritura por separado.
- **Comunicación:** mensajes breves a tu jefe directo con estado, resultado, ruta y bloqueo. Comparte con otras áreas solo lo que necesitan (`protocols/COMMUNICATION.md`).
- **Entregas al humano:** si el humano debe revisar, decidir o actuar sobre tu resultado, creas tu propio HTML en `negocio/outputs/` (guía: `templates/DELIVERABLE.html`), se lo explicas en lenguaje simple y registras en `negocio/tareas/HUMANO.md` lo que debe hacer.
- **Materiales del humano:** los archivos en `negocio/items/` se leen pero nunca se modifican.
- **Temas regulados:** en asuntos legales, tributarios, sanitarios o laborales, entrega orientación con fuentes oficiales e indica cuándo validar con un profesional.
- **Herramientas:** usa las que la herramienta de IA ofrezca; no supongas acceso a nada que no tengas.

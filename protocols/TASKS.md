# Tareas, métricas y lectura mínima

## Objetivo

Que cada agente sepa qué hacer y que el estado de la empresa se conozca **leyendo muy poco**. Lo que se lee a diario debe mantener un tamaño casi constante, aunque el negocio lleve años operando.

## Archivos

```text
[empresa]/tareas/
├── RESUMEN.md            estado de todos los roles en pocas líneas (lo que lee el CEO)
├── HUMANO.md             lo que debe hacer el humano
├── ceo.md                tareas abiertas del CEO
├── {área}-{rol}.md       tareas abiertas de cada rol activo (por ejemplo, marketing-jefe.md)
└── archivo/
    └── AAAA-MM.md        tareas terminadas o descartadas ese mes
```

Plantillas: `templates/TASKS.md` y `templates/TASKS_SUMMARY.md`.

## Formato de una tarea

Una tarea ocupa **una sola línea**:

```text
- [ ] T-042 | vence 2026-11-05 | Cotizar 3 proveedores de estampado | pidió: compras-jefe | detalle: [empresa]/memory/proveedores.md
```

- Estados: `[ ]` pendiente · `[~]` en curso · `[!]` bloqueada (agrega `bloqueo: motivo`).
- `T-042`: identificador único. El próximo número disponible está en `RESUMEN.md`.
- `vence`: fecha límite, o `sin fecha`.
- `pidió`: quién asignó la tarea.
- `detalle`: ruta opcional a un archivo con la información extensa. **La descripción larga nunca va en la línea de la tarea.**

## Ciclo de una tarea

1. **Crear:** quien asigna toma el próximo ID de `RESUMEN.md`, lo incrementa y agrega la línea al archivo del rol responsable.
2. **Avanzar:** el responsable cambia el estado en su archivo.
3. **Terminar:** el responsable **borra la línea de su archivo de inmediato** y la agrega al final de `archivo/AAAA-MM.md` del mes en curso, con la fecha y un resultado de una frase:

   ```text
   - [x] T-042 | terminada 2026-11-03 | Cotizar 3 proveedores de estampado | resultado: elegido Estampados Sur, ver [empresa]/memory/proveedores.md
   ```

   Las tareas descartadas se archivan igual, con `[-]` y el motivo.
4. **Resumir:** después de cualquier cambio, el responsable actualiza su fila en `RESUMEN.md`, incluida la columna «Ahora» (hasta 3 tareas en curso, en lenguaje simple).

## Límites de tamaño

- Un archivo de rol contiene **solo tareas abiertas**. Si llega a 25, el jefe debe priorizar, descartar o reasignar antes de agregar más.
- `HUMANO.md` debe tener como máximo 10 tareas abiertas. Si hay más, se priorizan y el resto espera en el archivo del rol que las necesita. El humano no debe sentirse abrumado.
- `RESUMEN.md` tiene una fila por rol activo y como máximo 10 líneas de bloqueos y alertas.
- `[empresa]/STATE.md` debe ocupar como máximo unas 60 líneas.
- Si un archivo de memoria supera unas 300 líneas, divídelo por tema o por período y actualiza `MEMORY_INDEX.md`.

## Lectura mínima

Orden de lectura para cualquier agente:

1. `[empresa]/tareas/RESUMEN.md`, si necesita saber el estado general.
2. Su propio archivo de tareas.
3. Solo los archivos enlazados en `detalle:` de la tarea en la que va a trabajar.

Reglas:

- El CEO conoce el estado de la empresa leyendo `RESUMEN.md` y `STATE.md`. No abre los archivos de cada rol salvo que una fila muestre un problema.
- Un rol no lee los archivos de tareas de otros roles. Si necesita algo de otra área, lo pide a su jefe.
- **El archivo mensual no se lee por rutina.** Solo se consulta para buscar algo puntual. Si la herramienta permite buscar texto, se busca por ID o palabra en vez de leer el archivo completo.
- No copies el contenido de un archivo en un mensaje si basta con su ruta.

## Tareas del humano

`HUMANO.md` usa el mismo formato, más el rol que necesita el resultado y una instrucción que el humano pueda seguir sin conocimientos técnicos:

```text
- [ ] T-051 | vence 2026-11-08 | Sube 5 fotos frontales de cada polera a [empresa]/items/marketing/ (JPG) | para: marketing-jefe
```

El humano no edita archivos: cuando dice en el chat que terminó, el agente que la pidió la archiva y actualiza el resumen.

## Organigrama del panel

El panel `[empresa]/outputs/main.html` dibuja el organigrama con los datos de `[empresa]/outputs/assets/equipo.js` (plantilla: `templates/web/assets/equipo.js`). Al pasar el mouse o tocar un agente, el humano ve qué hace y en qué está. El diseño del panel no se toca: solo se regenera ese archivo de datos.

- **Cuándo regenerarlo:** al activar o dar de baja un rol, y en cada revisión semanal.
- **De dónde salen los datos**, con lectura mínima:
  - Puesto, área, jefe e ID: `company/ORG_CHART.md`, solo los roles activos o disponibles.
  - Números, «Ahora» y bloqueos: `[empresa]/tareas/RESUMEN.md`.
  - «Qué hace»: se conserva del `equipo.js` anterior. Solo se lee la sección «Propósito» del archivo de rol cuando el rol se activa por primera vez.
- No leas los archivos de tareas de cada rol para generarlo.
- Escribe en lenguaje simple, sin IDs de tareas ni rutas internas, y sin datos sensibles: el panel muestra todo lo que contiene el archivo.
- Incluye siempre la fecha de `actualizado`. El organigrama no es en vivo: muestra el estado de esa fecha.

## Métricas

`[empresa]/METRICS.csv` guarda **una fila por semana** (plantilla: `templates/METRICS.csv`):

| Columna | Significado |
|---|---|
| `semana` | lunes de la semana, AAAA-MM-DD |
| `ventas_unidades` | unidades o servicios vendidos |
| `ingresos` | dinero cobrado, en la moneda del negocio |
| `costos` | costos directos de lo vendido |
| `gastos` | otros gastos de la semana (incluye publicidad) |
| `gasto_marketing` | parte de los gastos destinada a publicidad o promoción |
| `caja` | dinero disponible al cierre de la semana |
| `clientes_nuevos` | clientes que compraron por primera vez |
| `interesados` | contactos, consultas o registros recibidos |
| `fuente` | de dónde salieron los datos (humano, planilla, tienda, estimación) |
| `notas` | contexto breve |

- Las cifras desconocidas quedan **en blanco**. Nunca se rellenan con estimaciones; si se usa una estimación, se indica en `fuente`.
- Cada negocio puede añadir columnas propias al final. No se borran columnas existentes.
- El CSV no se lee entero por rutina: la revisión semanal lee las últimas filas necesarias para comparar.

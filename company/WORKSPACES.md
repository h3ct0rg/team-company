# Registro de espacios de trabajo de negocios

Este archivo guarda únicamente rutas y estado de los negocios para que los agentes encuentren sus archivos. La información, memoria, materiales y entregables de cada negocio viven en su carpeta de trabajo, nunca aquí.

## Regla para elegir la carpeta

1. Si el humano indica una carpeta, usa exactamente esa ruta.
2. Si no la indica, usa una carpeta en la raíz del proyecto con el formato `company-{nombre-corto-en-minúsculas-con-guiones}`.
3. Si el humano aún no dio nombre, el CEO elige un nombre provisional razonable y crea la carpeta sin detener el análisis para preguntar por el nombre.
4. Si la carpeta registrada ya existe para ese mismo negocio, continúa allí. Si ya contiene otro negocio o archivos ajenos, no los sobrescribas; elige otra ruta disponible y registra el motivo.
5. Crea la carpeta y la estructura interna sin pedir permiso. Si la ruta especificada no está disponible, explica el problema y solicita acceso o una ruta utilizable.

## Estructura de cada negocio

```text
company-{nombre}/
├── STATE.md
├── MEMORY_INDEX.md
├── memory/
├── items/
└── outputs/
```

Usa `templates/BUSINESS_STATE.md` y `templates/BUSINESS_MEMORY_INDEX.md` para crear los archivos iniciales. Añade subcarpetas dentro del espacio del negocio según las necesidades de cada área.

## Registro

| Negocio | Nombre de carpeta | Ruta | Estado | Fecha de inicio |
|---|---|---|---|---|
| _(Aún no hay negocios)_ | — | — | — | — |

Cuando inicies o retomes un negocio, añade o actualiza su fila. No pongas aquí planes, investigación, datos de clientes ni archivos entregables.

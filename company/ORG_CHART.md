# Organigrama y registro de equipo

Este archivo es la fuente de verdad del equipo. Actualízalo antes de asignar tareas a un puesto nuevo y al dar de baja un agente. **Límite: 15 agentes activos o disponibles, contando al CEO.**

## Conteo actual

- Total activo o disponible: **1 / 15**
- Puestos ocupados: CEO
- Puestos vacantes aprobados: ninguno
- Última revisión: 2026-10-10

## Estructura

```text
Humano (fundador / autoridad de aprobación)
└── CEO (coordina la empresa; reporta al humano)
```

Cada rol debe tener su archivo Markdown y una entrada con jefe directo. No declares un rol ocupado si no tiene un agente asignado o no se ha creado su definición. Los roles vacantes no cuentan como agentes y no pueden recibir tareas.

## Registro

| ID | Puesto | Archivo | Jefe directo | Estado | Fecha de alta | Justificación / objetivo |
|---|---|---|---|---|---|---|
| A-001 | CEO | `CEO.md` | Humano | Activo | 2026-10-10 | Coordinar la empresa y convertir ideas en planes ejecutables. |

## Procedimiento de alta

1. El jefe del área documenta la necesidad y compara opciones en el registro de decisiones.
2. Verifica que el puesto tenga misión, responsabilidades, jefe directo y límites definidos en un archivo basado en `templates/ROLE.md`.
3. Cuenta los agentes activos y disponibles, incluido el CEO. Si el resultado supera 15, no activa el puesto; el CEO puede elevar una solicitud de excepción al humano.
4. Añade el puesto al registro y actualiza el conteo antes de delegarle trabajo.

## Procedimiento de baja

El jefe informa al CEO el motivo, tareas abiertas y destino de la memoria del puesto. Marca el estado como “Baja” y actualiza el conteo. Una baja libera un puesto; una pausa o inactividad temporal no.

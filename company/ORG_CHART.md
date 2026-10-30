# Organigrama y registro de equipo

Este archivo es la fuente de verdad del equipo. Actualízalo antes de asignar tareas a un rol nuevo y al dar de baja un agente. **Límite: 15 agentes activos o disponibles, contando al CEO.** Cada jefe de área y cada especialista activo cuenta como un agente.

Los roles disponibles están en el catálogo `areas/README.md`. Un rol del catálogo no cuenta hasta que aparece aquí como activo.

## Empresa

- Carpeta de la empresa: _(sin iniciar)_

Cuando el CEO inicia la empresa, reemplaza el valor por su ruta relativa, por ejemplo `../company-poleras-del-sur`. En todos los documentos, `[empresa]/` se refiere a esa carpeta.

## Conteo actual

- Total activo o disponible: **1 / 15**
- Puestos ocupados: CEO
- Última revisión: 2026-10-30

## Estructura

```text
Humano (fundador / autoridad de aprobación)
└── CEO (coordina la empresa; cubre la jefatura de las áreas sin jefe activo)
```

Al activar roles, refleja aquí la estructura. Ejemplo:

```text
Humano
└── CEO
    ├── Jefe de Marketing
    │   └── Social media manager
    └── Jefe de Finanzas
```

Cada rol debe tener su archivo en `areas/` y una entrada con jefe directo. Un especialista sin jefe de área activo reporta al CEO. No declares un rol ocupado si no está registrado aquí.

## Registro

| ID | Puesto | Área | Archivo de rol | Tareas | Jefe directo | Estado | Fecha de alta | Justificación / objetivo |
|---|---|---|---|---|---|---|---|---|
| A-001 | CEO | Dirección | `CEO.md` | `[empresa]/tareas/ceo.md` | Humano | Activo | 2026-10-10 | Coordinar la empresa y convertir ideas en planes ejecutables. |

## Procedimiento de alta

1. El jefe del área (o el CEO) documenta la necesidad en `[empresa]/memory/DECISIONS.md` y descarta alternativas: reasignar, priorizar o reducir alcance.
2. Elige el rol del catálogo. Si no existe, lo crea desde `templates/ROLE.md`.
3. Cuenta los agentes activos y disponibles, incluido el CEO. Si el resultado supera 15, no activa el rol; el CEO puede elevar una solicitud de excepción al humano.
4. Añade el rol al registro, actualiza el conteo y la estructura, y crea su archivo de tareas antes de delegarle trabajo.
5. Agrega el rol al organigrama del panel (`[empresa]/outputs/assets/equipo.js`), con su propósito en lenguaje simple.

## Procedimiento de baja

El jefe cierra o reasigna las tareas abiertas del rol, archiva su archivo de tareas y registra el motivo en `[empresa]/memory/DECISIONS.md`. Marca el estado como «Baja», actualiza el conteo y quita el rol de `[empresa]/outputs/assets/equipo.js`. Una baja libera un puesto; una pausa o inactividad temporal no.

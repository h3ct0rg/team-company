# Empresa de agentes | Agent company

**Idioma / Language:** Español (principal) · [English](#english)

## Español

Este proyecto define una empresa operada por agentes de IA mediante archivos Markdown. Ayuda a cualquier persona, sin experiencia técnica ni de negocios, a convertir una idea en una micro o pequeña empresa que genere ingresos. Funciona con cualquier modelo o herramienta de IA que pueda leer y crear archivos, sin depender de un proveedor concreto.

**Una carpeta de agentes = una empresa.** Los agentes viven en `team-company/` y todo lo de tu empresa se crea aparte, en una carpeta hermana `company-{nombre}/`:

```text
mis-empresas/
├── team-company/              los agentes (este repositorio)
└── company-poleras-del-sur/   tu empresa: páginas, planillas, PDF, tareas, memoria
```

Para empezar otra empresa, usa una copia limpia de `team-company/`.

## Cómo empezar

1. Crea una carpeta contenedora (por ejemplo, `mis-empresas/`) y pon dentro una copia limpia de este repositorio.
2. Abre **la carpeta contenedora** en la herramienta de IA que prefieras, para que pueda leer `team-company/` y crear la carpeta de tu empresa al lado. Si solo abres `team-company/`, el CEO te pedirá acceso a la carpeta contenedora.
3. Escribe `@team-company/CEO.md` (o pídele que cargue ese archivo como instrucciones) y cuéntale tu idea. No hace falta que tengas un plan ni que sepas de negocios.
4. El CEO investigará, te hará solo las preguntas imprescindibles, armará el equipo mínimo y te dará el enlace a la página principal de tu empresa.

### Ejemplo para la primera conversación

> @CEO.md quiero empezar a vender poleras, pero no sé por dónde comenzar. Ayúdame a ver si puede funcionar y guíame paso a paso. Explícame las cosas de forma sencilla y pregúntame lo que necesites saber.

## Comandos

Escríbelos en el chat, con o sin `/`:

| Comando | Qué hace |
|---|---|
| `@CEO.md nuevo negocio: [idea]` | Arranca el negocio a partir de tu idea. |
| `@CEO.md revisión semanal` | Revisa métricas y tareas, actualiza el panel y te cuenta cómo va todo. |
| `@CEO.md mis pendientes` | Te muestra lo que te toca hacer, en lenguaje simple. |

Si tu herramienta permite programar tareas, el CEO te ofrecerá ejecutar la revisión semanal automáticamente, siempre con tu aprobación.

## Tu negocio

Todo lo de tu negocio queda en la carpeta `company-{nombre}/`, que el CEO crea al comenzar:

- `outputs/main.html`: **tu página principal**. Ahí ves la etapa, lo que te toca hacer, los números, todas las entregas del equipo y el **organigrama**: al pasar el mouse o tocar un agente ves qué hace y en qué está.
- Todas las páginas tienen el mismo diseño y una **barra de navegación** arriba, con «Inicio» y un menú «Páginas» que se actualiza solo cuando el equipo crea o actualiza una página.
- `outputs/archivos/`: planillas, PDF y otros archivos que te prepare el equipo.
- `items/`: donde subes los materiales que te pidan (fotos, documentos, planillas). Los agentes nunca modifican lo que subes.
- El resto (estado, memoria, tareas y métricas) lo mantienen los agentes. No necesitas leerlo.

## Cómo funciona

- **Áreas y roles:** el catálogo `areas/` tiene 12 áreas (finanzas, ventas, marketing, atención al cliente, operaciones, compras, legal, producto, marca y diseño, tecnología, desarrollo de software y personas), cada una con su jefe y especialistas. El CEO activa solo lo que la etapa del negocio necesita, hasta **15 agentes en total, incluido el CEO**. Para superar ese límite se necesita tu aprobación.
- **Subagentes:** si tu herramienta permite lanzar subagentes, cada rol trabaja como un agente independiente. Si no, el mismo modelo asume cada rol por turnos.
- **Tareas:** cada rol tiene un archivo con sus tareas abiertas. Lo terminado se archiva por mes, y un resumen breve muestra el estado de todos. Así, conocer el estado de la empresa requiere leer muy poco, aunque el negocio lleve años operando.
- **Permisos:** no hay nada conectado de antemano. Cada rol te pide permiso solo cuando lo necesita para gastar dinero, conectarse a un servicio (lectura y escritura por separado), publicar, instalar algo o programar tareas.
- **Entregas:** cuando un área necesita que revises, decidas o hagas algo, te prepara una página HTML simple y te explica el siguiente paso.

## Estructura del equipo

- `CEO.md`: punto de entrada.
- `company/`: constitución (`CHARTER.md`) y organigrama (`ORG_CHART.md`).
- `areas/`: catálogo de áreas y roles, con reglas comunes en `areas/README.md`.
- `comandos/`: comandos disponibles.
- `protocols/`: aprobaciones, comunicación, tareas y métricas, y páginas web (`WEB.md`).
- `workflows/`: flujo de idea a empresa.
- `templates/`: plantillas de estado, memoria, tareas, métricas y roles; `templates/web/` es el kit que se copia a la empresa (página principal, estilo, navegación y organigrama) y `templates/PAGINA.html` es la plantilla de cada página nueva.
- `pruebas/`: escenarios para comprobar que el sistema funciona con cualquier herramienta.

El sistema está definido en Markdown; por sí solo no ejecuta agentes ni aplica permisos de forma técnica. La herramienta de IA debe cargar y respetar estas reglas.

---

## English

This project describes an AI-run company using Markdown files. It helps anyone, with no technical or business experience, turn an idea into a micro or small business that generates revenue. It works with any AI model or tool that can read and create files, without depending on a specific provider.

**One agent folder = one company.** The agents live in `team-company/`, and everything about your company is created separately in a sibling folder, `company-{name}/`. To start another company, use a clean copy of `team-company/`.

## Getting started

1. Create a parent folder (for example, `my-companies/`) and put a clean copy of this repository inside it.
2. Open **the parent folder** in the AI tool of your choice so it can read `team-company/` and create your company folder next to it. If you open only `team-company/`, the CEO will ask for access to the parent folder.
3. Type `@team-company/CEO.md` (or ask it to load that file as instructions) and describe your idea. You do not need a plan or business experience.
4. The CEO will research, ask only essential questions, set up the minimum team, and give you the link to your company's main page.

## Commands

Type them in chat, with or without `/`:

| Command | What it does |
|---|---|
| `@CEO.md nuevo negocio: [idea]` | Starts the business from your idea. |
| `@CEO.md revisión semanal` | Reviews metrics and tasks, updates the dashboard, and reports progress. |
| `@CEO.md mis pendientes` | Shows what you need to do, in plain language. |

If your tool supports scheduled tasks, the CEO will offer to run the weekly review automatically, always with your approval.

## Your business

Everything about your business lives in the `company-{name}/` folder, which the CEO creates at the start:

- `outputs/main.html`: **your main page** with the stage, your to-dos, key numbers, all team deliverables, and the **org chart**: hover over or tap an agent to see what it does and what it is working on.
- Every page shares the same design and a **navigation bar** with «Inicio» and a «Páginas» menu that updates itself whenever the team creates or updates a page.
- `outputs/archivos/`: spreadsheets, PDFs, and other files prepared by the team.
- `items/`: where you upload requested materials. Agents never modify what you upload.
- Everything else (state, memory, tasks, metrics) is maintained by the agents.

## How it works

- **Areas and roles:** the `areas/` catalog has 12 areas, each with a lead and specialists. The CEO activates only what the current stage needs, up to **15 agents total, including the CEO**. Exceeding that requires your approval.
- **Subagents:** if your tool supports subagents, each role runs as its own agent; otherwise the same model takes on each role in turn.
- **Tasks:** each role has a file with its open tasks; finished tasks are archived monthly, and a short summary shows everyone's status. Reading the company's status stays cheap as the business grows.
- **Permissions:** nothing is pre-connected. Each role asks only when needed to spend money, connect a service (read and write approved separately), publish, install, or schedule tasks.
- **Deliverables:** when an area needs your review, decision, or action, it prepares a simple HTML page and explains the next step.

The system is defined in Markdown; by itself, it does not run agents or technically enforce permissions. The AI tool must load and follow these rules.

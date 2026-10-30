# Empresa de agentes | Agent company

**Idioma / Language:** Español (principal) · [English](#english)

## Español

Este proyecto define una empresa operada por agentes de IA mediante archivos Markdown. Ayuda a cualquier persona, sin experiencia técnica ni de negocios, a convertir una idea en una micro o pequeña empresa que genere ingresos. Funciona con cualquier modelo o herramienta de IA que pueda leer y crear archivos, sin depender de un proveedor concreto.

**Un repositorio = un negocio.** Para empezar otro negocio, usa una copia limpia de este repositorio.

## Cómo empezar

1. Haz una copia limpia de este repositorio para tu negocio.
2. Ábrela en la herramienta de IA que prefieras y permite que lea y cree archivos dentro de la carpeta.
3. Escribe `@CEO.md` (o pídele que cargue `CEO.md` como instrucciones) y cuéntale tu idea. No hace falta que tengas un plan ni que sepas de negocios.
4. El CEO investigará, te hará solo las preguntas imprescindibles, armará el equipo mínimo y te mostrará un panel con lo que te toca hacer.

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

Todo lo de tu negocio queda en la carpeta `negocio/`, que el CEO crea al comenzar:

- `outputs/index.html`: **tu panel**. Ahí ves la etapa, lo que te toca hacer, los números, las entregas de cada área y el **organigrama de tu equipo**: al pasar el mouse o tocar un agente ves qué hace y en qué está.
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
- `protocols/`: aprobaciones, comunicación, y tareas y métricas.
- `workflows/`: flujo de idea a empresa.
- `templates/`: plantillas de estado, memoria, tareas, métricas, roles, entregas y panel.
- `pruebas/`: escenarios para comprobar que el sistema funciona con cualquier herramienta.

El sistema está definido en Markdown; por sí solo no ejecuta agentes ni aplica permisos de forma técnica. La herramienta de IA debe cargar y respetar estas reglas.

---

## English

This project describes an AI-run company using Markdown files. It helps anyone, with no technical or business experience, turn an idea into a micro or small business that generates revenue. It works with any AI model or tool that can read and create files, without depending on a specific provider.

**One repository = one business.** To start another business, use a clean copy of this repository.

## Getting started

1. Make a clean copy of this repository for your business.
2. Open it in the AI tool of your choice and allow it to read and create files in the folder.
3. Type `@CEO.md` (or ask it to load `CEO.md` as instructions) and describe your idea. You do not need a plan or business experience.
4. The CEO will research, ask only essential questions, set up the minimum team, and show you a dashboard with your next steps.

## Commands

Type them in chat, with or without `/`:

| Command | What it does |
|---|---|
| `@CEO.md nuevo negocio: [idea]` | Starts the business from your idea. |
| `@CEO.md revisión semanal` | Reviews metrics and tasks, updates the dashboard, and reports progress. |
| `@CEO.md mis pendientes` | Shows what you need to do, in plain language. |

If your tool supports scheduled tasks, the CEO will offer to run the weekly review automatically, always with your approval.

## Your business

Everything about your business lives in the `negocio/` folder, which the CEO creates at the start:

- `outputs/index.html`: **your dashboard** with the stage, your to-dos, key numbers, each area's deliverables, and your **team's org chart**: hover over or tap an agent to see what it does and what it is working on.
- `items/`: where you upload requested materials. Agents never modify what you upload.
- Everything else (state, memory, tasks, metrics) is maintained by the agents.

## How it works

- **Areas and roles:** the `areas/` catalog has 12 areas, each with a lead and specialists. The CEO activates only what the current stage needs, up to **15 agents total, including the CEO**. Exceeding that requires your approval.
- **Subagents:** if your tool supports subagents, each role runs as its own agent; otherwise the same model takes on each role in turn.
- **Tasks:** each role has a file with its open tasks; finished tasks are archived monthly, and a short summary shows everyone's status. Reading the company's status stays cheap as the business grows.
- **Permissions:** nothing is pre-connected. Each role asks only when needed to spend money, connect a service (read and write approved separately), publish, install, or schedule tasks.
- **Deliverables:** when an area needs your review, decision, or action, it prepares a simple HTML page and explains the next step.

The system is defined in Markdown; by itself, it does not run agents or technically enforce permissions. The AI tool must load and follow these rules.

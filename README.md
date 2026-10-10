# Empresa de agentes | Agent company

**Idioma / Language:** Español (principal) · [English](#english)

## Español

Este proyecto define una empresa operada por agentes de IA mediante archivos Markdown. Está pensado para funcionar con distintos modelos y harnesses de IA, sin depender de un proveedor concreto.

El harness (la aplicación o agente que lee estos documentos) debe abrir `CEO.md` como instrucciones de entrada. Los archivos definen las reglas y el funcionamiento de la empresa; el harness aporta el modelo, la búsqueda web y las herramientas disponibles.

## Documentos principales

- `CEO.md`: punto de entrada y coordinación general.
- `company/CHARTER.md`: reglas, autonomía, aprobaciones y límite de equipo.
- `company/ORG_CHART.md`: puestos, reportes y registro del equipo.
- `company/WORKSPACES.md`: registro de las carpetas de cada negocio.
- `workflows/IDEA_TO_COMPANY.md`: pasos para convertir una idea en un negocio.
- `protocols/COMMUNICATION.md`: comunicación y coordinación entre agentes.
- `protocols/APPROVALS.md`: acciones que necesitan tu aprobación.
- `templates/ROLE.md`: plantilla para definir cada puesto.
- `templates/DELIVERABLE.html`: guía visual para páginas que los agentes entregan al humano.

## Cómo empezar

1. Abre este proyecto en el harness de IA que prefieras y permite que lea y cree archivos dentro de esta carpeta.
2. Pídele que cargue `CEO.md` como instrucciones internas. El CEO consultará los demás archivos según los necesite; no hace falta que te los muestre.
3. Cuéntale tu idea en el chat. No hace falta que tengas un plan ni que sepas de negocios.
4. El CEO investigará lo que pueda, te hará solo las preguntas que no pueda resolver y te guiará paso a paso. No necesitas leer los archivos internos para usar la empresa.

### Ejemplo para la primera conversación

> CEO, quiero empezar a vender poleras, pero no sé por dónde comenzar. Ayúdame a ver si puede funcionar y guíame paso a paso. Explícame las cosas de forma sencilla y pregúntame lo que necesites saber.

Puedes empezar aunque todavía no sepas cuánto dinero invertir, a quién venderle o cuánto podrías ganar. El CEO te ayudará a resolverlo contigo.

## Cómo funciona

Cada archivo de puesto define una responsabilidad. El harness puede ejecutarla con agentes separados o con un mismo modelo, siempre respetando la jerarquía y el registro del equipo. La empresa puede tener hasta **15 agentes en total, incluido el CEO**. Los agentes pueden contratar dentro de ese límite; para superarlo deben pedirte una excepción.

Los agentes pueden investigar y crear archivos dentro del proyecto. Cuando un resultado de su área requiera que tú lo revises o hagas algo, el responsable de esa área prepara su propia página HTML sencilla, te la comparte y te explica el siguiente paso. El CEO puede crear una vista general de la empresa, pero no es intermediario obligatorio para las entregas de los jefes.

Antes de gastar dinero, instalar software, conectarse a correo u otros servicios, o hacer cambios al sistema, deben explicarte la acción y esperar tu aprobación.

## Carpeta de tu negocio

La carpeta del equipo contiene las reglas, puestos, plantillas y rutas internas de los agentes. Los datos y resultados de cada negocio se guardan aparte, en la carpeta que tú indiques. Si no indicas una, el CEO crea una carpeta en la raíz con el formato `company-{nombre-de-la-empresa}`, por ejemplo `company-nexo-inmobiliario`.

Dentro de esa carpeta del negocio, el CEO crea `memory/` para decisiones e investigación, `items/` para los materiales que tú aportes y `outputs/` para los resultados y páginas HTML que los agentes te entreguen. No hace falta que prepares esas carpetas.

El sistema está definido en Markdown; por sí solo no ejecuta agentes ni aplica permisos de forma técnica. El harness debe cargar y respetar estas reglas.

---

## English

This project describes an AI-run company using Markdown files. It is designed to work with different AI models and harnesses, without depending on a specific provider.

The harness (the app or agent reading these documents) should load `CEO.md` as its starting instructions. These files define the company’s rules and processes; the harness provides the model, web search, and available tools.

## Main documents

- `CEO.md`: starting point and company-wide coordination.
- `company/CHARTER.md`: operating rules, autonomy, approvals, and team limit.
- `company/ORG_CHART.md`: roles, reporting lines, and team roster.
- `company/WORKSPACES.md`: registry of each business folder.
- `workflows/IDEA_TO_COMPANY.md`: process for turning an idea into a business.
- `protocols/COMMUNICATION.md`: communication and coordination between agents.
- `protocols/APPROVALS.md`: actions that need your approval.
- `templates/ROLE.md`: template for defining each role.
- `templates/DELIVERABLE.html`: visual guide for pages agents share with you.

## Getting started

1. Open this project in the AI harness of your choice and allow it to read and create files in this folder.
2. Ask it to load `CEO.md` as internal instructions. The CEO will consult other files as needed; it does not need to show them to you.
3. Tell it your idea in chat. You do not need a business plan or business experience.
4. The CEO will research what it can, ask only questions it cannot resolve, and guide you step by step. You do not need to read the internal files to use the company.

### First conversation example

> CEO, I want to start selling T-shirts, but I don't know where to begin. Help me figure out whether it could work and guide me step by step. Explain things simply and ask me whatever you need to know.

You can start even if you don't yet know how much money to invest, who your customers might be, or how much you could earn. The CEO will help you work it out.

## How it works

Each role file defines a responsibility. The harness can run it using separate agents or a single model, while following the reporting structure and team roster. The company can have up to **15 agents total, including the CEO**. Managers may hire within that limit; exceeding it requires your approval.

Agents may research and create files inside the project. When a result from their area needs your review or action, the person responsible for that area creates and shares their own simple HTML page and explains the next step. The CEO may create a company-wide overview, but is not a required intermediary for managers' deliverables.

Before spending money, installing software, connecting to email or other services, or changing the system, agents must explain the action and wait for your approval.

## Your business folder

The team folder contains agent rules, roles, templates, and internal routing. Business data and deliverables are stored separately, in a folder you specify. If you do not specify one, the CEO creates a folder at the project root named `company-{business-name}`, for example `company-nexo-inmobiliario`.

Inside the business folder, the CEO creates `memory/` for decisions and research, `items/` for materials you provide, and `outputs/` for deliverables and HTML pages shared by agents. You do not need to create these folders yourself.

The system is defined in Markdown; by itself, it does not run agents or technically enforce permissions. The harness must load and follow these rules.

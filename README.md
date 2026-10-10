# Empresa de agentes | Agent company

**Idioma / Language:** Español (principal) · [English](#english)

## Español

Este proyecto define una empresa operada por agentes de IA mediante archivos Markdown. Está pensado para funcionar con distintos modelos y harnesses de IA, sin depender de un proveedor concreto.

El harness (la aplicación o agente que lee estos documentos) debe abrir `CEO.md` como instrucciones de entrada. Los archivos definen las reglas y el funcionamiento de la empresa; el harness aporta el modelo, la búsqueda web y las herramientas disponibles.

## Documentos principales

- `CEO.md`: punto de entrada y coordinación general.
- `company/CHARTER.md`: reglas, autonomía, aprobaciones y límite de equipo.
- `company/ORG_CHART.md`: puestos, reportes y registro del equipo.
- `company/STATE.md`: idea activa, objetivos y estado del trabajo.
- `company/MEMORY_INDEX.md`: índice de memoria.
- `workflows/IDEA_TO_COMPANY.md`: pasos para convertir una idea en un negocio.
- `protocols/COMMUNICATION.md`: comunicación y coordinación entre agentes.
- `protocols/APPROVALS.md`: acciones que necesitan tu aprobación.
- `templates/ROLE.md`: plantilla para definir cada puesto.

## Cómo empezar

1. Abre este proyecto en el harness de IA que prefieras y permite que lea y cree archivos dentro de esta carpeta.
2. Pídele que lea `CEO.md` y los documentos que este indica.
3. Cuéntale tu idea en el chat. No hace falta que tengas un plan ni que sepas de negocios.
4. El CEO investigará lo que pueda, te hará preguntas sencillas cuando necesite información y te guiará paso a paso.

### Ejemplo para la primera conversación

> CEO, quiero empezar a vender poleras, pero no sé por dónde comenzar. Ayúdame a ver si puede funcionar y guíame paso a paso. Explícame las cosas de forma sencilla y pregúntame lo que necesites saber.

Puedes empezar aunque todavía no sepas cuánto dinero invertir, a quién venderle o cuánto podrías ganar. El CEO te ayudará a resolverlo contigo.

## Cómo funciona

Cada archivo de puesto define una responsabilidad. El harness puede ejecutarla con agentes separados o con un mismo modelo, siempre respetando la jerarquía y el registro del equipo. La empresa puede tener hasta **15 agentes en total, incluido el CEO**. Los agentes pueden contratar dentro de ese límite; para superarlo deben pedirte una excepción.

Los agentes pueden investigar y crear archivos dentro del proyecto. Antes de gastar dinero, instalar software, conectarse a correo u otros servicios, o hacer cambios al sistema, deben explicarte la acción y esperar tu aprobación.

## Archivos de trabajo

- `memory/`: decisiones, investigaciones y aprendizajes que conviene recordar.
- `items/`: fotos, documentos y otros materiales que tú proporciones.
- `outputs/`: entregables como documentos, páginas HTML o PDF.

El sistema está definido en Markdown; por sí solo no ejecuta agentes ni aplica permisos de forma técnica. El harness debe cargar y respetar estas reglas.

---

## English

This project describes an AI-run company using Markdown files. It is designed to work with different AI models and harnesses, without depending on a specific provider.

The harness (the app or agent reading these documents) should load `CEO.md` as its starting instructions. These files define the company’s rules and processes; the harness provides the model, web search, and available tools.

## Main documents

- `CEO.md`: starting point and company-wide coordination.
- `company/CHARTER.md`: operating rules, autonomy, approvals, and team limit.
- `company/ORG_CHART.md`: roles, reporting lines, and team roster.
- `company/STATE.md`: active idea, goals, and current work.
- `company/MEMORY_INDEX.md`: memory index.
- `workflows/IDEA_TO_COMPANY.md`: process for turning an idea into a business.
- `protocols/COMMUNICATION.md`: communication and coordination between agents.
- `protocols/APPROVALS.md`: actions that need your approval.
- `templates/ROLE.md`: template for defining each role.

## Getting started

1. Open this project in the AI harness of your choice and allow it to read and create files in this folder.
2. Ask it to read `CEO.md` and the documents referenced there.
3. Tell it your idea in chat. You do not need a business plan or business experience.
4. The CEO will research what it can, ask simple questions when it needs information, and guide you step by step.

### First conversation example

> CEO, I want to start selling T-shirts, but I don't know where to begin. Help me figure out whether it could work and guide me step by step. Explain things simply and ask me whatever you need to know.

You can start even if you don't yet know how much money to invest, who your customers might be, or how much you could earn. The CEO will help you work it out.

## How it works

Each role file defines a responsibility. The harness can run it using separate agents or a single model, while following the reporting structure and team roster. The company can have up to **15 agents total, including the CEO**. Managers may hire within that limit; exceeding it requires your approval.

Agents may research and create files inside the project. Before spending money, installing software, connecting to email or other services, or changing the system, they must explain the action and wait for your approval.

## Working files

- `memory/`: decisions, research, and lessons worth remembering.
- `items/`: photos, documents, and other materials you provide.
- `outputs/`: deliverables such as documents, web pages, or PDFs.

The system is defined in Markdown; by itself, it does not run agents or technically enforce permissions. The harness must load and follow these rules.

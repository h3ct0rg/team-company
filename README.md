# Empresa de agentes | Agent company

**Idioma / Language:** Español · [English](#english)

Un equipo de agentes de IA que te ayuda a convertir una idea en una empresa que genere ingresos, aunque no tengas experiencia técnica ni de negocios. Funciona con cualquier herramienta de IA que pueda leer y crear archivos.

## Cómo empezar

1. **Descarga esta carpeta** (`team-company`) y ábrela en tu herramienta de IA.
2. **Escribe en el chat:**

   ```text
   @CEO.md tengo esta idea de negocio: [cuéntala con tus palabras]
   ```

3. **Listo.** El CEO investiga, te hace solo las preguntas necesarias y te guía paso a paso.

Si la herramienta te pide permiso para crear la carpeta de tu empresa, acéptalo.

### Ejemplo

```text
@CEO.md tengo esta idea de negocio: quiero vender poleras con diseños de humor chileno por Instagram. Vivo en Santiago y tengo unos 500.000 pesos para empezar.
```

No necesitas un plan. Mientras más cuentes (dónde vives, cuánto dinero tienes, cuánto tiempo puedes dedicarle), menos preguntas te hará. Si no sabes algo, dilo y el CEO te recomendará.

## Qué vas a recibir

El CEO crea una carpeta para tu empresa **al lado** de `team-company`:

```text
team-company/              el equipo de agentes (no necesitas abrirla)
company-tu-empresa/        tu empresa
├── outputs/main.html      ← abre este archivo para ver todo
├── outputs/archivos/      planillas, PDF y otros archivos
└── items/                 aquí subes lo que te pidan (fotos, documentos)
```

En **`main.html`** verás lo que te toca hacer, cómo van los números, las páginas que te prepara cada área y el organigrama de tu equipo. Todas las páginas tienen un menú para moverte entre ellas.

## Frases útiles para el día a día

| Escribe | Para |
|---|---|
| `@CEO.md mis pendientes` | Saber qué te toca hacer. |
| `@CEO.md revisión semanal` | Ver cómo va la empresa y actualizar todo. |
| `@CEO.md ya subí las fotos` | Avisar que terminaste algo. |
| `@CEO.md ¿en qué íbamos?` | Retomar en una conversación nueva. |

## Bueno saber

- **Nada se gasta ni se conecta sin tu permiso.** Antes de pagar algo, publicar, conectarse a una cuenta (Instagram, tu banco, una tienda) o instalar algo, el equipo te pregunta.
- **Tus archivos no se tocan.** Lo que subes a `items/` nunca se modifica.
- **Una carpeta `team-company` por empresa.** Para otra empresa, descarga una copia nueva.

## Cómo funciona por dentro

Para quien quiera entender o modificar el sistema:

- `CEO.md`: punto de entrada.
- `company/`: reglas (`CHARTER.md`) y organigrama del equipo (`ORG_CHART.md`).
- `areas/`: 12 áreas (finanzas, ventas, marketing, atención al cliente, operaciones, compras, legal, producto, marca y diseño, tecnología, desarrollo de software y personas), cada una con un jefe y especialistas. El CEO activa solo lo que necesita la etapa del negocio, hasta 15 agentes.
- `comandos/`: lo que hacen «mis pendientes», «revisión semanal» y «nuevo negocio».
- `protocols/`: aprobaciones, comunicación, tareas y métricas, y páginas web.
- `workflows/`: el camino de la idea a la empresa.
- `templates/`: plantillas de estado, tareas, métricas, roles y páginas.
- `pruebas/`: escenarios para comprobar que el sistema funciona, y una [demo](pruebas/demo-web/main.html) de las páginas.

El sistema está escrito en Markdown y no depende de ningún proveedor de IA. La herramienta que uses aporta el modelo, la búsqueda web y, si los tiene, los subagentes y las tareas programadas.

---

## English

A team of AI agents that helps you turn an idea into a revenue-generating company, even with no technical or business experience. It works with any AI tool that can read and create files.

### Getting started

1. **Download this folder** (`team-company`) and open it in your AI tool.
2. **Type in the chat:**

   ```text
   @CEO.md I have this business idea: [describe it in your own words]
   ```

3. **That's it.** The CEO researches, asks only what it needs, and guides you step by step.

If the tool asks for permission to create your company folder, allow it.

### What you get

The CEO creates a folder for your company **next to** `team-company`. Open **`company-your-company/outputs/main.html`** to see your to-dos, key numbers, every page the team prepares for you, and your team's org chart. Upload anything the team asks for into `items/`.

### Useful phrases

`@CEO.md mis pendientes` (your to-dos) · `@CEO.md revisión semanal` (weekly review) · `@CEO.md ¿en qué íbamos?` (resume in a new chat).

### Good to know

- Nothing is paid for, published, connected, or installed without your approval.
- Files you upload to `items/` are never modified.
- Use one `team-company` copy per company.

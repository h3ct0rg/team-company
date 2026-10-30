# Comando: nuevo negocio

**Uso:** «@CEO.md nuevo negocio: [tu idea]», o simplemente contarle la idea al CEO cuando todavía no hay una empresa iniciada.

**Lo ejecuta:** el CEO.

## Pasos

1. **Comprobar el punto de partida.**
   - Si `company/ORG_CHART.md` no tiene anotada una carpeta de empresa, continúa.
   - Si ya tiene una, **no la reinicies ni la sobrescribas**. Explica al humano que esta carpeta de agentes ya atiende a una empresa y que, para otra, debe usar una copia limpia de la carpeta de agentes. Ofrece retomar la empresa actual.
2. **Elegir el nombre de la carpeta:** `company-{nombre-en-minúsculas-con-guiones}`, **al mismo nivel** que la carpeta de los agentes (por ejemplo, `../company-poleras-del-sur`). Si el humano no dio un nombre, usa uno provisional sencillo; si indicó otra ruta, usa esa. Si ya existe una carpeta con ese nombre y es de otra empresa, elige otro nombre. No preguntes dónde guardarla.
3. **Crear la estructura** desde `templates/`:

   ```text
   company-{nombre}/
   ├── STATE.md            ← templates/BUSINESS_STATE.md
   ├── MEMORY_INDEX.md     ← templates/BUSINESS_MEMORY_INDEX.md
   ├── METRICS.csv         ← templates/METRICS.csv
   ├── memory/
   ├── tareas/
   │   ├── RESUMEN.md      ← templates/TASKS_SUMMARY.md
   │   ├── HUMANO.md       ← templates/TASKS.md
   │   ├── ceo.md          ← templates/TASKS.md
   │   └── archivo/
   ├── items/
   └── outputs/            ← copia completa de templates/web/
       ├── main.html
       ├── archivos/
       └── assets/         estilo.css, navegacion.js, organigrama.js, paginas.js, equipo.js
   ```

   Si la herramienta no puede escribir fuera de la carpeta de los agentes, sigue la regla de `company/CHARTER.md`: explica la limitación y pide acceso. **No crees la empresa dentro de la carpeta de los agentes.**
4. **Anotar la ruta** de la carpeta de la empresa en `company/ORG_CHART.md`.
5. **Registrar la idea** en `STATE.md`, con el nombre provisional si hace falta. Etapa: `idea`.
6. **Seguir `workflows/IDEA_TO_COMPANY.md`**: comprensión, investigación, preguntas imprescindibles, evaluación y propuesta.
7. **Activar el equipo mínimo** para la etapa siguiente según `areas/README.md` y registrarlo en `company/ORG_CHART.md`. Normalmente basta con el CEO más una o dos áreas al comienzo.
8. **Crear las primeras tareas** en los archivos de cada rol activo y en `HUMANO.md`, y completar `RESUMEN.md`.
9. **Completar la parte web** (`protocols/WEB.md`): el nombre de la empresa en `outputs/assets/paginas.js`, el humano, el CEO y los roles activados en `outputs/assets/equipo.js`, y el contenido de `outputs/main.html`.
10. **Responder al humano** en lenguaje simple: qué entendiste, qué investigaste, qué recomiendas, qué supuestos usaste, qué le toca hacer y dónde está su carpeta con el enlace a `main.html`.

## Al terminar

- Existe `company-{nombre}/` al lado de la carpeta de los agentes, con su estructura y `outputs/main.html`.
- La carpeta de los agentes no tiene ningún archivo nuevo del negocio; solo cambió `company/ORG_CHART.md`.
- Cada rol activo está registrado y tiene su archivo de tareas.
- El humano sabe cuál es su próximo paso, sin haber leído ningún archivo interno.

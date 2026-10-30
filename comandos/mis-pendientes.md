# Comando: mis pendientes

**Uso:** «@CEO.md mis pendientes», o preguntas como «¿qué tengo que hacer?».

**Lo ejecuta:** el CEO.

## Pasos

1. **Leer solo** `negocio/tareas/HUMANO.md` y, si hace falta contexto, el detalle enlazado en cada tarea.
2. **Preguntar por lo terminado:** si el humano ya contó en el chat que completó algo, archívalo según `protocols/TASKS.md`, avisa al rol que lo pidió y actualiza `RESUMEN.md`.
3. **Presentar los pendientes** en lenguaje simple, ordenados por urgencia:
   - Qué hacer, explicado paso a paso si no es obvio.
   - Para cuándo y por qué importa.
   - Dónde subir el material, en qué formato y quién lo usará.
   - Aprobaciones pendientes, con el formato de `protocols/APPROVALS.md`.
4. **Si no hay pendientes,** dilo y resume en una frase en qué está trabajando el equipo.
5. **Cerrar** con el enlace al panel `negocio/outputs/index.html`.

No muestres identificadores internos, rutas de archivos de tareas ni la estructura del sistema, salvo la carpeta donde el humano debe subir material.

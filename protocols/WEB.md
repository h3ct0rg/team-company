# Páginas para el humano

Todo lo que el humano ve se entrega como páginas HTML con el mismo diseño y una navegación común. Estas reglas son obligatorias para cualquier agente que cree o actualice una página.

## Estructura

```text
[empresa]/outputs/
├── main.html              página principal (la mantiene el CEO)
├── {área}-{tema}.html     páginas de cada área, todas en esta misma carpeta
├── archivos/              planillas, PDF, imágenes y otros archivos para el humano
└── assets/
    ├── estilo.css         diseño común          (no se edita)
    ├── navegacion.js      menú y lista de entregas (no se edita)
    ├── organigrama.js     organigrama de main.html (no se edita)
    ├── paginas.js         registro de páginas y archivos (se actualiza)
    └── equipo.js          datos del organigrama  (se actualiza)
```

Al iniciar la empresa, el CEO copia el contenido de `templates/web/` dentro de `[empresa]/outputs/`, crea la carpeta `archivos/` y completa el nombre de la empresa en `assets/paginas.js`. La plantilla para páginas nuevas es `templates/PAGINA.html`, que no se copia: se usa cada vez que hace falta una página.

## Crear o actualizar una página

1. **Parte siempre de `templates/PAGINA.html`.** Nunca escribas una página desde cero.
2. Guárdala en `[empresa]/outputs/` (no en subcarpetas) con un nombre en minúsculas y con guiones: `{área}-{tema}.html`, por ejemplo `marketing-plan-lanzamiento.html`. Si el tema ya tiene página, actualízala en vez de crear otra.
3. **Conserva sin cambios** el `<link rel="stylesheet" href="assets/estilo.css">` y los `<script>` del final. Son los que dan el diseño y la navegación.
4. **No pegues estilos propios** (`<style>` ni atributos `style`) y no enlaces hojas de estilo ni librerías externas. Si hace falta un elemento visual nuevo, usa las clases existentes de `estilo.css`.
5. **Escribe el contenido en HTML, nunca en Markdown.** Nada de `#`, `**`, `-` o tablas con `|` dentro de un `.html`: usa `<h2>`, `<strong>`, `<ul><li>`, `<table>`.
6. **Regístrala** en `assets/paginas.js`: agrega su entrada o, si ya existe, actualiza `actualizado` y `resumen`. Una entrada por archivo, sin duplicados. Así aparece sola en el menú de todas las páginas y en la lista de entregas de `main.html`.
7. Comparte en el chat la ruta de la página, con una frase sobre qué contiene y qué debe hacer el humano.

## Archivos que no son páginas

Planillas, PDF, imágenes o CSV para el humano se guardan en `[empresa]/outputs/archivos/` (pueden tener subcarpetas) y se registran en `assets/paginas.js` con `tipo: "archivo"`. Si un archivo necesita explicación, crea además una página que lo enlace.

## Verificación antes de entregar

Antes de decir que una página está lista, revisa en su código que:

- [ ] Empieza con `<!doctype html>` y tiene `<link rel="stylesheet" href="assets/estilo.css">` en el `<head>`.
- [ ] Termina con `<script src="assets/paginas.js"></script>` y `<script src="assets/navegacion.js"></script>`.
- [ ] No contiene sintaxis Markdown ni bloques `<style>`.
- [ ] Está en `[empresa]/outputs/`, no en una subcarpeta.
- [ ] Está registrada en `assets/paginas.js` con fecha actualizada.

Si la herramienta permite abrir la página en un navegador, ábrela y confirma que se ve con diseño y con la barra de navegación.

## Lectura mínima

- Para crear una página nueva lee solo `templates/PAGINA.html` y la entrada que vas a agregar en `paginas.js`. No leas `estilo.css`, `navegacion.js` ni otras páginas.
- `estilo.css`, `navegacion.js` y `organigrama.js` no se editan en la carpeta de la empresa. Si hace falta mejorarlos, se cambia la plantilla en `templates/web/assets/` y se vuelven a copiar.

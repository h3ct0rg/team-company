// Registro de páginas y archivos que la empresa entrega al humano.
// Vive en [empresa]/outputs/assets/paginas.js. Con estos datos, navegacion.js dibuja
// el menú de todas las páginas y la lista de entregas de main.html.
//
// Cada vez que un agente crea o actualiza una página o un archivo para el humano,
// agrega o actualiza SU entrada (una por archivo, sin duplicados) y la fecha.
// main.html no se registra: es la página de inicio.
//
// Campos:
//   archivo      ruta relativa a outputs/: "marketing-plan.html" o "archivos/costos.xlsx".
//   titulo       nombre claro para el humano.
//   area         área responsable, en palabras simples (agrupa el menú).
//   autor        puesto que la preparó.
//   actualizado  AAAA-MM-DD de la última actualización.
//   resumen      una frase: qué es y qué se espera del humano.
//   tipo         "pagina" (HTML) o "archivo" (xlsx, pdf, csv, imagen...).

window.SITIO = {
  empresa: "[Nombre de la empresa]",
  paginas: [
    // { archivo: "marketing-plan.html", titulo: "Plan de marketing", area: "Marketing",
    //   autor: "Jefe de Marketing", actualizado: "AAAA-MM-DD",
    //   resumen: "Canales y mensajes para el lanzamiento. Revisa y aprueba el presupuesto.", tipo: "pagina" }
  ]
};

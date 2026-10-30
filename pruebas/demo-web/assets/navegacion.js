// Navegación común de las páginas de la empresa. No se edita: se copia tal cual a
// [empresa]/outputs/assets/navegacion.js. Lee los datos de assets/paginas.js y:
//   - asegura que la página tenga el estilo común (por si falta el <link>);
//   - dibuja la barra superior con «Inicio» y el menú de todas las páginas;
//   - en main.html, dibuja la lista de entregas dentro de <div id="entregas">.
(function () {
  var head = document.head;
  if (!document.querySelector('link[href$="assets/estilo.css"]')) {
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "assets/estilo.css";
    head.appendChild(css);
  }

  var sitio = window.SITIO || { empresa: "", paginas: [] };
  var paginas = Array.isArray(sitio.paginas) ? sitio.paginas.slice() : [];
  var actual = decodeURIComponent(location.pathname.split("/").pop() || "main.html");
  var enInicio = actual === "main.html" || actual === "";

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function porArea(lista) {
    var grupos = {};
    lista.forEach(function (p) { var a = p.area || "General"; (grupos[a] = grupos[a] || []).push(p); });
    Object.keys(grupos).forEach(function (a) {
      grupos[a].sort(function (x, y) { return String(y.actualizado || "").localeCompare(String(x.actualizado || "")); });
    });
    return grupos;
  }
  function esReciente(fecha) {
    var t = Date.parse(fecha);
    return !isNaN(t) && Date.now() - t < 7 * 24 * 3600 * 1000;
  }
  function enlace(p) {
    var a = el("a", null, p.titulo || p.archivo);
    a.href = p.archivo;
    if (p.archivo === actual) a.setAttribute("aria-current", "page");
    return a;
  }

  function barra() {
    var nav = el("nav", "topnav");
    nav.setAttribute("aria-label", "Navegación de la empresa");
    var inner = el("div", "inner");
    var marca = el("a", "brand", sitio.empresa || "Inicio");
    marca.href = "main.html";
    var inicio = el("a", "home", "Inicio");
    inicio.href = "main.html";
    if (enInicio) inicio.setAttribute("aria-current", "page");
    inner.append(marca, inicio);

    if (paginas.length) {
      var det = el("details");
      det.append(el("summary", null, "Páginas (" + paginas.length + ")"));
      var menu = el("div", "menu");
      var grupos = porArea(paginas);
      Object.keys(grupos).sort().forEach(function (area) {
        menu.append(el("h3", null, area));
        grupos[area].forEach(function (p) {
          var a = enlace(p);
          if (p.tipo === "archivo") a.append(" ", el("small", null, "(archivo)"));
          menu.append(a);
        });
      });
      det.append(menu);
      inner.append(det);
      document.addEventListener("click", function (e) { if (det.open && !det.contains(e.target)) det.open = false; });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") det.open = false; });
    }
    nav.append(inner);
    return nav;
  }

  function listaEntregas(cont) {
    if (!paginas.length) {
      cont.append(el("p", "note", "Aquí aparecerán las páginas y archivos que te prepare el equipo."));
      return;
    }
    var grupos = porArea(paginas);
    Object.keys(grupos).sort().forEach(function (area) {
      cont.append(el("h3", null, area));
      var ul = el("ul");
      grupos[area].forEach(function (p) {
        var li = el("li");
        li.append(enlace(p));
        if (p.tipo === "archivo") li.append(el("span", "badge file", "archivo"));
        if (esReciente(p.actualizado)) li.append(el("span", "badge", "nuevo"));
        var datos = [p.autor, p.actualizado].filter(Boolean).join(" · ");
        if (datos) li.append(el("span", "fecha", datos));
        if (p.resumen) li.append(el("span", "resumen", p.resumen));
        ul.append(li);
      });
      cont.append(ul);
    });
  }

  function iniciar() {
    if (!document.querySelector("nav.topnav")) document.body.insertBefore(barra(), document.body.firstChild);
    var cont = document.getElementById("entregas");
    if (cont) listaEntregas(cont);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();

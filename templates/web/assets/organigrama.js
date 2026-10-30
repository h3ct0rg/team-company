// Organigrama interactivo de main.html. No se edita: se copia tal cual a
// [empresa]/outputs/assets/organigrama.js. Dibuja el equipo dentro de <div id="org">
// con los datos de assets/equipo.js y muestra un pop-up al pasar el mouse o tocar un agente.
(function () {
  var org = document.getElementById("org");
  if (!org) return;
  var data = window.EQUIPO;
  var pop = document.createElement("div");
  pop.id = "popover";
  pop.className = "popover";
  pop.setAttribute("role", "tooltip");
  pop.hidden = true;
  document.body.appendChild(pop);

  if (!data || !Array.isArray(data.agentes) || !data.agentes.length) {
    org.innerHTML = '<p class="note">El organigrama aparecerá cuando el CEO prepare el equipo.</p>';
    return;
  }
  var fecha = document.getElementById("team-date");
  if (fecha && data.actualizado) fecha.textContent = "Estado al " + data.actualizado + ".";

  var STATES = {
    human: { cls: "s-human", label: "Fundador" },
    block: { cls: "s-block", label: "Bloqueado" },
    late: { cls: "s-late", label: "Con tareas vencidas" },
    work: { cls: "s-work", label: "Trabajando" },
    idle: { cls: "s-idle", label: "Sin tareas" }
  };
  function stateOf(a) {
    if (a.humano) return STATES.human;
    if (a.bloqueadas > 0) return STATES.block;
    if (a.vencidas > 0) return STATES.late;
    if ((a.ahora && a.ahora.length) || a.abiertas > 0) return STATES.work;
    return STATES.idle;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var byId = {}, children = {};
  data.agentes.forEach(function (a) { byId[a.id] = a; });
  data.agentes.forEach(function (a) {
    var key = a.jefe && byId[a.jefe] ? a.jefe : "__root";
    (children[key] = children[key] || []).push(a);
  });

  var pinned = null, current = null;

  function fill(a) {
    var st = stateOf(a);
    pop.replaceChildren();
    pop.append(el("h3", null, a.puesto));
    var boss = a.jefe && byId[a.jefe] ? " · Reporta a " + byId[a.jefe].puesto : "";
    pop.append(el("p", "meta", (a.area || "") + boss));
    var pill = el("span", "pill " + st.cls);
    pill.append(el("i", "dot"), document.createTextNode(st.label));
    pop.append(pill);
    if (a.proposito) {
      pop.append(el("h4", null, a.humano ? "Tu papel" : "Qué hace"));
      pop.append(el("p", null, a.proposito));
    }
    pop.append(el("h4", null, a.humano ? "Tus pendientes" : "En qué está"));
    if (a.ahora && a.ahora.length) {
      var ul = el("ul");
      a.ahora.slice(0, 3).forEach(function (t) { ul.append(el("li", null, t)); });
      pop.append(ul);
    } else {
      pop.append(el("p", "note", a.humano ? "Nada pendiente por ahora." : "Sin tareas en curso."));
    }
    if (a.bloqueos && a.bloqueos.length) {
      pop.append(el("h4", null, "Bloqueos"));
      var bl = el("ul", "block");
      a.bloqueos.slice(0, 3).forEach(function (t) { bl.append(el("li", null, t)); });
      pop.append(bl);
    }
    if (!a.humano) {
      pop.append(el("p", "counts",
        "Abiertas: " + (a.abiertas || 0) + " · Bloqueadas: " + (a.bloqueadas || 0) + " · Vencidas: " + (a.vencidas || 0)));
    }
  }

  function place(btn) {
    var r = btn.getBoundingClientRect();
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var x = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 8));
    var y = r.bottom + 8;
    if (y + h > window.innerHeight - 8) y = Math.max(8, r.top - h - 8);
    pop.style.left = x + "px";
    pop.style.top = y + "px";
  }
  function show(btn, a) {
    if (current && current !== btn) current.setAttribute("aria-expanded", "false");
    current = btn;
    fill(a);
    pop.hidden = false;
    place(btn);
  }
  function hide() {
    if (current) current.setAttribute("aria-expanded", "false");
    current = null;
    pinned = null;
    pop.hidden = true;
  }

  function node(a) {
    var st = stateOf(a);
    var btn = el("button", "node " + st.cls);
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-describedby", "popover");
    btn.setAttribute("aria-label", a.puesto + ", " + st.label);
    var row = el("span", "row");
    row.append(el("i", "dot"), el("strong", null, a.puesto));
    btn.append(row);
    if (a.area) btn.append(el("small", null, a.area));

    btn.addEventListener("mouseenter", function () { if (!pinned) show(btn, a); });
    btn.addEventListener("mouseleave", function () { if (!pinned) hide(); });
    btn.addEventListener("focus", function () { if (!pinned) show(btn, a); });
    btn.addEventListener("blur", function () { if (!pinned) hide(); });
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (pinned === btn) { hide(); return; }
      show(btn, a);
      pinned = btn;
      btn.setAttribute("aria-expanded", "true");
    });
    return btn;
  }
  function branch(list, seen) {
    var ul = el("ul");
    list.forEach(function (a) {
      if (seen[a.id]) return;
      seen[a.id] = true;
      var li = el("li");
      li.append(node(a));
      if (children[a.id]) li.append(branch(children[a.id], seen));
      ul.append(li);
    });
    return ul;
  }
  org.append(branch(children.__root || [], {}));

  document.addEventListener("click", function (e) { if (pinned && !pop.contains(e.target)) hide(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
  function reposition() { if (current && !pop.hidden) place(current); }
  window.addEventListener("resize", reposition);
  window.addEventListener("scroll", reposition, true);
})();

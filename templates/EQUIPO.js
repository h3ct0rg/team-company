// Datos del organigrama que dibuja el panel. Se guarda como negocio/outputs/equipo.js,
// junto a index.html. Lo genera el CEO según protocols/TASKS.md («Organigrama del panel»).
// El panel muestra todo lo que contiene este archivo: no pongas datos sensibles.
//
// Campos de cada agente:
//   id          ID del organigrama (A-001...). El humano usa "H".
//   puesto      nombre visible del puesto.
//   area        área, en palabras simples.
//   jefe        id del jefe directo (null solo para el humano).
//   humano      true solo para el humano.
//   proposito   qué hace, en una o dos frases simples (del «Propósito» de su archivo de rol).
//   ahora       hasta 3 tareas en curso, en lenguaje simple (columna «Ahora» de RESUMEN.md).
//               Para el humano: sus pendientes más urgentes.
//   abiertas, bloqueadas, vencidas   números de su fila en RESUMEN.md.
//   bloqueos    hasta 3 bloqueos en lenguaje simple, con qué los destraba.
//
// El color de cada agente se calcula solo: bloqueado > con tareas vencidas > trabajando > sin tareas.

window.EQUIPO = {
  actualizado: "AAAA-MM-DD",
  agentes: [
    {
      id: "H", puesto: "Tú", area: "Fundador", jefe: null, humano: true,
      proposito: "Decides el rumbo, apruebas gastos y conexiones, y haces lo que requiere una persona.",
      ahora: [], abiertas: 0, bloqueadas: 0, vencidas: 0, bloqueos: []
    },
    {
      id: "A-001", puesto: "CEO", area: "Dirección", jefe: "H",
      proposito: "Coordina la empresa, arma el equipo según la etapa y te mantiene al tanto.",
      ahora: [], abiertas: 0, bloqueadas: 0, vencidas: 0, bloqueos: []
    }
  ]
};

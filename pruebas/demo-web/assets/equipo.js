// Datos ficticios de demostración.
window.EQUIPO = {
  actualizado: "2026-10-30",
  agentes: [
    { id: "H", puesto: "Tú", area: "Fundador", jefe: null, humano: true,
      proposito: "Decides el rumbo, apruebas gastos y conexiones, y haces lo que requiere una persona.",
      ahora: ["Subir fotos de las 5 poleras de muestra (vence 4 nov)", "Aprobar presupuesto de 20.000 CLP para anuncios"],
      abiertas: 2, bloqueadas: 0, vencidas: 0, bloqueos: [] },
    { id: "A-001", puesto: "CEO", area: "Dirección", jefe: "H",
      proposito: "Coordina la empresa, arma el equipo según la etapa y te mantiene al tanto.",
      ahora: ["Preparar la revisión semanal", "Definir criterio para pasar a lanzamiento"],
      abiertas: 3, bloqueadas: 0, vencidas: 0, bloqueos: [] },
    { id: "A-002", puesto: "Jefe de Marketing", area: "Marketing", jefe: "A-001",
      proposito: "Que los clientes correctos conozcan el negocio y quieran comprar, al menor costo posible.",
      ahora: ["Plan de lanzamiento en Instagram"], abiertas: 4, bloqueadas: 0, vencidas: 0, bloqueos: [] },
    { id: "A-003", puesto: "Social media manager", area: "Marketing", jefe: "A-002",
      proposito: "Construir presencia en redes que genere interesados y ventas, no solo seguidores.",
      ahora: [], abiertas: 2, bloqueadas: 1, vencidas: 0,
      bloqueos: ["Calendario de noviembre: espera tus fotos de producto"] },
    { id: "A-004", puesto: "Jefe de Finanzas", area: "Finanzas", jefe: "A-001",
      proposito: "Que el negocio sepa si gana o pierde dinero y cuánto le queda.",
      ahora: ["Costo por polera con el proveedor elegido"], abiertas: 2, bloqueadas: 0, vencidas: 1, bloqueos: [] },
    { id: "A-005", puesto: "Analista financiero", area: "Finanzas", jefe: "A-004",
      proposito: "Convertir costos, precios y ventas en escenarios que permitan decidir.",
      ahora: [], abiertas: 0, bloqueadas: 0, vencidas: 0, bloqueos: [] }
  ]
};

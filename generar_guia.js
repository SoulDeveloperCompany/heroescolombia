const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, Header, Footer, PageBreak
} = require('docx');
const fs = require('fs');

// ── Paleta de colores ──────────────────────────────────────────
const AZUL    = "1A2A4A";  // Encabezados principales
const DORADO  = "C8960A";  // Finales y rutas
const VERDE   = "1A4A2A";  // Flags / notas
const ROJO    = "6B1A1A";  // Alertas / fidelidad negativa
const GRIS    = "F0F0F0";  // Fondo de filas alternas
const GRIS2   = "E0E4EC";  // Fondo de encabezados de tabla
const BLANCO  = "FFFFFF";

// ── Bordes de tabla ────────────────────────────────────────────
const borde = { style: BorderStyle.SINGLE, size: 1, color: "AAAAAA" };
const bordes = { top: borde, bottom: borde, left: borde, right: borde };
const bordeDorado = { style: BorderStyle.SINGLE, size: 4, color: DORADO };
const bordeDorados = { top: bordeDorado, bottom: bordeDorado, left: bordeDorado, right: bordeDorado };
const borderAzul = { style: BorderStyle.SINGLE, size: 4, color: AZUL };
const bordeAzuls = { top: borderAzul, bottom: borderAzul, left: borderAzul, right: borderAzul };

// ── Helpers ────────────────────────────────────────────────────
const espacio = (antes = 80, despues = 80) => ({ before: antes, after: despues });

function celda(texto, opciones = {}) {
  const {
    bold = false, color = "000000", bg = BLANCO, span = 1,
    italic = false, size = 20, align = AlignmentType.LEFT, borders = bordes
  } = opciones;
  return new TableCell({
    borders,
    width: { size: opciones.width || 2000, type: WidthType.DXA },
    shading: { fill: bg, type: ShadingType.CLEAR },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    verticalAlign: VerticalAlign.CENTER,
    columnSpan: span,
    children: [new Paragraph({
      alignment: align,
      spacing: espacio(40, 40),
      children: [new TextRun({ text: texto, bold, color, italics: italic, size, font: "Arial" })]
    })]
  });
}

function fila(celdas, bgFila = BLANCO) { return new TableRow({ children: celdas }); }

function titulo(texto, nivel, color = AZUL) {
  const sizes = { 1: 40, 2: 32, 3: 26, 4: 24 };
  const spaces = { 1: [360, 200], 2: [280, 160], 3: [200, 120], 4: [160, 80] };
  return new Paragraph({
    spacing: espacio(...spaces[nivel]),
    children: [new TextRun({ text: texto, bold: true, color, size: sizes[nivel], font: "Arial" })]
  });
}

function parrafo(texto, opciones = {}) {
  const { bold = false, italic = false, color = "111111", size = 20, indent = 0 } = opciones;
  return new Paragraph({
    spacing: espacio(60, 60),
    indent: indent ? { left: indent } : undefined,
    children: [new TextRun({ text: texto, bold, italic, color, size, font: "Arial" })]
  });
}

function separador(color = AZUL) {
  return new Paragraph({
    spacing: espacio(120, 120),
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color } }
  });
}

function saltoPagina() { return new Paragraph({ children: [new PageBreak()] }); }

// ── TABLA: Elecciones de un acto ──────────────────────────────
function tablaElecciones(elecciones) {
  const W = 9360;
  const cols = [500, 2500, 1800, 1800, 1500, 1260];
  const rows = [];

  // Encabezado
  rows.push(fila([
    celda('#',          { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[0] }),
    celda('Opción',     { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[1] }),
    celda('Fidelidad',  { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[2] }),
    celda('Flags',      { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[3] }),
    celda('Siguiente',  { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[4] }),
    celda('Nodo',       { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[5] }),
  ]));

  elecciones.forEach((el, i) => {
    const bgH = i % 2 === 0 ? "EEF2F8" : "F8F4EE";

    // Fila de pregunta (span completo)
    const celdaHeader = new TableCell({
      borders: bordeAzuls,
      columnSpan: 6,
      shading: { fill: AZUL, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 140, right: 140 },
      children: [new Paragraph({
        spacing: espacio(40, 40),
        children: [
          new TextRun({ text: 'Eleccion ' + el.num + '  ', bold: true, color: "D4943A", size: 20, font: "Arial" }),
          new TextRun({ text: '(' + el.nodo + ')  ', italic: true, color: "AABBDD", size: 18, font: "Arial" }),
          new TextRun({ text: el.pregunta, bold: true, color: BLANCO, size: 20, font: "Arial" }),
        ]
      })]
    });
    rows.push(new TableRow({ children: [celdaHeader] }));

    // Filas de opciones
    el.opciones.forEach((op, j) => {
      const bg = j % 2 === 0 ? bgH : BLANCO;
      const fidColor = op.fid.startsWith('+') ? "1A4A2A" : op.fid.startsWith('-') ? ROJO : "444444";
      rows.push(fila([
        celda(op.letra,  { bg, size: 18, width: cols[0], align: AlignmentType.CENTER, bold: true, color: AZUL }),
        celda(op.texto,  { bg, size: 18, width: cols[1], italic: true }),
        celda(op.fid,    { bg, size: 18, width: cols[2], bold: true, color: fidColor, align: AlignmentType.CENTER }),
        celda(op.flags,  { bg, size: 16, width: cols[3], color: VERDE, italic: true }),
        celda(op.sig,    { bg, size: 18, width: cols[4], color: AZUL, align: AlignmentType.CENTER }),
        celda(op.nodoSig,{ bg, size: 16, width: cols[5], color: "666666", italic: true }),
      ]));
    });
  });

  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols, rows });
}

// ── TABLA: Ruta para un final ─────────────────────────────────
function tablaRuta(pasos) {
  const W = 9360;
  const cols = [400, 2000, 3200, 1500, 2260];
  const rows = [];

  rows.push(fila([
    celda('E.',        { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[0] }),
    celda('Opción',   { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[1] }),
    celda('Texto elegido', { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[2] }),
    celda('Fidelidad',{ bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[3] }),
    celda('Total acum.',{ bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[4] }),
  ]));

  pasos.forEach((p, i) => {
    const bg = i % 2 === 0 ? "FFFBF0" : BLANCO;
    const fidColor = p.delta.startsWith('+') ? "1A4A2A" : p.delta.startsWith('-') ? ROJO : "444444";
    rows.push(fila([
      celda(String(p.e),    { bg, size: 18, width: cols[0], bold: true, color: AZUL, align: AlignmentType.CENTER }),
      celda(p.opcion,       { bg, size: 18, width: cols[1], bold: true, color: DORADO }),
      celda(p.texto,        { bg, size: 18, width: cols[2], italic: true }),
      celda(p.delta,        { bg, size: 18, width: cols[3], bold: true, color: fidColor, align: AlignmentType.CENTER }),
      celda(String(p.total),{ bg, size: 18, width: cols[4], bold: true, color: AZUL, align: AlignmentType.CENTER }),
    ]));
  });

  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols, rows });
}

// ── TABLA: Flags ──────────────────────────────────────────────
function tablaFlags(flags) {
  const W = 9360;
  const cols = [3200, 6160];
  const rows = [];
  rows.push(fila([
    celda('Flag',        { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[0] }),
    celda('Descripción', { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[1] }),
  ]));
  flags.forEach((f, i) => {
    const bg = i % 2 === 0 ? "F0F8F2" : BLANCO;
    rows.push(fila([
      celda(f.flag, { bg, size: 18, width: cols[0], bold: true, color: VERDE, italic: true }),
      celda(f.desc, { bg, size: 18, width: cols[1] }),
    ]));
  });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols, rows });
}

// ── TABLA: Notas históricas ───────────────────────────────────
function tablaNotas(notas) {
  const W = 9360;
  const cols = [2800, 2400, 4160];
  const rows = [];
  rows.push(fila([
    celda('Nota',    { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[0] }),
    celda('ID',      { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[1] }),
    celda('Cuándo se desbloquea', { bold: true, bg: GRIS2, color: AZUL, size: 18, width: cols[2] }),
  ]));
  notas.forEach((n, i) => {
    const bg = i % 2 === 0 ? "F8F6E8" : BLANCO;
    rows.push(fila([
      celda(n.nombre, { bg, size: 18, width: cols[0], bold: true, color: "5A3A0A" }),
      celda(n.id,     { bg, size: 18, width: cols[1], italic: true, color: VERDE }),
      celda(n.cuando, { bg, size: 18, width: cols[2] }),
    ]));
  });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols, rows });
}

// ── TABLA: Finales — lógica ───────────────────────────────────
function tablaFinales() {
  const W = 9360;
  const cols = [300, 2400, 3100, 3560];
  const finales = [
    { orden: '1°', nombre: 'Final III — La Fuga', condicion: 'Flag "intentó_huir" Y NO "se_quedó" Y NO "salio_ultima_mision"', fidelidad: 'Cualquiera' },
    { orden: '2°', nombre: 'Final IV — El Sacrificio Silencioso', condicion: 'Flag "pidió_clemencia"', fidelidad: '< 40' },
    { orden: '3°', nombre: 'Final V — Entre Dos Mundos', condicion: 'Flag "info_falsa" Y NO "se_quedó"', fidelidad: '< 50' },
    { orden: '4°', nombre: 'Final II — La Victoria Silenciosa', condicion: 'Flag "misión_completada"', fidelidad: '>= 70' },
    { orden: '5°', nombre: 'Final I — El Canon Histórico', condicion: 'Cualquier otra combinación (default)', fidelidad: 'Cualquiera' },
  ];
  const bgFinales = ["FFF8E8", "FFF0F0", "F0FFF4", "F0F4FF", "F0EDFF"];
  const rows = [];
  rows.push(fila([
    celda('Orden',    { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[0] }),
    celda('Final',    { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[1] }),
    celda('Condición de flags', { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[2] }),
    celda('Fidelidad requerida', { bold: true, bg: "2A1A04", color: "D4943A", size: 18, width: cols[3] }),
  ]));
  finales.forEach((f, i) => {
    rows.push(fila([
      celda(f.orden,    { bg: bgFinales[i], size: 18, width: cols[0], bold: true, color: DORADO, align: AlignmentType.CENTER }),
      celda(f.nombre,   { bg: bgFinales[i], size: 18, width: cols[1], bold: true, color: AZUL }),
      celda(f.condicion,{ bg: bgFinales[i], size: 18, width: cols[2], italic: true, color: VERDE }),
      celda(f.fidelidad,{ bg: bgFinales[i], size: 18, width: cols[3], bold: true, color: f.fidelidad.startsWith('<') ? ROJO : f.fidelidad.startsWith('>') ? "1A4A2A" : "444444", align: AlignmentType.CENTER }),
    ]));
  });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols, rows });
}

// ══════════════════════════════════════════════════════════════
// DATOS DEL JUEGO
// ══════════════════════════════════════════════════════════════

const eleccionesActo1 = [
  {
    num: '1', nodo: 'a1_03', pregunta: '¿Qué hacer con los documentos del Capitán Valdés?',
    opciones: [
      { letra: 'A', texto: '"Leo los documentos y memorizo todo"', fid: '+10 / Sospecha +8', flags: 'leyo_documentos', sig: 'a1_04', nodoSig: 'Elección 2' },
      { letra: 'B', texto: '"Copio los datos en un papel"', fid: '+15 / Sospecha +15', flags: 'copio_documentos', sig: 'a1_04', nodoSig: 'Elección 2' },
      { letra: 'C', texto: '"No toco nada, es peligroso"', fid: '-5 / Sospecha -5', flags: '—', sig: 'a1_04b', nodoSig: 'Elección 2b' },
    ]
  },
  {
    num: '2', nodo: 'a1_04', pregunta: '¿Le cuento a Alejo lo que descubrí? (solo si Elección 1 fue A o B)',
    opciones: [
      { letra: 'A', texto: '"Le cuento todo"', fid: '+10 / Confianza +15', flags: 'confio_en_alejo', sig: 'a1_05', nodoSig: 'Elección 3' },
      { letra: 'B', texto: '"Guardo silencio"', fid: '-5 / Sospecha -10', flags: '—', sig: 'a1_05', nodoSig: 'Elección 3' },
      { letra: 'C', texto: '"Quiero unirme activamente"', fid: '+20 / Confianza +10', flags: 'se_unio_resistencia', sig: 'a1_05', nodoSig: 'Elección 3' },
    ]
  },
  {
    num: '2b', nodo: 'a1_04b', pregunta: '¿Me uno o espero? (solo si Elección 1 fue C)',
    opciones: [
      { letra: 'A', texto: '"Acepto unirme a la resistencia"', fid: '+15', flags: 'se_unio_resistencia, confio_en_alejo', sig: 'a1_05', nodoSig: 'Elección 3' },
      { letra: 'B', texto: '"Pido tiempo para pensarlo"', fid: '-5', flags: '—', sig: 'a1_05', nodoSig: 'Elección 3' },
    ]
  },
  {
    num: '3', nodo: 'a1_07', pregunta: '¿Cómo distrae al soldado en la calle?',
    opciones: [
      { letra: 'A', texto: '"Le pregunto sobre costurera para sus calzones"', fid: '+5 / Sospecha -5', flags: 'primer_paso_exitoso', sig: 'a1_08', nodoSig: 'Acto II' },
      { letra: 'B', texto: '"Muestro las telas superficialmente"', fid: '+3', flags: 'primer_paso_exitoso', sig: 'a1_08', nodoSig: 'Acto II' },
      { letra: 'C', texto: '"Menciono el nombre del Capitán Valdés"', fid: '+2 / Sospecha +5', flags: 'primer_paso_exitoso', sig: 'a1_08', nodoSig: 'Acto II' },
    ]
  },
];

const eleccionesActo2 = [
  {
    num: '4', nodo: 'a2_01', pregunta: '¿Cómo convence a Miguel para unirse a la resistencia?',
    opciones: [
      { letra: 'A', texto: '"Apela al futuro de sus hijos"', fid: '+8 / Confianza +12', flags: 'miguel_unido', sig: 'a2_02', nodoSig: 'Elección 5' },
      { letra: 'B', texto: '"Le ofrece el doble de pago"', fid: '-3 / Confianza +5', flags: 'miguel_unido', sig: 'a2_02', nodoSig: 'Elección 5' },
      { letra: 'C', texto: '"Le recuerda al doctor Rodríguez fusilado"', fid: '+10 / Confianza +8', flags: 'miguel_unido', sig: 'a2_02', nodoSig: 'Elección 5' },
    ]
  },
  {
    num: '5', nodo: 'a2_02', pregunta: '¿Qué hacer con Joaquín capturado?',
    opciones: [
      { letra: 'A', texto: '"Enviar mensaje a Joaquín para que resista"', fid: '+12 / Confianza +8', flags: 'ayudo_joaquin', sig: 'a2_03', nodoSig: 'Elección 6' },
      { letra: 'B', texto: '"Mover el depósito. Proteger la red"', fid: '+5 / Confianza -5', flags: 'protegió_red', sig: 'a2_03', nodoSig: 'Elección 6' },
      { letra: 'C', texto: '"Hacer ambas cosas a la vez"', fid: '+10 / Confianza +5', flags: 'ayudo_joaquin, protegió_red', sig: 'a2_03', nodoSig: 'Elección 6' },
    ]
  },
  {
    num: '6', nodo: 'a2_04', pregunta: '¿Cómo hace llegar la advertencia urgente al norte?',
    opciones: [
      { letra: 'A', texto: '"Va ella misma de noche"', fid: '+18 / Sospecha +15', flags: 'fue_ella_misma', sig: 'a2_05', nodoSig: 'Acto III' },
      { letra: 'B', texto: '"Envía el mensaje con Miguel"', fid: '+10 / Confianza +8', flags: 'uso_a_miguel', sig: 'a2_05', nodoSig: 'Acto III' },
      { letra: 'C', texto: '"Usa al Padre Marcos como mensajero"', fid: '+8 / Sospecha -5', flags: 'uso_padre_marcos', sig: 'a2_05', nodoSig: 'Acto III' },
    ]
  },
];

const eleccionesActo3 = [
  {
    num: '7', nodo: 'a3_02', pregunta: '¿Huye con Alejo o se queda en Bogotá?',
    opciones: [
      { letra: 'A', texto: '"Me quedo. La resistencia me necesita"', fid: '+20', flags: 'se_quedó', sig: 'a3_03', nodoSig: 'Elección 8' },
      { letra: 'B', texto: '"Nos vamos juntos" (intento fallido)', fid: '-15', flags: 'intentó_huir', sig: 'a3_03b→a3_03', nodoSig: 'Elección 8' },
      { letra: 'C', texto: '"Dame tres días más"', fid: '+12 / Sospecha +10', flags: 'se_quedó, ultima_mision', sig: 'a3_03', nodoSig: 'Elección 8' },
    ]
  },
  {
    num: '8', nodo: 'a3_04', pregunta: '¿Sale a cumplir la última misión sabiendo que la buscan?',
    opciones: [
      { letra: 'A', texto: '"Salgo. La misión importa más"', fid: '+15 / Sospecha +20', flags: 'salio_ultima_mision, misión_completada', sig: 'a3_05', nodoSig: 'Acto IV' },
      { letra: 'B', texto: '"Enseño el código a Alejo y lo mando"', fid: '+8 / Sospecha +5', flags: 'mando_a_alejo', sig: 'a3_05', nodoSig: 'Acto IV' },
      { letra: 'C', texto: '"No salgo. Escaparemos esta noche"', fid: '-10', flags: 'no_salio', sig: 'a3_05', nodoSig: 'Acto IV' },
    ]
  },
];

const eleccionesActo4 = [
  {
    num: '9', nodo: 'a4_01', pregunta: '¿Cómo responde al interrogatorio del Coronel González?',
    opciones: [
      { letra: 'A', texto: '"Niego todo con calma y sin vacilar"', fid: '+15', flags: 'negó_todo', sig: 'a4_02', nodoSig: 'Elección 10' },
      { letra: 'B', texto: '"Da información falsa"', fid: '+10 / Sospecha -10', flags: 'negó_todo, info_falsa', sig: 'a4_02', nodoSig: 'Elección 10' },
      { letra: 'C', texto: '"Guarda silencio absoluto"', fid: '+12', flags: 'silencio_absoluto', sig: 'a4_02', nodoSig: 'Elección 10' },
    ]
  },
  {
    num: '10', nodo: 'a4_02', pregunta: '¿Qué le dice a Alejo en la celda?',
    opciones: [
      { letra: 'A', texto: '"La misión llegó. No fue en vano."', fid: '+5 / Confianza +10', flags: '—', sig: 'a4_03', nodoSig: 'Elección 11' },
      { letra: 'B', texto: '"Luchamos. Eso nadie nos lo quita."', fid: '+8', flags: '—', sig: 'a4_03', nodoSig: 'Elección 11' },
      { letra: 'C', texto: '"Ojalá alguien nos recuerde algún día."', fid: '+10', flags: 'piensa_en_legado', sig: 'a4_03', nodoSig: 'Elección 11' },
    ]
  },
  {
    num: '11', nodo: 'a4_03', pregunta: '¿Cómo enfrenta el tribunal ante el Virrey Sámano?',
    opciones: [
      { letra: 'A', texto: '"Con dignidad silenciosa"', fid: '+10', flags: 'dignidad_silenciosa', sig: 'act5_intro', nodoSig: 'Acto V' },
      { letra: 'B', texto: '"Declara que la historia recordará este crimen"', fid: '+15', flags: 'habló_en_tribunal', sig: 'act5_intro', nodoSig: 'Acto V' },
      { letra: 'C', texto: '"Pide clemencia para que Alejo viva"', fid: '-5 / Confianza +15', flags: 'pidió_clemencia', sig: 'act5_intro', nodoSig: 'Acto V' },
    ]
  },
];

const rutaCanon = [
  { e:1,  opcion:'B', texto:'Copio los datos en papel', delta:'+15', total:75 },
  { e:2,  opcion:'C', texto:'Quiero unirme activamente a la resistencia', delta:'+20', total:95 },
  { e:3,  opcion:'A', texto:'Pregunto sobre costurera para sus calzones', delta:'+5', total:100 },
  { e:4,  opcion:'C', texto:'Le recuerdo al doctor Rodríguez fusilado', delta:'+10', total:100 },
  { e:5,  opcion:'A', texto:'Envío mensaje a Joaquín para que resista', delta:'+12', total:100 },
  { e:6,  opcion:'A', texto:'Voy yo misma de noche hacia el norte', delta:'+18', total:100 },
  { e:7,  opcion:'A', texto:'Me quedo — la resistencia me necesita', delta:'+20', total:100 },
  { e:8,  opcion:'A', texto:'Salgo a cumplir la misión → activa misión_completada', delta:'+15', total:100 },
  { e:9,  opcion:'A', texto:'Niego todo con calma y sin vacilar', delta:'+15', total:100 },
  { e:10, opcion:'C', texto:'Ojalá alguien nos recuerde algún día', delta:'+10', total:100 },
  { e:11, opcion:'B', texto:'Declara que la historia recordará este crimen', delta:'+15', total:100 },
];

const rutaVictoria = [
  { e:1,  opcion:'A', texto:'Leo documentos y memorizo todo', delta:'+10', total:70 },
  { e:2,  opcion:'A', texto:'Le cuento todo a Alejo', delta:'+10', total:80 },
  { e:3,  opcion:'B', texto:'Muestro las telas superficialmente', delta:'+3', total:83 },
  { e:4,  opcion:'A', texto:'Apelo al futuro de sus hijos', delta:'+8', total:91 },
  { e:5,  opcion:'C', texto:'Hago ambas cosas a la vez', delta:'+10', total:100 },
  { e:6,  opcion:'B', texto:'Envío el mensaje con Miguel', delta:'+10', total:100 },
  { e:7,  opcion:'C', texto:'Dame tres días más → activa se_quedó y ultima_mision', delta:'+12', total:100 },
  { e:8,  opcion:'A', texto:'Salgo yo misma → activa salio_ultima_mision, misión_completada', delta:'+15', total:100 },
  { e:9,  opcion:'A', texto:'Niego todo con calma', delta:'+15', total:100 },
  { e:10, opcion:'A', texto:'La misión llegó. No fue en vano.', delta:'+5', total:100 },
  { e:11, opcion:'A', texto:'Con dignidad silenciosa', delta:'+10', total:100 },
];

const rutaFuga = [
  { e:1,   opcion:'C', texto:'No toco nada — demasiado peligroso', delta:'-5', total:55 },
  { e:'2b',opcion:'B', texto:'Pido tiempo para pensarlo', delta:'-5', total:50 },
  { e:3,   opcion:'C', texto:'Menciono el nombre del Capitán Valdés', delta:'+2', total:52 },
  { e:4,   opcion:'B', texto:'Le ofrezco el doble de pago a Miguel', delta:'-3', total:49 },
  { e:5,   opcion:'B', texto:'Muevo el depósito — protejo la red', delta:'+5', total:54 },
  { e:6,   opcion:'C', texto:'Uso al Padre Marcos como mensajero', delta:'+8', total:62 },
  { e:7,   opcion:'B', texto:'Nos vamos juntos → activa intentó_huir, NO activa se_quedó', delta:'-15', total:47 },
  { e:8,   opcion:'C', texto:'No salgo → NO activa salio_ultima_mision', delta:'-10', total:37 },
  { e:9,   opcion:'C', texto:'Guardo silencio absoluto', delta:'+12', total:49 },
  { e:10,  opcion:'B', texto:'Luchamos. Eso nadie nos lo quita.', delta:'+8', total:57 },
  { e:11,  opcion:'A', texto:'Con dignidad silenciosa', delta:'+10', total:67 },
];

const rutaSacrificio = [
  { e:1,   opcion:'C', texto:'No toco nada', delta:'-5', total:55 },
  { e:'2b',opcion:'B', texto:'Pido tiempo', delta:'-5', total:50 },
  { e:3,   opcion:'C', texto:'Menciono al Capitán Valdés', delta:'+2', total:52 },
  { e:4,   opcion:'B', texto:'Le ofrezco dinero a Miguel', delta:'-3', total:49 },
  { e:5,   opcion:'B', texto:'Muevo el depósito. Protejo la red', delta:'+5', total:54 },
  { e:6,   opcion:'C', texto:'Uso al Padre Marcos', delta:'+8', total:62 },
  { e:7,   opcion:'B', texto:'Nos vamos juntos → activa intentó_huir', delta:'-15', total:47 },
  { e:8,   opcion:'C', texto:'No salgo. Escaparemos esta noche', delta:'-10', total:37 },
  { e:9,   opcion:'C', texto:'Silencio absoluto', delta:'+12', total:49 },
  { e:10,  opcion:'A', texto:'La misión llegó. No fue en vano.', delta:'+5', total:54 },
  { e:11,  opcion:'C', texto:'Pide clemencia para que Alejo viva → activa pidió_clemencia  ⚠ Necesita fidelidad <40', delta:'-5', total:49 },
];

const rutaDoble = [
  { e:1,   opcion:'C', texto:'No toco nada', delta:'-5', total:55 },
  { e:'2b',opcion:'B', texto:'Pido tiempo para pensarlo', delta:'-5', total:50 },
  { e:3,   opcion:'C', texto:'Menciono al Capitán Valdés', delta:'+2', total:52 },
  { e:4,   opcion:'B', texto:'Ofrezco el doble a Miguel', delta:'-3', total:49 },
  { e:5,   opcion:'B', texto:'Muevo el depósito. Protejo la red', delta:'+5', total:54 },
  { e:6,   opcion:'C', texto:'Uso al Padre Marcos', delta:'+8', total:62 },
  { e:7,   opcion:'B', texto:'Nos vamos juntos → activa intentó_huir, NO activa se_quedó', delta:'-15', total:47 },
  { e:8,   opcion:'C', texto:'No salgo → NO activa salio_ultima_mision', delta:'-10', total:37 },
  { e:9,   opcion:'B', texto:'Doy información falsa → activa info_falsa', delta:'+10', total:47 },
  { e:10,  opcion:'A', texto:'La misión llegó. No fue en vano.', delta:'+5', total:42 },
  { e:11,  opcion:'A', texto:'Con dignidad silenciosa', delta:'+10', total:52 },
];

const flags = [
  { flag: 'leyo_documentos',     desc: 'Leyó los documentos militares del Capitán Valdés memorizando' },
  { flag: 'copio_documentos',    desc: 'Copió los datos en papel — mayor riesgo, mayor información' },
  { flag: 'confio_en_alejo',     desc: 'Compartió la información obtenida con Alejo' },
  { flag: 'se_unio_resistencia', desc: 'Se unió activamente a la resistencia desde el primer momento' },
  { flag: 'primer_paso_exitoso', desc: 'Completó la primera misión de mensajería con éxito' },
  { flag: 'miguel_unido',        desc: 'Convenció a Miguel el campesino de unirse a la causa' },
  { flag: 'ayudo_joaquin',       desc: 'Intentó ayudar a Joaquín capturado enviando un mensaje' },
  { flag: 'protegió_red',        desc: 'Priorizó proteger la red sobre salvar al individuo' },
  { flag: 'fue_ella_misma',      desc: 'Fue personalmente en la misión nocturna de advertencia' },
  { flag: 'uso_a_miguel',        desc: 'Usó a Miguel como mensajero urgente para la advertencia' },
  { flag: 'uso_padre_marcos',    desc: 'Usó al Padre Marcos como mensajero — cobertura eclesiástica' },
  { flag: 'se_quedó',            desc: 'Decidió quedarse en Bogotá en lugar de huir con Alejo' },
  { flag: 'intentó_huir',        desc: 'Intentó escapar con Alejo — intento fallido (toque de queda)' },
  { flag: 'ultima_mision',       desc: 'Pidió tres días más antes de huir para completar una misión' },
  { flag: 'salio_ultima_mision', desc: 'Salió personalmente a completar la última misión crítica' },
  { flag: 'misión_completada',   desc: 'La información llegó exitosamente a los patriotas del norte' },
  { flag: 'mando_a_alejo',       desc: 'Le enseñó el código a Alejo y lo mandó en su lugar' },
  { flag: 'no_salio',            desc: 'Eligió no salir en la última misión — priorizó escapar' },
  { flag: 'negó_todo',           desc: 'Negó toda participación ante el interrogatorio del Coronel' },
  { flag: 'info_falsa',          desc: 'Dio información falsa al Coronel González para proteger la red' },
  { flag: 'silencio_absoluto',   desc: 'Guardó silencio total durante todo el interrogatorio' },
  { flag: 'piensa_en_legado',    desc: 'Reflexionó sobre ser recordada por las generaciones futuras' },
  { flag: 'dignidad_silenciosa', desc: 'Enfrentó el tribunal sin palabras — silencio como dignidad' },
  { flag: 'habló_en_tribunal',   desc: 'Hizo un discurso desafiante ante el tribunal colonial' },
  { flag: 'pidió_clemencia',     desc: 'Suplicó clemencia al tribunal para que Alejo pudiera vivir' },
];

const notas = [
  { nombre: 'Policarpa Salavarrieta', id: 'lapola_historia',   cuando: 'Al inicio del Acto I — nodo a1_01' },
  { nombre: 'La Reconquista Española', id: 'reconquista',      cuando: 'En el mercado — nodo a1_02' },
  { nombre: 'Alejo Sabaraín',         id: 'alejo_sabara',      cuando: 'Al conocer a Alejo — nodo a1_04' },
  { nombre: 'La Primera Misión',      id: 'costuras_mensaje',  cuando: 'Al recibir la misión — nodo a1_06' },
  { nombre: 'La Red de Espionaje',    id: 'red_espias',        cuando: 'Tras completar la primera misión — nodo a1_08' },
  { nombre: 'El Virrey Sámano',       id: 'samano_virrey',     cuando: 'Durante el juicio — nodo a4_03' },
  { nombre: 'El 14 de Noviembre',     id: 'ejecucion',         cuando: 'Al inicio del Acto V' },
];

// ══════════════════════════════════════════════════════════════
// CONSTRUIR DOCUMENTO
// ══════════════════════════════════════════════════════════════

function cajaFinal(numero, nombre, color, condicion, descripcion) {
  const W = 9360;
  return new Table({
    width: { size: W, type: WidthType.DXA },
    columnWidths: [W],
    rows: [
      new TableRow({ children: [new TableCell({
        borders: { top: { style: BorderStyle.SINGLE, size: 6, color }, bottom: { style: BorderStyle.SINGLE, size: 6, color }, left: { style: BorderStyle.SINGLE, size: 6, color }, right: { style: BorderStyle.SINGLE, size: 6, color } },
        shading: { fill: "1A1208", type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 180, right: 180 },
        children: [
          new Paragraph({ spacing: espacio(60, 40), children: [
            new TextRun({ text: numero + '  ', bold: true, color, size: 24, font: "Arial" }),
            new TextRun({ text: nombre, bold: true, color: "F5ECD7", size: 26, font: "Arial" }),
          ]}),
          new Paragraph({ spacing: espacio(20, 40), children: [
            new TextRun({ text: 'Condición: ', bold: true, color: "AABBDD", size: 18, font: "Arial" }),
            new TextRun({ text: condicion, italic: true, color: "DDCCAA", size: 18, font: "Arial" }),
          ]}),
          new Paragraph({ spacing: espacio(20, 60), children: [
            new TextRun({ text: descripcion, color: "B8A882", size: 18, italic: true, font: "Arial" }),
          ]}),
        ]
      })]})
    ]
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 20, color: "111111" } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Arial", color: AZUL },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: AZUL },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: AZUL, space: 4 } },
        spacing: espacio(0, 80),
        children: [
          new TextRun({ text: "Héroes de Colombia  —  Guía de Rutas y Finales  |  La Pola · 1817", color: "888888", size: 16, font: "Arial" }),
        ]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: AZUL, space: 4 } },
        spacing: espacio(80, 0),
        children: [
          new TextRun({ text: "Documento de diseño narrativo  —  Pág. ", color: "888888", size: 16, font: "Arial" }),
          new TextRun({ children: [PageNumber.CURRENT], color: "888888", size: 16, font: "Arial" }),
        ]
      })] })
    },
    children: [

      // ── PORTADA ────────────────────────────────────────────
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: espacio(800, 40), children: [
        new TextRun({ text: "✦  HÉROES DE COLOMBIA  ✦", bold: true, color: DORADO, size: 52, font: "Arial" }),
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: espacio(40, 60), children: [
        new TextRun({ text: "Guía de Rutas y Finales", bold: true, color: AZUL, size: 40, font: "Arial" }),
      ]}),
      separador(DORADO),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: espacio(60, 40), children: [
        new TextRun({ text: "Policarpa Salavarrieta  ·  Bogotá, 1817", italic: true, color: "555555", size: 26, font: "Arial" }),
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: espacio(20, 600), children: [
        new TextRun({ text: "Documento de diseño narrativo — todas las decisiones y consecuencias", color: "888888", size: 20, font: "Arial" }),
      ]}),

      // ── INTRODUCCIÓN ───────────────────────────────────────
      titulo("Introducción", 1),
      separador(),
      parrafo("Este documento describe todas las rutas de decisión del juego de novela visual Héroes de Colombia, centrado en la vida y sacrificio de Policarpa Salavarrieta (La Pola) en el Bogotá colonial de 1817."),
      new Paragraph({ spacing: espacio(60, 60) }),
      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [3120, 3120, 3120],
        rows: [new TableRow({ children: [
          new TableCell({ borders: bordeAzuls, shading: { fill: "EEF2F8", type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 140, right: 140 }, children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "11", bold: true, color: AZUL, size: 56, font: "Arial" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Elecciones", color: "444444", size: 20, font: "Arial" })] }),
          ]}),
          new TableCell({ borders: bordeAzuls, shading: { fill: "EEF2F8", type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 140, right: 140 }, children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5", bold: true, color: AZUL, size: 56, font: "Arial" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Actos", color: "444444", size: 20, font: "Arial" })] }),
          ]}),
          new TableCell({ borders: bordeAzuls, shading: { fill: "EEF2F8", type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 140, right: 140 }, children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "5", bold: true, color: DORADO, size: 56, font: "Arial" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Finales", color: "444444", size: 20, font: "Arial" })] }),
          ]}),
        ]})]
      }),
      new Paragraph({ spacing: espacio(60, 60) }),
      parrafo("La fidelidad histórica es el eje del sistema de consecuencias. Comienza en 60/100 y se modifica con cada elección. El jugador nunca ve el número exacto — solo un indicador visual sutil (barra lateral del HUD). El valor final, combinado con los flags activos, determina cuál de los 5 finales se desencadena."),

      saltoPagina(),

      // ── ACTO I ─────────────────────────────────────────────
      titulo("Acto I — La Costurera de Bogotá", 1),
      parrafo("Septiembre de 1817. La Pola trabaja en casa del Capitán Valdés y recibe su primera oportunidad de servir a la resistencia.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaElecciones(eleccionesActo1),

      saltoPagina(),

      // ── ACTO II ────────────────────────────────────────────
      titulo("Acto II — El Tejido de Secretos", 1),
      parrafo("Octubre de 1817. La red patriota opera en las sombras. La Pola debe reclutar, proteger compañeros y hacer llegar información crítica.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaElecciones(eleccionesActo2),

      saltoPagina(),

      // ── ACTO III ───────────────────────────────────────────
      titulo("Acto III — Las Sombras se Cierran", 1),
      parrafo("Noviembre de 1817. El Coronel González tiene una lista con su nombre. La decisión de huir o quedarse cambia todo.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaElecciones(eleccionesActo3),

      saltoPagina(),

      // ── ACTO IV ────────────────────────────────────────────
      titulo("Acto IV — El Tribunal", 1),
      parrafo("14 de noviembre de 1817. Arrestada, interrogada y juzgada. Las últimas elecciones definen el legado.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaElecciones(eleccionesActo4),

      saltoPagina(),

      // ── LÓGICA DE FINALES ──────────────────────────────────
      titulo("Lógica de los 5 Finales", 1),
      parrafo("Los finales se evalúan en orden estricto al llegar al Acto V. La primera condición que se cumpla determina el final. El Final I (canon) es el default si ninguna otra condición se activa.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaFinales(),
      new Paragraph({ spacing: espacio(40, 80) }),

      cajaFinal("Final I", "El Canon Histórico", "D4943A",
        "Default — ninguna otra condición activa",
        "Muere con el discurso histórico. Se niega a arrodillarse. Sus palabras inmortalizadas en la Plaza Mayor de Bogotá."),
      new Paragraph({ spacing: espacio(20, 20) }),
      cajaFinal("Final II", "La Victoria Silenciosa", "7AB8A0",
        "Flag misión_completada + Fidelidad >= 70",
        "La información llegó a tiempo. El convoy patriota sobrevivió. Muere sin saberlo pero su acción cambió la guerra."),
      new Paragraph({ spacing: espacio(20, 20) }),
      cajaFinal("Final III", "La Fuga", "8899BB",
        "Flag intentó_huir, sin se_quedó, sin salio_ultima_mision",
        "Escapa con Alejo. Sobrevive. Lucha en los llanos. Pero la historia no la recuerda como mártir."),
      new Paragraph({ spacing: espacio(20, 20) }),
      cajaFinal("Final IV", "El Sacrificio Silencioso", "A07050",
        "Flag pidió_clemencia + Fidelidad < 40",
        "Muere callada, sin discurso, para que Alejo pueda vivir. Un final íntimo que la historia no registra."),
      new Paragraph({ spacing: espacio(20, 20) }),
      cajaFinal("Final V", "Entre Dos Mundos", "6B6B9B",
        "Flag info_falsa + Fidelidad < 50 + sin se_quedó",
        "Sobrevive usando engaño. La red la rechaza. Vive entre dos mundos sin pertenecer a ninguno."),

      saltoPagina(),

      // ── RUTA: FINAL I ─────────────────────────────────────
      titulo("Ruta Completa — Final I: El Canon Histórico", 1, DORADO),
      parrafo("Objetivo: Fidelidad ≥ 70. Sin flags de fuga. Con habló_en_tribunal.", { italic: true, color: "555555" }),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaRuta(rutaCanon),
      new Paragraph({ spacing: espacio(40, 40) }),
      parrafo("⚠  Importante: La fidelidad tiene techo en 100. Sumar más de 100 no cambia nada — las opciones de alta fidelidad siguen siendo válidas.", { color: "886600" }),

      saltoPagina(),

      // ── RUTA: FINAL II ────────────────────────────────────
      titulo("Ruta Completa — Final II: La Victoria Silenciosa", 1, DORADO),
      parrafo("Objetivo: Flag misión_completada activo (Elección 8-A) + Fidelidad ≥ 70.", { italic: true, color: "555555" }),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaRuta(rutaVictoria),

      saltoPagina(),

      // ── RUTA: FINAL III ───────────────────────────────────
      titulo("Ruta Completa — Final III: La Fuga", 1, DORADO),
      parrafo("Objetivo: Flag intentó_huir activo (Elección 7-B). NO tener se_quedó ni salio_ultima_mision.", { italic: true, color: "555555" }),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaRuta(rutaFuga),
      new Paragraph({ spacing: espacio(40, 40) }),
      parrafo("⚠  La Elección 1 debe ser C para llegar a la Elección 2b en vez de la 2 — esto es crucial para la ruta de fuga.", { color: "886600" }),

      saltoPagina(),

      // ── RUTA: FINAL IV ────────────────────────────────────
      titulo("Ruta Completa — Final IV: El Sacrificio Silencioso", 1, DORADO),
      parrafo("Objetivo: Flag pidió_clemencia (Elección 11-C) + Fidelidad < 40. Este es el final más difícil de obtener naturalmente.", { italic: true, color: "555555" }),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaRuta(rutaSacrificio),
      new Paragraph({ spacing: espacio(40, 40) }),
      parrafo("⚠  Advertencia de diseño: Con la fidelidad inicial en 60 y las rutas disponibles, mantener fidelidad < 40 al llegar a la Elección 11 es extremadamente difícil. Casi todas las opciones suman fidelidad. Recomendación: considerar ajustar la condición a fidelidad < 50 para que este final sea más accesible.", { color: ROJO }),

      saltoPagina(),

      // ── RUTA: FINAL V ─────────────────────────────────────
      titulo("Ruta Completa — Final V: Entre Dos Mundos", 1, DORADO),
      parrafo("Objetivo: Flag info_falsa (Elección 9-B) + Fidelidad < 50 + sin flag se_quedó.", { italic: true, color: "555555" }),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaRuta(rutaDoble),
      new Paragraph({ spacing: espacio(40, 40) }),
      parrafo("⚠  Nota: Con la ruta indicada, la fidelidad llega a ~47-52. El borderline entre activar este final o el canon depende exactamente de cuánto haya subido la fidelidad en Elecciones 10 y 11. Elegir Opción A en ambas minimiza el incremento.", { color: "886600" }),

      saltoPagina(),

      // ── FLAGS ──────────────────────────────────────────────
      titulo("Referencia Completa de Flags", 1),
      parrafo("Los flags son estados binarios (activo/inactivo) que el juego registra en memoria. Determinan qué finales están disponibles y pueden desbloquear opciones de diálogo adicionales.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaFlags(flags),

      saltoPagina(),

      // ── NOTAS HISTÓRICAS ───────────────────────────────────
      titulo("Notas Históricas Desbloqueables", 1),
      parrafo("Se desbloquean automáticamente durante la narrativa. Aparecen como notificaciones tipo toast y se pueden leer en el panel lateral. Son educativas y no afectan la fidelidad.", { italic: true, color: "555555" }),
      separador(),
      new Paragraph({ spacing: espacio(40, 40) }),
      tablaNotas(notas),
      new Paragraph({ spacing: espacio(60, 60) }),
      separador(DORADO),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: espacio(80, 80), children: [
        new TextRun({ text: "«¡Mirad cómo muere una mujer por ser valiente y generosa!»", italic: true, color: DORADO, size: 24, font: "Arial" }),
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: espacio(20, 20), children: [
        new TextRun({ text: "Policarpa Salavarrieta  —  Plaza Mayor de Bogotá, 14 de noviembre de 1817", color: "888888", size: 18, font: "Arial" }),
      ]}),

    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("C:\\Users\\Jorge Ramirez\\Documents\\HeroesColombia-Web\\Guia_Rutas_LaPola.docx", buf);
  console.log("OK — Guia_Rutas_LaPola.docx generado");
});

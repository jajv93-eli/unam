// subjects.js — catálogo central de materias.
// Usado por index.html (portada + buscador global) y opcionalmente por otras páginas.
// `formulario`: muestra el panel de formulario fijo (Matemáticas, Física, Química).
// `timeline`: muestra línea de tiempo para datos clave con fecha (Historias).

const SUBJECTS = [
  { key: "matematicas", label: "Matemáticas", file: "matematicas.html", data: "data/matematicas.js", formulario: true, timeline: false,
    description: "17 temas: álgebra, funciones, trigonometría, geometría analítica, límites, derivadas e integrales." },
  { key: "espanol", label: "Español", file: "espanol.html", data: "data/espanol.js", formulario: false, timeline: false,
    description: "7 temas: funciones de la lengua, formas del discurso, comprensión de lectura, gramática, redacción, vocabulario y ortografía." },
  { key: "fisica", label: "Física", file: "fisica.html", data: "data/fisica.js", formulario: true, timeline: false,
    description: "Cinemática, leyes de Newton, termodinámica, ondas, electromagnetismo, fluidos, óptica y física contemporánea." },
  { key: "quimica", label: "Química", file: "quimica.html", data: "data/quimica.js", formulario: true, timeline: false,
    description: "Temas básicos, agua, aire, alimentos, energía y reacciones, química del carbono." },
  { key: "biologia", label: "Biología", file: "biologia.html", data: "data/biologia.js", formulario: false, timeline: false,
    description: "Célula, metabolismo celular, reproducción, herencia, evolución, ecosistemas." },
  { key: "historia-universal", label: "Historia universal", file: "historia-universal.html", data: "data/historia-universal.js", formulario: false, timeline: true,
    description: "De las revoluciones burguesas al mundo actual." },
  { key: "historia-mexico", label: "Historia de México", file: "historia-mexico.html", data: "data/historia-mexico.js", formulario: false, timeline: true,
    description: "De la Nueva España al México contemporáneo." },
  { key: "literatura", label: "Literatura", file: "literatura.html", data: "data/literatura.js", formulario: false, timeline: false,
    description: "El texto, géneros y corrientes literarias, redacción y técnicas de investigación." },
  { key: "geografia", label: "Geografía", file: "geografia.html", data: "data/geografia.js", formulario: false, timeline: false,
    description: "La Tierra, geografía física y humana, economía mundial y organización política." }
];

if (typeof window !== "undefined") {
  window.SUBJECTS = SUBJECTS;
}

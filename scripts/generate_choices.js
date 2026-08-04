const fs = require("fs");
const path = require("path");
const vm = require("vm");

const files = [
  "matematicas.js",
  "espanol.js",
  "fisica.js",
  "quimica.js",
  "biologia.js",
  "historia-universal.js",
  "historia-mexico.js",
  "literatura.js"
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

files.forEach((file) => {
  const filePath = path.join(__dirname, '..', 'data', file);
  const code = fs.readFileSync(filePath, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + "\nthis.__TEMAS__ = TEMAS;", sandbox);
  const temas = sandbox.__TEMAS__;

  temas.forEach((tema) => {
    const allAnswers = tema.ejercicios.map((e) => e.r);
    tema.ejercicios.forEach((ej, idx) => {
      // Distractores: 3 respuestas distintas de otros ejercicios del mismo tema
      const otherAnswers = allAnswers.filter((a, i) => i !== idx && a !== ej.r);
      const distractors = shuffle(otherAnswers).slice(0, 3);
      const opciones = shuffle([ej.r, ...distractors]);
      ej.opciones = opciones;
      ej.correcta = opciones.indexOf(ej.r);
    });
  });

  const header = `// Datos: Guía de ${file.replace(".js", "")} — Examen de ingreso a licenciatura UNAM\n// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta)\n`;
  const out = header + "const TEMAS = " + JSON.stringify(temas, null, 2) + ";\n";
  fs.writeFileSync(filePath, out);
  console.log(file, "-> actualizado,", temas.reduce((a, t) => a + t.ejercicios.length, 0), "ejercicios");
});

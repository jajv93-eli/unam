const fs = require("fs");
const path = require("path");
const vm = require("vm");
const datosClaveMap = require("./datos_clave_map.js");

const dataDir = path.join(__dirname, "..", "data");

Object.keys(datosClaveMap).forEach((file) => {
  const filePath = path.join(dataDir, file);
  const code = fs.readFileSync(filePath, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + "\nthis.__TEMAS__ = TEMAS;", sandbox);
  const temas = sandbox.__TEMAS__;

  const map = datosClaveMap[file];
  let missing = [];
  temas.forEach((tema) => {
    if (map[tema.n]) {
      tema.datosClave = map[tema.n];
    } else {
      missing.push(tema.n);
    }
  });

  if (missing.length) {
    console.error(file, "— faltan datosClave para los temas:", missing.join(", "));
    process.exitCode = 1;
    return;
  }

  const header = `// Datos: Guía de ${file.replace(".js", "")} — Examen de ingreso a licenciatura UNAM\n// Cada tema incluye "datosClave" (fechas, nombres, fórmulas para repaso rápido).\n// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta).\n`;
  const out = header + "const TEMAS = " + JSON.stringify(temas, null, 2) + ";\n";
  fs.writeFileSync(filePath, out);
  console.log(file, "-> datosClave agregado a", temas.length, "temas");
});

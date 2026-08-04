const fs = require("fs");
const path = require("path");

const SUBJECTS = [
  { key: "matematicas", data: "data/matematicas.js" },
  { key: "espanol", data: "data/espanol.js" },
  { key: "fisica", data: "data/fisica.js" },
  { key: "quimica", data: "data/quimica.js" },
  { key: "biologia", data: "data/biologia.js" },
  { key: "historia-universal", data: "data/historia-universal.js" },
  { key: "historia-mexico", data: "data/historia-mexico.js" },
  { key: "literatura", data: "data/literatura.js" },
  { key: "geografia", data: "data/geografia.js" }
];

const dataDir = path.join(__dirname, "..", "data");

SUBJECTS.forEach(({ key, data }) => {
  const filePath = path.join(__dirname, "..", data);
  let code = fs.readFileSync(filePath, "utf8");

  if (code.includes("window.SUBJECT_DATA")) {
    console.log(data, "-> ya estaba envuelto, se omite");
    return;
  }

  // Separar comentarios de cabecera del cuerpo con "const TEMAS = [...];"
  const lines = code.split("\n");
  let bodyStartIdx = lines.findIndex((l) => l.startsWith("const TEMAS"));
  const headerLines = lines.slice(0, bodyStartIdx);
  const bodyLines = lines.slice(bodyStartIdx).join("\n");

  const wrapped =
    headerLines.join("\n") +
    "\n(function () {\n" +
    bodyLines +
    "\n  if (typeof window !== \"undefined\") {\n" +
    "    window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n" +
    `    window.SUBJECT_DATA["${key}"] = TEMAS;\n` +
    "  }\n" +
    "  if (typeof window !== \"undefined\") {\n" +
    "    window.__LAST_LOADED_TEMAS__ = TEMAS;\n" +
    "  }\n" +
    "})();\n";

  fs.writeFileSync(filePath, wrapped);
  console.log(data, "-> envuelto en IIFE, expone window.SUBJECT_DATA['" + key + "']");
});

# Guía de examen de selección — UNAM

Sitio estático con material de estudio (puntos esenciales, datos clave y ejercicios de opción múltiple) para el examen de selección de ingreso a la licenciatura de la UNAM, organizado por materia según el temario oficial.

## Funciones de repaso

- **Puntos esenciales** — lo que hay que entender de cada tema, en prosa.
- **Datos clave** — chips con lo memorizable de un vistazo: fechas, nombres propios, fórmulas y cifras, separado de la prosa.
- **Línea de tiempo** (Historia universal / Historia de México) — cuando un tema tiene 2 o más datos con formato de fecha, se muestran como línea cronológica en vez de chips sueltos.
- **Formulario fijo** (Matemáticas, Física, Química) — botón flotante "∑ Formulario" que abre un panel con las fórmulas del tema actual, visible mientras resuelves los ejercicios.
- **Modo repaso exprés** — botón en la barra lateral que condensa toda la materia (puntos + datos clave, sin ejercicios) en una sola vista, con botón para imprimir/guardar como PDF.
- **Buscador global** — en la portada, busca un término (fecha, nombre, fórmula, palabra clave) en las 9 materias a la vez y enlaza directo al tema exacto.
- **Ejercicios de opción múltiple** — 4 opciones por ejercicio con retroalimentación inmediata (verde/rojo) y contador de aciertos.

## Estructura del proyecto

```
index.html              → portada: tarjetas de materias + buscador global
matematicas.html         → Matemáticas (17 temas)
espanol.html             → Español (7 temas)
fisica.html              → Física (9 temas)
quimica.html             → Química (6 temas)
biologia.html            → Biología (6 temas)
historia-universal.html  → Historia universal (9 temas)
historia-mexico.html     → Historia de México (8 temas)
literatura.html          → Literatura (3 temas)
geografia.html           → Geografía (2 temas)

assets/
  styles.css             → estilos compartidos (incluye reglas de impresión)
  app.js                 → lógica de cada página de materia (temas, datos clave,
                            línea de tiempo, formulario fijo, modo repaso, opción múltiple)
  subjects.js             → catálogo central de materias (clave, etiqueta, archivo,
                            descripción y qué funciones activa: formulario/línea de tiempo)
  index.js                → lógica de la portada (tarjetas dinámicas + buscador global)

data/
  matematicas.js, espanol.js, fisica.js, quimica.js, biologia.js,
  historia-universal.js, historia-mexico.js, literatura.js, geografia.js
  — cada archivo se autoejecuta y expone su contenido en
    window.SUBJECT_DATA["<clave>"] (así la portada puede cargar las 9 materias
    a la vez, para el buscador, sin que sus variables choquen entre sí).

scripts/
  generate_choices.js     → genera las 4 opciones de cada ejercicio automáticamente
  datos_clave_map.js       → mapa fuente de los "datos clave" por materia y tema
  add_datos_clave.js       → inyecta datos_clave_map.js en cada archivo de datos
  wrap_data_files.js       → envuelve cada archivo de datos para exponerlo en
                            window.SUBJECT_DATA (ya aplicado; solo hace falta si
                            se reescribe un archivo de datos desde cero)
```

No requiere build ni dependencias: es HTML/CSS/JS puro.

## Cómo agregar una materia nueva

1. Crea `data/<materia>.js` con este formato:
   ```js
   const TEMAS = [
     { n: 1, titulo: "...", puntos: ["..."], datosClave: ["1810 — Grito de Dolores", "F = ma"],
       ejercicios: [
         { p: "Pregunta...", r: "Respuesta correcta", opciones: ["op A","op B","op C","op D"], correcta: 2 }
       ] }
   ];
   ```
   - `correcta` es el índice (0 a 3) de la opción correcta dentro de `opciones`.
   - En `datosClave`, usa el formato `"AÑO — Evento"` (con em-dash `—`) para que la línea de tiempo lo detecte automáticamente en materias de Historia; los rangos como `"1876-1911 — Porfiriato"` también se reconocen.

   Atajos si no quieres escribir todo a mano:
   ```bash
   node scripts/generate_choices.js   # genera opciones de cada ejercicio a partir de p/r
   ```
   (agrega el nombre de tu archivo a la lista `files` dentro del script primero).

2. Crea `<materia>.html` copiando `espanol.html` y ajustando:
   - el `<title>`
   - el `src` del script de datos (`data/<materia>.js`)
   - `window.TEMAS = window.SUBJECT_DATA["<clave>"];`
   - `window.SUBJECT_LABEL`, `window.SUBJECT_KEY`
   - `window.SUBJECT_FEATURES = { formulario: false, timeline: false };` (pon en `true` lo que aplique)

3. Agrega la materia a `assets/subjects.js` (clave, etiqueta, archivo, descripción, features) — esto activa automáticamente su tarjeta y su participación en el buscador global de la portada.

4. Agrega también `<script src="data/<materia>.js"></script>` en `index.html`, junto a los demás, para que el buscador la incluya.

## Publicar en GitHub Pages

1. Sube todo el contenido de esta carpeta a un repositorio de GitHub (público).
2. Ve a **Settings → Pages**, y en "Source" elige la rama `main` y la carpeta `/ (root)`.
3. Espera 1–2 minutos: tu sitio quedará disponible en `https://<usuario>.github.io/<repositorio>/`.

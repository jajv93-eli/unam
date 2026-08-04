# Guía de examen de selección — UNAM

Sitio estático con material de estudio (puntos esenciales + ejercicios con respuesta) para el examen de selección de ingreso a la licenciatura de la UNAM, organizado por materia según el temario oficial.

## Estructura del proyecto

```
index.html            → página de inicio, enlaza a cada materia
matematicas.html       → página de la materia Matemáticas
espanol.html           → página de la materia Español
assets/
  styles.css           → estilos compartidos por todas las páginas
  app.js               → lógica compartida (navegación, ejercicios, progreso)
data/
  matematicas.js        → contenido de Matemáticas (temas, puntos, ejercicios)
  espanol.js             → contenido de Español (temas, puntos, ejercicios)
```

## Cómo agregar una materia nueva

1. Crea `data/<materia>.js` con el mismo formato que los existentes:
   ```js
   const TEMAS = [
     { n: 1, titulo: "...", puntos: ["..."], ejercicios: [
       { p: "Pregunta...", r: "Respuesta correcta", opciones: ["op A","op B","op C","op D"], correcta: 2 }
     ] }
   ];
   ```
   `correcta` es el índice (0 a 3) de la opción correcta dentro de `opciones`.

   Si prefieres no escribir las opciones a mano, deja solo `p` y `r` en cada ejercicio y corre:
   ```bash
   node scripts/generate_choices.js
   ```
   Este script arma automáticamente 4 opciones por ejercicio (la respuesta correcta + 3 distractores tomados de otras respuestas del mismo tema) y agrega `opciones` y `correcta` a cada archivo en `data/`.

2. Crea `<materia>.html` copiando `espanol.html` y cambiando el título, el `src` del script de datos y `window.SUBJECT_LABEL`.
3. Agrega una tarjeta enlazando a esa página en `index.html`.

No requiere build ni dependencias: es HTML/CSS/JS puro.

## Publicar en GitHub Pages

1. Sube todo el contenido de esta carpeta a un repositorio de GitHub (público).
2. Ve a **Settings → Pages**, y en "Source" elige la rama `main` y la carpeta `/ (root)`.
3. Espera 1–2 minutos: tu sitio quedará disponible en `https://<usuario>.github.io/<repositorio>/`.

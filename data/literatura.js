// Datos: Guía de literatura — Examen de ingreso a licenciatura UNAM
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta)
const TEMAS = [
  {
    "n": 1,
    "titulo": "El texto",
    "puntos": [
      "Propiedades del texto: propósito (finalidad comunicativa), adecuación (ajuste al contexto y destinatario), cabalidad (desarrollo completo de las ideas), coherencia (relación lógica entre las ideas), organización textual y disposición espacial.",
      "La función lingüística dominante determina la organización del texto (por ejemplo, la función apelativa favorece textos instructivos; la poética, textos literarios).",
      "Texto periodístico: su propósito es informar (función referencial); la nota informativa consta de título, entradilla (lead), cuerpo y remate, y organiza la información en pirámide invertida (de lo más a lo menos importante).",
      "Texto dramático: se organiza mediante diálogos y acotaciones; su acción se estructura en desarrollo, nudo y desenlace. La tragedia tiene un desenlace fatal; la comedia, uno favorable o cómico.",
      "Texto poético: se analiza intratextualmente (metro, rima, ritmo, metáfora y otras figuras retóricas) y contextualmente (relación con la época, el autor y su contexto)."
    ],
    "ejercicios": [
      {
        "p": "Menciona tres propiedades que debe tener un buen texto",
        "r": "Propósito, coherencia y adecuación",
        "opciones": [
          "Propósito, coherencia y adecuación",
          "Desarrollo, nudo y desenlace",
          "Título, entradilla (lead), cuerpo y remate",
          "Un desenlace fatal o desgraciado"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué propiedad textual se refiere al ajuste al contexto y al destinatario?",
        "r": "La adecuación",
        "opciones": [
          "Un desenlace fatal o desgraciado",
          "Título, entradilla (lead), cuerpo y remate",
          "La adecuación",
          "Desarrollo, nudo y desenlace"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué propiedad se refiere a la relación lógica entre las ideas de un texto?",
        "r": "La coherencia",
        "opciones": [
          "La coherencia",
          "Título, entradilla (lead), cuerpo y remate",
          "La adecuación",
          "Un desenlace fatal o desgraciado"
        ],
        "correcta": 0
      },
      {
        "p": "¿Cuál es el propósito principal de un texto periodístico?",
        "r": "Informar (función referencial)",
        "opciones": [
          "Propósito, coherencia y adecuación",
          "Mediante diálogos y acotaciones",
          "Informar (función referencial)",
          "Desarrollo, nudo y desenlace"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona las partes básicas de una nota informativa",
        "r": "Título, entradilla (lead), cuerpo y remate",
        "opciones": [
          "Propósito, coherencia y adecuación",
          "Título, entradilla (lead), cuerpo y remate",
          "La coherencia",
          "Informar (función referencial)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué estructura organiza la información de mayor a menor importancia en una nota periodística?",
        "r": "La pirámide invertida",
        "opciones": [
          "La adecuación",
          "Un desenlace fatal o desgraciado",
          "La pirámide invertida",
          "Propósito, coherencia y adecuación"
        ],
        "correcta": 2
      },
      {
        "p": "¿Cómo se organiza un texto dramático?",
        "r": "Mediante diálogos y acotaciones",
        "opciones": [
          "Mediante diálogos y acotaciones",
          "Un desenlace fatal o desgraciado",
          "Desarrollo, nudo y desenlace",
          "Metro y rima (o ritmo, metáfora)"
        ],
        "correcta": 0
      },
      {
        "p": "¿En qué tres partes se estructura la acción de un texto dramático?",
        "r": "Desarrollo, nudo y desenlace",
        "opciones": [
          "Propósito, coherencia y adecuación",
          "Informar (función referencial)",
          "Desarrollo, nudo y desenlace",
          "La coherencia"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué caracteriza a la tragedia como género dramático?",
        "r": "Un desenlace fatal o desgraciado",
        "opciones": [
          "Propósito, coherencia y adecuación",
          "Un desenlace fatal o desgraciado",
          "Metro y rima (o ritmo, metáfora)",
          "La pirámide invertida"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona dos elementos del análisis intratextual de un poema",
        "r": "Metro y rima (o ritmo, metáfora)",
        "opciones": [
          "La adecuación",
          "Desarrollo, nudo y desenlace",
          "La coherencia",
          "Metro y rima (o ritmo, metáfora)"
        ],
        "correcta": 3
      }
    ]
  },
  {
    "n": 2,
    "titulo": "Géneros y corrientes literarias",
    "puntos": [
      "Géneros literarios: épico (narra hazañas de héroes, en verso o prosa), lírico (expresa sentimientos, generalmente en verso) y dramático (representación mediante diálogos para ser actuada).",
      "Realismo: corriente literaria del siglo XIX que retrata la realidad social de forma objetiva y detallada; autores representativos: Balzac, Flaubert, Pérez Galdós.",
      "Corriente contemporánea: abarca las tendencias literarias de los siglos XX y XXI, con mayor experimentación formal y temática; autores representativos: García Márquez, Borges, Rulfo.",
      "Texto narrativo: el cuento (narración breve, un solo conflicto central, pocos personajes) y la novela (narración extensa, mayor complejidad de personajes y tramas)."
    ],
    "ejercicios": [
      {
        "p": "Menciona los tres géneros literarios clásicos",
        "r": "Épico, lírico y dramático",
        "opciones": [
          "Balzac, Flaubert o Pérez Galdós",
          "García Márquez, Borges o Rulfo",
          "El lírico",
          "Épico, lírico y dramático"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué género literario expresa sentimientos, generalmente en verso?",
        "r": "El lírico",
        "opciones": [
          "El lírico",
          "El cuento",
          "Retratar la realidad social de forma objetiva y detallada",
          "El dramático"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué género literario se basa en la representación mediante diálogos?",
        "r": "El dramático",
        "opciones": [
          "Retratar la realidad social de forma objetiva y detallada",
          "Balzac, Flaubert o Pérez Galdós",
          "El dramático",
          "El épico"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué género literario narra las hazañas de héroes?",
        "r": "El épico",
        "opciones": [
          "El cuento",
          "El épico",
          "Épico, lírico y dramático",
          "El dramático"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué caracteriza al Realismo como corriente literaria?",
        "r": "Retratar la realidad social de forma objetiva y detallada",
        "opciones": [
          "Balzac, Flaubert o Pérez Galdós",
          "Épico, lírico y dramático",
          "El cuento es breve y con un solo conflicto central; la novela es extensa y con mayor complejidad de personajes y tramas",
          "Retratar la realidad social de forma objetiva y detallada"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un autor representativo del Realismo",
        "r": "Balzac, Flaubert o Pérez Galdós",
        "opciones": [
          "El cuento",
          "Mayor experimentación formal y temática",
          "Balzac, Flaubert o Pérez Galdós",
          "El lírico"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué caracteriza a la literatura contemporánea?",
        "r": "Mayor experimentación formal y temática",
        "opciones": [
          "El lírico",
          "El cuento",
          "Mayor experimentación formal y temática",
          "El dramático"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona un autor representativo de la literatura contemporánea latinoamericana",
        "r": "García Márquez, Borges o Rulfo",
        "opciones": [
          "El dramático",
          "El lírico",
          "El épico",
          "García Márquez, Borges o Rulfo"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué diferencia principal hay entre el cuento y la novela?",
        "r": "El cuento es breve y con un solo conflicto central; la novela es extensa y con mayor complejidad de personajes y tramas",
        "opciones": [
          "El dramático",
          "El cuento es breve y con un solo conflicto central; la novela es extensa y con mayor complejidad de personajes y tramas",
          "Balzac, Flaubert o Pérez Galdós",
          "Retratar la realidad social de forma objetiva y detallada"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de texto narrativo se caracteriza por tener pocos personajes y un solo conflicto central?",
        "r": "El cuento",
        "opciones": [
          "Balzac, Flaubert o Pérez Galdós",
          "Mayor experimentación formal y temática",
          "García Márquez, Borges o Rulfo",
          "El cuento"
        ],
        "correcta": 3
      }
    ]
  },
  {
    "n": 3,
    "titulo": "Redacción y técnicas de investigación documental",
    "puntos": [
      "Resumen: exposición breve y objetiva de las ideas principales de un texto, con palabras propias.",
      "Paráfrasis: reformulación de un texto con palabras propias, conservando el significado original.",
      "Cita textual: reproducción exacta de un fragmento de un texto, entre comillas y con referencia a la fuente.",
      "Comentario: interpretación o valoración personal sobre un texto.",
      "Ficha bibliográfica: registra los datos de un libro (autor, título, editorial, año, lugar de edición).",
      "Ficha hemerográfica: registra los datos de una publicación periódica (autor, título del artículo, nombre de la revista o periódico, fecha, páginas).",
      "Ficha de trabajo: registra la información recopilada durante una investigación, junto con la fuente correspondiente."
    ],
    "ejercicios": [
      {
        "p": "¿Qué es un resumen?",
        "r": "Una exposición breve y objetiva de las ideas principales de un texto",
        "opciones": [
          "Una exposición breve y objetiva de las ideas principales de un texto",
          "La reformulación de un texto con palabras propias, conservando su significado",
          "Una revista o un periódico",
          "La referencia a la fuente de donde se tomó"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué es la paráfrasis?",
        "r": "La reformulación de un texto con palabras propias, conservando su significado",
        "opciones": [
          "Autor, título, editorial, año y lugar de edición",
          "El resumen condensa solo las ideas principales; la paráfrasis reformula todo el texto con otras palabras",
          "La reproducción exacta de un fragmento de un texto, entre comillas y con referencia a la fuente",
          "La reformulación de un texto con palabras propias, conservando su significado"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es una cita textual?",
        "r": "La reproducción exacta de un fragmento de un texto, entre comillas y con referencia a la fuente",
        "opciones": [
          "Autor, título, editorial, año y lugar de edición",
          "La reformulación de un texto con palabras propias, conservando su significado",
          "La reproducción exacta de un fragmento de un texto, entre comillas y con referencia a la fuente",
          "Para registrar la información recopilada durante una investigación"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué es un comentario en el contexto de la investigación documental?",
        "r": "Una interpretación o valoración personal sobre un texto",
        "opciones": [
          "Una interpretación o valoración personal sobre un texto",
          "Para registrar la información recopilada durante una investigación",
          "Autor, título del artículo, nombre de la revista o periódico, fecha y páginas",
          "Una exposición breve y objetiva de las ideas principales de un texto"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué datos incluye una ficha bibliográfica?",
        "r": "Autor, título, editorial, año y lugar de edición",
        "opciones": [
          "Para registrar la información recopilada durante una investigación",
          "Una revista o un periódico",
          "Autor, título, editorial, año y lugar de edición",
          "Una exposición breve y objetiva de las ideas principales de un texto"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué datos incluye una ficha hemerográfica?",
        "r": "Autor, título del artículo, nombre de la revista o periódico, fecha y páginas",
        "opciones": [
          "Una exposición breve y objetiva de las ideas principales de un texto",
          "Autor, título, editorial, año y lugar de edición",
          "Autor, título del artículo, nombre de la revista o periódico, fecha y páginas",
          "Para registrar la información recopilada durante una investigación"
        ],
        "correcta": 2
      },
      {
        "p": "¿Para qué sirve una ficha de trabajo?",
        "r": "Para registrar la información recopilada durante una investigación",
        "opciones": [
          "Una interpretación o valoración personal sobre un texto",
          "Para registrar la información recopilada durante una investigación",
          "La reformulación de un texto con palabras propias, conservando su significado",
          "El resumen condensa solo las ideas principales; la paráfrasis reformula todo el texto con otras palabras"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué diferencia hay entre resumen y paráfrasis?",
        "r": "El resumen condensa solo las ideas principales; la paráfrasis reformula todo el texto con otras palabras",
        "opciones": [
          "La reformulación de un texto con palabras propias, conservando su significado",
          "Una interpretación o valoración personal sobre un texto",
          "Autor, título del artículo, nombre de la revista o periódico, fecha y páginas",
          "El resumen condensa solo las ideas principales; la paráfrasis reformula todo el texto con otras palabras"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué elemento debe acompañar siempre a una cita textual?",
        "r": "La referencia a la fuente de donde se tomó",
        "opciones": [
          "Autor, título del artículo, nombre de la revista o periódico, fecha y páginas",
          "La reformulación de un texto con palabras propias, conservando su significado",
          "La referencia a la fuente de donde se tomó",
          "La reproducción exacta de un fragmento de un texto, entre comillas y con referencia a la fuente"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona un tipo de fuente que se registra en una ficha hemerográfica",
        "r": "Una revista o un periódico",
        "opciones": [
          "Para registrar la información recopilada durante una investigación",
          "Una revista o un periódico",
          "La reformulación de un texto con palabras propias, conservando su significado",
          "Una exposición breve y objetiva de las ideas principales de un texto"
        ],
        "correcta": 1
      }
    ]
  }
];

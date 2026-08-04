// Datos: Guía de espanol — Examen de ingreso a licenciatura UNAM
// Cada tema incluye "datosClave" (fechas, nombres, fórmulas para repaso rápido).
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta).
(function () {
const TEMAS = [
  {
    "n": 1,
    "titulo": "Funciones de la lengua",
    "puntos": [
      "Función referencial (informativa): centra el mensaje en el contexto; transmite información objetiva y verificable.",
      "Función apelativa (conativa): busca influir en el receptor; se manifiesta con imperativos, vocativos y preguntas dirigidas a alguien.",
      "Función poética (estética): centra la atención en la forma del propio mensaje; usa recursos literarios (metáforas, ritmo, imágenes).",
      "Para identificar la función dominante, pregúntate: ¿informa, ordena/pide, o busca belleza en el lenguaje?"
    ],
    "ejercicios": [
      {
        "p": "Identifica la función de la lengua: “El agua hierve a 100 °C a nivel del mar.”",
        "r": "Referencial (informa un dato objetivo)",
        "opciones": [
          "Referencial",
          "Apelativa",
          "Referencial",
          "Referencial (informa un dato objetivo)"
        ],
        "correcta": 3
      },
      {
        "p": "Identifica la función: “¡Cierra la puerta, por favor!”",
        "r": "Apelativa (busca que el receptor actúe)",
        "opciones": [
          "Referencial (informa un dato objetivo)",
          "Poética (metáfora)",
          "Apelativa",
          "Apelativa (busca que el receptor actúe)"
        ],
        "correcta": 3
      },
      {
        "p": "Identifica la función: “El viento susurraba secretos entre las hojas doradas.”",
        "r": "Poética (recurso literario, atención a la forma)",
        "opciones": [
          "Referencial (informa un dato objetivo)",
          "Poética (metáfora)",
          "Apelativa (busca que el receptor actúe)",
          "Poética (recurso literario, atención a la forma)"
        ],
        "correcta": 3
      },
      {
        "p": "Identifica la función: “La capital de Francia es París.”",
        "r": "Referencial",
        "opciones": [
          "Apelativa",
          "Referencial",
          "Apelativa",
          "Apelativa (busca que el receptor actúe)"
        ],
        "correcta": 1
      },
      {
        "p": "Identifica la función: “¿Podrías pasarme la sal?”",
        "r": "Apelativa",
        "opciones": [
          "Referencial (informa un dato objetivo)",
          "Apelativa (busca que el receptor actúe)",
          "Apelativa",
          "Referencial"
        ],
        "correcta": 2
      },
      {
        "p": "Identifica la función: “Sus ojos eran dos luceros en la noche de su rostro.”",
        "r": "Poética (metáfora)",
        "opciones": [
          "Referencial",
          "Apelativa",
          "Poética (metáfora)",
          "Poética"
        ],
        "correcta": 2
      },
      {
        "p": "Identifica la función: “El informe indica que las ventas subieron 12%.”",
        "r": "Referencial",
        "opciones": [
          "Referencial",
          "Apelativa",
          "Poética (metáfora)",
          "Apelativa"
        ],
        "correcta": 0
      },
      {
        "p": "Identifica la función: “¡Vengan todos, la función va a comenzar!”",
        "r": "Apelativa",
        "opciones": [
          "Referencial (informa un dato objetivo)",
          "Apelativa (busca que el receptor actúe)",
          "Referencial",
          "Apelativa"
        ],
        "correcta": 3
      },
      {
        "p": "Un poema lleno de metáforas e imágenes sensoriales, ¿qué función predomina?",
        "r": "Poética",
        "opciones": [
          "Poética",
          "Apelativa (busca que el receptor actúe)",
          "Apelativa",
          "Poética (recurso literario, atención a la forma)"
        ],
        "correcta": 0
      },
      {
        "p": "Identifica la función: “Niños, guarden silencio.”",
        "r": "Apelativa",
        "opciones": [
          "Referencial",
          "Apelativa",
          "Referencial",
          "Poética (metáfora)"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "Referencial → informa",
      "Apelativa → ordena o pide",
      "Poética → belleza del lenguaje"
    ]
  },
  {
    "n": 2,
    "titulo": "Formas del discurso",
    "puntos": [
      "Descriptivo: presenta características de personas, objetos o lugares; predominan los adjetivos.",
      "Narrativo: relata sucesos organizados en el tiempo; incluye personajes, acciones, tiempo y espacio.",
      "Argumentativo: defiende una postura con razones y evidencias; busca convencer al lector.",
      "Un mismo texto puede combinar formas, pero suele haber una dominante según su propósito."
    ],
    "ejercicios": [
      {
        "p": "¿Qué forma discursiva predomina en un párrafo que enumera las características físicas de una casa?",
        "r": "Descriptivo",
        "opciones": [
          "Descriptivo",
          "Narrativo",
          "Argumentativo",
          "Personajes, acción, tiempo y espacio"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué forma predomina en un texto que cuenta cómo un personaje viajó y lo que le sucedió?",
        "r": "Narrativo",
        "opciones": [
          "Descriptivo",
          "Narrativo",
          "Argumentativo",
          "Argumentativo"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué forma predomina en un texto que defiende por qué se debe reciclar, con datos y razones?",
        "r": "Argumentativo",
        "opciones": [
          "Argumentativo",
          "Descriptivo",
          "Narrativo",
          "Descriptivo"
        ],
        "correcta": 0
      },
      {
        "p": "Clasifica: “El cielo estaba gris, las calles mojadas y silenciosas.”",
        "r": "Descriptivo",
        "opciones": [
          "Descriptivo",
          "Narrativo",
          "Personajes, acción, tiempo y espacio",
          "Argumentativo"
        ],
        "correcta": 0
      },
      {
        "p": "Clasifica: “Entonces corrió hacia la estación, tomó el tren y llegó justo a tiempo.”",
        "r": "Narrativo",
        "opciones": [
          "Argumentativo",
          "Argumentativo",
          "Descriptivo",
          "Narrativo"
        ],
        "correcta": 3
      },
      {
        "p": "Clasifica: “Es evidente que la educación reduce la pobreza, pues los datos muestran...”",
        "r": "Argumentativo",
        "opciones": [
          "Narrativo",
          "Descriptivo",
          "Narrativo",
          "Argumentativo"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona los cuatro elementos básicos de una narración",
        "r": "Personajes, acción, tiempo y espacio",
        "opciones": [
          "Narrativo",
          "Argumentativo",
          "Descriptivo",
          "Personajes, acción, tiempo y espacio"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué forma discursiva predomina en una reseña que compara ventajas de un producto?",
        "r": "Argumentativo",
        "opciones": [
          "Descriptivo",
          "Descriptivo",
          "Narrativo",
          "Argumentativo"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué forma predomina al describir el rostro de un personaje en una novela?",
        "r": "Descriptivo",
        "opciones": [
          "Narrativo",
          "Argumentativo",
          "Personajes, acción, tiempo y espacio",
          "Descriptivo"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué forma organiza los hechos en el orden en que ocurrieron?",
        "r": "Narrativo",
        "opciones": [
          "Narrativo",
          "Descriptivo",
          "Descriptivo",
          "Argumentativo"
        ],
        "correcta": 0
      }
    ],
    "datosClave": [
      "Descriptivo",
      "Narrativo",
      "Argumentativo"
    ]
  },
  {
    "n": 3,
    "titulo": "Comprensión de lectura",
    "puntos": [
      "Estructura del texto: introducción, desarrollo y conclusión (o planteamiento, nudo y desenlace en narrativa).",
      "Idea principal: lo esencial del texto. Ideas secundarias: apoyan o desarrollan la idea principal con ejemplos o datos.",
      "Frases clave: enunciados que resumen o anticipan el contenido del texto.",
      "Inferencia de datos: deducir información no explícita a partir de pistas del propio texto.",
      "Inferencia de rasgos, sentimientos y motivos: deducir el carácter o las emociones de un personaje por sus acciones y diálogos, no solo por lo que se dice literalmente.",
      "Punto de vista del autor: postura o actitud que transmite, explícita o implícitamente, mediante el lenguaje que elige."
    ],
    "ejercicios": [
      {
        "p": "“Aunque el clima empeoraba, decidió continuar la caminata.” ¿Qué rasgo de personalidad se infiere?",
        "r": "Determinación / perseverancia",
        "opciones": [
          "Planteamiento, nudo y desenlace",
          "Determinación / perseverancia",
          "La caída de ventas se debe al cierre de la fábrica",
          "Son ideas secundarias que sostienen la idea principal"
        ],
        "correcta": 1
      },
      {
        "p": "“Las ventas cayeron 30% tras el cierre de la fábrica.” ¿Cuál es la idea principal?",
        "r": "La caída de ventas se debe al cierre de la fábrica",
        "opciones": [
          "La caída de ventas se debe al cierre de la fábrica",
          "Por el lenguaje valorativo y los argumentos que decide resaltar u omitir",
          "Planteamiento, nudo y desenlace",
          "Señala un contraste con la idea anterior"
        ],
        "correcta": 0
      },
      {
        "p": "Un párrafo inicia con “Sin embargo, los datos sugieren lo contrario.” ¿Qué función cumple esta frase?",
        "r": "Señala un contraste con la idea anterior",
        "opciones": [
          "Sintetizar o cerrar las ideas presentadas",
          "Señala un contraste con la idea anterior",
          "El explícito está escrito directamente; el inferido se deduce del contexto",
          "Determinación / perseverancia"
        ],
        "correcta": 1
      },
      {
        "p": "“Cerró la puerta con fuerza y no volvió a hablarle.” ¿Qué sentimiento se infiere?",
        "r": "Enojo o molestia",
        "opciones": [
          "La caída de ventas se debe al cierre de la fábrica",
          "Por el lenguaje valorativo y los argumentos que decide resaltar u omitir",
          "Esfuerzo y determinación pese a las dificultades",
          "Enojo o molestia"
        ],
        "correcta": 3
      },
      {
        "p": "En un párrafo sobre el cambio climático que da tres ejemplos concretos, ¿qué papel juegan los ejemplos?",
        "r": "Son ideas secundarias que sostienen la idea principal",
        "opciones": [
          "Son ideas secundarias que sostienen la idea principal",
          "Planteamiento, nudo y desenlace",
          "Esfuerzo y determinación pese a las dificultades",
          "El explícito está escrito directamente; el inferido se deduce del contexto"
        ],
        "correcta": 0
      },
      {
        "p": "¿Cuál es la diferencia entre un dato explícito y uno inferido?",
        "r": "El explícito está escrito directamente; el inferido se deduce del contexto",
        "opciones": [
          "Esfuerzo y determinación pese a las dificultades",
          "Señala un contraste con la idea anterior",
          "El explícito está escrito directamente; el inferido se deduce del contexto",
          "La caída de ventas se debe al cierre de la fábrica"
        ],
        "correcta": 2
      },
      {
        "p": "En un artículo de opinión, ¿cómo identificas el punto de vista del autor?",
        "r": "Por el lenguaje valorativo y los argumentos que decide resaltar u omitir",
        "opciones": [
          "Sintetizar o cerrar las ideas presentadas",
          "Enojo o molestia",
          "Por el lenguaje valorativo y los argumentos que decide resaltar u omitir",
          "La caída de ventas se debe al cierre de la fábrica"
        ],
        "correcta": 2
      },
      {
        "p": "“A pesar de sus pocos recursos, terminó la carrera con honores.” ¿Qué motivo o actitud se infiere?",
        "r": "Esfuerzo y determinación pese a las dificultades",
        "opciones": [
          "Esfuerzo y determinación pese a las dificultades",
          "Planteamiento, nudo y desenlace",
          "Señala un contraste con la idea anterior",
          "Son ideas secundarias que sostienen la idea principal"
        ],
        "correcta": 0
      },
      {
        "p": "¿Cuál es la función típica de la conclusión en un texto expositivo?",
        "r": "Sintetizar o cerrar las ideas presentadas",
        "opciones": [
          "Determinación / perseverancia",
          "Sintetizar o cerrar las ideas presentadas",
          "Enojo o molestia",
          "Planteamiento, nudo y desenlace"
        ],
        "correcta": 1
      },
      {
        "p": "En un texto narrativo clásico, ¿qué tres partes conforman su estructura?",
        "r": "Planteamiento, nudo y desenlace",
        "opciones": [
          "La caída de ventas se debe al cierre de la fábrica",
          "Planteamiento, nudo y desenlace",
          "Enojo o molestia",
          "Sintetizar o cerrar las ideas presentadas"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "Idea principal vs. idea secundaria",
      "Inferencia de datos",
      "Punto de vista del autor"
    ]
  },
  {
    "n": 4,
    "titulo": "Gramática",
    "puntos": [
      "Oración: unidad con sentido completo que contiene sujeto y predicado (con verbo conjugado).",
      "Sujeto: de quien se dice algo; puede ser expreso, tácito, simple o compuesto.",
      "Predicado: lo que se dice del sujeto; contiene el verbo como núcleo; puede ser verbal o nominal.",
      "Debe existir concordancia entre sujeto y verbo en número (singular/plural) y persona."
    ],
    "ejercicios": [
      {
        "p": "Identifica el sujeto: “Los estudiantes entregaron el proyecto a tiempo.”",
        "r": "Los estudiantes",
        "opciones": [
          "Los estudiantes",
          "Sujeto: El profesor · Predicado: explicó el tema con claridad",
          "Nosotros",
          "entregaron el proyecto a tiempo"
        ],
        "correcta": 0
      },
      {
        "p": "Identifica el predicado de la oración anterior",
        "r": "entregaron el proyecto a tiempo",
        "opciones": [
          "Sujeto compuesto",
          "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)",
          "entregaron el proyecto a tiempo",
          "Unimembre (verbo impersonal, sin sujeto)"
        ],
        "correcta": 2
      },
      {
        "p": "¿Cuál es el sujeto tácito en “Llegamos tarde a la reunión”?",
        "r": "Nosotros",
        "opciones": [
          "Unimembre (verbo impersonal, sin sujeto)",
          "Él / Ella (tácito)",
          "Nosotros",
          "entregaron el proyecto a tiempo"
        ],
        "correcta": 2
      },
      {
        "p": "Clasifica el sujeto de “María y Juan estudian juntos”",
        "r": "Sujeto compuesto",
        "opciones": [
          "Sujeto compuesto",
          "Unimembre (verbo impersonal, sin sujeto)",
          "corre",
          "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)"
        ],
        "correcta": 0
      },
      {
        "p": "Señala el núcleo del predicado en “El perro corre en el parque”",
        "r": "corre",
        "opciones": [
          "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)",
          "Nosotros",
          "corre",
          "entregaron el proyecto a tiempo"
        ],
        "correcta": 2
      },
      {
        "p": "Corrige la concordancia: “Los niños juega en el patio”",
        "r": "Los niños juegan en el patio",
        "opciones": [
          "Unimembre (verbo impersonal, sin sujeto)",
          "Los niños juegan en el patio",
          "entregaron el proyecto a tiempo",
          "corre"
        ],
        "correcta": 1
      },
      {
        "p": "Identifica sujeto y predicado: “El profesor explicó el tema con claridad”",
        "r": "Sujeto: El profesor · Predicado: explicó el tema con claridad",
        "opciones": [
          "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)",
          "Sujeto compuesto",
          "Los niños juegan en el patio",
          "Sujeto: El profesor · Predicado: explicó el tema con claridad"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué tipo de oración es “¡Qué hermoso día!”?",
        "r": "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)",
        "opciones": [
          "Unimembre (verbo impersonal, sin sujeto)",
          "entregaron el proyecto a tiempo",
          "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)",
          "Nosotros"
        ],
        "correcta": 2
      },
      {
        "p": "Identifica el sujeto tácito de “Estudia todas las noches”",
        "r": "Él / Ella (tácito)",
        "opciones": [
          "Unimembre (verbo impersonal, sin sujeto)",
          "Sujeto compuesto",
          "corre",
          "Él / Ella (tácito)"
        ],
        "correcta": 3
      },
      {
        "p": "¿“Llueve mucho hoy” es una oración bimembre o unimembre?",
        "r": "Unimembre (verbo impersonal, sin sujeto)",
        "opciones": [
          "Los estudiantes",
          "Él / Ella (tácito)",
          "corre",
          "Unimembre (verbo impersonal, sin sujeto)"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "Oración = sujeto + predicado",
      "Sujeto tácito, simple o compuesto",
      "Predicado verbal o nominal"
    ]
  },
  {
    "n": 5,
    "titulo": "Redacción",
    "puntos": [
      "Claridad, coherencia y cohesión: las ideas deben estar ordenadas lógicamente y conectadas entre sí.",
      "Conectores: causales (porque, ya que), consecutivos (por lo tanto), adversativos (pero, sin embargo), de adición (además, también).",
      "Evita redundancias, ambigüedades y frases demasiado largas o mal estructuradas.",
      "Un párrafo bien redactado desarrolla una sola idea central con oraciones que la apoyan."
    ],
    "ejercicios": [
      {
        "p": "Corrige la redundancia: “Subió arriba y bajó abajo.”",
        "r": "Subió y bajó.",
        "opciones": [
          "además / también",
          "Subió y bajó.",
          "El coche de mi tío, que se dañó ayer, ya está reparado.",
          "Se rompió la pierna y fue llevado al hospital."
        ],
        "correcta": 1
      },
      {
        "p": "Añade el conector adecuado: “Llovía mucho, ___ decidimos salir de todas formas.”",
        "r": "sin embargo / pero (adversativo)",
        "opciones": [
          "La idea central del párrafo",
          "Consecutivo",
          "sin embargo / pero (adversativo)",
          "porque"
        ],
        "correcta": 2
      },
      {
        "p": "Reescribe con mayor claridad: “El coche que se dañó ayer que es de mi tío ya está reparado.”",
        "r": "El coche de mi tío, que se dañó ayer, ya está reparado.",
        "opciones": [
          "La idea central del párrafo",
          "El coche de mi tío, que se dañó ayer, ya está reparado.",
          "El libro es interesante y tiene buenas ilustraciones.",
          "además / también"
        ],
        "correcta": 1
      },
      {
        "p": "Elige el conector causal correcto: “No fue a la escuela ___ estaba enfermo.”",
        "r": "porque",
        "opciones": [
          "además / también",
          "Consecutivo",
          "La idea central del párrafo",
          "porque"
        ],
        "correcta": 3
      },
      {
        "p": "Corrige el uso del gerundio: “Se rompió la pierna, siendo llevado al hospital.”",
        "r": "Se rompió la pierna y fue llevado al hospital.",
        "opciones": [
          "La idea central del párrafo",
          "Se rompió la pierna y fue llevado al hospital.",
          "Subió y bajó.",
          "sin embargo / pero (adversativo)"
        ],
        "correcta": 1
      },
      {
        "p": "Sustituye la repetición: “El libro es interesante. El libro tiene buenas ilustraciones.”",
        "r": "El libro es interesante y tiene buenas ilustraciones.",
        "opciones": [
          "El libro es interesante y tiene buenas ilustraciones.",
          "Adversativo",
          "sin embargo / pero (adversativo)",
          "además / también"
        ],
        "correcta": 0
      },
      {
        "p": "Añade un conector de adición: “Estudió toda la noche, ___ repasó con un compañero.”",
        "r": "además / también",
        "opciones": [
          "porque",
          "además / también",
          "El libro es interesante y tiene buenas ilustraciones.",
          "Adversativo"
        ],
        "correcta": 1
      },
      {
        "p": "Identifica el tipo de conector en “por lo tanto”",
        "r": "Consecutivo",
        "opciones": [
          "Consecutivo",
          "sin embargo / pero (adversativo)",
          "Adversativo",
          "La idea central del párrafo"
        ],
        "correcta": 0
      },
      {
        "p": "Identifica el tipo de conector en “sin embargo”",
        "r": "Adversativo",
        "opciones": [
          "La idea central del párrafo",
          "Se rompió la pierna y fue llevado al hospital.",
          "sin embargo / pero (adversativo)",
          "Adversativo"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué elemento debe desarrollar cada oración de un párrafo bien redactado?",
        "r": "La idea central del párrafo",
        "opciones": [
          "El coche de mi tío, que se dañó ayer, ya está reparado.",
          "El libro es interesante y tiene buenas ilustraciones.",
          "porque",
          "La idea central del párrafo"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "Causales: porque, ya que",
      "Consecutivos: por lo tanto",
      "Adversativos: pero, sin embargo",
      "De adición: además, también"
    ]
  },
  {
    "n": 6,
    "titulo": "Vocabulario",
    "puntos": [
      "Sinónimos: palabras con significado similar. Antónimos: palabras con significado opuesto.",
      "Homófonos: se pronuncian igual pero se escriben distinto y tienen distinto significado (ej. “vaca” / “baca”).",
      "Analogías: relación lógica entre pares de palabras (parte-todo, función, causa-efecto, sinónimos, etc.); hay que identificar la relación del primer par y aplicarla al segundo."
    ],
    "ejercicios": [
      {
        "p": "Da un sinónimo de “feliz”",
        "r": "contento / alegre",
        "opciones": [
          "contento / alegre",
          "vaca: animal · baca: portaequipajes del coche",
          "difícil / laborioso",
          "tacaño / mezquino"
        ],
        "correcta": 0
      },
      {
        "p": "Da un antónimo de “generoso”",
        "r": "tacaño / mezquino",
        "opciones": [
          "escuela",
          "hay: verbo haber · ahí: lugar · ¡ay!: interjección",
          "colmena",
          "tacaño / mezquino"
        ],
        "correcta": 3
      },
      {
        "p": "Completa la analogía: “Médico es a hospital como maestro es a ___”",
        "r": "escuela",
        "opciones": [
          "hay: verbo haber · ahí: lugar · ¡ay!: interjección",
          "difícil / laborioso",
          "contento / alegre",
          "escuela"
        ],
        "correcta": 3
      },
      {
        "p": "Distingue el significado de “vaca” y “baca”",
        "r": "vaca: animal · baca: portaequipajes del coche",
        "opciones": [
          "hay: verbo haber · ahí: lugar · ¡ay!: interjección",
          "vaca: animal · baca: portaequipajes del coche",
          "contento / alegre",
          "tacaño / mezquino"
        ],
        "correcta": 1
      },
      {
        "p": "Completa la analogía: “Pájaro es a nido como abeja es a ___”",
        "r": "colmena",
        "opciones": [
          "tacaño / mezquino",
          "escaso",
          "pintor",
          "colmena"
        ],
        "correcta": 3
      },
      {
        "p": "Da un sinónimo de “efímero”",
        "r": "pasajero / breve",
        "opciones": [
          "colmena",
          "difícil / laborioso",
          "pintor",
          "pasajero / breve"
        ],
        "correcta": 3
      },
      {
        "p": "Da un antónimo de “abundante”",
        "r": "escaso",
        "opciones": [
          "escaso",
          "difícil / laborioso",
          "escuela",
          "colmena"
        ],
        "correcta": 0
      },
      {
        "p": "Distingue el uso de “hay”, “ahí” y “ay”",
        "r": "hay: verbo haber · ahí: lugar · ¡ay!: interjección",
        "opciones": [
          "tacaño / mezquino",
          "pintor",
          "hay: verbo haber · ahí: lugar · ¡ay!: interjección",
          "escuela"
        ],
        "correcta": 2
      },
      {
        "p": "Completa la analogía: “Libro es a autor como cuadro es a ___”",
        "r": "pintor",
        "opciones": [
          "hay: verbo haber · ahí: lugar · ¡ay!: interjección",
          "escaso",
          "pintor",
          "pasajero / breve"
        ],
        "correcta": 2
      },
      {
        "p": "Da un sinónimo de “arduo”",
        "r": "difícil / laborioso",
        "opciones": [
          "escuela",
          "contento / alegre",
          "difícil / laborioso",
          "pasajero / breve"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "Sinónimos",
      "Antónimos",
      "Homófonos",
      "Analogías"
    ]
  },
  {
    "n": 7,
    "titulo": "Ortografía",
    "puntos": [
      "Acentuación: agudas llevan tilde si terminan en n, s o vocal; graves/llanas llevan tilde si NO terminan en n, s o vocal; esdrújulas siempre llevan tilde.",
      "Uso de b/v: b antes de consonante y en la terminación -aba del pretérito imperfecto; v después de n y en palabras como -ívoro.",
      "Uso de g/j: g antes de e, i en muchas palabras (general, gente); j en palabras terminadas en -aje, -jero y sus derivados.",
      "Uso de h: es muda; aparece en palabras que empiezan con hue-, hie-, hum- y muchas de origen griego o latino.",
      "Puntuación: la coma separa elementos, marca pausas breves y aísla conectores como “sin embargo”; el punto cierra ideas completas."
    ],
    "ejercicios": [
      {
        "p": "Completa correctamente: “Ha__er” (realizar)",
        "r": "hacer",
        "opciones": [
          "jirafa",
          "hacer",
          "proteger",
          "Llana/grave; lleva tilde porque termina en consonante distinta de n o s"
        ],
        "correcta": 1
      },
      {
        "p": "¿“Resuelto” lleva tilde? Explica por qué",
        "r": "No; es grave/llana y termina en vocal",
        "opciones": [
          "jirafa",
          "hacer",
          "No; es grave/llana y termina en vocal",
          "huevo"
        ],
        "correcta": 2
      },
      {
        "p": "Clasifica “árbol” por su acentuación y explica la tilde",
        "r": "Llana/grave; lleva tilde porque termina en consonante distinta de n o s",
        "opciones": [
          "proteger",
          "verde",
          "Llana/grave; lleva tilde porque termina en consonante distinta de n o s",
          "Aguda; lleva tilde porque termina en n"
        ],
        "correcta": 2
      },
      {
        "p": "Clasifica “camión” y explica la tilde",
        "r": "Aguda; lleva tilde porque termina en n",
        "opciones": [
          "hacer",
          "No; es grave/llana y termina en vocal",
          "Aguda; lleva tilde porque termina en n",
          "Sin embargo, no llegó a tiempo."
        ],
        "correcta": 2
      },
      {
        "p": "Clasifica “público” y explica la tilde",
        "r": "Esdrújula; las esdrújulas siempre llevan tilde",
        "opciones": [
          "No; es grave/llana y termina en vocal",
          "Esdrújula; las esdrújulas siempre llevan tilde",
          "verde",
          "hacer"
        ],
        "correcta": 1
      },
      {
        "p": "Completa con h si corresponde: “___uevo”",
        "r": "huevo",
        "opciones": [
          "Esdrújula; las esdrújulas siempre llevan tilde",
          "Llana/grave; lleva tilde porque termina en consonante distinta de n o s",
          "No; es grave/llana y termina en vocal",
          "huevo"
        ],
        "correcta": 3
      },
      {
        "p": "Completa con v o b: “El coche era de color ___erde”",
        "r": "verde",
        "opciones": [
          "No; es grave/llana y termina en vocal",
          "huevo",
          "Sin embargo, no llegó a tiempo.",
          "verde"
        ],
        "correcta": 3
      },
      {
        "p": "Completa con g o j: “___irafa”",
        "r": "jirafa",
        "opciones": [
          "jirafa",
          "Aguda; lleva tilde porque termina en n",
          "verde",
          "Sin embargo, no llegó a tiempo."
        ],
        "correcta": 0
      },
      {
        "p": "Completa con g o j: “prote__er”",
        "r": "proteger",
        "opciones": [
          "verde",
          "proteger",
          "huevo",
          "No; es grave/llana y termina en vocal"
        ],
        "correcta": 1
      },
      {
        "p": "Coloca la coma en el lugar correcto: “Sin embargo no llegó a tiempo”",
        "r": "Sin embargo, no llegó a tiempo.",
        "opciones": [
          "Esdrújula; las esdrújulas siempre llevan tilde",
          "proteger",
          "hacer",
          "Sin embargo, no llegó a tiempo."
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "Agudas: tilde si terminan en n, s o vocal",
      "Llanas: tilde si NO terminan en n, s o vocal",
      "Esdrújulas: siempre llevan tilde"
    ]
  }
];

  if (typeof window !== "undefined") {
    window.SUBJECT_DATA = window.SUBJECT_DATA || {};
    window.SUBJECT_DATA["espanol"] = TEMAS;
  }
  if (typeof window !== "undefined") {
    window.__LAST_LOADED_TEMAS__ = TEMAS;
  }
})();

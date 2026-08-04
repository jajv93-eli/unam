// Datos: Guía de biologia — Examen de ingreso a licenciatura UNAM
// Cada tema incluye "datosClave" (fechas, nombres, fórmulas para repaso rápido).
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta).
(function () {
const TEMAS = [
  {
    "n": 1,
    "titulo": "Célula",
    "puntos": [
      "Teoría celular: todos los seres vivos están formados por células; la célula es la unidad básica de estructura y función; toda célula proviene de una célula preexistente.",
      "Robert Hooke observó por primera vez células (en corcho, 1665); Schleiden y Schwann formularon la teoría celular; Virchow propuso que toda célula proviene de otra célula.",
      "Moléculas orgánicas presentes en la célula: carbohidratos, lípidos, proteínas y ácidos nucleicos.",
      "Organelos principales: núcleo (contiene el ADN), mitocondrias (producción de ATP), ribosomas (síntesis de proteínas), retículo endoplásmico, aparato de Golgi, cloroplastos (fotosíntesis, en células vegetales), lisosomas (digestión celular).",
      "Procariotas: sin núcleo delimitado por membrana (bacterias). Eucariotas: con núcleo definido (animales, plantas, hongos, protistas)."
    ],
    "ejercicios": [
      {
        "p": "Menciona los tres postulados básicos de la teoría celular",
        "r": "Todos los seres vivos están hechos de células; la célula es la unidad básica de vida; toda célula proviene de otra célula",
        "opciones": [
          "El cloroplasto",
          "Todos los seres vivos están hechos de células; la célula es la unidad básica de vida; toda célula proviene de otra célula",
          "Cloroplastos y pared celular",
          "Empaqueta y distribuye proteínas y lípidos"
        ],
        "correcta": 1
      },
      {
        "p": "¿Quién observó por primera vez células?",
        "r": "Robert Hooke",
        "opciones": [
          "El cloroplasto",
          "Robert Hooke",
          "Cloroplastos y pared celular",
          "Empaqueta y distribuye proteínas y lípidos"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué organelo contiene el material genético de la célula?",
        "r": "El núcleo",
        "opciones": [
          "Empaqueta y distribuye proteínas y lípidos",
          "El núcleo",
          "Procariotas",
          "Todos los seres vivos están hechos de células; la célula es la unidad básica de vida; toda célula proviene de otra célula"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué organelo produce la mayor parte del ATP celular?",
        "r": "La mitocondria",
        "opciones": [
          "Cloroplastos y pared celular",
          "Empaqueta y distribuye proteínas y lípidos",
          "Robert Hooke",
          "La mitocondria"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué organelo realiza la fotosíntesis?",
        "r": "El cloroplasto",
        "opciones": [
          "Robert Hooke",
          "El cloroplasto",
          "El núcleo",
          "Empaqueta y distribuye proteínas y lípidos"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué estructura sintetiza las proteínas en la célula?",
        "r": "Los ribosomas",
        "opciones": [
          "Todos los seres vivos están hechos de células; la célula es la unidad básica de vida; toda célula proviene de otra célula",
          "Los ribosomas",
          "Robert Hooke",
          "La procariota no tiene núcleo definido; la eucariota sí"
        ],
        "correcta": 1
      },
      {
        "p": "¿Cuál es la diferencia principal entre célula procariota y eucariota?",
        "r": "La procariota no tiene núcleo definido; la eucariota sí",
        "opciones": [
          "La procariota no tiene núcleo definido; la eucariota sí",
          "Todos los seres vivos están hechos de células; la célula es la unidad básica de vida; toda célula proviene de otra célula",
          "Robert Hooke",
          "Los ribosomas"
        ],
        "correcta": 0
      },
      {
        "p": "¿Las bacterias son procariotas o eucariotas?",
        "r": "Procariotas",
        "opciones": [
          "Procariotas",
          "El cloroplasto",
          "La mitocondria",
          "Robert Hooke"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona dos estructuras exclusivas de las células vegetales",
        "r": "Cloroplastos y pared celular",
        "opciones": [
          "La mitocondria",
          "La procariota no tiene núcleo definido; la eucariota sí",
          "El cloroplasto",
          "Cloroplastos y pared celular"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué función cumple el aparato de Golgi?",
        "r": "Empaqueta y distribuye proteínas y lípidos",
        "opciones": [
          "Robert Hooke",
          "Empaqueta y distribuye proteínas y lípidos",
          "Procariotas",
          "Cloroplastos y pared celular"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "Robert Hooke (1665)",
      "Núcleo · Mitocondria · Ribosoma · Cloroplasto",
      "Procariota (sin núcleo) vs. eucariota (con núcleo)"
    ]
  },
  {
    "n": 2,
    "titulo": "Metabolismo celular",
    "puntos": [
      "Anabolismo: reacciones de síntesis que requieren energía (construyen moléculas). Catabolismo: reacciones de degradación que liberan energía.",
      "El ATP almacena y transporta la energía en la célula; las enzimas catalizan las reacciones metabólicas.",
      "Fotosíntesis: fase luminosa (captura luz, produce ATP y NADPH, libera O₂) y fase oscura o ciclo de Calvin (fija CO₂ para formar glucosa).",
      "Respiración anaerobia: glucólisis (glucosa → 2 piruvato, 2 ATP netos) seguida de fermentación láctica (ácido láctico) o alcohólica (etanol y CO₂), sin usar oxígeno.",
      "Respiración aerobia: glucólisis + Ciclo de Krebs + cadena respiratoria; usa oxígeno y produce entre 36 y 38 ATP por molécula de glucosa, mucho más eficiente que la vía anaerobia."
    ],
    "ejercicios": [
      {
        "p": "Define anabolismo",
        "r": "Conjunto de reacciones de síntesis que requieren energía",
        "opciones": [
          "Conjunto de reacciones de síntesis que requieren energía",
          "Conjunto de reacciones de degradación que liberan energía",
          "Oxígeno",
          "Ácido láctico"
        ],
        "correcta": 0
      },
      {
        "p": "Define catabolismo",
        "r": "Conjunto de reacciones de degradación que liberan energía",
        "opciones": [
          "Oxígeno",
          "2 ATP",
          "Conjunto de reacciones de degradación que liberan energía",
          "Conjunto de reacciones de síntesis que requieren energía"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué molécula almacena y transporta la energía en la célula?",
        "r": "El ATP",
        "opciones": [
          "Conjunto de reacciones de síntesis que requieren energía",
          "Oxígeno",
          "El ATP",
          "Ácido láctico"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué gas se libera durante la fase luminosa de la fotosíntesis?",
        "r": "Oxígeno",
        "opciones": [
          "Oxígeno",
          "En la fase oscura (ciclo de Calvin)",
          "La respiración aerobia (36–38 ATP frente a 2 ATP)",
          "2 ATP"
        ],
        "correcta": 0
      },
      {
        "p": "¿En qué fase de la fotosíntesis se fija el CO₂ para formar glucosa?",
        "r": "En la fase oscura (ciclo de Calvin)",
        "opciones": [
          "La respiración aerobia (36–38 ATP frente a 2 ATP)",
          "El ATP",
          "Ácido láctico",
          "En la fase oscura (ciclo de Calvin)"
        ],
        "correcta": 3
      },
      {
        "p": "¿Cuántos ATP netos produce la glucólisis?",
        "r": "2 ATP",
        "opciones": [
          "Etanol y CO₂",
          "El ATP",
          "Oxígeno",
          "2 ATP"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué producto forma la fermentación láctica?",
        "r": "Ácido láctico",
        "opciones": [
          "Oxígeno",
          "Etanol y CO₂",
          "En la fase oscura (ciclo de Calvin)",
          "Ácido láctico"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué productos forma la fermentación alcohólica?",
        "r": "Etanol y CO₂",
        "opciones": [
          "Etanol y CO₂",
          "La respiración aerobia (36–38 ATP frente a 2 ATP)",
          "Oxígeno",
          "En la fase oscura (ciclo de Calvin)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué gas es indispensable para la respiración aerobia?",
        "r": "Oxígeno",
        "opciones": [
          "2 ATP",
          "Ácido láctico",
          "El ATP",
          "Oxígeno"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué proceso produce más ATP por molécula de glucosa: la respiración aerobia o la anaerobia?",
        "r": "La respiración aerobia (36–38 ATP frente a 2 ATP)",
        "opciones": [
          "Conjunto de reacciones de síntesis que requieren energía",
          "La respiración aerobia (36–38 ATP frente a 2 ATP)",
          "Ácido láctico",
          "El ATP"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "Glucólisis: 2 ATP netos",
      "Respiración aerobia: 36–38 ATP",
      "ATP y NADPH"
    ]
  },
  {
    "n": 3,
    "titulo": "Reproducción",
    "puntos": [
      "Ciclo celular: interfase (fases G1, S y G2, donde se duplica el ADN) y fase M (división celular).",
      "ADN: doble hélice que almacena la información genética. ARN: intermediario en la síntesis de proteínas (mensajero, ribosomal, de transferencia).",
      "Mitosis: división que produce dos células hijas genéticamente idénticas a la célula madre; ocurre en células somáticas.",
      "Meiosis: división que produce cuatro células con la mitad de cromosomas (gametos), generando variabilidad genética.",
      "Reproducción asexual: un solo progenitor, descendencia genéticamente idéntica (ej. gemación, fisión binaria). Reproducción sexual: dos progenitores, combina material genético y genera variabilidad."
    ],
    "ejercicios": [
      {
        "p": "¿En qué fase del ciclo celular se duplica el ADN?",
        "r": "En la fase S de la interfase",
        "opciones": [
          "En la fase S de la interfase",
          "ARN mensajero: transporta la información del ADN al ribosoma",
          "El ADN",
          "No; produce descendencia genéticamente idéntica"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de división produce células genéticamente idénticas?",
        "r": "La mitosis",
        "opciones": [
          "La mitosis",
          "Mayor variabilidad genética en la descendencia",
          "No; produce descendencia genéticamente idéntica",
          "La meiosis"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de división produce gametos con la mitad de cromosomas?",
        "r": "La meiosis",
        "opciones": [
          "No; produce descendencia genéticamente idéntica",
          "4",
          "ARN mensajero: transporta la información del ADN al ribosoma",
          "La meiosis"
        ],
        "correcta": 3
      },
      {
        "p": "¿Cuántas células hijas produce la mitosis?",
        "r": "2",
        "opciones": [
          "ARN mensajero: transporta la información del ADN al ribosoma",
          "La meiosis",
          "2",
          "4"
        ],
        "correcta": 2
      },
      {
        "p": "¿Cuántas células hijas produce la meiosis?",
        "r": "4",
        "opciones": [
          "El ADN",
          "4",
          "No; produce descendencia genéticamente idéntica",
          "2"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué molécula almacena la información genética?",
        "r": "El ADN",
        "opciones": [
          "La mitosis",
          "2",
          "No; produce descendencia genéticamente idéntica",
          "El ADN"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un tipo de ARN y su función",
        "r": "ARN mensajero: transporta la información del ADN al ribosoma",
        "opciones": [
          "No; produce descendencia genéticamente idéntica",
          "ARN mensajero: transporta la información del ADN al ribosoma",
          "El ADN",
          "Gemación, fisión binaria o esporulación"
        ],
        "correcta": 1
      },
      {
        "p": "¿La reproducción asexual genera variabilidad genética?",
        "r": "No; produce descendencia genéticamente idéntica",
        "opciones": [
          "2",
          "No; produce descendencia genéticamente idéntica",
          "La mitosis",
          "En la fase S de la interfase"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué ventaja ofrece la reproducción sexual sobre la asexual?",
        "r": "Mayor variabilidad genética en la descendencia",
        "opciones": [
          "4",
          "El ADN",
          "No; produce descendencia genéticamente idéntica",
          "Mayor variabilidad genética en la descendencia"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un ejemplo de reproducción asexual",
        "r": "Gemación, fisión binaria o esporulación",
        "opciones": [
          "Gemación, fisión binaria o esporulación",
          "La meiosis",
          "2",
          "No; produce descendencia genéticamente idéntica"
        ],
        "correcta": 0
      }
    ],
    "datosClave": [
      "Mitosis → 2 células idénticas",
      "Meiosis → 4 células, mitad de cromosomas",
      "ADN (doble hélice) y ARN"
    ]
  },
  {
    "n": 4,
    "titulo": "Mecanismos de la herencia",
    "puntos": [
      "Mendel: sus experimentos con chícharos establecieron la Ley de la Segregación (los alelos se separan al formar gametos) y la Ley de la Distribución Independiente (genes de distintos caracteres se heredan independientemente).",
      "Teoría cromosómica de la herencia: los genes están ubicados en los cromosomas (Sutton y Boveri).",
      "Herencia ligada al sexo: genes ubicados en los cromosomas sexuales (X o Y), con patrones de herencia distintos entre machos y hembras.",
      "Mutaciones: cambios en la secuencia del ADN, espontáneos o inducidos; son fuente de variabilidad genética.",
      "Ingeniería genética: la tecnología del ADN recombinante permite modificar o combinar material genético de distintos organismos, con aplicaciones en medicina y agricultura."
    ],
    "ejercicios": [
      {
        "p": "¿Qué organismo usó Mendel en sus experimentos de herencia?",
        "r": "El chícharo (guisante)",
        "opciones": [
          "Un cambio en la secuencia del ADN",
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
          "El chícharo (guisante)",
          "Los alelos de un gen se separan al formar los gametos"
        ],
        "correcta": 2
      },
      {
        "p": "Enuncia la Ley de la Segregación de Mendel",
        "r": "Los alelos de un gen se separan al formar los gametos",
        "opciones": [
          "Los alelos de un gen se separan al formar los gametos",
          "Que los genes están ubicados en los cromosomas",
          "El chícharo (guisante)",
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)"
        ],
        "correcta": 0
      },
      {
        "p": "Enuncia la Ley de la Distribución Independiente",
        "r": "Los genes de diferentes características se heredan de forma independiente entre sí",
        "opciones": [
          "No; pueden ser neutras, dañinas o benéficas",
          "La técnica que permite combinar o modificar material genético de distintos organismos",
          "Producción de insulina humana, cultivos transgénicos o terapia génica",
          "Los genes de diferentes características se heredan de forma independiente entre sí"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué propone la teoría cromosómica de la herencia?",
        "r": "Que los genes están ubicados en los cromosomas",
        "opciones": [
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
          "La técnica que permite combinar o modificar material genético de distintos organismos",
          "Que los genes están ubicados en los cromosomas",
          "Los alelos de un gen se separan al formar los gametos"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué es la herencia ligada al sexo?",
        "r": "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
        "opciones": [
          "El daltonismo o la hemofilia",
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
          "El chícharo (guisante)",
          "Los genes de diferentes características se heredan de forma independiente entre sí"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona un ejemplo de enfermedad ligada al sexo",
        "r": "El daltonismo o la hemofilia",
        "opciones": [
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
          "Que los genes están ubicados en los cromosomas",
          "La técnica que permite combinar o modificar material genético de distintos organismos",
          "El daltonismo o la hemofilia"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es una mutación?",
        "r": "Un cambio en la secuencia del ADN",
        "opciones": [
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
          "No; pueden ser neutras, dañinas o benéficas",
          "Un cambio en la secuencia del ADN",
          "La técnica que permite combinar o modificar material genético de distintos organismos"
        ],
        "correcta": 2
      },
      {
        "p": "¿Las mutaciones son siempre dañinas?",
        "r": "No; pueden ser neutras, dañinas o benéficas",
        "opciones": [
          "Producción de insulina humana, cultivos transgénicos o terapia génica",
          "Un cambio en la secuencia del ADN",
          "Los alelos de un gen se separan al formar los gametos",
          "No; pueden ser neutras, dañinas o benéficas"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es la tecnología del ADN recombinante?",
        "r": "La técnica que permite combinar o modificar material genético de distintos organismos",
        "opciones": [
          "Producción de insulina humana, cultivos transgénicos o terapia génica",
          "La técnica que permite combinar o modificar material genético de distintos organismos",
          "Un cambio en la secuencia del ADN",
          "El daltonismo o la hemofilia"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona una aplicación de la ingeniería genética",
        "r": "Producción de insulina humana, cultivos transgénicos o terapia génica",
        "opciones": [
          "Producción de insulina humana, cultivos transgénicos o terapia génica",
          "La herencia de genes ubicados en los cromosomas sexuales (X o Y)",
          "Un cambio en la secuencia del ADN",
          "No; pueden ser neutras, dañinas o benéficas"
        ],
        "correcta": 0
      }
    ],
    "datosClave": [
      "Mendel — experimentos con chícharos",
      "Ley de la Segregación",
      "Ley de la Distribución Independiente"
    ]
  },
  {
    "n": 5,
    "titulo": "Evolución",
    "puntos": [
      "Teoría quimiosintética de Oparin-Haldane: la vida se originó a partir de moléculas orgánicas simples combinadas en la “sopa primitiva” bajo las condiciones de la Tierra primitiva.",
      "Teoría endosimbiótica de Margulis: mitocondrias y cloroplastos se originaron de bacterias englobadas por células ancestrales, en una relación simbiótica.",
      "Teoría de Lamarck: herencia de caracteres adquiridos por uso y desuso (hoy refutada). Teoría de Darwin-Wallace: selección natural, los individuos mejor adaptados sobreviven y se reproducen más.",
      "Teoría sintética: combina la selección natural con la genética moderna (mutación, deriva génica, flujo génico).",
      "Evidencias de la evolución: paleontológicas (fósiles), anatómicas (estructuras homólogas), embriológicas, genéticas y biogeográficas.",
      "Consecuencias de la evolución: adaptación y biodiversidad; clasificación de los organismos en cinco reinos (Monera, Protista, Fungi, Plantae, Animalia)."
    ],
    "ejercicios": [
      {
        "p": "¿Qué propone la teoría de Oparin-Haldane sobre el origen de la vida?",
        "r": "Que la vida surgió de moléculas orgánicas simples combinadas en condiciones primitivas de la Tierra",
        "opciones": [
          "Monera, Protista, Fungi, Plantae y Animalia",
          "La herencia de caracteres adquiridos por el uso y desuso",
          "Que la vida surgió de moléculas orgánicas simples combinadas en condiciones primitivas de la Tierra",
          "La selección natural"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué propone la teoría endosimbiótica de Margulis?",
        "r": "Que mitocondrias y cloroplastos se originaron de bacterias englobadas por células ancestrales",
        "opciones": [
          "Que la vida surgió de moléculas orgánicas simples combinadas en condiciones primitivas de la Tierra",
          "Que mitocondrias y cloroplastos se originaron de bacterias englobadas por células ancestrales",
          "Monera, Protista, Fungi, Plantae y Animalia",
          "La herencia de caracteres adquiridos por el uso y desuso"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué proponía Lamarck sobre la herencia?",
        "r": "La herencia de caracteres adquiridos por el uso y desuso",
        "opciones": [
          "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)",
          "Que la vida surgió de moléculas orgánicas simples combinadas en condiciones primitivas de la Tierra",
          "La herencia de caracteres adquiridos por el uso y desuso",
          "Monera, Protista, Fungi, Plantae y Animalia"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué mecanismo propuso Darwin como motor de la evolución?",
        "r": "La selección natural",
        "opciones": [
          "La adaptación y la biodiversidad",
          "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
          "La selección natural",
          "La selección natural con la genética moderna"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué combina la teoría sintética de la evolución?",
        "r": "La selección natural con la genética moderna",
        "opciones": [
          "La selección natural con la genética moderna",
          "La selección natural",
          "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
          "La herencia de caracteres adquiridos por el uso y desuso"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona un tipo de evidencia de la evolución",
        "r": "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
        "opciones": [
          "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
          "La herencia de caracteres adquiridos por el uso y desuso",
          "La selección natural",
          "Que la vida surgió de moléculas orgánicas simples combinadas en condiciones primitivas de la Tierra"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué es una estructura homóloga?",
        "r": "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)",
        "opciones": [
          "La selección natural con la genética moderna",
          "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
          "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)",
          "Que mitocondrias y cloroplastos se originaron de bacterias englobadas por células ancestrales"
        ],
        "correcta": 2
      },
      {
        "p": "¿Cuáles son las dos consecuencias principales de la evolución?",
        "r": "La adaptación y la biodiversidad",
        "opciones": [
          "La adaptación y la biodiversidad",
          "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)",
          "La selección natural con la genética moderna",
          "Monera, Protista, Fungi, Plantae y Animalia"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona los cinco reinos en que se clasifican los seres vivos",
        "r": "Monera, Protista, Fungi, Plantae y Animalia",
        "opciones": [
          "Monera, Protista, Fungi, Plantae y Animalia",
          "La selección natural",
          "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
          "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué criterio usó Darwin para explicar por qué sobreviven ciertos individuos?",
        "r": "Que están mejor adaptados a su ambiente (selección natural)",
        "opciones": [
          "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)",
          "Que están mejor adaptados a su ambiente (selección natural)",
          "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica",
          "Monera, Protista, Fungi, Plantae y Animalia"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "Oparin-Haldane · Margulis · Lamarck · Darwin-Wallace",
      "5 reinos: Monera, Protista, Fungi, Plantae, Animalia"
    ]
  },
  {
    "n": 6,
    "titulo": "Los seres vivos y su ambiente",
    "puntos": [
      "Niveles de organización ecológica: población (individuos de la misma especie), comunidad (varias poblaciones), ecosistema (comunidad + ambiente físico).",
      "Componentes bióticos (seres vivos) y abióticos (factores físicos: agua, luz, temperatura, suelo).",
      "Flujo de energía: unidireccional, de productores hacia consumidores y descomponedores, a través de cadenas y tramas alimenticias.",
      "Ciclos biogeoquímicos: circulación de elementos (carbono, nitrógeno, agua) entre los seres vivos y el ambiente.",
      "Relaciones interespecíficas (depredación, competencia, mutualismo, parasitismo) e intraespecíficas (competencia, cooperación).",
      "Deterioro ambiental: contaminación, sobreexplotación de recursos, pérdida de biodiversidad, cambio climático."
    ],
    "ejercicios": [
      {
        "p": "Define población",
        "r": "Conjunto de individuos de la misma especie que viven en un área determinada",
        "opciones": [
          "Contaminación, sobreexplotación de recursos o deforestación",
          "Conjunto de individuos de la misma especie que viven en un área determinada",
          "Una comunidad junto con los factores abióticos de su ambiente",
          "Agua, luz, temperatura o suelo"
        ],
        "correcta": 1
      },
      {
        "p": "Define comunidad",
        "r": "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar",
        "opciones": [
          "Contaminación, sobreexplotación de recursos o deforestación",
          "Una comunidad junto con los factores abióticos de su ambiente",
          "De forma unidireccional, de productores a consumidores y descomponedores",
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es un ecosistema?",
        "r": "Una comunidad junto con los factores abióticos de su ambiente",
        "opciones": [
          "Depredación, competencia, mutualismo o parasitismo",
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar",
          "Competencia o cooperación entre individuos de la misma especie",
          "Una comunidad junto con los factores abióticos de su ambiente"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona dos factores abióticos de un ecosistema",
        "r": "Agua, luz, temperatura o suelo",
        "opciones": [
          "Contaminación, sobreexplotación de recursos o deforestación",
          "De forma unidireccional, de productores a consumidores y descomponedores",
          "Agua, luz, temperatura o suelo",
          "Competencia o cooperación entre individuos de la misma especie"
        ],
        "correcta": 2
      },
      {
        "p": "¿En qué dirección fluye la energía en un ecosistema?",
        "r": "De forma unidireccional, de productores a consumidores y descomponedores",
        "opciones": [
          "Una comunidad junto con los factores abióticos de su ambiente",
          "La circulación de un elemento (como carbono o nitrógeno) entre los seres vivos y el ambiente",
          "Conjunto de individuos de la misma especie que viven en un área determinada",
          "De forma unidireccional, de productores a consumidores y descomponedores"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es un ciclo biogeoquímico?",
        "r": "La circulación de un elemento (como carbono o nitrógeno) entre los seres vivos y el ambiente",
        "opciones": [
          "La circulación de un elemento (como carbono o nitrógeno) entre los seres vivos y el ambiente",
          "De forma unidireccional, de productores a consumidores y descomponedores",
          "Una comunidad junto con los factores abióticos de su ambiente",
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona una relación interespecífica",
        "r": "Depredación, competencia, mutualismo o parasitismo",
        "opciones": [
          "Competencia o cooperación entre individuos de la misma especie",
          "Depredación, competencia, mutualismo o parasitismo",
          "Conjunto de individuos de la misma especie que viven en un área determinada",
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona una relación intraespecífica",
        "r": "Competencia o cooperación entre individuos de la misma especie",
        "opciones": [
          "Competencia o cooperación entre individuos de la misma especie",
          "Depredación, competencia, mutualismo o parasitismo",
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar",
          "Contaminación, sobreexplotación de recursos o deforestación"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona una causa del deterioro ambiental",
        "r": "Contaminación, sobreexplotación de recursos o deforestación",
        "opciones": [
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar",
          "Contaminación, sobreexplotación de recursos o deforestación",
          "Reciclan la materia orgánica, devolviendo nutrientes al ecosistema",
          "Una comunidad junto con los factores abióticos de su ambiente"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué papel cumplen los descomponedores en el ecosistema?",
        "r": "Reciclan la materia orgánica, devolviendo nutrientes al ecosistema",
        "opciones": [
          "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar",
          "De forma unidireccional, de productores a consumidores y descomponedores",
          "Agua, luz, temperatura o suelo",
          "Reciclan la materia orgánica, devolviendo nutrientes al ecosistema"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "Población → Comunidad → Ecosistema",
      "Ciclos biogeoquímicos (carbono, nitrógeno, agua)"
    ]
  }
];

  if (typeof window !== "undefined") {
    window.SUBJECT_DATA = window.SUBJECT_DATA || {};
    window.SUBJECT_DATA["biologia"] = TEMAS;
  }
  if (typeof window !== "undefined") {
    window.__LAST_LOADED_TEMAS__ = TEMAS;
  }
})();

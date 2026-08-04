// Datos: Guía de historia-universal — Examen de ingreso a licenciatura UNAM
// Cada tema incluye "datosClave" (fechas, nombres, fórmulas para repaso rápido).
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta).
(function () {
const TEMAS = [
  {
    "n": 1,
    "titulo": "La Historia",
    "puntos": [
      "La Historia es la ciencia que estudia el pasado de la humanidad a partir de fuentes (documentos, restos materiales, testimonios).",
      "Su utilidad principal es comprender el presente a partir de los procesos del pasado, identificando causas y consecuencias.",
      "Periodización convencional: Prehistoria, Edad Antigua, Edad Media, Edad Moderna y Edad Contemporánea.",
      "Los criterios de periodización se basan en hechos significativos (invención de la escritura, caída de imperios, revoluciones)."
    ],
    "ejercicios": [
      {
        "p": "¿Qué estudia la Historia como ciencia?",
        "r": "El pasado de la humanidad a partir de fuentes",
        "opciones": [
          "Comprender el presente a partir de los procesos del pasado",
          "El pasado de la humanidad a partir de fuentes",
          "La Revolución Francesa (1789)",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron"
        ],
        "correcta": 1
      },
      {
        "p": "¿Cuál es la utilidad principal del estudio de la Historia?",
        "r": "Comprender el presente a partir de los procesos del pasado",
        "opciones": [
          "Prehistoria, Edad Antigua, Edad Media, Edad Moderna y Edad Contemporánea",
          "Comprender el presente a partir de los procesos del pasado",
          "La caída del Imperio Romano de Occidente (476 d.C.)",
          "La Revolución Francesa (1789)"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona las cinco grandes etapas de la periodización histórica",
        "r": "Prehistoria, Edad Antigua, Edad Media, Edad Moderna y Edad Contemporánea",
        "opciones": [
          "El pasado de la humanidad a partir de fuentes",
          "Prehistoria, Edad Antigua, Edad Media, Edad Moderna y Edad Contemporánea",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron",
          "Porque los límites entre etapas los establecen los historiadores, no son absolutos"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué acontecimiento marca tradicionalmente el fin de la Prehistoria?",
        "r": "La invención de la escritura",
        "opciones": [
          "El pasado de la humanidad a partir de fuentes",
          "Fuentes escritas, materiales y orales",
          "La invención de la escritura",
          "La Revolución Francesa (1789)"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué acontecimiento marca el inicio de la Edad Contemporánea?",
        "r": "La Revolución Francesa (1789)",
        "opciones": [
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron",
          "La Revolución Francesa (1789)",
          "La caída del Imperio Romano de Occidente (476 d.C.)",
          "El pasado de la humanidad a partir de fuentes"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de fuentes usa el historiador para reconstruir el pasado?",
        "r": "Fuentes escritas, materiales y orales",
        "opciones": [
          "Fuentes escritas, materiales y orales",
          "El pasado de la humanidad a partir de fuentes",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron",
          "La Revolución Francesa (1789)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué acontecimiento marca tradicionalmente el fin de la Edad Antigua?",
        "r": "La caída del Imperio Romano de Occidente (476 d.C.)",
        "opciones": [
          "La Revolución Francesa (1789)",
          "La caída de Constantinopla (1453) o el descubrimiento de América (1492)",
          "La caída del Imperio Romano de Occidente (476 d.C.)",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué acontecimiento marca el fin de la Edad Media?",
        "r": "La caída de Constantinopla (1453) o el descubrimiento de América (1492)",
        "opciones": [
          "El pasado de la humanidad a partir de fuentes",
          "La caída de Constantinopla (1453) o el descubrimiento de América (1492)",
          "Comprender el presente a partir de los procesos del pasado",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron"
        ],
        "correcta": 1
      },
      {
        "p": "¿Por qué se dice que la periodización histórica es convencional?",
        "r": "Porque los límites entre etapas los establecen los historiadores, no son absolutos",
        "opciones": [
          "Fuentes escritas, materiales y orales",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron",
          "La invención de la escritura",
          "Porque los límites entre etapas los establecen los historiadores, no son absolutos"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué permite estudiar la relación causa-consecuencia en la Historia?",
        "r": "Explicar por qué ocurrieron los procesos y qué efectos tuvieron",
        "opciones": [
          "Comprender el presente a partir de los procesos del pasado",
          "Fuentes escritas, materiales y orales",
          "Explicar por qué ocurrieron los procesos y qué efectos tuvieron",
          "La caída del Imperio Romano de Occidente (476 d.C.)"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "476 d.C. — Caída del Imperio Romano de Occidente",
      "1789 — Inicio de la Edad Contemporánea",
      "Prehistoria · Edad Antigua · Edad Media · Edad Moderna · Edad Contemporánea"
    ]
  },
  {
    "n": 2,
    "titulo": "Las revoluciones burguesas",
    "puntos": [
      "La Ilustración: movimiento intelectual del siglo XVIII que promovió la razón, la libertad y la crítica al absolutismo (Locke, Montesquieu, Rousseau, Voltaire).",
      "La burguesía se fortaleció económicamente y buscó mayor participación política, impulsando revoluciones.",
      "Independencia de las Trece Colonias (1776): primera gran revolución basada en ideales ilustrados.",
      "Revolución Francesa (1789): fin del absolutismo en Francia y Declaración de los Derechos del Hombre; el Imperio napoleónico expandió estos ideales por Europa.",
      "Independencia de Hispanoamérica (inicios del siglo XIX): influida por las ideas ilustradas y el ejemplo de Francia y Estados Unidos.",
      "Revolución Industrial (Inglaterra, siglos XVIII-XIX): transformación económica basada en la máquina de vapor y la producción fabril.",
      "Liberalismo económico y político del siglo XIX: defensa de la propiedad privada, el libre mercado, la división de poderes y los derechos individuales."
    ],
    "ejercicios": [
      {
        "p": "Menciona dos pensadores representativos de la Ilustración",
        "r": "Voltaire y Rousseau (o Montesquieu, Locke)",
        "opciones": [
          "Voltaire y Rousseau (o Montesquieu, Locke)",
          "La razón, la libertad y la crítica al absolutismo",
          "Napoleón Bonaparte",
          "La división de poderes y los derechos individuales"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué ideales promovía la Ilustración?",
        "r": "La razón, la libertad y la crítica al absolutismo",
        "opciones": [
          "La máquina de vapor",
          "La razón, la libertad y la crítica al absolutismo",
          "La Declaración de los Derechos del Hombre y del Ciudadano",
          "Voltaire y Rousseau (o Montesquieu, Locke)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué revolución se considera la primera basada en ideales ilustrados?",
        "r": "La independencia de las Trece Colonias (1776)",
        "opciones": [
          "La máquina de vapor",
          "La Declaración de los Derechos del Hombre y del Ciudadano",
          "La independencia de las Trece Colonias (1776)",
          "La razón, la libertad y la crítica al absolutismo"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué documento surgió de la Revolución Francesa en 1789?",
        "r": "La Declaración de los Derechos del Hombre y del Ciudadano",
        "opciones": [
          "La independencia de las Trece Colonias (1776)",
          "La Declaración de los Derechos del Hombre y del Ciudadano",
          "La propiedad privada y el libre mercado",
          "Napoleón Bonaparte"
        ],
        "correcta": 1
      },
      {
        "p": "¿Quién expandió los ideales de la Revolución Francesa por Europa mediante conquistas militares?",
        "r": "Napoleón Bonaparte",
        "opciones": [
          "La independencia de las Trece Colonias (1776)",
          "En Inglaterra",
          "Napoleón Bonaparte",
          "La razón, la libertad y la crítica al absolutismo"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué procesos de independencia se dieron a inicios del siglo XIX influidos por estas ideas?",
        "r": "Las independencias de Hispanoamérica",
        "opciones": [
          "La Declaración de los Derechos del Hombre y del Ciudadano",
          "Las independencias de Hispanoamérica",
          "En Inglaterra",
          "Napoleón Bonaparte"
        ],
        "correcta": 1
      },
      {
        "p": "¿En qué país inició la Revolución Industrial?",
        "r": "En Inglaterra",
        "opciones": [
          "La división de poderes y los derechos individuales",
          "En Inglaterra",
          "La independencia de las Trece Colonias (1776)",
          "La razón, la libertad y la crítica al absolutismo"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué invento fue clave para la Revolución Industrial?",
        "r": "La máquina de vapor",
        "opciones": [
          "La máquina de vapor",
          "La razón, la libertad y la crítica al absolutismo",
          "La Declaración de los Derechos del Hombre y del Ciudadano",
          "La división de poderes y los derechos individuales"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué defiende el liberalismo económico?",
        "r": "La propiedad privada y el libre mercado",
        "opciones": [
          "Las independencias de Hispanoamérica",
          "La propiedad privada y el libre mercado",
          "Voltaire y Rousseau (o Montesquieu, Locke)",
          "La razón, la libertad y la crítica al absolutismo"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué defiende el liberalismo político?",
        "r": "La división de poderes y los derechos individuales",
        "opciones": [
          "La independencia de las Trece Colonias (1776)",
          "La división de poderes y los derechos individuales",
          "La propiedad privada y el libre mercado",
          "En Inglaterra"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "1776 — Independencia de las Trece Colonias",
      "1789 — Revolución Francesa",
      "Voltaire, Rousseau, Montesquieu",
      "Napoleón Bonaparte"
    ]
  },
  {
    "n": 3,
    "titulo": "Pensamiento y movimientos sociales y políticos del siglo XIX",
    "puntos": [
      "Liberalismo: defiende las libertades individuales y el Estado mínimo. Conservadurismo: defiende el orden tradicional, la monarquía y la Iglesia.",
      "Los movimientos obreros surgieron como respuesta a las condiciones de explotación laboral de la Revolución Industrial.",
      "El pensamiento socialista (Marx y Engels) propuso la lucha de clases y la superación del capitalismo mediante la propiedad colectiva de los medios de producción.",
      "El nacionalismo del siglo XIX impulsó la unificación de Italia (Cavour y Garibaldi) y de Alemania (Bismarck)."
    ],
    "ejercicios": [
      {
        "p": "¿Qué defiende el liberalismo del siglo XIX?",
        "r": "Las libertades individuales y el Estado mínimo",
        "opciones": [
          "Las libertades individuales y el Estado mínimo",
          "Como respuesta a la explotación laboral durante la Revolución Industrial",
          "Cavour y Garibaldi",
          "El orden tradicional, la monarquía y la Iglesia"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué defiende el conservadurismo del siglo XIX?",
        "r": "El orden tradicional, la monarquía y la Iglesia",
        "opciones": [
          "El nacionalismo",
          "Mejores condiciones laborales y salariales",
          "Karl Marx y Friedrich Engels",
          "El orden tradicional, la monarquía y la Iglesia"
        ],
        "correcta": 3
      },
      {
        "p": "¿Por qué surgieron los movimientos obreros?",
        "r": "Como respuesta a la explotación laboral durante la Revolución Industrial",
        "opciones": [
          "El orden tradicional, la monarquía y la Iglesia",
          "Cavour y Garibaldi",
          "Como respuesta a la explotación laboral durante la Revolución Industrial",
          "La propiedad colectiva de los medios de producción"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué autores formularon el pensamiento socialista científico?",
        "r": "Karl Marx y Friedrich Engels",
        "opciones": [
          "La propiedad colectiva de los medios de producción",
          "La lucha de clases",
          "Karl Marx y Friedrich Engels",
          "Cavour y Garibaldi"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué concepto central propone el marxismo para explicar la historia?",
        "r": "La lucha de clases",
        "opciones": [
          "El orden tradicional, la monarquía y la Iglesia",
          "Cavour y Garibaldi",
          "La lucha de clases",
          "La propiedad colectiva de los medios de producción"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué proponía el socialismo como alternativa al capitalismo?",
        "r": "La propiedad colectiva de los medios de producción",
        "opciones": [
          "Mejores condiciones laborales y salariales",
          "Otto von Bismarck",
          "La propiedad colectiva de los medios de producción",
          "Como respuesta a la explotación laboral durante la Revolución Industrial"
        ],
        "correcta": 2
      },
      {
        "p": "¿Quién lideró la unificación de Italia?",
        "r": "Cavour y Garibaldi",
        "opciones": [
          "Como respuesta a la explotación laboral durante la Revolución Industrial",
          "Cavour y Garibaldi",
          "La propiedad colectiva de los medios de producción",
          "El nacionalismo"
        ],
        "correcta": 1
      },
      {
        "p": "¿Quién lideró la unificación de Alemania?",
        "r": "Otto von Bismarck",
        "opciones": [
          "La lucha de clases",
          "Las libertades individuales y el Estado mínimo",
          "Otto von Bismarck",
          "Mejores condiciones laborales y salariales"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué corriente política impulsó los procesos de unificación nacional del siglo XIX?",
        "r": "El nacionalismo",
        "opciones": [
          "El nacionalismo",
          "La lucha de clases",
          "Las libertades individuales y el Estado mínimo",
          "Karl Marx y Friedrich Engels"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué buscaban los sindicatos obreros del siglo XIX?",
        "r": "Mejores condiciones laborales y salariales",
        "opciones": [
          "El nacionalismo",
          "El orden tradicional, la monarquía y la Iglesia",
          "Las libertades individuales y el Estado mínimo",
          "Mejores condiciones laborales y salariales"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "Karl Marx y Friedrich Engels",
      "Cavour y Garibaldi — unificación de Italia",
      "Otto von Bismarck — unificación de Alemania"
    ]
  },
  {
    "n": 4,
    "titulo": "El imperialismo",
    "puntos": [
      "La revolución científico-tecnológica de finales del siglo XIX impulsó nuevas industrias (acero, electricidad, química) y facilitó la expansión colonial.",
      "Imperialismo: expansión de las potencias europeas sobre África, Asia y Oceanía, buscando materias primas, mercados y prestigio.",
      "Las rivalidades imperialistas entre 1870 y 1914 generaron tensiones que contribuyeron al estallido de la Primera Guerra Mundial."
    ],
    "ejercicios": [
      {
        "p": "¿Qué es el imperialismo?",
        "r": "La expansión de las potencias europeas sobre África, Asia y Oceanía",
        "opciones": [
          "Obtención de materias primas y nuevos mercados",
          "Inglaterra y Francia (o Alemania)",
          "La expansión de las potencias europeas sobre África, Asia y Oceanía",
          "Facilitó el transporte, las comunicaciones y el poderío militar"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona dos motivaciones del imperialismo",
        "r": "Obtención de materias primas y nuevos mercados",
        "opciones": [
          "Obtención de materias primas y nuevos mercados",
          "1870-1914",
          "Materias primas, mercados y control estratégico",
          "Contribuyeron al estallido de la Primera Guerra Mundial"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué avances impulsó la revolución científico-tecnológica de finales del siglo XIX?",
        "r": "Nuevas industrias como el acero, la electricidad y la química",
        "opciones": [
          "La expansión de las potencias europeas sobre África, Asia y Oceanía",
          "Nuevas industrias como el acero, la electricidad y la química",
          "Materias primas, mercados y control estratégico",
          "Inglaterra y Francia (o Alemania)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué continente fue el principal objeto de reparto colonial europeo?",
        "r": "África",
        "opciones": [
          "Materias primas, mercados y control estratégico",
          "África",
          "1870-1914",
          "Obtención de materias primas y nuevos mercados"
        ],
        "correcta": 1
      },
      {
        "p": "¿En qué periodo se ubican las principales rivalidades imperialistas?",
        "r": "1870-1914",
        "opciones": [
          "La expansión de las potencias europeas sobre África, Asia y Oceanía",
          "1870-1914",
          "Materias primas, mercados y control estratégico",
          "India, Indochina o China"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué consecuencia tuvieron las rivalidades imperialistas en 1914?",
        "r": "Contribuyeron al estallido de la Primera Guerra Mundial",
        "opciones": [
          "Contribuyeron al estallido de la Primera Guerra Mundial",
          "África",
          "India, Indochina o China",
          "Materias primas, mercados y control estratégico"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona dos potencias imperialistas europeas",
        "r": "Inglaterra y Francia (o Alemania)",
        "opciones": [
          "La expansión de las potencias europeas sobre África, Asia y Oceanía",
          "Inglaterra y Francia (o Alemania)",
          "Nuevas industrias como el acero, la electricidad y la química",
          "Contribuyeron al estallido de la Primera Guerra Mundial"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué buscaban las potencias al establecer colonias?",
        "r": "Materias primas, mercados y control estratégico",
        "opciones": [
          "India, Indochina o China",
          "África",
          "Contribuyeron al estallido de la Primera Guerra Mundial",
          "Materias primas, mercados y control estratégico"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué papel jugó la tecnología en la expansión imperialista?",
        "r": "Facilitó el transporte, las comunicaciones y el poderío militar",
        "opciones": [
          "Facilitó el transporte, las comunicaciones y el poderío militar",
          "Nuevas industrias como el acero, la electricidad y la química",
          "Materias primas, mercados y control estratégico",
          "Contribuyeron al estallido de la Primera Guerra Mundial"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona una región de Asia que fue objeto de dominio colonial europeo",
        "r": "India, Indochina o China",
        "opciones": [
          "Contribuyeron al estallido de la Primera Guerra Mundial",
          "1870-1914",
          "Materias primas, mercados y control estratégico",
          "India, Indochina o China"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "1870-1914 — rivalidades imperialistas",
      "Reparto colonial de África"
    ]
  },
  {
    "n": 5,
    "titulo": "La Primera Guerra Mundial",
    "puntos": [
      "Antecedentes: rivalidades imperialistas, alianzas militares (Triple Alianza y Triple Entente), nacionalismos y carrera armamentista.",
      "El detonante fue el asesinato del archiduque Francisco Fernando en Sarajevo (1914).",
      "Desarrollo: guerra de trincheras, uso de nuevas tecnologías bélicas, participación de potencias mundiales.",
      "La Revolución Socialista Rusa (1917) sacó a Rusia de la guerra e instauró el primer Estado socialista.",
      "Consecuencias: fin de los imperios centrales, Tratado de Versalles, reconfiguración del mapa europeo."
    ],
    "ejercicios": [
      {
        "p": "¿Qué evento detonó la Primera Guerra Mundial?",
        "r": "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)",
        "opciones": [
          "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)",
          "La guerra de trincheras",
          "El Tratado de Versalles",
          "La Triple Alianza y la Triple Entente"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona las dos alianzas militares que se enfrentaron",
        "r": "La Triple Alianza y la Triple Entente",
        "opciones": [
          "Gases tóxicos, ametralladoras, tanques y aviones",
          "La Triple Alianza y la Triple Entente",
          "El primer Estado socialista",
          "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de guerra caracterizó el desarrollo de la Primera Guerra Mundial?",
        "r": "La guerra de trincheras",
        "opciones": [
          "El Tratado de Versalles",
          "La guerra de trincheras",
          "Convirtieron un conflicto regional en una guerra generalizada",
          "El primer Estado socialista"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué revolución sacó a Rusia de la guerra en 1917?",
        "r": "La Revolución Socialista Rusa (Revolución de Octubre)",
        "opciones": [
          "La guerra de trincheras",
          "La Revolución Socialista Rusa (Revolución de Octubre)",
          "La desaparición de los imperios centrales (austrohúngaro, otomano, alemán, ruso)",
          "El Tratado de Versalles"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de Estado se instauró en Rusia tras esta revolución?",
        "r": "El primer Estado socialista",
        "opciones": [
          "El primer Estado socialista",
          "El nacionalismo, el imperialismo y la carrera armamentista",
          "La Triple Alianza y la Triple Entente",
          "La desaparición de los imperios centrales (austrohúngaro, otomano, alemán, ruso)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tratado puso fin formalmente a la Primera Guerra Mundial?",
        "r": "El Tratado de Versalles",
        "opciones": [
          "La Revolución Socialista Rusa (Revolución de Octubre)",
          "El nacionalismo, el imperialismo y la carrera armamentista",
          "El Tratado de Versalles",
          "Gases tóxicos, ametralladoras, tanques y aviones"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona una consecuencia territorial de la Primera Guerra Mundial",
        "r": "La desaparición de los imperios centrales (austrohúngaro, otomano, alemán, ruso)",
        "opciones": [
          "Convirtieron un conflicto regional en una guerra generalizada",
          "El primer Estado socialista",
          "Gases tóxicos, ametralladoras, tanques y aviones",
          "La desaparición de los imperios centrales (austrohúngaro, otomano, alemán, ruso)"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué nuevas tecnologías bélicas se usaron en la Primera Guerra Mundial?",
        "r": "Gases tóxicos, ametralladoras, tanques y aviones",
        "opciones": [
          "Gases tóxicos, ametralladoras, tanques y aviones",
          "La guerra de trincheras",
          "El Tratado de Versalles",
          "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué factores explican el estallido de la guerra según sus antecedentes?",
        "r": "El nacionalismo, el imperialismo y la carrera armamentista",
        "opciones": [
          "La Triple Alianza y la Triple Entente",
          "El asesinato del archiduque Francisco Fernando en Sarajevo (1914)",
          "Convirtieron un conflicto regional en una guerra generalizada",
          "El nacionalismo, el imperialismo y la carrera armamentista"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué papel jugaron las alianzas militares en la expansión del conflicto?",
        "r": "Convirtieron un conflicto regional en una guerra generalizada",
        "opciones": [
          "El primer Estado socialista",
          "Convirtieron un conflicto regional en una guerra generalizada",
          "La Triple Alianza y la Triple Entente",
          "El Tratado de Versalles"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "1914 — Asesinato del archiduque Francisco Fernando en Sarajevo",
      "1917 — Revolución Socialista Rusa",
      "Tratado de Versalles"
    ]
  },
  {
    "n": 6,
    "titulo": "El mundo entre guerras",
    "puntos": [
      "La Crisis de 1929 (Gran Depresión) inició con el desplome de la bolsa de valores de Nueva York y generó una crisis económica mundial.",
      "La crisis favoreció el surgimiento de regímenes totalitarios: fascismo en Italia (Mussolini) y nazismo en Alemania (Hitler).",
      "Los regímenes totalitarios se caracterizaron por el partido único, el culto al líder, el control estatal y la represión de opositores."
    ],
    "ejercicios": [
      {
        "p": "¿Qué evento marcó el inicio de la Crisis de 1929?",
        "r": "El desplome de la bolsa de valores de Nueva York",
        "opciones": [
          "El nazismo, liderado por Hitler",
          "El desplome de la bolsa de valores de Nueva York",
          "El descontento social y económico facilitó el ascenso de líderes autoritarios",
          "El presidente Franklin D. Roosevelt"
        ],
        "correcta": 1
      },
      {
        "p": "¿Cómo se conoce también a la Crisis de 1929?",
        "r": "La Gran Depresión",
        "opciones": [
          "Desempleo masivo y quiebra de empresas y bancos",
          "La Gran Depresión",
          "El nazismo, liderado por Hitler",
          "El fascismo, liderado por Mussolini"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué consecuencias económicas tuvo la Crisis de 1929?",
        "r": "Desempleo masivo y quiebra de empresas y bancos",
        "opciones": [
          "El descontento social y económico facilitó el ascenso de líderes autoritarios",
          "Partido único, culto al líder, control estatal y represión de opositores",
          "El New Deal",
          "Desempleo masivo y quiebra de empresas y bancos"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué régimen totalitario surgió en Italia?",
        "r": "El fascismo, liderado por Mussolini",
        "opciones": [
          "La Gran Depresión",
          "El New Deal",
          "El descontento social y económico facilitó el ascenso de líderes autoritarios",
          "El fascismo, liderado por Mussolini"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué régimen totalitario surgió en Alemania?",
        "r": "El nazismo, liderado por Hitler",
        "opciones": [
          "La crisis económica y el descontento social tras 1929",
          "El presidente Franklin D. Roosevelt",
          "Desempleo masivo y quiebra de empresas y bancos",
          "El nazismo, liderado por Hitler"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona una característica de los regímenes totalitarios",
        "r": "Partido único, culto al líder, control estatal y represión de opositores",
        "opciones": [
          "Desempleo masivo y quiebra de empresas y bancos",
          "El New Deal",
          "El nazismo, liderado por Hitler",
          "Partido único, culto al líder, control estatal y represión de opositores"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué factor económico favoreció el ascenso de estos regímenes?",
        "r": "La crisis económica y el descontento social tras 1929",
        "opciones": [
          "El fascismo, liderado por Mussolini",
          "El nazismo, liderado por Hitler",
          "El presidente Franklin D. Roosevelt",
          "La crisis económica y el descontento social tras 1929"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué política económica implementó Estados Unidos para enfrentar la crisis?",
        "r": "El New Deal",
        "opciones": [
          "El New Deal",
          "Desempleo masivo y quiebra de empresas y bancos",
          "La Gran Depresión",
          "La crisis económica y el descontento social tras 1929"
        ],
        "correcta": 0
      },
      {
        "p": "¿Quién impulsó el New Deal en Estados Unidos?",
        "r": "El presidente Franklin D. Roosevelt",
        "opciones": [
          "La Gran Depresión",
          "El desplome de la bolsa de valores de Nueva York",
          "El presidente Franklin D. Roosevelt",
          "El nazismo, liderado por Hitler"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué relación hay entre la crisis de 1929 y el surgimiento de los totalitarismos?",
        "r": "El descontento social y económico facilitó el ascenso de líderes autoritarios",
        "opciones": [
          "El descontento social y económico facilitó el ascenso de líderes autoritarios",
          "El presidente Franklin D. Roosevelt",
          "El fascismo, liderado por Mussolini",
          "La crisis económica y el descontento social tras 1929"
        ],
        "correcta": 0
      }
    ],
    "datosClave": [
      "1929 — Crisis de Wall Street (Gran Depresión)",
      "Mussolini — fascismo en Italia",
      "Hitler — nazismo en Alemania",
      "Franklin D. Roosevelt — New Deal"
    ]
  },
  {
    "n": 7,
    "titulo": "La Segunda Guerra Mundial",
    "puntos": [
      "Origen: expansionismo de la Alemania nazi, la Italia fascista y el Japón imperial; fracaso de la política de apaciguamiento.",
      "El detonante fue la invasión alemana a Polonia (1939).",
      "Desarrollo: conflicto a escala mundial entre los Aliados (Reino Unido, URSS, EUA, entre otros) y las potencias del Eje (Alemania, Italia, Japón).",
      "Consecuencias: millones de muertos, el Holocausto, uso de la bomba atómica sobre Hiroshima y Nagasaki, creación de la ONU, inicio de la Guerra Fría."
    ],
    "ejercicios": [
      {
        "p": "¿Qué evento marcó el inicio de la Segunda Guerra Mundial?",
        "r": "La invasión alemana a Polonia (1939)",
        "opciones": [
          "Alemania, Italia y Japón",
          "Estados Unidos",
          "La invasión alemana a Polonia (1939)",
          "La política de apaciguamiento"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona las potencias del Eje",
        "r": "Alemania, Italia y Japón",
        "opciones": [
          "Alemania, Italia y Japón",
          "La política de apaciguamiento",
          "La Organización de las Naciones Unidas (ONU)",
          "Las bombas atómicas (Hiroshima y Nagasaki)"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona algunos países aliados",
        "r": "Reino Unido, la Unión Soviética y Estados Unidos",
        "opciones": [
          "Reino Unido, la Unión Soviética y Estados Unidos",
          "Las bombas atómicas (Hiroshima y Nagasaki)",
          "La Unión Soviética",
          "Alemania, Italia y Japón"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué política previa al conflicto buscó evitar la guerra cediendo ante Hitler?",
        "r": "La política de apaciguamiento",
        "opciones": [
          "La política de apaciguamiento",
          "La Unión Soviética",
          "El Holocausto",
          "La Guerra Fría"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué nombre recibe el genocidio sistemático de judíos y otros grupos por el régimen nazi?",
        "r": "El Holocausto",
        "opciones": [
          "La invasión alemana a Polonia (1939)",
          "Estados Unidos",
          "El Holocausto",
          "La Unión Soviética"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué armas se usaron por primera vez contra Japón en 1945?",
        "r": "Las bombas atómicas (Hiroshima y Nagasaki)",
        "opciones": [
          "La invasión alemana a Polonia (1939)",
          "La Guerra Fría",
          "Las bombas atómicas (Hiroshima y Nagasaki)",
          "El Holocausto"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué organismo internacional se creó al finalizar la guerra?",
        "r": "La Organización de las Naciones Unidas (ONU)",
        "opciones": [
          "La Organización de las Naciones Unidas (ONU)",
          "El Holocausto",
          "Las bombas atómicas (Hiroshima y Nagasaki)",
          "Reino Unido, la Unión Soviética y Estados Unidos"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué conflicto internacional se inició como consecuencia indirecta de la Segunda Guerra Mundial?",
        "r": "La Guerra Fría",
        "opciones": [
          "La Organización de las Naciones Unidas (ONU)",
          "La política de apaciguamiento",
          "Las bombas atómicas (Hiroshima y Nagasaki)",
          "La Guerra Fría"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué país lideró el bloque comunista tras la guerra?",
        "r": "La Unión Soviética",
        "opciones": [
          "La Organización de las Naciones Unidas (ONU)",
          "La Unión Soviética",
          "La Guerra Fría",
          "Las bombas atómicas (Hiroshima y Nagasaki)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué país lideró el bloque capitalista tras la guerra?",
        "r": "Estados Unidos",
        "opciones": [
          "Reino Unido, la Unión Soviética y Estados Unidos",
          "Alemania, Italia y Japón",
          "La Guerra Fría",
          "Estados Unidos"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "1939 — Invasión alemana a Polonia",
      "1945 — Bombas atómicas en Hiroshima y Nagasaki",
      "Creación de la ONU"
    ]
  },
  {
    "n": 8,
    "titulo": "El conflicto entre el capitalismo y el socialismo",
    "puntos": [
      "Tras la Segunda Guerra Mundial, el mundo se dividió en dos bloques de poder: el capitalista (liderado por EUA) y el socialista (liderado por la URSS).",
      "La Guerra Fría: enfrentamiento ideológico, político y militar (sin confrontación directa) entre ambos bloques, con conflictos indirectos como Corea, Vietnam y Cuba.",
      "Luchas de liberación nacional en Asia y África: procesos de descolonización tras la Segunda Guerra Mundial, en los que muchos países obtuvieron su independencia de las potencias europeas."
    ],
    "ejercicios": [
      {
        "p": "¿En qué dos bloques se dividió el mundo tras la Segunda Guerra Mundial?",
        "r": "El bloque capitalista y el bloque socialista",
        "opciones": [
          "El bloque capitalista y el bloque socialista",
          "La carrera espacial y armamentista",
          "La división entre el bloque capitalista y el socialista",
          "La Guerra de Corea, la Guerra de Vietnam o la crisis de los misiles en Cuba"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué país lideraba el bloque capitalista?",
        "r": "Estados Unidos",
        "opciones": [
          "La división entre el bloque capitalista y el socialista",
          "El Movimiento de Países No Alineados",
          "Estados Unidos",
          "El bloque capitalista y el bloque socialista"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué país lideraba el bloque socialista?",
        "r": "La Unión Soviética",
        "opciones": [
          "Un enfrentamiento ideológico y político sin confrontación militar directa entre las superpotencias",
          "India, Argelia o Vietnam",
          "La Unión Soviética",
          "La descolonización"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué caracteriza a la Guerra Fría?",
        "r": "Un enfrentamiento ideológico y político sin confrontación militar directa entre las superpotencias",
        "opciones": [
          "El bloque capitalista y el bloque socialista",
          "El Movimiento de Países No Alineados",
          "La Unión Soviética",
          "Un enfrentamiento ideológico y político sin confrontación militar directa entre las superpotencias"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un conflicto indirecto de la Guerra Fría",
        "r": "La Guerra de Corea, la Guerra de Vietnam o la crisis de los misiles en Cuba",
        "opciones": [
          "La Guerra de Corea, la Guerra de Vietnam o la crisis de los misiles en Cuba",
          "La Unión Soviética",
          "La división entre el bloque capitalista y el socialista",
          "La carrera espacial y armamentista"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué proceso histórico permitió la independencia de países de Asia y África tras 1945?",
        "r": "La descolonización",
        "opciones": [
          "La descolonización",
          "Estados Unidos",
          "La Guerra de Corea, la Guerra de Vietnam o la crisis de los misiles en Cuba",
          "La división entre el bloque capitalista y el socialista"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona un país africano o asiático que logró su independencia en este periodo",
        "r": "India, Argelia o Vietnam",
        "opciones": [
          "La Unión Soviética",
          "La descolonización",
          "India, Argelia o Vietnam",
          "La Guerra de Corea, la Guerra de Vietnam o la crisis de los misiles en Cuba"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué organización agrupó a países no alineados con ninguno de los dos bloques?",
        "r": "El Movimiento de Países No Alineados",
        "opciones": [
          "El Movimiento de Países No Alineados",
          "La carrera espacial y armamentista",
          "La división entre el bloque capitalista y el socialista",
          "Estados Unidos"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué simboliza el Muro de Berlín en el contexto de la Guerra Fría?",
        "r": "La división entre el bloque capitalista y el socialista",
        "opciones": [
          "La descolonización",
          "La división entre el bloque capitalista y el socialista",
          "La Guerra de Corea, la Guerra de Vietnam o la crisis de los misiles en Cuba",
          "El Movimiento de Países No Alineados"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de competencia tecnológica caracterizó también a la Guerra Fría?",
        "r": "La carrera espacial y armamentista",
        "opciones": [
          "El Movimiento de Países No Alineados",
          "La Unión Soviética",
          "La carrera espacial y armamentista",
          "Estados Unidos"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "Bloque capitalista (EUA) vs. bloque socialista (URSS)",
      "Guerra Fría",
      "Muro de Berlín"
    ]
  },
  {
    "n": 9,
    "titulo": "El mundo actual",
    "puntos": [
      "La caída del bloque soviético (1989-1991) marcó el fin de la Guerra Fría; incluye la caída del Muro de Berlín (1989) y la disolución de la URSS (1991).",
      "La globalización económica y política ha intensificado la interconexión entre países mediante el comercio, las finanzas y la comunicación.",
      "El desarrollo científico y tecnológico reciente (internet, biotecnología, inteligencia artificial) ha transformado la economía y la sociedad a nivel global."
    ],
    "ejercicios": [
      {
        "p": "¿Qué evento simboliza el fin de la Guerra Fría en 1989?",
        "r": "La caída del Muro de Berlín",
        "opciones": [
          "Mayor interdependencia económica, pero también desigualdades entre países",
          "El capitalismo de mercado",
          "La caída del Muro de Berlín",
          "El comercio internacional, las finanzas o las comunicaciones"
        ],
        "correcta": 2
      },
      {
        "p": "¿En qué año se disolvió la Unión Soviética?",
        "r": "1991",
        "opciones": [
          "La creciente interconexión económica, política y cultural entre países",
          "La Organización Mundial del Comercio (OMC)",
          "1991",
          "Facilita la comunicación instantánea y el flujo de información a nivel mundial"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué se entiende por globalización?",
        "r": "La creciente interconexión económica, política y cultural entre países",
        "opciones": [
          "1991",
          "La Organización Mundial del Comercio (OMC)",
          "Surgieron nuevos países independientes en Europa del Este",
          "La creciente interconexión económica, política y cultural entre países"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un ámbito donde se manifiesta la globalización",
        "r": "El comercio internacional, las finanzas o las comunicaciones",
        "opciones": [
          "El comercio internacional, las finanzas o las comunicaciones",
          "La creciente interconexión económica, política y cultural entre países",
          "Mayor interdependencia económica, pero también desigualdades entre países",
          "Facilita la comunicación instantánea y el flujo de información a nivel mundial"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué avances tecnológicos han caracterizado al mundo actual?",
        "r": "Internet, la biotecnología y la inteligencia artificial",
        "opciones": [
          "Mayor interdependencia económica, pero también desigualdades entre países",
          "La Organización Mundial del Comercio (OMC)",
          "Internet, la biotecnología y la inteligencia artificial",
          "El comercio internacional, las finanzas o las comunicaciones"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué organismo internacional promueve el comercio entre países?",
        "r": "La Organización Mundial del Comercio (OMC)",
        "opciones": [
          "La Organización Mundial del Comercio (OMC)",
          "La caída del Muro de Berlín",
          "Mayor interdependencia económica, pero también desigualdades entre países",
          "La creciente interconexión económica, política y cultural entre países"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué consecuencias sociales puede tener la globalización?",
        "r": "Mayor interdependencia económica, pero también desigualdades entre países",
        "opciones": [
          "La creciente interconexión económica, política y cultural entre países",
          "Surgieron nuevos países independientes en Europa del Este",
          "La Organización Mundial del Comercio (OMC)",
          "Mayor interdependencia económica, pero también desigualdades entre países"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué cambió en el mapa político mundial tras la caída del bloque soviético?",
        "r": "Surgieron nuevos países independientes en Europa del Este",
        "opciones": [
          "Mayor interdependencia económica, pero también desigualdades entre países",
          "La caída del Muro de Berlín",
          "Facilita la comunicación instantánea y el flujo de información a nivel mundial",
          "Surgieron nuevos países independientes en Europa del Este"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué papel juega Internet en la globalización actual?",
        "r": "Facilita la comunicación instantánea y el flujo de información a nivel mundial",
        "opciones": [
          "Internet, la biotecnología y la inteligencia artificial",
          "Facilita la comunicación instantánea y el flujo de información a nivel mundial",
          "El capitalismo de mercado",
          "1991"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué sistema económico predominó a nivel mundial tras el fin de la Guerra Fría?",
        "r": "El capitalismo de mercado",
        "opciones": [
          "La Organización Mundial del Comercio (OMC)",
          "El capitalismo de mercado",
          "Mayor interdependencia económica, pero también desigualdades entre países",
          "Surgieron nuevos países independientes en Europa del Este"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "1989 — Caída del Muro de Berlín",
      "1991 — Disolución de la URSS",
      "Globalización económica y tecnológica"
    ]
  }
];

  if (typeof window !== "undefined") {
    window.SUBJECT_DATA = window.SUBJECT_DATA || {};
    window.SUBJECT_DATA["historia-universal"] = TEMAS;
  }
  if (typeof window !== "undefined") {
    window.__LAST_LOADED_TEMAS__ = TEMAS;
  }
})();

// Datos: Guía de historia-mexico — Examen de ingreso a licenciatura UNAM
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta)
const TEMAS = [
  {
    "n": 1,
    "titulo": "La Nueva España (siglos XVI a XIX)",
    "puntos": [
      "Mesoamérica: región cultural con civilizaciones como olmecas, mayas, teotihuacanos y mexicas, organizadas en distintas áreas culturales.",
      "La conquista de México-Tenochtitlan (1519-1521) fue liderada por Hernán Cortés; incluyó también una conquista espiritual mediante la evangelización.",
      "Organización política: Virreinato dependiente de la Corona española, gobernado por el virrey; existían también la Real Audiencia y los cabildos.",
      "Estructura económica y social: sistema de castas, la encomienda, economía basada principalmente en la minería y la agricultura.",
      "Reformas Borbónicas (siglo XVIII): buscaron modernizar la administración, aumentar la recaudación fiscal y centralizar el poder real.",
      "Ciencias y artes: desarrollo del arte barroco y después neoclásico; avances científicos impulsados desde la Real y Pontificia Universidad de México."
    ],
    "ejercicios": [
      {
        "p": "¿Quién lideró la conquista militar de México-Tenochtitlan?",
        "r": "Hernán Cortés",
        "opciones": [
          "En el siglo XVIII",
          "1521",
          "La minería (plata)",
          "Hernán Cortés"
        ],
        "correcta": 3
      },
      {
        "p": "¿En qué año cayó Tenochtitlan ante los españoles?",
        "r": "1521",
        "opciones": [
          "La Real y Pontificia Universidad de México",
          "1521",
          "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
          "La minería (plata)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué figura política representaba a la Corona española en la Nueva España?",
        "r": "El virrey",
        "opciones": [
          "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
          "Modernizar la administración, aumentar la recaudación fiscal y centralizar el poder",
          "El virrey",
          "En el siglo XVIII"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué institución se encargaba de la evangelización de los pueblos indígenas?",
        "r": "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
        "opciones": [
          "En el siglo XVIII",
          "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
          "La Real y Pontificia Universidad de México",
          "La minería (plata)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué sistema social clasificaba a la población según su origen étnico?",
        "r": "El sistema de castas",
        "opciones": [
          "1521",
          "El virrey",
          "El sistema de castas",
          "La Real y Pontificia Universidad de México"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué institución obligaba a los indígenas a trabajar para los españoles a cambio de \"protección\" y evangelización?",
        "r": "La encomienda",
        "opciones": [
          "El sistema de castas",
          "La encomienda",
          "Modernizar la administración, aumentar la recaudación fiscal y centralizar el poder",
          "1521"
        ],
        "correcta": 1
      },
      {
        "p": "¿Cuál era la principal actividad económica de la Nueva España?",
        "r": "La minería (plata)",
        "opciones": [
          "El virrey",
          "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
          "La minería (plata)",
          "En el siglo XVIII"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué buscaban las Reformas Borbónicas del siglo XVIII?",
        "r": "Modernizar la administración, aumentar la recaudación fiscal y centralizar el poder",
        "opciones": [
          "Hernán Cortés",
          "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
          "Modernizar la administración, aumentar la recaudación fiscal y centralizar el poder",
          "El virrey"
        ],
        "correcta": 2
      },
      {
        "p": "¿En qué siglo se implementaron las Reformas Borbónicas?",
        "r": "En el siglo XVIII",
        "opciones": [
          "En el siglo XVIII",
          "La encomienda",
          "La Iglesia (órdenes religiosas como franciscanos, dominicos, agustinos)",
          "La minería (plata)"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona una institución educativa importante de la Nueva España",
        "r": "La Real y Pontificia Universidad de México",
        "opciones": [
          "La minería (plata)",
          "La encomienda",
          "La Real y Pontificia Universidad de México",
          "El virrey"
        ],
        "correcta": 2
      }
    ]
  },
  {
    "n": 2,
    "titulo": "El movimiento de Independencia de la Nueva España (1810-1821)",
    "puntos": [
      "Causas: desigualdad social, descontento de los criollos por falta de acceso al poder político, influencia de la Ilustración y crisis de la monarquía española.",
      "Iniciación: Grito de Dolores (16 de septiembre de 1810), liderado por Miguel Hidalgo.",
      "Organización: José María Morelos continuó la lucha, convocó el Congreso de Chilpancingo y proclamó los Sentimientos de la Nación.",
      "Resistencia: tras la muerte de Morelos (1815), la lucha se mantuvo de forma dispersa, destacando Vicente Guerrero.",
      "Consumación: Plan de Iguala (1821) de Agustín de Iturbide, que unió a insurgentes y realistas; entrada del Ejército Trigarante a la Ciudad de México."
    ],
    "ejercicios": [
      {
        "p": "¿Quién inició el movimiento de Independencia con el Grito de Dolores?",
        "r": "Miguel Hidalgo",
        "opciones": [
          "Miguel Hidalgo",
          "El Ejército Trigarante",
          "Los Sentimientos de la Nación",
          "El descontento de los criollos, la crisis de la monarquía española o la influencia de la Ilustración"
        ],
        "correcta": 0
      },
      {
        "p": "¿En qué fecha se dio el Grito de Dolores?",
        "r": "El 16 de septiembre de 1810",
        "opciones": [
          "El 16 de septiembre de 1810",
          "Vicente Guerrero",
          "El Plan de Iguala",
          "Religión, independencia y unión (las Tres Garantías)"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona una causa del movimiento de Independencia",
        "r": "El descontento de los criollos, la crisis de la monarquía española o la influencia de la Ilustración",
        "opciones": [
          "Religión, independencia y unión (las Tres Garantías)",
          "José María Morelos",
          "Agustín de Iturbide",
          "El descontento de los criollos, la crisis de la monarquía española o la influencia de la Ilustración"
        ],
        "correcta": 3
      },
      {
        "p": "¿Quién continuó la lucha insurgente tras la muerte de Hidalgo?",
        "r": "José María Morelos",
        "opciones": [
          "Agustín de Iturbide",
          "El Plan de Iguala",
          "Los Sentimientos de la Nación",
          "José María Morelos"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué documento proclamó Morelos en el Congreso de Chilpancingo?",
        "r": "Los Sentimientos de la Nación",
        "opciones": [
          "Los Sentimientos de la Nación",
          "El Plan de Iguala",
          "José María Morelos",
          "Religión, independencia y unión (las Tres Garantías)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Quién mantuvo la resistencia insurgente tras la muerte de Morelos?",
        "r": "Vicente Guerrero",
        "opciones": [
          "Agustín de Iturbide",
          "El Ejército Trigarante",
          "El 16 de septiembre de 1810",
          "Vicente Guerrero"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué plan consumó la Independencia en 1821?",
        "r": "El Plan de Iguala",
        "opciones": [
          "Miguel Hidalgo",
          "José María Morelos",
          "El Plan de Iguala",
          "El Ejército Trigarante"
        ],
        "correcta": 2
      },
      {
        "p": "¿Quién proclamó el Plan de Iguala?",
        "r": "Agustín de Iturbide",
        "opciones": [
          "Agustín de Iturbide",
          "Los Sentimientos de la Nación",
          "El 16 de septiembre de 1810",
          "El descontento de los criollos, la crisis de la monarquía española o la influencia de la Ilustración"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué ejército entró triunfante a la Ciudad de México en 1821?",
        "r": "El Ejército Trigarante",
        "opciones": [
          "Religión, independencia y unión (las Tres Garantías)",
          "Los Sentimientos de la Nación",
          "El 16 de septiembre de 1810",
          "El Ejército Trigarante"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué tres garantías proponía el Plan de Iguala?",
        "r": "Religión, independencia y unión (las Tres Garantías)",
        "opciones": [
          "Religión, independencia y unión (las Tres Garantías)",
          "José María Morelos",
          "Vicente Guerrero",
          "El Ejército Trigarante"
        ],
        "correcta": 0
      }
    ]
  },
  {
    "n": 3,
    "titulo": "México independiente (1821-1854)",
    "puntos": [
      "Primeros proyectos de organización política: Imperio de Iturbide (1822-1823), seguido por la Primera República Federal (Constitución de 1824).",
      "Conflictos internacionales: intento de reconquista española (1829), independencia de Texas (1836), Guerra de los Pasteles (1838), guerra con Estados Unidos (1846-1848).",
      "Situación económica: crisis constante por las guerras, deuda externa y poca industrialización.",
      "Lucha entre federalismo y centralismo: enfrentamiento entre liberales (federalistas) y conservadores (centralistas) que generó inestabilidad política."
    ],
    "ejercicios": [
      {
        "p": "¿Quién encabezó el primer Imperio Mexicano tras la Independencia?",
        "r": "Agustín de Iturbide",
        "opciones": [
          "La Guerra de los Pasteles",
          "Agustín de Iturbide",
          "La Constitución de 1824",
          "Crisis constante, deuda externa y poca industrialización"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué documento estableció la Primera República Federal en 1824?",
        "r": "La Constitución de 1824",
        "opciones": [
          "Con Estados Unidos",
          "La Constitución de 1824",
          "La Guerra de los Pasteles",
          "Agustín de Iturbide"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué territorio se independizó de México en 1836?",
        "r": "Texas",
        "opciones": [
          "El Tratado de Guadalupe Hidalgo",
          "Texas",
          "Crisis constante, deuda externa y poca industrialización",
          "Inestabilidad política y numerosos cambios de gobierno"
        ],
        "correcta": 1
      },
      {
        "p": "¿Cómo se conoce a la Primera Intervención Francesa de 1838?",
        "r": "La Guerra de los Pasteles",
        "opciones": [
          "Agustín de Iturbide",
          "Inestabilidad política y numerosos cambios de gobierno",
          "La Guerra de los Pasteles",
          "Con Estados Unidos"
        ],
        "correcta": 2
      },
      {
        "p": "¿Con qué país se dio la guerra de 1846 a 1848?",
        "r": "Con Estados Unidos",
        "opciones": [
          "Con Estados Unidos",
          "El Tratado de Guadalupe Hidalgo",
          "La Guerra de los Pasteles",
          "Inestabilidad política y numerosos cambios de gobierno"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tratado puso fin a la guerra con Estados Unidos?",
        "r": "El Tratado de Guadalupe Hidalgo",
        "opciones": [
          "Con Estados Unidos",
          "Inestabilidad política y numerosos cambios de gobierno",
          "El Tratado de Guadalupe Hidalgo",
          "Crisis constante, deuda externa y poca industrialización"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué grupo político defendía el federalismo?",
        "r": "Los liberales",
        "opciones": [
          "Crisis constante, deuda externa y poca industrialización",
          "Los liberales",
          "Agustín de Iturbide",
          "El Tratado de Guadalupe Hidalgo"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué grupo político defendía el centralismo?",
        "r": "Los conservadores",
        "opciones": [
          "Los conservadores",
          "Texas",
          "Inestabilidad política y numerosos cambios de gobierno",
          "La Constitución de 1824"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué caracterizó la situación económica de México en este periodo?",
        "r": "Crisis constante, deuda externa y poca industrialización",
        "opciones": [
          "Inestabilidad política y numerosos cambios de gobierno",
          "Crisis constante, deuda externa y poca industrialización",
          "El Tratado de Guadalupe Hidalgo",
          "Agustín de Iturbide"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué generó la lucha entre federalistas y centralistas en este periodo?",
        "r": "Inestabilidad política y numerosos cambios de gobierno",
        "opciones": [
          "La Guerra de los Pasteles",
          "Inestabilidad política y numerosos cambios de gobierno",
          "El Tratado de Guadalupe Hidalgo",
          "La Constitución de 1824"
        ],
        "correcta": 1
      }
    ]
  },
  {
    "n": 4,
    "titulo": "La Reforma liberal y la resistencia de la República (1854-1876)",
    "puntos": [
      "Revolución de Ayutla (1854): movimiento liberal que derrocó a Antonio López de Santa Anna.",
      "Constitución de 1857: de carácter liberal, estableció garantías individuales y limitó el poder de la Iglesia y el ejército.",
      "Leyes de Reforma (impulsadas por Benito Juárez): separación Iglesia-Estado, nacionalización de bienes eclesiásticos, matrimonio y registro civil.",
      "Intervención francesa (1862-1867): Francia invadió México e impuso el Segundo Imperio con Maximiliano de Habsburgo; fue derrotada por las fuerzas republicanas.",
      "Restauración de la República (1867-1876): gobiernos de Benito Juárez y Sebastián Lerdo de Tejada, consolidación del Estado liberal."
    ],
    "ejercicios": [
      {
        "p": "¿Qué movimiento derrocó a Santa Anna en 1854?",
        "r": "La Revolución de Ayutla",
        "opciones": [
          "Francia",
          "Benito Juárez",
          "La Revolución de Ayutla",
          "Maximiliano de Habsburgo"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué características tenía la Constitución de 1857?",
        "r": "Era liberal, con garantías individuales y limitaba el poder de la Iglesia y el ejército",
        "opciones": [
          "La Restauración de la República, con Benito Juárez",
          "Sebastián Lerdo de Tejada",
          "Era liberal, con garantías individuales y limitaba el poder de la Iglesia y el ejército",
          "Francia"
        ],
        "correcta": 2
      },
      {
        "p": "¿Quién impulsó las Leyes de Reforma?",
        "r": "Benito Juárez",
        "opciones": [
          "Maximiliano de Habsburgo",
          "Benito Juárez",
          "Sebastián Lerdo de Tejada",
          "Era liberal, con garantías individuales y limitaba el poder de la Iglesia y el ejército"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona una de las Leyes de Reforma",
        "r": "La separación Iglesia-Estado, la nacionalización de bienes eclesiásticos o el matrimonio civil",
        "opciones": [
          "La separación Iglesia-Estado, la nacionalización de bienes eclesiásticos o el matrimonio civil",
          "Francia",
          "Benito Juárez",
          "Era liberal, con garantías individuales y limitaba el poder de la Iglesia y el ejército"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué país intervino militarmente en México entre 1862 y 1867?",
        "r": "Francia",
        "opciones": [
          "La separación Iglesia-Estado, la nacionalización de bienes eclesiásticos o el matrimonio civil",
          "Benito Juárez",
          "Maximiliano de Habsburgo",
          "Francia"
        ],
        "correcta": 3
      },
      {
        "p": "¿Quién fue impuesto como emperador durante la intervención francesa?",
        "r": "Maximiliano de Habsburgo",
        "opciones": [
          "Maximiliano de Habsburgo",
          "Con la derrota y ejecución de Maximiliano por las fuerzas republicanas (1867)",
          "Francia",
          "La separación Iglesia-Estado, la nacionalización de bienes eclesiásticos o el matrimonio civil"
        ],
        "correcta": 0
      },
      {
        "p": "¿Cómo terminó el Segundo Imperio?",
        "r": "Con la derrota y ejecución de Maximiliano por las fuerzas republicanas (1867)",
        "opciones": [
          "El Estado liberal mexicano",
          "Con la derrota y ejecución de Maximiliano por las fuerzas republicanas (1867)",
          "La Revolución de Ayutla",
          "Era liberal, con garantías individuales y limitaba el poder de la Iglesia y el ejército"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué periodo siguió a la derrota del Imperio, y quién gobernó primero?",
        "r": "La Restauración de la República, con Benito Juárez",
        "opciones": [
          "Benito Juárez",
          "La Restauración de la República, con Benito Juárez",
          "Era liberal, con garantías individuales y limitaba el poder de la Iglesia y el ejército",
          "La separación Iglesia-Estado, la nacionalización de bienes eclesiásticos o el matrimonio civil"
        ],
        "correcta": 1
      },
      {
        "p": "¿Quién gobernó tras la muerte de Juárez en este periodo?",
        "r": "Sebastián Lerdo de Tejada",
        "opciones": [
          "Con la derrota y ejecución de Maximiliano por las fuerzas republicanas (1867)",
          "Maximiliano de Habsburgo",
          "Sebastián Lerdo de Tejada",
          "El Estado liberal mexicano"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué se consolidó durante la Restauración de la República?",
        "r": "El Estado liberal mexicano",
        "opciones": [
          "La Restauración de la República, con Benito Juárez",
          "Maximiliano de Habsburgo",
          "Sebastián Lerdo de Tejada",
          "El Estado liberal mexicano"
        ],
        "correcta": 3
      }
    ]
  },
  {
    "n": 5,
    "titulo": "El Porfiriato (1876-1911)",
    "puntos": [
      "Porfirio Díaz gobernó México (con una breve interrupción) de 1876 a 1911, en un régimen conocido como estado liberal oligárquico y dictadura.",
      "Aspectos económicos: gran inversión extranjera, desarrollo de ferrocarriles e industria, con fuerte desigualdad social.",
      "Aspectos sociales: concentración de la tierra en pocas manos (haciendas), condiciones precarias para campesinos y obreros.",
      "Aspectos culturales: influencia del positivismo, impulso a las artes y la modernización urbana bajo el lema \"orden y progreso\".",
      "Movimientos de oposición: huelgas obreras (Cananea y Río Blanco) y el movimiento antirreeleccionista liderado por Francisco I. Madero."
    ],
    "ejercicios": [
      {
        "p": "¿Cuántos años gobernó aproximadamente Porfirio Díaz?",
        "r": "Alrededor de 34 años (1876-1911, con una breve interrupción)",
        "opciones": [
          "La concentración de tierras en pocas manos (haciendas)",
          "La oligarquía y los inversionistas extranjeros",
          "Alrededor de 34 años (1876-1911, con una breve interrupción)",
          "La huelga de Cananea o la de Río Blanco"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué lema resume la ideología del régimen porfirista?",
        "r": "\"Orden y progreso\"",
        "opciones": [
          "\"Orden y progreso\"",
          "Francisco I. Madero",
          "Alrededor de 34 años (1876-1911, con una breve interrupción)",
          "El desarrollo de los ferrocarriles y la inversión extranjera"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué corriente filosófica influyó en el régimen porfirista?",
        "r": "El positivismo",
        "opciones": [
          "El positivismo",
          "Poner fin a las reelecciones continuas de Díaz y democratizar el país",
          "La huelga de Cananea o la de Río Blanco",
          "Francisco I. Madero"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona un avance económico del Porfiriato",
        "r": "El desarrollo de los ferrocarriles y la inversión extranjera",
        "opciones": [
          "El desarrollo de los ferrocarriles y la inversión extranjera",
          "Alrededor de 34 años (1876-1911, con una breve interrupción)",
          "Francisco I. Madero",
          "La huelga de Cananea o la de Río Blanco"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué problema social caracterizó al campo durante el Porfiriato?",
        "r": "La concentración de tierras en pocas manos (haciendas)",
        "opciones": [
          "El positivismo",
          "Francisco I. Madero",
          "La huelga de Cananea o la de Río Blanco",
          "La concentración de tierras en pocas manos (haciendas)"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona una huelga obrera importante durante el Porfiriato",
        "r": "La huelga de Cananea o la de Río Blanco",
        "opciones": [
          "La huelga de Cananea o la de Río Blanco",
          "La oligarquía y los inversionistas extranjeros",
          "El positivismo",
          "\"Orden y progreso\""
        ],
        "correcta": 0
      },
      {
        "p": "¿Quién encabezó el movimiento antirreeleccionista contra Díaz?",
        "r": "Francisco I. Madero",
        "opciones": [
          "Poner fin a las reelecciones continuas de Díaz y democratizar el país",
          "Francisco I. Madero",
          "Una dictadura (estado liberal oligárquico)",
          "La oligarquía y los inversionistas extranjeros"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de régimen político se estableció durante el Porfiriato?",
        "r": "Una dictadura (estado liberal oligárquico)",
        "opciones": [
          "El desarrollo de los ferrocarriles y la inversión extranjera",
          "Francisco I. Madero",
          "La oligarquía y los inversionistas extranjeros",
          "Una dictadura (estado liberal oligárquico)"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué grupo social se benefició principalmente del desarrollo económico porfirista?",
        "r": "La oligarquía y los inversionistas extranjeros",
        "opciones": [
          "Alrededor de 34 años (1876-1911, con una breve interrupción)",
          "La oligarquía y los inversionistas extranjeros",
          "El positivismo",
          "Francisco I. Madero"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué buscaba el movimiento antirreeleccionista?",
        "r": "Poner fin a las reelecciones continuas de Díaz y democratizar el país",
        "opciones": [
          "\"Orden y progreso\"",
          "Poner fin a las reelecciones continuas de Díaz y democratizar el país",
          "El desarrollo de los ferrocarriles y la inversión extranjera",
          "El positivismo"
        ],
        "correcta": 1
      }
    ]
  },
  {
    "n": 6,
    "titulo": "La Revolución Mexicana (1910-1920)",
    "puntos": [
      "Antecedentes: descontento social por la desigualdad del Porfiriato, fraude electoral de 1910, Plan de San Luis de Madero.",
      "Maderismo (1910-1913): derrocamiento de Díaz, presidencia de Madero, asesinado durante la Decena Trágica (1913).",
      "Constitucionalismo y lucha de facciones: Venustiano Carranza encabezó la lucha contra Victoriano Huerta; luego se enfrentaron distintas facciones revolucionarias (Villa, Zapata, Carranza, Obregón).",
      "Congreso Constituyente y Constitución de 1917: promulgada en Querétaro, incorporó derechos sociales avanzados (artículos 27 y 123).",
      "Gobierno de Venustiano Carranza (1917-1920): buscó consolidar el nuevo orden constitucional; terminó con su asesinato en 1920."
    ],
    "ejercicios": [
      {
        "p": "¿Qué evento de 1910 fue un antecedente directo de la Revolución Mexicana?",
        "r": "El fraude electoral de 1910",
        "opciones": [
          "Francisco I. Madero",
          "Pancho Villa y Emiliano Zapata",
          "El fraude electoral de 1910",
          "Venustiano Carranza"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué documento convocó a las armas contra Porfirio Díaz?",
        "r": "El Plan de San Luis, de Francisco I. Madero",
        "opciones": [
          "El artículo 27 (propiedad de la tierra y recursos) o el artículo 123 (derechos laborales)",
          "El Plan de San Luis, de Francisco I. Madero",
          "Fue asesinado durante la Decena Trágica (1913)",
          "En Querétaro"
        ],
        "correcta": 1
      },
      {
        "p": "¿Quién asumió la presidencia tras la caída de Díaz en 1911?",
        "r": "Francisco I. Madero",
        "opciones": [
          "Pancho Villa y Emiliano Zapata",
          "Francisco I. Madero",
          "Venustiano Carranza",
          "Fue asesinado durante la Decena Trágica (1913)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Cómo terminó el gobierno de Madero?",
        "r": "Fue asesinado durante la Decena Trágica (1913)",
        "opciones": [
          "El artículo 27 (propiedad de la tierra y recursos) o el artículo 123 (derechos laborales)",
          "Venustiano Carranza",
          "Fue asesinado durante la Decena Trágica (1913)",
          "En Querétaro"
        ],
        "correcta": 2
      },
      {
        "p": "¿Quién encabezó la lucha constitucionalista contra Victoriano Huerta?",
        "r": "Venustiano Carranza",
        "opciones": [
          "Pancho Villa y Emiliano Zapata",
          "Venustiano Carranza",
          "Francisco I. Madero",
          "Fue asesinado durante la Decena Trágica (1913)"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona dos líderes revolucionarios que se enfrentaron en la lucha de facciones",
        "r": "Pancho Villa y Emiliano Zapata",
        "opciones": [
          "Francisco I. Madero",
          "Venustiano Carranza",
          "El artículo 27 (propiedad de la tierra y recursos) o el artículo 123 (derechos laborales)",
          "Pancho Villa y Emiliano Zapata"
        ],
        "correcta": 3
      },
      {
        "p": "¿Dónde se promulgó la Constitución de 1917?",
        "r": "En Querétaro",
        "opciones": [
          "El artículo 27 (propiedad de la tierra y recursos) o el artículo 123 (derechos laborales)",
          "Fue asesinado durante la Decena Trágica (1913)",
          "El Plan de San Luis, de Francisco I. Madero",
          "En Querétaro"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un artículo destacado de la Constitución de 1917 y su tema",
        "r": "El artículo 27 (propiedad de la tierra y recursos) o el artículo 123 (derechos laborales)",
        "opciones": [
          "Francisco I. Madero",
          "El artículo 27 (propiedad de la tierra y recursos) o el artículo 123 (derechos laborales)",
          "Fue asesinado durante la Decena Trágica (1913)",
          "Venustiano Carranza"
        ],
        "correcta": 1
      },
      {
        "p": "¿Quién gobernó México entre 1917 y 1920?",
        "r": "Venustiano Carranza",
        "opciones": [
          "Fue asesinado en 1920",
          "En Querétaro",
          "El Plan de San Luis, de Francisco I. Madero",
          "Venustiano Carranza"
        ],
        "correcta": 3
      },
      {
        "p": "¿Cómo terminó el gobierno de Carranza?",
        "r": "Fue asesinado en 1920",
        "opciones": [
          "En Querétaro",
          "Venustiano Carranza",
          "Fue asesinado en 1920",
          "Francisco I. Madero"
        ],
        "correcta": 2
      }
    ]
  },
  {
    "n": 7,
    "titulo": "La reconstrucción nacional (1920-1940)",
    "puntos": [
      "Del caudillismo al presidencialismo: tras la Revolución, líderes como Obregón y Calles concentraron el poder; en 1929 se fundó el Partido Nacional Revolucionario (PNR), antecesor del PRI.",
      "El Maximato (1928-1934): periodo en que Plutarco Elías Calles mantuvo el control político real, aunque no ocupara la presidencia.",
      "El Plan Sexenal y el Cardenismo: Lázaro Cárdenas (1934-1940) impulsó el reparto agrario, la expropiación petrolera (1938) y el apoyo al movimiento obrero."
    ],
    "ejercicios": [
      {
        "p": "¿Qué partido se fundó en 1929 para institucionalizar el poder político posrevolucionario?",
        "r": "El Partido Nacional Revolucionario (PNR)",
        "opciones": [
          "La expropiación petrolera",
          "Al movimiento obrero y campesino",
          "El Partido Nacional Revolucionario (PNR)",
          "El paso de líderes personalistas a instituciones que concentraban el poder político"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué periodo se conoce como el \"Maximato\"?",
        "r": "El periodo en que Plutarco Elías Calles mantuvo el control político real (1928-1934)",
        "opciones": [
          "Plutarco Elías Calles",
          "El Partido Nacional Revolucionario (PNR)",
          "El periodo en que Plutarco Elías Calles mantuvo el control político real (1928-1934)",
          "Lázaro Cárdenas (como candidato del PNR)"
        ],
        "correcta": 2
      },
      {
        "p": "¿Quién fue el \"Jefe Máximo\" durante el Maximato?",
        "r": "Plutarco Elías Calles",
        "opciones": [
          "Plutarco Elías Calles",
          "El periodo en que Plutarco Elías Calles mantuvo el control político real (1928-1934)",
          "El reparto agrario a los campesinos",
          "Al movimiento obrero y campesino"
        ],
        "correcta": 0
      },
      {
        "p": "¿Quién impulsó el Plan Sexenal?",
        "r": "Lázaro Cárdenas (como candidato del PNR)",
        "opciones": [
          "El Partido Nacional Revolucionario (PNR)",
          "El periodo en que Plutarco Elías Calles mantuvo el control político real (1928-1934)",
          "Lázaro Cárdenas (como candidato del PNR)",
          "De 1934 a 1940"
        ],
        "correcta": 2
      },
      {
        "p": "¿En qué años gobernó Lázaro Cárdenas?",
        "r": "De 1934 a 1940",
        "opciones": [
          "La expropiación petrolera",
          "De 1934 a 1940",
          "El Partido Nacional Revolucionario (PNR)",
          "Al movimiento obrero y campesino"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué reforma agraria destacó durante el cardenismo?",
        "r": "El reparto agrario a los campesinos",
        "opciones": [
          "El reparto agrario a los campesinos",
          "El Partido Nacional Revolucionario (PNR)",
          "Al movimiento obrero y campesino",
          "El Partido Nacional Revolucionario (PNR)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué medida económica importante tomó Cárdenas en 1938?",
        "r": "La expropiación petrolera",
        "opciones": [
          "Al movimiento obrero y campesino",
          "La expropiación petrolera",
          "El reparto agrario a los campesinos",
          "El Partido Nacional Revolucionario (PNR)"
        ],
        "correcta": 1
      },
      {
        "p": "¿A qué sector social apoyó fuertemente el cardenismo?",
        "r": "Al movimiento obrero y campesino",
        "opciones": [
          "Al movimiento obrero y campesino",
          "El paso de líderes personalistas a instituciones que concentraban el poder político",
          "El periodo en que Plutarco Elías Calles mantuvo el control político real (1928-1934)",
          "La expropiación petrolera"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué transición política representa el paso del caudillismo al presidencialismo?",
        "r": "El paso de líderes personalistas a instituciones que concentraban el poder político",
        "opciones": [
          "Plutarco Elías Calles",
          "Al movimiento obrero y campesino",
          "El paso de líderes personalistas a instituciones que concentraban el poder político",
          "El Partido Nacional Revolucionario (PNR)"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué partido fue el antecesor directo del PRI?",
        "r": "El Partido Nacional Revolucionario (PNR)",
        "opciones": [
          "Plutarco Elías Calles",
          "De 1934 a 1940",
          "La expropiación petrolera",
          "El Partido Nacional Revolucionario (PNR)"
        ],
        "correcta": 3
      }
    ]
  },
  {
    "n": 8,
    "titulo": "México contemporáneo (1940-2000)",
    "puntos": [
      "Unidad Nacional (1940-1952): políticas de conciliación entre distintos sectores sociales tras el cardenismo, impulso a la industrialización.",
      "Desarrollo estabilizador (1952-1970): crecimiento económico sostenido con baja inflación, conocido como el \"milagro mexicano\".",
      "Desarrollo compartido (1970-1982): política económica que buscó redistribuir la riqueza mediante mayor gasto público; terminó en una crisis de deuda externa.",
      "Política neoliberal y globalización (1982-2000): apertura comercial, privatización de empresas estatales y firma del TLCAN (1994)."
    ],
    "ejercicios": [
      {
        "p": "¿Qué periodo se conoce como el de \"Unidad Nacional\"?",
        "r": "El periodo de 1940 a 1952",
        "opciones": [
          "El desarrollo estabilizador",
          "El periodo de 1940 a 1952",
          "El \"milagro mexicano\"",
          "En una crisis de deuda externa"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué política económica caracterizó a México entre 1952 y 1970?",
        "r": "El desarrollo estabilizador",
        "opciones": [
          "El Tratado de Libre Comercio de América del Norte (TLCAN)",
          "El modelo neoliberal",
          "El desarrollo estabilizador",
          "El \"milagro mexicano\""
        ],
        "correcta": 2
      },
      {
        "p": "¿Cómo se conoce popularmente al periodo de crecimiento económico de 1952-1970?",
        "r": "El \"milagro mexicano\"",
        "opciones": [
          "El Tratado de Libre Comercio de América del Norte (TLCAN)",
          "El crecimiento económico interno tras la Segunda Guerra Mundial",
          "En una crisis de deuda externa",
          "El \"milagro mexicano\""
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué buscaba la política de \"desarrollo compartido\" (1970-1982)?",
        "r": "Redistribuir la riqueza mediante mayor gasto público",
        "opciones": [
          "Redistribuir la riqueza mediante mayor gasto público",
          "El modelo neoliberal",
          "En una crisis de deuda externa",
          "El Tratado de Libre Comercio de América del Norte (TLCAN)"
        ],
        "correcta": 0
      },
      {
        "p": "¿En qué terminó la política de desarrollo compartido?",
        "r": "En una crisis de deuda externa",
        "opciones": [
          "La apertura comercial y la privatización de empresas estatales",
          "El modelo neoliberal",
          "El periodo de 1940 a 1952",
          "En una crisis de deuda externa"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué modelo económico se adoptó a partir de 1982?",
        "r": "El modelo neoliberal",
        "opciones": [
          "El modelo neoliberal",
          "La globalización",
          "Redistribuir la riqueza mediante mayor gasto público",
          "El Tratado de Libre Comercio de América del Norte (TLCAN)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tratado comercial firmó México en 1994?",
        "r": "El Tratado de Libre Comercio de América del Norte (TLCAN)",
        "opciones": [
          "El periodo de 1940 a 1952",
          "El Tratado de Libre Comercio de América del Norte (TLCAN)",
          "El desarrollo estabilizador",
          "La apertura comercial y la privatización de empresas estatales"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona una característica de la política neoliberal en México",
        "r": "La apertura comercial y la privatización de empresas estatales",
        "opciones": [
          "Redistribuir la riqueza mediante mayor gasto público",
          "El crecimiento económico interno tras la Segunda Guerra Mundial",
          "La apertura comercial y la privatización de empresas estatales",
          "El modelo neoliberal"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué fenómeno económico mundial se intensificó en México durante este periodo?",
        "r": "La globalización",
        "opciones": [
          "La globalización",
          "Redistribuir la riqueza mediante mayor gasto público",
          "El periodo de 1940 a 1952",
          "El \"milagro mexicano\""
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué buscaba impulsar la industrialización durante la Unidad Nacional?",
        "r": "El crecimiento económico interno tras la Segunda Guerra Mundial",
        "opciones": [
          "El Tratado de Libre Comercio de América del Norte (TLCAN)",
          "El modelo neoliberal",
          "El crecimiento económico interno tras la Segunda Guerra Mundial",
          "El desarrollo estabilizador"
        ],
        "correcta": 2
      }
    ]
  }
];

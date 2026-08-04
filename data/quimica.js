// Datos: Guía de quimica — Examen de ingreso a licenciatura UNAM
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta)
const TEMAS = [
  {
    "n": 1,
    "titulo": "Temas básicos",
    "puntos": [
      "Sustancias puras: elemento (un solo tipo de átomo) y compuesto (dos o más elementos combinados químicamente).",
      "Mezclas: homogéneas (una sola fase visible, ej. agua salada) y heterogéneas (fases distinguibles, ej. agua y aceite).",
      "Estructura atómica: protón (carga +), electrón (carga −), neutrón (sin carga); número atómico = número de protones; masa atómica ≈ protones + neutrones.",
      "Configuración electrónica: distribución de electrones en niveles y orbitales (s, p, d, f) siguiendo el orden de llenado (Aufbau).",
      "Tabla periódica: metales (izquierda, ceden electrones), no metales (derecha, ganan electrones), metaloides (frontera entre ambos).",
      "Regla del octeto: los átomos tienden a ganar, perder o compartir electrones hasta completar 8 en su capa de valencia.",
      "Electronegatividad: capacidad de un átomo para atraer electrones; determina si el enlace es iónico (diferencia grande) o covalente (diferencia pequeña).",
      "Mol: cantidad de sustancia que contiene 6.022×10²³ partículas (número de Avogadro); la masa molar se expresa en g/mol."
    ],
    "ejercicios": [
      {
        "p": "Clasifica: agua salada",
        "r": "Mezcla homogénea",
        "opciones": [
          "1s² 2s² 2p⁶ 3s¹",
          "Mezcla homogénea",
          "Z=11, masa ≈ 23",
          "Enlace covalente"
        ],
        "correcta": 1
      },
      {
        "p": "Clasifica: agua con aceite",
        "r": "Mezcla heterogénea",
        "opciones": [
          "Z=11, masa ≈ 23",
          "17",
          "Mezcla heterogénea",
          "1s² 2s² 2p⁶ 3s¹"
        ],
        "correcta": 2
      },
      {
        "p": "Clasifica: oxígeno (O₂)",
        "r": "Sustancia pura, elemento",
        "opciones": [
          "Sustancia pura, compuesto",
          "17",
          "Sustancia pura, elemento",
          "Enlace covalente"
        ],
        "correcta": 2
      },
      {
        "p": "Clasifica: sal de mesa (NaCl)",
        "r": "Sustancia pura, compuesto",
        "opciones": [
          "Sustancia pura, compuesto",
          "Mezcla heterogénea",
          "Enlace covalente",
          "18 g/mol"
        ],
        "correcta": 0
      },
      {
        "p": "Un átomo tiene 11 protones y 12 neutrones. Calcula su número atómico y masa atómica aproximada",
        "r": "Z=11, masa ≈ 23",
        "opciones": [
          "Z=11, masa ≈ 23",
          "Enlace covalente",
          "17",
          "Mezcla homogénea"
        ],
        "correcta": 0
      },
      {
        "p": "¿Cuántos electrones tiene un átomo neutro con número atómico 17?",
        "r": "17",
        "opciones": [
          "18 g/mol",
          "Sustancia pura, compuesto",
          "17",
          "Mezcla heterogénea"
        ],
        "correcta": 2
      },
      {
        "p": "Escribe la configuración electrónica del sodio (Z=11)",
        "r": "1s² 2s² 2p⁶ 3s¹",
        "opciones": [
          "Sustancia pura, compuesto",
          "Enlace iónico",
          "1s² 2s² 2p⁶ 3s¹",
          "Mezcla homogénea"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué tipo de enlace se forma entre un metal y un no metal?",
        "r": "Enlace iónico",
        "opciones": [
          "Enlace iónico",
          "18 g/mol",
          "17",
          "Mezcla homogénea"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de enlace se forma entre dos no metales similares?",
        "r": "Enlace covalente",
        "opciones": [
          "Sustancia pura, compuesto",
          "18 g/mol",
          "Enlace covalente",
          "Mezcla heterogénea"
        ],
        "correcta": 2
      },
      {
        "p": "Calcula la masa molar aproximada del agua (H₂O): H=1, O=16",
        "r": "18 g/mol",
        "opciones": [
          "17",
          "Enlace iónico",
          "18 g/mol",
          "Z=11, masa ≈ 23"
        ],
        "correcta": 2
      }
    ]
  },
  {
    "n": 2,
    "titulo": "Agua",
    "puntos": [
      "La molécula de agua es polar por la diferencia de electronegatividad entre H y O, y forma puentes de hidrógeno entre moléculas.",
      "Alto punto de ebullición (100 °C) y de fusión (0 °C), y alta capacidad calorífica específica, debido a los puentes de hidrógeno.",
      "Es un buen disolvente de sustancias polares e iónicas (“disolvente universal”).",
      "Teorías ácido-base: Arrhenius (ácido libera H⁺, base libera OH⁻); Brønsted-Lowry (ácido dona protón, base lo acepta); Lewis (ácido acepta par de electrones, base lo dona).",
      "pH = −log[H⁺]; escala de 0 a 14: ácido si pH<7, neutro si pH=7, básico si pH>7.",
      "Molaridad: M = moles de soluto / litros de disolución."
    ],
    "ejercicios": [
      {
        "p": "¿Por qué el agua es una molécula polar?",
        "r": "Por la diferencia de electronegatividad entre O e H y su geometría angular",
        "opciones": [
          "Acepta un protón (H⁺)",
          "Industrial y urbana (o agrícola)",
          "0.5 M",
          "Por la diferencia de electronegatividad entre O e H y su geometría angular"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué fuerza intermolecular explica el alto punto de ebullición del agua?",
        "r": "Los puentes de hidrógeno",
        "opciones": [
          "Sustancias polares e iónicas",
          "Los puentes de hidrógeno",
          "Es disolvente universal, regula la temperatura y participa en procesos biológicos",
          "pH = 4"
        ],
        "correcta": 1
      },
      {
        "p": "Según Arrhenius, ¿qué libera un ácido en disolución acuosa?",
        "r": "Iones H⁺",
        "opciones": [
          "Industrial y urbana (o agrícola)",
          "Acepta un protón (H⁺)",
          "Los puentes de hidrógeno",
          "Iones H⁺"
        ],
        "correcta": 3
      },
      {
        "p": "Según Brønsted-Lowry, ¿qué hace una base?",
        "r": "Acepta un protón (H⁺)",
        "opciones": [
          "Sustancias polares e iónicas",
          "Acepta un protón (H⁺)",
          "Es disolvente universal, regula la temperatura y participa en procesos biológicos",
          "Iones H⁺"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula el pH de una disolución con [H⁺]=1×10⁻⁴",
        "r": "pH = 4",
        "opciones": [
          "pH = 4",
          "0.5 M",
          "Industrial y urbana (o agrícola)",
          "Es disolvente universal, regula la temperatura y participa en procesos biológicos"
        ],
        "correcta": 0
      },
      {
        "p": "Clasifica una disolución con pH=9",
        "r": "Básica",
        "opciones": [
          "Básica",
          "Por la diferencia de electronegatividad entre O e H y su geometría angular",
          "Acepta un protón (H⁺)",
          "pH = 4"
        ],
        "correcta": 0
      },
      {
        "p": "Calcula la molaridad de una disolución con 2 moles de soluto en 4 litros",
        "r": "0.5 M",
        "opciones": [
          "0.5 M",
          "Iones H⁺",
          "Sustancias polares e iónicas",
          "pH = 4"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de sustancias disuelve mejor el agua?",
        "r": "Sustancias polares e iónicas",
        "opciones": [
          "Industrial y urbana (o agrícola)",
          "Acepta un protón (H⁺)",
          "Iones H⁺",
          "Sustancias polares e iónicas"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona dos fuentes de contaminación del agua",
        "r": "Industrial y urbana (o agrícola)",
        "opciones": [
          "Iones H⁺",
          "Es disolvente universal, regula la temperatura y participa en procesos biológicos",
          "Acepta un protón (H⁺)",
          "Industrial y urbana (o agrícola)"
        ],
        "correcta": 3
      },
      {
        "p": "¿Por qué el agua es esencial para la vida?",
        "r": "Es disolvente universal, regula la temperatura y participa en procesos biológicos",
        "opciones": [
          "Los puentes de hidrógeno",
          "Es disolvente universal, regula la temperatura y participa en procesos biológicos",
          "Industrial y urbana (o agrícola)",
          "Sustancias polares e iónicas"
        ],
        "correcta": 1
      }
    ]
  },
  {
    "n": 3,
    "titulo": "Aire",
    "puntos": [
      "El aire es una mezcla de gases: ≈78% nitrógeno, ≈21% oxígeno, y otros gases en menor proporción.",
      "Reacciones de combustión: reacción exotérmica del oxígeno con un combustible.",
      "Oxidación-reducción: la oxidación implica pérdida de electrones; la reducción, ganancia; ocurren simultáneamente.",
      "Ciclos biogeoquímicos: el oxígeno, el nitrógeno y el carbono se reciclan entre la atmósfera, los seres vivos y el suelo.",
      "Contaminantes primarios del aire: óxidos de nitrógeno, carbono y azufre, partículas suspendidas e hidrocarburos.",
      "La lluvia ácida se forma cuando óxidos de azufre y nitrógeno reaccionan con el agua atmosférica."
    ],
    "ejercicios": [
      {
        "p": "¿Cuál es el gas más abundante en el aire?",
        "r": "Nitrógeno (≈78%)",
        "opciones": [
          "Nitrógeno (≈78%)",
          "Dióxido de carbono (CO₂)",
          "Óxidos de azufre y de nitrógeno",
          "Los vehículos automotores"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué porcentaje aproximado de oxígeno hay en el aire?",
        "r": "≈21%",
        "opciones": [
          "Dióxido de carbono (CO₂)",
          "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo",
          "≈21%",
          "Óxidos de nitrógeno, de azufre, o partículas suspendidas"
        ],
        "correcta": 2
      },
      {
        "p": "Escribe la reacción general de combustión del carbono",
        "r": "C + O₂ → CO₂",
        "opciones": [
          "Óxidos de azufre y de nitrógeno",
          "C + O₂ → CO₂",
          "Pierde electrones",
          "Oxidación"
        ],
        "correcta": 1
      },
      {
        "p": "En una reacción redox, ¿qué le sucede al agente que se oxida?",
        "r": "Pierde electrones",
        "opciones": [
          "Dióxido de carbono (CO₂)",
          "Pierde electrones",
          "Los vehículos automotores",
          "Óxidos de nitrógeno, de azufre, o partículas suspendidas"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué gases causan principalmente la lluvia ácida?",
        "r": "Óxidos de azufre y de nitrógeno",
        "opciones": [
          "Dióxido de carbono (CO₂)",
          "Nitrógeno (≈78%)",
          "Óxidos de azufre y de nitrógeno",
          "Los vehículos automotores"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona un contaminante primario del aire",
        "r": "Óxidos de nitrógeno, de azufre, o partículas suspendidas",
        "opciones": [
          "Óxidos de nitrógeno, de azufre, o partículas suspendidas",
          "Pierde electrones",
          "Dióxido de carbono (CO₂)",
          "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué es la inversión térmica?",
        "r": "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo",
        "opciones": [
          "Oxidación",
          "Óxidos de nitrógeno, de azufre, o partículas suspendidas",
          "Nitrógeno (≈78%)",
          "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué gas del ciclo del carbono se libera al quemar combustibles fósiles?",
        "r": "Dióxido de carbono (CO₂)",
        "opciones": [
          "Dióxido de carbono (CO₂)",
          "Oxidación",
          "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo",
          "C + O₂ → CO₂"
        ],
        "correcta": 0
      },
      {
        "p": "La formación de óxido de hierro (herrumbre), ¿es una reacción de oxidación o reducción?",
        "r": "Oxidación",
        "opciones": [
          "Óxidos de nitrógeno, de azufre, o partículas suspendidas",
          "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo",
          "Nitrógeno (≈78%)",
          "Oxidación"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona una fuente urbana de contaminación del aire",
        "r": "Los vehículos automotores",
        "opciones": [
          "Los vehículos automotores",
          "Óxidos de nitrógeno, de azufre, o partículas suspendidas",
          "Nitrógeno (≈78%)",
          "C + O₂ → CO₂"
        ],
        "correcta": 0
      }
    ]
  },
  {
    "n": 4,
    "titulo": "Alimentos",
    "puntos": [
      "Carbohidratos: fuente de energía de disponibilidad inmediata; estructura de azúcares simples y complejos.",
      "Lípidos: almacén de energía a largo plazo; estructura de ácidos grasos y glicerol.",
      "Proteínas: formadas por aminoácidos unidos por enlaces peptídicos; incluyen a las enzimas (catalizadores biológicos).",
      "Vitaminas y minerales: no aportan energía directamente, pero son esenciales para el funcionamiento del organismo."
    ],
    "ejercicios": [
      {
        "p": "¿Qué macronutriente es la fuente de energía de disponibilidad inmediata?",
        "r": "Los carbohidratos",
        "opciones": [
          "Los aminoácidos",
          "Ácidos grasos y glicerol",
          "No, pero son esenciales para procesos metabólicos",
          "Los carbohidratos"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué macronutriente sirve como almacén de energía a largo plazo?",
        "r": "Los lípidos",
        "opciones": [
          "Ácidos grasos y glicerol",
          "Los lípidos",
          "Las proteínas",
          "Calcio, hierro o potasio"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de enlace une a los aminoácidos en una proteína?",
        "r": "El enlace peptídico",
        "opciones": [
          "Calcio, hierro o potasio",
          "El enlace peptídico",
          "Los carbohidratos",
          "Los lípidos"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué función cumplen las enzimas?",
        "r": "Actúan como catalizadores biológicos, acelerando reacciones",
        "opciones": [
          "Actúan como catalizadores biológicos, acelerando reacciones",
          "Los carbohidratos",
          "Ácidos grasos y glicerol",
          "Los lípidos"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona dos ejemplos de carbohidratos",
        "r": "Glucosa y almidón (o sacarosa)",
        "opciones": [
          "Glucosa y almidón (o sacarosa)",
          "No, pero son esenciales para procesos metabólicos",
          "Calcio, hierro o potasio",
          "Ácidos grasos y glicerol"
        ],
        "correcta": 0
      },
      {
        "p": "¿De qué están compuestos principalmente los lípidos?",
        "r": "Ácidos grasos y glicerol",
        "opciones": [
          "Los carbohidratos",
          "Actúan como catalizadores biológicos, acelerando reacciones",
          "Los lípidos",
          "Ácidos grasos y glicerol"
        ],
        "correcta": 3
      },
      {
        "p": "¿Las vitaminas aportan energía directamente al organismo?",
        "r": "No, pero son esenciales para procesos metabólicos",
        "opciones": [
          "Las proteínas",
          "Calcio, hierro o potasio",
          "Ácidos grasos y glicerol",
          "No, pero son esenciales para procesos metabólicos"
        ],
        "correcta": 3
      },
      {
        "p": "Menciona un mineral esencial para el organismo",
        "r": "Calcio, hierro o potasio",
        "opciones": [
          "Los carbohidratos",
          "Actúan como catalizadores biológicos, acelerando reacciones",
          "El enlace peptídico",
          "Calcio, hierro o potasio"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué unidad estructural forma las proteínas?",
        "r": "Los aminoácidos",
        "opciones": [
          "Los aminoácidos",
          "Los lípidos",
          "Calcio, hierro o potasio",
          "Ácidos grasos y glicerol"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué macronutriente contiene grupos funcionales de aminoácidos?",
        "r": "Las proteínas",
        "opciones": [
          "Las proteínas",
          "Actúan como catalizadores biológicos, acelerando reacciones",
          "Ácidos grasos y glicerol",
          "Los aminoácidos"
        ],
        "correcta": 0
      }
    ]
  },
  {
    "n": 5,
    "titulo": "La energía y las reacciones químicas",
    "puntos": [
      "Reacción exotérmica: libera energía (calor) al entorno. Reacción endotérmica: absorbe energía del entorno.",
      "Entalpía (ΔH): cambio de calor a presión constante; negativa en exotérmicas, positiva en endotérmicas.",
      "Energía libre de Gibbs (ΔG): determina si una reacción es espontánea (ΔG<0 → espontánea).",
      "Equilibrio químico: estado en que las velocidades de reacción directa e inversa son iguales. Ley de Le Chatelier: un sistema en equilibrio se ajusta para contrarrestar una perturbación.",
      "Velocidad de reacción: depende de la concentración de reactivos, la temperatura, los catalizadores y la superficie de contacto."
    ],
    "ejercicios": [
      {
        "p": "La combustión libera calor, ¿es una reacción exotérmica o endotérmica?",
        "r": "Exotérmica",
        "opciones": [
          "Hacia los productos",
          "El intercambio de calor a presión constante",
          "Exotérmica",
          "Endotérmica"
        ],
        "correcta": 2
      },
      {
        "p": "La fotosíntesis absorbe energía luminosa, ¿es exotérmica o endotérmica?",
        "r": "Endotérmica",
        "opciones": [
          "Aumento de temperatura, uso de catalizador o mayor concentración",
          "Aumenta la velocidad de reacción sin consumirse",
          "Hacia el lado con menor número de moles de gas",
          "Endotérmica"
        ],
        "correcta": 3
      },
      {
        "p": "Si ΔH es negativo, ¿qué tipo de reacción es?",
        "r": "Exotérmica",
        "opciones": [
          "Permanecen constantes, aunque la reacción sigue ocurriendo en ambos sentidos",
          "Hacia los productos",
          "Exotérmica",
          "Hacia el lado con menor número de moles de gas"
        ],
        "correcta": 2
      },
      {
        "p": "Según Le Chatelier, si aumentas la concentración de un reactivo, ¿hacia dónde se desplaza el equilibrio?",
        "r": "Hacia los productos",
        "opciones": [
          "Hacia los productos",
          "Aumenta la velocidad de reacción sin consumirse",
          "Espontánea",
          "Hacia el lado con menor número de moles de gas"
        ],
        "correcta": 0
      },
      {
        "p": "Si ΔG < 0, ¿la reacción es espontánea o no espontánea?",
        "r": "Espontánea",
        "opciones": [
          "Exotérmica",
          "Endotérmica",
          "Espontánea",
          "El intercambio de calor a presión constante"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona un factor que aumenta la velocidad de una reacción",
        "r": "Aumento de temperatura, uso de catalizador o mayor concentración",
        "opciones": [
          "Aumento de temperatura, uso de catalizador o mayor concentración",
          "El intercambio de calor a presión constante",
          "Espontánea",
          "Hacia los productos"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué hace un catalizador en una reacción?",
        "r": "Aumenta la velocidad de reacción sin consumirse",
        "opciones": [
          "Permanecen constantes, aunque la reacción sigue ocurriendo en ambos sentidos",
          "Aumento de temperatura, uso de catalizador o mayor concentración",
          "Exotérmica",
          "Aumenta la velocidad de reacción sin consumirse"
        ],
        "correcta": 3
      },
      {
        "p": "En el equilibrio químico, ¿qué sucede con las concentraciones de reactivos y productos?",
        "r": "Permanecen constantes, aunque la reacción sigue ocurriendo en ambos sentidos",
        "opciones": [
          "Espontánea",
          "Endotérmica",
          "Hacia los productos",
          "Permanecen constantes, aunque la reacción sigue ocurriendo en ambos sentidos"
        ],
        "correcta": 3
      },
      {
        "p": "Si se aumenta la presión en un sistema gaseoso en equilibrio, ¿hacia qué lado se desplaza según Le Chatelier?",
        "r": "Hacia el lado con menor número de moles de gas",
        "opciones": [
          "Permanecen constantes, aunque la reacción sigue ocurriendo en ambos sentidos",
          "Endotérmica",
          "Espontánea",
          "Hacia el lado con menor número de moles de gas"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué mide la entalpía de una reacción?",
        "r": "El intercambio de calor a presión constante",
        "opciones": [
          "Aumenta la velocidad de reacción sin consumirse",
          "El intercambio de calor a presión constante",
          "Exotérmica",
          "Exotérmica"
        ],
        "correcta": 1
      }
    ]
  },
  {
    "n": 6,
    "titulo": "Química del carbono",
    "puntos": [
      "El carbono forma enlaces tetraédricos (4 enlaces covalentes) y puede formar cadenas con enlaces simples, dobles y triples.",
      "Alcanos: solo enlaces simples C–C (terminación -ano). Alquenos: un doble enlace (-eno). Alquinos: un triple enlace (-ino).",
      "Isomería estructural: compuestos con la misma fórmula molecular pero distinta estructura.",
      "Grupos funcionales: alcohol (–OH), éter (–O–), aldehído (–CHO), cetona (–CO–), ácido carboxílico (–COOH), éster (–COO–), aminas (–NH₂), amidas (–CONH₂), halogenuros.",
      "Reacciones orgánicas: sustitución (un átomo reemplaza a otro), adición (se rompe un enlace múltiple para añadir átomos), eliminación (se pierde una molécula pequeña formando un enlace múltiple), condensación e hidrólisis, y polimerización (unión de monómeros)."
    ],
    "ejercicios": [
      {
        "p": "¿Cuántos enlaces covalentes forma típicamente el carbono?",
        "r": "4 (estructura tetraédrica)",
        "opciones": [
          "-eno",
          "Metano (alcano)",
          "4 (estructura tetraédrica)",
          "Condensación (esterificación)"
        ],
        "correcta": 2
      },
      {
        "p": "Nombra el compuesto CH₄",
        "r": "Metano (alcano)",
        "opciones": [
          "–COOH",
          "Condensación (esterificación)",
          "Metano (alcano)",
          "-eno"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué terminación tienen los alquenos?",
        "r": "-eno",
        "opciones": [
          "-eno",
          "Compuestos con la misma fórmula molecular pero diferente estructura",
          "Polimerización",
          "Metano (alcano)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué grupo funcional caracteriza a los alcoholes?",
        "r": "–OH (hidroxilo)",
        "opciones": [
          "–OH (hidroxilo)",
          "Reacción de adición",
          "Triple enlace",
          "Condensación (esterificación)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué grupo funcional caracteriza a los ácidos carboxílicos?",
        "r": "–COOH",
        "opciones": [
          "Metano (alcano)",
          "Triple enlace",
          "–COOH",
          "Compuestos con la misma fórmula molecular pero diferente estructura"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué tipo de reacción ocurre cuando un doble enlace se rompe para añadir átomos?",
        "r": "Reacción de adición",
        "opciones": [
          "Metano (alcano)",
          "–OH (hidroxilo)",
          "Condensación (esterificación)",
          "Reacción de adición"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es la isomería estructural?",
        "r": "Compuestos con la misma fórmula molecular pero diferente estructura",
        "opciones": [
          "Compuestos con la misma fórmula molecular pero diferente estructura",
          "–COOH",
          "Reacción de adición",
          "Metano (alcano)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de reacción forma un polímero a partir de monómeros?",
        "r": "Polimerización",
        "opciones": [
          "4 (estructura tetraédrica)",
          "Polimerización",
          "–COOH",
          "–OH (hidroxilo)"
        ],
        "correcta": 1
      },
      {
        "p": "La formación de un éster a partir de un ácido y un alcohol, con liberación de agua, ¿qué tipo de reacción es?",
        "r": "Condensación (esterificación)",
        "opciones": [
          "4 (estructura tetraédrica)",
          "Reacción de adición",
          "-eno",
          "Condensación (esterificación)"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué tipo de enlace tiene un alquino entre dos carbonos?",
        "r": "Triple enlace",
        "opciones": [
          "–OH (hidroxilo)",
          "4 (estructura tetraédrica)",
          "Triple enlace",
          "Reacción de adición"
        ],
        "correcta": 2
      }
    ]
  }
];

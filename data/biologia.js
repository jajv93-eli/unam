// Datos: Guía de Biología — Examen de ingreso a licenciatura UNAM
const TEMAS = [
{
  n: 1,
  titulo: "Célula",
  puntos: [
    "Teoría celular: todos los seres vivos están formados por células; la célula es la unidad básica de estructura y función; toda célula proviene de una célula preexistente.",
    "Robert Hooke observó por primera vez células (en corcho, 1665); Schleiden y Schwann formularon la teoría celular; Virchow propuso que toda célula proviene de otra célula.",
    "Moléculas orgánicas presentes en la célula: carbohidratos, lípidos, proteínas y ácidos nucleicos.",
    "Organelos principales: núcleo (contiene el ADN), mitocondrias (producción de ATP), ribosomas (síntesis de proteínas), retículo endoplásmico, aparato de Golgi, cloroplastos (fotosíntesis, en células vegetales), lisosomas (digestión celular).",
    "Procariotas: sin núcleo delimitado por membrana (bacterias). Eucariotas: con núcleo definido (animales, plantas, hongos, protistas)."
  ],
  ejercicios: [
    { p: "Menciona los tres postulados básicos de la teoría celular", r: "Todos los seres vivos están hechos de células; la célula es la unidad básica de vida; toda célula proviene de otra célula" },
    { p: "¿Quién observó por primera vez células?", r: "Robert Hooke" },
    { p: "¿Qué organelo contiene el material genético de la célula?", r: "El núcleo" },
    { p: "¿Qué organelo produce la mayor parte del ATP celular?", r: "La mitocondria" },
    { p: "¿Qué organelo realiza la fotosíntesis?", r: "El cloroplasto" },
    { p: "¿Qué estructura sintetiza las proteínas en la célula?", r: "Los ribosomas" },
    { p: "¿Cuál es la diferencia principal entre célula procariota y eucariota?", r: "La procariota no tiene núcleo definido; la eucariota sí" },
    { p: "¿Las bacterias son procariotas o eucariotas?", r: "Procariotas" },
    { p: "Menciona dos estructuras exclusivas de las células vegetales", r: "Cloroplastos y pared celular" },
    { p: "¿Qué función cumple el aparato de Golgi?", r: "Empaqueta y distribuye proteínas y lípidos" }
  ]
},
{
  n: 2,
  titulo: "Metabolismo celular",
  puntos: [
    "Anabolismo: reacciones de síntesis que requieren energía (construyen moléculas). Catabolismo: reacciones de degradación que liberan energía.",
    "El ATP almacena y transporta la energía en la célula; las enzimas catalizan las reacciones metabólicas.",
    "Fotosíntesis: fase luminosa (captura luz, produce ATP y NADPH, libera O₂) y fase oscura o ciclo de Calvin (fija CO₂ para formar glucosa).",
    "Respiración anaerobia: glucólisis (glucosa → 2 piruvato, 2 ATP netos) seguida de fermentación láctica (ácido láctico) o alcohólica (etanol y CO₂), sin usar oxígeno.",
    "Respiración aerobia: glucólisis + Ciclo de Krebs + cadena respiratoria; usa oxígeno y produce entre 36 y 38 ATP por molécula de glucosa, mucho más eficiente que la vía anaerobia."
  ],
  ejercicios: [
    { p: "Define anabolismo", r: "Conjunto de reacciones de síntesis que requieren energía" },
    { p: "Define catabolismo", r: "Conjunto de reacciones de degradación que liberan energía" },
    { p: "¿Qué molécula almacena y transporta la energía en la célula?", r: "El ATP" },
    { p: "¿Qué gas se libera durante la fase luminosa de la fotosíntesis?", r: "Oxígeno" },
    { p: "¿En qué fase de la fotosíntesis se fija el CO₂ para formar glucosa?", r: "En la fase oscura (ciclo de Calvin)" },
    { p: "¿Cuántos ATP netos produce la glucólisis?", r: "2 ATP" },
    { p: "¿Qué producto forma la fermentación láctica?", r: "Ácido láctico" },
    { p: "¿Qué productos forma la fermentación alcohólica?", r: "Etanol y CO₂" },
    { p: "¿Qué gas es indispensable para la respiración aerobia?", r: "Oxígeno" },
    { p: "¿Qué proceso produce más ATP por molécula de glucosa: la respiración aerobia o la anaerobia?", r: "La respiración aerobia (36–38 ATP frente a 2 ATP)" }
  ]
},
{
  n: 3,
  titulo: "Reproducción",
  puntos: [
    "Ciclo celular: interfase (fases G1, S y G2, donde se duplica el ADN) y fase M (división celular).",
    "ADN: doble hélice que almacena la información genética. ARN: intermediario en la síntesis de proteínas (mensajero, ribosomal, de transferencia).",
    "Mitosis: división que produce dos células hijas genéticamente idénticas a la célula madre; ocurre en células somáticas.",
    "Meiosis: división que produce cuatro células con la mitad de cromosomas (gametos), generando variabilidad genética.",
    "Reproducción asexual: un solo progenitor, descendencia genéticamente idéntica (ej. gemación, fisión binaria). Reproducción sexual: dos progenitores, combina material genético y genera variabilidad."
  ],
  ejercicios: [
    { p: "¿En qué fase del ciclo celular se duplica el ADN?", r: "En la fase S de la interfase" },
    { p: "¿Qué tipo de división produce células genéticamente idénticas?", r: "La mitosis" },
    { p: "¿Qué tipo de división produce gametos con la mitad de cromosomas?", r: "La meiosis" },
    { p: "¿Cuántas células hijas produce la mitosis?", r: "2" },
    { p: "¿Cuántas células hijas produce la meiosis?", r: "4" },
    { p: "¿Qué molécula almacena la información genética?", r: "El ADN" },
    { p: "Menciona un tipo de ARN y su función", r: "ARN mensajero: transporta la información del ADN al ribosoma" },
    { p: "¿La reproducción asexual genera variabilidad genética?", r: "No; produce descendencia genéticamente idéntica" },
    { p: "¿Qué ventaja ofrece la reproducción sexual sobre la asexual?", r: "Mayor variabilidad genética en la descendencia" },
    { p: "Menciona un ejemplo de reproducción asexual", r: "Gemación, fisión binaria o esporulación" }
  ]
},
{
  n: 4,
  titulo: "Mecanismos de la herencia",
  puntos: [
    "Mendel: sus experimentos con chícharos establecieron la Ley de la Segregación (los alelos se separan al formar gametos) y la Ley de la Distribución Independiente (genes de distintos caracteres se heredan independientemente).",
    "Teoría cromosómica de la herencia: los genes están ubicados en los cromosomas (Sutton y Boveri).",
    "Herencia ligada al sexo: genes ubicados en los cromosomas sexuales (X o Y), con patrones de herencia distintos entre machos y hembras.",
    "Mutaciones: cambios en la secuencia del ADN, espontáneos o inducidos; son fuente de variabilidad genética.",
    "Ingeniería genética: la tecnología del ADN recombinante permite modificar o combinar material genético de distintos organismos, con aplicaciones en medicina y agricultura."
  ],
  ejercicios: [
    { p: "¿Qué organismo usó Mendel en sus experimentos de herencia?", r: "El chícharo (guisante)" },
    { p: "Enuncia la Ley de la Segregación de Mendel", r: "Los alelos de un gen se separan al formar los gametos" },
    { p: "Enuncia la Ley de la Distribución Independiente", r: "Los genes de diferentes características se heredan de forma independiente entre sí" },
    { p: "¿Qué propone la teoría cromosómica de la herencia?", r: "Que los genes están ubicados en los cromosomas" },
    { p: "¿Qué es la herencia ligada al sexo?", r: "La herencia de genes ubicados en los cromosomas sexuales (X o Y)" },
    { p: "Menciona un ejemplo de enfermedad ligada al sexo", r: "El daltonismo o la hemofilia" },
    { p: "¿Qué es una mutación?", r: "Un cambio en la secuencia del ADN" },
    { p: "¿Las mutaciones son siempre dañinas?", r: "No; pueden ser neutras, dañinas o benéficas" },
    { p: "¿Qué es la tecnología del ADN recombinante?", r: "La técnica que permite combinar o modificar material genético de distintos organismos" },
    { p: "Menciona una aplicación de la ingeniería genética", r: "Producción de insulina humana, cultivos transgénicos o terapia génica" }
  ]
},
{
  n: 5,
  titulo: "Evolución",
  puntos: [
    "Teoría quimiosintética de Oparin-Haldane: la vida se originó a partir de moléculas orgánicas simples combinadas en la “sopa primitiva” bajo las condiciones de la Tierra primitiva.",
    "Teoría endosimbiótica de Margulis: mitocondrias y cloroplastos se originaron de bacterias englobadas por células ancestrales, en una relación simbiótica.",
    "Teoría de Lamarck: herencia de caracteres adquiridos por uso y desuso (hoy refutada). Teoría de Darwin-Wallace: selección natural, los individuos mejor adaptados sobreviven y se reproducen más.",
    "Teoría sintética: combina la selección natural con la genética moderna (mutación, deriva génica, flujo génico).",
    "Evidencias de la evolución: paleontológicas (fósiles), anatómicas (estructuras homólogas), embriológicas, genéticas y biogeográficas.",
    "Consecuencias de la evolución: adaptación y biodiversidad; clasificación de los organismos en cinco reinos (Monera, Protista, Fungi, Plantae, Animalia)."
  ],
  ejercicios: [
    { p: "¿Qué propone la teoría de Oparin-Haldane sobre el origen de la vida?", r: "Que la vida surgió de moléculas orgánicas simples combinadas en condiciones primitivas de la Tierra" },
    { p: "¿Qué propone la teoría endosimbiótica de Margulis?", r: "Que mitocondrias y cloroplastos se originaron de bacterias englobadas por células ancestrales" },
    { p: "¿Qué proponía Lamarck sobre la herencia?", r: "La herencia de caracteres adquiridos por el uso y desuso" },
    { p: "¿Qué mecanismo propuso Darwin como motor de la evolución?", r: "La selección natural" },
    { p: "¿Qué combina la teoría sintética de la evolución?", r: "La selección natural con la genética moderna" },
    { p: "Menciona un tipo de evidencia de la evolución", r: "Evidencia paleontológica, anatómica, embriológica, genética o biogeográfica" },
    { p: "¿Qué es una estructura homóloga?", r: "Una estructura con origen evolutivo común aunque cumpla funciones distintas (ej. extremidades de vertebrados)" },
    { p: "¿Cuáles son las dos consecuencias principales de la evolución?", r: "La adaptación y la biodiversidad" },
    { p: "Menciona los cinco reinos en que se clasifican los seres vivos", r: "Monera, Protista, Fungi, Plantae y Animalia" },
    { p: "¿Qué criterio usó Darwin para explicar por qué sobreviven ciertos individuos?", r: "Que están mejor adaptados a su ambiente (selección natural)" }
  ]
},
{
  n: 6,
  titulo: "Los seres vivos y su ambiente",
  puntos: [
    "Niveles de organización ecológica: población (individuos de la misma especie), comunidad (varias poblaciones), ecosistema (comunidad + ambiente físico).",
    "Componentes bióticos (seres vivos) y abióticos (factores físicos: agua, luz, temperatura, suelo).",
    "Flujo de energía: unidireccional, de productores hacia consumidores y descomponedores, a través de cadenas y tramas alimenticias.",
    "Ciclos biogeoquímicos: circulación de elementos (carbono, nitrógeno, agua) entre los seres vivos y el ambiente.",
    "Relaciones interespecíficas (depredación, competencia, mutualismo, parasitismo) e intraespecíficas (competencia, cooperación).",
    "Deterioro ambiental: contaminación, sobreexplotación de recursos, pérdida de biodiversidad, cambio climático."
  ],
  ejercicios: [
    { p: "Define población", r: "Conjunto de individuos de la misma especie que viven en un área determinada" },
    { p: "Define comunidad", r: "Conjunto de poblaciones de distintas especies que conviven en un mismo lugar" },
    { p: "¿Qué es un ecosistema?", r: "Una comunidad junto con los factores abióticos de su ambiente" },
    { p: "Menciona dos factores abióticos de un ecosistema", r: "Agua, luz, temperatura o suelo" },
    { p: "¿En qué dirección fluye la energía en un ecosistema?", r: "De forma unidireccional, de productores a consumidores y descomponedores" },
    { p: "¿Qué es un ciclo biogeoquímico?", r: "La circulación de un elemento (como carbono o nitrógeno) entre los seres vivos y el ambiente" },
    { p: "Menciona una relación interespecífica", r: "Depredación, competencia, mutualismo o parasitismo" },
    { p: "Menciona una relación intraespecífica", r: "Competencia o cooperación entre individuos de la misma especie" },
    { p: "Menciona una causa del deterioro ambiental", r: "Contaminación, sobreexplotación de recursos o deforestación" },
    { p: "¿Qué papel cumplen los descomponedores en el ecosistema?", r: "Reciclan la materia orgánica, devolviendo nutrientes al ecosistema" }
  ]
}
];

// Datos: Guía de Español — Examen de ingreso a licenciatura UNAM
const TEMAS = [
{
  n: 1,
  titulo: "Funciones de la lengua",
  puntos: [
    "Función referencial (informativa): centra el mensaje en el contexto; transmite información objetiva y verificable.",
    "Función apelativa (conativa): busca influir en el receptor; se manifiesta con imperativos, vocativos y preguntas dirigidas a alguien.",
    "Función poética (estética): centra la atención en la forma del propio mensaje; usa recursos literarios (metáforas, ritmo, imágenes).",
    "Para identificar la función dominante, pregúntate: ¿informa, ordena/pide, o busca belleza en el lenguaje?"
  ],
  ejercicios: [
    { p: "Identifica la función de la lengua: “El agua hierve a 100 °C a nivel del mar.”", r: "Referencial (informa un dato objetivo)" },
    { p: "Identifica la función: “¡Cierra la puerta, por favor!”", r: "Apelativa (busca que el receptor actúe)" },
    { p: "Identifica la función: “El viento susurraba secretos entre las hojas doradas.”", r: "Poética (recurso literario, atención a la forma)" },
    { p: "Identifica la función: “La capital de Francia es París.”", r: "Referencial" },
    { p: "Identifica la función: “¿Podrías pasarme la sal?”", r: "Apelativa" },
    { p: "Identifica la función: “Sus ojos eran dos luceros en la noche de su rostro.”", r: "Poética (metáfora)" },
    { p: "Identifica la función: “El informe indica que las ventas subieron 12%.”", r: "Referencial" },
    { p: "Identifica la función: “¡Vengan todos, la función va a comenzar!”", r: "Apelativa" },
    { p: "Un poema lleno de metáforas e imágenes sensoriales, ¿qué función predomina?", r: "Poética" },
    { p: "Identifica la función: “Niños, guarden silencio.”", r: "Apelativa" }
  ]
},
{
  n: 2,
  titulo: "Formas del discurso",
  puntos: [
    "Descriptivo: presenta características de personas, objetos o lugares; predominan los adjetivos.",
    "Narrativo: relata sucesos organizados en el tiempo; incluye personajes, acciones, tiempo y espacio.",
    "Argumentativo: defiende una postura con razones y evidencias; busca convencer al lector.",
    "Un mismo texto puede combinar formas, pero suele haber una dominante según su propósito."
  ],
  ejercicios: [
    { p: "¿Qué forma discursiva predomina en un párrafo que enumera las características físicas de una casa?", r: "Descriptivo" },
    { p: "¿Qué forma predomina en un texto que cuenta cómo un personaje viajó y lo que le sucedió?", r: "Narrativo" },
    { p: "¿Qué forma predomina en un texto que defiende por qué se debe reciclar, con datos y razones?", r: "Argumentativo" },
    { p: "Clasifica: “El cielo estaba gris, las calles mojadas y silenciosas.”", r: "Descriptivo" },
    { p: "Clasifica: “Entonces corrió hacia la estación, tomó el tren y llegó justo a tiempo.”", r: "Narrativo" },
    { p: "Clasifica: “Es evidente que la educación reduce la pobreza, pues los datos muestran...”", r: "Argumentativo" },
    { p: "Menciona los cuatro elementos básicos de una narración", r: "Personajes, acción, tiempo y espacio" },
    { p: "¿Qué forma discursiva predomina en una reseña que compara ventajas de un producto?", r: "Argumentativo" },
    { p: "¿Qué forma predomina al describir el rostro de un personaje en una novela?", r: "Descriptivo" },
    { p: "¿Qué forma organiza los hechos en el orden en que ocurrieron?", r: "Narrativo" }
  ]
},
{
  n: 3,
  titulo: "Comprensión de lectura",
  puntos: [
    "Estructura del texto: introducción, desarrollo y conclusión (o planteamiento, nudo y desenlace en narrativa).",
    "Idea principal: lo esencial del texto. Ideas secundarias: apoyan o desarrollan la idea principal con ejemplos o datos.",
    "Frases clave: enunciados que resumen o anticipan el contenido del texto.",
    "Inferencia de datos: deducir información no explícita a partir de pistas del propio texto.",
    "Inferencia de rasgos, sentimientos y motivos: deducir el carácter o las emociones de un personaje por sus acciones y diálogos, no solo por lo que se dice literalmente.",
    "Punto de vista del autor: postura o actitud que transmite, explícita o implícitamente, mediante el lenguaje que elige."
  ],
  ejercicios: [
    { p: "“Aunque el clima empeoraba, decidió continuar la caminata.” ¿Qué rasgo de personalidad se infiere?", r: "Determinación / perseverancia" },
    { p: "“Las ventas cayeron 30% tras el cierre de la fábrica.” ¿Cuál es la idea principal?", r: "La caída de ventas se debe al cierre de la fábrica" },
    { p: "Un párrafo inicia con “Sin embargo, los datos sugieren lo contrario.” ¿Qué función cumple esta frase?", r: "Señala un contraste con la idea anterior" },
    { p: "“Cerró la puerta con fuerza y no volvió a hablarle.” ¿Qué sentimiento se infiere?", r: "Enojo o molestia" },
    { p: "En un párrafo sobre el cambio climático que da tres ejemplos concretos, ¿qué papel juegan los ejemplos?", r: "Son ideas secundarias que sostienen la idea principal" },
    { p: "¿Cuál es la diferencia entre un dato explícito y uno inferido?", r: "El explícito está escrito directamente; el inferido se deduce del contexto" },
    { p: "En un artículo de opinión, ¿cómo identificas el punto de vista del autor?", r: "Por el lenguaje valorativo y los argumentos que decide resaltar u omitir" },
    { p: "“A pesar de sus pocos recursos, terminó la carrera con honores.” ¿Qué motivo o actitud se infiere?", r: "Esfuerzo y determinación pese a las dificultades" },
    { p: "¿Cuál es la función típica de la conclusión en un texto expositivo?", r: "Sintetizar o cerrar las ideas presentadas" },
    { p: "En un texto narrativo clásico, ¿qué tres partes conforman su estructura?", r: "Planteamiento, nudo y desenlace" }
  ]
},
{
  n: 4,
  titulo: "Gramática",
  puntos: [
    "Oración: unidad con sentido completo que contiene sujeto y predicado (con verbo conjugado).",
    "Sujeto: de quien se dice algo; puede ser expreso, tácito, simple o compuesto.",
    "Predicado: lo que se dice del sujeto; contiene el verbo como núcleo; puede ser verbal o nominal.",
    "Debe existir concordancia entre sujeto y verbo en número (singular/plural) y persona."
  ],
  ejercicios: [
    { p: "Identifica el sujeto: “Los estudiantes entregaron el proyecto a tiempo.”", r: "Los estudiantes" },
    { p: "Identifica el predicado de la oración anterior", r: "entregaron el proyecto a tiempo" },
    { p: "¿Cuál es el sujeto tácito en “Llegamos tarde a la reunión”?", r: "Nosotros" },
    { p: "Clasifica el sujeto de “María y Juan estudian juntos”", r: "Sujeto compuesto" },
    { p: "Señala el núcleo del predicado en “El perro corre en el parque”", r: "corre" },
    { p: "Corrige la concordancia: “Los niños juega en el patio”", r: "Los niños juegan en el patio" },
    { p: "Identifica sujeto y predicado: “El profesor explicó el tema con claridad”", r: "Sujeto: El profesor · Predicado: explicó el tema con claridad" },
    { p: "¿Qué tipo de oración es “¡Qué hermoso día!”?", r: "Oración exclamativa, unimembre (sin sujeto ni predicado explícitos)" },
    { p: "Identifica el sujeto tácito de “Estudia todas las noches”", r: "Él / Ella (tácito)" },
    { p: "¿“Llueve mucho hoy” es una oración bimembre o unimembre?", r: "Unimembre (verbo impersonal, sin sujeto)" }
  ]
},
{
  n: 5,
  titulo: "Redacción",
  puntos: [
    "Claridad, coherencia y cohesión: las ideas deben estar ordenadas lógicamente y conectadas entre sí.",
    "Conectores: causales (porque, ya que), consecutivos (por lo tanto), adversativos (pero, sin embargo), de adición (además, también).",
    "Evita redundancias, ambigüedades y frases demasiado largas o mal estructuradas.",
    "Un párrafo bien redactado desarrolla una sola idea central con oraciones que la apoyan."
  ],
  ejercicios: [
    { p: "Corrige la redundancia: “Subió arriba y bajó abajo.”", r: "Subió y bajó." },
    { p: "Añade el conector adecuado: “Llovía mucho, ___ decidimos salir de todas formas.”", r: "sin embargo / pero (adversativo)" },
    { p: "Reescribe con mayor claridad: “El coche que se dañó ayer que es de mi tío ya está reparado.”", r: "El coche de mi tío, que se dañó ayer, ya está reparado." },
    { p: "Elige el conector causal correcto: “No fue a la escuela ___ estaba enfermo.”", r: "porque" },
    { p: "Corrige el uso del gerundio: “Se rompió la pierna, siendo llevado al hospital.”", r: "Se rompió la pierna y fue llevado al hospital." },
    { p: "Sustituye la repetición: “El libro es interesante. El libro tiene buenas ilustraciones.”", r: "El libro es interesante y tiene buenas ilustraciones." },
    { p: "Añade un conector de adición: “Estudió toda la noche, ___ repasó con un compañero.”", r: "además / también" },
    { p: "Identifica el tipo de conector en “por lo tanto”", r: "Consecutivo" },
    { p: "Identifica el tipo de conector en “sin embargo”", r: "Adversativo" },
    { p: "¿Qué elemento debe desarrollar cada oración de un párrafo bien redactado?", r: "La idea central del párrafo" }
  ]
},
{
  n: 6,
  titulo: "Vocabulario",
  puntos: [
    "Sinónimos: palabras con significado similar. Antónimos: palabras con significado opuesto.",
    "Homófonos: se pronuncian igual pero se escriben distinto y tienen distinto significado (ej. “vaca” / “baca”).",
    "Analogías: relación lógica entre pares de palabras (parte-todo, función, causa-efecto, sinónimos, etc.); hay que identificar la relación del primer par y aplicarla al segundo."
  ],
  ejercicios: [
    { p: "Da un sinónimo de “feliz”", r: "contento / alegre" },
    { p: "Da un antónimo de “generoso”", r: "tacaño / mezquino" },
    { p: "Completa la analogía: “Médico es a hospital como maestro es a ___”", r: "escuela" },
    { p: "Distingue el significado de “vaca” y “baca”", r: "vaca: animal · baca: portaequipajes del coche" },
    { p: "Completa la analogía: “Pájaro es a nido como abeja es a ___”", r: "colmena" },
    { p: "Da un sinónimo de “efímero”", r: "pasajero / breve" },
    { p: "Da un antónimo de “abundante”", r: "escaso" },
    { p: "Distingue el uso de “hay”, “ahí” y “ay”", r: "hay: verbo haber · ahí: lugar · ¡ay!: interjección" },
    { p: "Completa la analogía: “Libro es a autor como cuadro es a ___”", r: "pintor" },
    { p: "Da un sinónimo de “arduo”", r: "difícil / laborioso" }
  ]
},
{
  n: 7,
  titulo: "Ortografía",
  puntos: [
    "Acentuación: agudas llevan tilde si terminan en n, s o vocal; graves/llanas llevan tilde si NO terminan en n, s o vocal; esdrújulas siempre llevan tilde.",
    "Uso de b/v: b antes de consonante y en la terminación -aba del pretérito imperfecto; v después de n y en palabras como -ívoro.",
    "Uso de g/j: g antes de e, i en muchas palabras (general, gente); j en palabras terminadas en -aje, -jero y sus derivados.",
    "Uso de h: es muda; aparece en palabras que empiezan con hue-, hie-, hum- y muchas de origen griego o latino.",
    "Puntuación: la coma separa elementos, marca pausas breves y aísla conectores como “sin embargo”; el punto cierra ideas completas."
  ],
  ejercicios: [
    { p: "Completa correctamente: “Ha__er” (realizar)", r: "hacer" },
    { p: "¿“Resuelto” lleva tilde? Explica por qué", r: "No; es grave/llana y termina en vocal" },
    { p: "Clasifica “árbol” por su acentuación y explica la tilde", r: "Llana/grave; lleva tilde porque termina en consonante distinta de n o s" },
    { p: "Clasifica “camión” y explica la tilde", r: "Aguda; lleva tilde porque termina en n" },
    { p: "Clasifica “público” y explica la tilde", r: "Esdrújula; las esdrújulas siempre llevan tilde" },
    { p: "Completa con h si corresponde: “___uevo”", r: "huevo" },
    { p: "Completa con v o b: “El coche era de color ___erde”", r: "verde" },
    { p: "Completa con g o j: “___irafa”", r: "jirafa" },
    { p: "Completa con g o j: “prote__er”", r: "proteger" },
    { p: "Coloca la coma en el lugar correcto: “Sin embargo no llegó a tiempo”", r: "Sin embargo, no llegó a tiempo." }
  ]
}
];

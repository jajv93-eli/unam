// Datos: Guía de geografia — Examen de ingreso a licenciatura UNAM
// Cada tema incluye "datosClave" (fechas, nombres, fórmulas para repaso rápido).
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta).
(function () {
const TEMAS = [
  {
    "n": 1,
    "titulo": "La Tierra, base del desarrollo del hombre",
    "puntos": [
      "La Geografía es una ciencia natural y social que estudia la relación entre el ser humano y su entorno natural.",
      "Coordenadas geográficas: la latitud mide la distancia angular al norte o sur del Ecuador (0° a 90°); la longitud mide la distancia angular al este u oeste del meridiano de Greenwich (0° a 180°).",
      "Husos horarios: la Tierra se divide en 24 husos horarios de 15° cada uno; el meridiano 180° funciona como línea internacional de cambio de fecha.",
      "Tectónica global: las placas tectónicas generan zonas de riesgo sísmico y volcánico (como el Cinturón de Fuego del Pacífico); el relieve (llanuras, mesetas, montañas) influye en la distribución de la población y las actividades económicas.",
      "El agua como recurso fundamental: el ciclo hidrológico conecta la atmósfera, la hidrósfera y la litósfera; ríos, lagos y aguas subterráneas condicionan la distribución de la población; el mar aporta recursos pesqueros, minerales y energéticos (mareas, corrientes)."
    ],
    "ejercicios": [
      {
        "p": "¿Qué tipo de ciencia es la Geografía?",
        "r": "Una ciencia natural y social",
        "opciones": [
          "Una ciencia natural y social",
          "Las llanuras, por su fertilidad y accesibilidad",
          "El ciclo hidrológico",
          "Disminuye hasta llegar a 0°"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué mide la latitud de un punto en la Tierra?",
        "r": "La distancia angular al norte o sur del Ecuador",
        "opciones": [
          "24 husos horarios de 15° cada uno",
          "La distancia angular al norte o sur del Ecuador",
          "Disminuye hasta llegar a 0°",
          "La distancia angular al este u oeste del meridiano de Greenwich"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué mide la longitud de un punto en la Tierra?",
        "r": "La distancia angular al este u oeste del meridiano de Greenwich",
        "opciones": [
          "La distancia angular al este u oeste del meridiano de Greenwich",
          "24 husos horarios de 15° cada uno",
          "El meridiano 180°",
          "La distancia angular al norte o sur del Ecuador"
        ],
        "correcta": 0
      },
      {
        "p": "¿Cuántos husos horarios tiene la Tierra y de cuántos grados es cada uno?",
        "r": "24 husos horarios de 15° cada uno",
        "opciones": [
          "24 husos horarios de 15° cada uno",
          "El Cinturón de Fuego del Pacífico",
          "La distancia angular al norte o sur del Ecuador",
          "Una ciencia natural y social"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué meridiano se usa como línea internacional de cambio de fecha?",
        "r": "El meridiano 180°",
        "opciones": [
          "La distancia angular al este u oeste del meridiano de Greenwich",
          "Recursos pesqueros, minerales o energéticos (mareas, corrientes)",
          "El ciclo hidrológico",
          "El meridiano 180°"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué zona del mundo concentra gran actividad sísmica y volcánica alrededor del Pacífico?",
        "r": "El Cinturón de Fuego del Pacífico",
        "opciones": [
          "Las llanuras, por su fertilidad y accesibilidad",
          "El Cinturón de Fuego del Pacífico",
          "El meridiano 180°",
          "El ciclo hidrológico"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué proceso conecta la atmósfera, la hidrósfera y la litósfera mediante la circulación del agua?",
        "r": "El ciclo hidrológico",
        "opciones": [
          "24 husos horarios de 15° cada uno",
          "La distancia angular al norte o sur del Ecuador",
          "El ciclo hidrológico",
          "Disminuye hasta llegar a 0°"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué formas de relieve suelen concentrar mayor densidad de población?",
        "r": "Las llanuras, por su fertilidad y accesibilidad",
        "opciones": [
          "Disminuye hasta llegar a 0°",
          "Las llanuras, por su fertilidad y accesibilidad",
          "24 husos horarios de 15° cada uno",
          "La distancia angular al norte o sur del Ecuador"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona un recurso que aporta el mar a las actividades económicas",
        "r": "Recursos pesqueros, minerales o energéticos (mareas, corrientes)",
        "opciones": [
          "La distancia angular al norte o sur del Ecuador",
          "Recursos pesqueros, minerales o energéticos (mareas, corrientes)",
          "El ciclo hidrológico",
          "La distancia angular al este u oeste del meridiano de Greenwich"
        ],
        "correcta": 1
      },
      {
        "p": "Si un punto está a 40° de latitud norte y te desplazas hacia el Ecuador, ¿qué sucede con el valor de la latitud?",
        "r": "Disminuye hasta llegar a 0°",
        "opciones": [
          "Las llanuras, por su fertilidad y accesibilidad",
          "El Cinturón de Fuego del Pacífico",
          "Disminuye hasta llegar a 0°",
          "El ciclo hidrológico"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "Latitud: 0° a 90° (N/S del Ecuador)",
      "Longitud: 0° a 180° (E/O de Greenwich)",
      "24 husos horarios de 15° cada uno",
      "Meridiano 180° — línea de cambio de fecha",
      "Cinturón de Fuego del Pacífico"
    ]
  },
  {
    "n": 2,
    "titulo": "Geografía humana: el paisaje cultural (espacio geográfico)",
    "puntos": [
      "Las regiones naturales concentran recursos renovables y no renovables cuya distribución influye en las actividades económicas; son también vulnerables a fenómenos meteorológicos como los ciclones.",
      "El deterioro ambiental incluye el cambio climático global (efecto invernadero), el adelgazamiento de la capa de ozono, la contaminación y sobreexplotación del agua, y accidentes como la marea negra.",
      "La población mundial se concentra de forma desigual; el crecimiento acelerado y los movimientos migratorios (internacionales sur-norte, nacionales campo-ciudad) son fenómenos característicos.",
      "La economía mundial presenta contrastes entre países desarrollados y subdesarrollados, medidos con indicadores socioeconómicos (natalidad, alfabetismo, ingreso per cápita, esperanza de vida); la globalización económica involucra a empresas trasnacionales y organismos como el FMI.",
      "La organización política mundial ha cambiado con la desintegración y unificación de Estados (por ejemplo, los nuevos países de Europa del Este) y persisten zonas de tensión política.",
      "México cuenta con áreas de producción agropecuaria y pesquera, importantes yacimientos minerales y energéticos, zonas industriales concentradas, y un comercio exterior activo apoyado en sus vías de comunicación y transporte."
    ],
    "ejercicios": [
      {
        "p": "¿Qué son las regiones naturales?",
        "r": "Áreas que comparten características físicas y biológicas homogéneas, con recursos renovables y no renovables",
        "opciones": [
          "Producen y comercializan bienes y servicios a escala mundial, integrando economías",
          "Áreas que comparten características físicas y biológicas homogéneas, con recursos renovables y no renovables",
          "Los ciclones",
          "Migración interna o nacional"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué fenómeno meteorológico representa un riesgo importante para las regiones costeras?",
        "r": "Los ciclones",
        "opciones": [
          "Migración internacional sur-norte",
          "Sus vías de comunicación y transporte",
          "Los ciclones",
          "Producen y comercializan bienes y servicios a escala mundial, integrando economías"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué es el efecto invernadero?",
        "r": "La retención de calor en la atmósfera que provoca el cambio climático global",
        "opciones": [
          "Áreas que comparten características físicas y biológicas homogéneas, con recursos renovables y no renovables",
          "Producen y comercializan bienes y servicios a escala mundial, integrando economías",
          "La retención de calor en la atmósfera que provoca el cambio climático global",
          "Migración internacional sur-norte"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona un problema ambiental relacionado con la explotación y transporte de petróleo",
        "r": "La marea negra",
        "opciones": [
          "La marea negra",
          "Áreas que comparten características físicas y biológicas homogéneas, con recursos renovables y no renovables",
          "La retención de calor en la atmósfera que provoca el cambio climático global",
          "Migración interna o nacional"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de migración ocurre del campo a la ciudad dentro de un mismo país?",
        "r": "Migración interna o nacional",
        "opciones": [
          "La marea negra",
          "Migración interna o nacional",
          "Natalidad, alfabetismo, ingreso per cápita o esperanza de vida",
          "Áreas que comparten características físicas y biológicas homogéneas, con recursos renovables y no renovables"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué tipo de migración ocurre de países pobres hacia países ricos?",
        "r": "Migración internacional sur-norte",
        "opciones": [
          "Migración internacional sur-norte",
          "Los ciclones",
          "Migración interna o nacional",
          "Producen y comercializan bienes y servicios a escala mundial, integrando economías"
        ],
        "correcta": 0
      },
      {
        "p": "Menciona dos indicadores socioeconómicos usados para comparar países desarrollados y subdesarrollados",
        "r": "Natalidad, alfabetismo, ingreso per cápita o esperanza de vida",
        "opciones": [
          "Migración interna o nacional",
          "Natalidad, alfabetismo, ingreso per cápita o esperanza de vida",
          "Los ciclones",
          "Migración internacional sur-norte"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué papel juegan las empresas trasnacionales en la globalización económica?",
        "r": "Producen y comercializan bienes y servicios a escala mundial, integrando economías",
        "opciones": [
          "Natalidad, alfabetismo, ingreso per cápita o esperanza de vida",
          "La pesca",
          "Producen y comercializan bienes y servicios a escala mundial, integrando economías",
          "Migración internacional sur-norte"
        ],
        "correcta": 2
      },
      {
        "p": "Menciona una actividad económica importante de México relacionada con sus costas",
        "r": "La pesca",
        "opciones": [
          "Migración internacional sur-norte",
          "La retención de calor en la atmósfera que provoca el cambio climático global",
          "Sus vías de comunicación y transporte",
          "La pesca"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué factor es clave para el comercio exterior de un país?",
        "r": "Sus vías de comunicación y transporte",
        "opciones": [
          "La marea negra",
          "Producen y comercializan bienes y servicios a escala mundial, integrando economías",
          "Sus vías de comunicación y transporte",
          "Natalidad, alfabetismo, ingreso per cápita o esperanza de vida"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "Efecto invernadero",
      "Migración sur-norte (internacional) y campo-ciudad (nacional)",
      "FMI y empresas trasnacionales",
      "1994 — TLCAN"
    ]
  }
];

  if (typeof window !== "undefined") {
    window.SUBJECT_DATA = window.SUBJECT_DATA || {};
    window.SUBJECT_DATA["geografia"] = TEMAS;
  }
  if (typeof window !== "undefined") {
    window.__LAST_LOADED_TEMAS__ = TEMAS;
  }
})();

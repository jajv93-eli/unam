// Datos: Guía de fisica — Examen de ingreso a licenciatura UNAM
// Cada tema incluye "datosClave" (fechas, nombres, fórmulas para repaso rápido).
// Cada ejercicio incluye "opciones" (4 respuestas) y "correcta" (índice de la respuesta correcta).
(function () {
const TEMAS = [
  {
    "n": 1,
    "titulo": "Cinemática",
    "puntos": [
      "Movimiento rectilíneo uniforme (MRU): velocidad constante; v=d/t. La gráfica posición-tiempo es una recta.",
      "Movimiento uniformemente acelerado (MRUA): aceleración constante; v=v₀+at; d=v₀t+½at²; v²=v₀²+2ad.",
      "Distancia (escalar) es distinta de desplazamiento (vector); rapidez (escalar) es distinta de velocidad (vector).",
      "Caída libre: caso particular de MRUA con aceleración a=g≈9.8 m/s² dirigida hacia abajo."
    ],
    "ejercicios": [
      {
        "p": "Un auto viaja a 20 m/s durante 5 s. ¿Qué distancia recorre?",
        "r": "100 m",
        "opciones": [
          "44.1 m",
          "17 m/s",
          "100 m",
          "5 s"
        ],
        "correcta": 2
      },
      {
        "p": "Un cuerpo acelera de 0 a 20 m/s en 4 s. Calcula su aceleración",
        "r": "5 m/s²",
        "opciones": [
          "17 m/s",
          "36 m",
          "5 m/s²",
          "−4 m/s²"
        ],
        "correcta": 2
      },
      {
        "p": "Con a=2 m/s² y v₀=0, calcula la distancia recorrida en 6 s",
        "r": "36 m",
        "opciones": [
          "44.1 m",
          "29.4 m/s",
          "17 m/s",
          "36 m"
        ],
        "correcta": 3
      },
      {
        "p": "Un objeto cae libremente desde el reposo. ¿Qué velocidad tiene tras 3 s? (g=9.8)",
        "r": "29.4 m/s",
        "opciones": [
          "29.4 m/s",
          "25 m",
          "Una recta horizontal (velocidad constante)",
          "5 m/s²"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué distancia cae el objeto del ejercicio anterior en esos 3 s?",
        "r": "44.1 m",
        "opciones": [
          "25 m",
          "44.1 m",
          "Una recta horizontal (velocidad constante)",
          "5 s"
        ],
        "correcta": 1
      },
      {
        "p": "Un tren reduce su velocidad de 30 m/s a 10 m/s en 5 s. Calcula la aceleración",
        "r": "−4 m/s²",
        "opciones": [
          "25 m",
          "−4 m/s²",
          "5 m/s²",
          "5 s"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula la velocidad final de un objeto con v₀=5 m/s, a=3 m/s², t=4 s",
        "r": "17 m/s",
        "opciones": [
          "44.1 m",
          "29.4 m/s",
          "17 m/s",
          "100 m"
        ],
        "correcta": 2
      },
      {
        "p": "En MRU, ¿cómo es la gráfica velocidad-tiempo?",
        "r": "Una recta horizontal (velocidad constante)",
        "opciones": [
          "25 m",
          "Una recta horizontal (velocidad constante)",
          "5 s",
          "29.4 m/s"
        ],
        "correcta": 1
      },
      {
        "p": "Un cuerpo con v₀=10 m/s y a=−2 m/s², ¿en qué tiempo se detiene?",
        "r": "5 s",
        "opciones": [
          "5 s",
          "Una recta horizontal (velocidad constante)",
          "29.4 m/s",
          "−4 m/s²"
        ],
        "correcta": 0
      },
      {
        "p": "Calcula la distancia recorrida por ese cuerpo antes de detenerse",
        "r": "25 m",
        "opciones": [
          "5 m/s²",
          "100 m",
          "25 m",
          "29.4 m/s"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "v = d/t",
      "v = v₀ + at",
      "d = v₀t + ½at²",
      "v² = v₀² + 2ad",
      "g ≈ 9.8 m/s²"
    ]
  },
  {
    "n": 2,
    "titulo": "Fuerzas, leyes de Newton y Ley de la Gravitación Universal",
    "puntos": [
      "1ª Ley (inercia): un cuerpo permanece en reposo o en MRU si la fuerza neta sobre él es cero.",
      "2ª Ley: F=ma (la fuerza neta es igual a la masa por la aceleración).",
      "3ª Ley: a toda acción corresponde una reacción de igual magnitud y sentido contrario.",
      "Peso = mg (fuerza gravitacional sobre una masa); la masa es cantidad de materia y no cambia con la ubicación.",
      "Ley de Hooke: F=kx (la fuerza de un resorte es proporcional a su deformación).",
      "Ley de Gravitación Universal: F=G·m₁m₂/r² (G=6.674×10⁻¹¹ N·m²/kg²)."
    ],
    "ejercicios": [
      {
        "p": "Calcula la fuerza necesaria para acelerar una masa de 10 kg a 3 m/s²",
        "r": "30 N",
        "opciones": [
          "Se reduce a la mitad",
          "30 N",
          "49 N",
          "10 N"
        ],
        "correcta": 1
      },
      {
        "p": "Un objeto de 5 kg cuelga en reposo. ¿Cuál es su peso? (g=9.8)",
        "r": "49 N",
        "opciones": [
          "49 N",
          "30 N",
          "Se reduce a la mitad",
          "78.4 N"
        ],
        "correcta": 0
      },
      {
        "p": "Si aplicas 20 N a un cuerpo de 4 kg, ¿cuál es su aceleración?",
        "r": "5 m/s²",
        "opciones": [
          "5 m/s²",
          "826 N",
          "Se reduce a la mitad",
          "Sigue en MRU (1ª ley de Newton)"
        ],
        "correcta": 0
      },
      {
        "p": "Un resorte con k=200 N/m se estira 0.05 m. Calcula la fuerza aplicada",
        "r": "10 N",
        "opciones": [
          "Se reduce a la mitad",
          "≈ 8.34×10⁻¹⁰ N",
          "49 N",
          "10 N"
        ],
        "correcta": 3
      },
      {
        "p": "Explica, con la 3ª ley, por qué avanzamos al caminar",
        "r": "Empujamos el suelo hacia atrás y el suelo nos empuja hacia adelante (reacción)",
        "opciones": [
          "826 N",
          "≈ 8.34×10⁻¹⁰ N",
          "Sigue en MRU (1ª ley de Newton)",
          "Empujamos el suelo hacia atrás y el suelo nos empuja hacia adelante (reacción)"
        ],
        "correcta": 3
      },
      {
        "p": "Dos masas de 5 kg y 10 kg separadas 2 m. Calcula la fuerza gravitacional entre ellas",
        "r": "≈ 8.34×10⁻¹⁰ N",
        "opciones": [
          "Se reduce a la mitad",
          "Empujamos el suelo hacia atrás y el suelo nos empuja hacia adelante (reacción)",
          "826 N",
          "≈ 8.34×10⁻¹⁰ N"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué le ocurre a un cuerpo en movimiento si la fuerza neta sobre él es cero?",
        "r": "Sigue en MRU (1ª ley de Newton)",
        "opciones": [
          "5 m/s²",
          "Sigue en MRU (1ª ley de Newton)",
          "Se reduce a la mitad",
          "49 N"
        ],
        "correcta": 1
      },
      {
        "p": "Un cuerpo de 8 kg, ¿qué peso tiene con g=9.8 m/s²?",
        "r": "78.4 N",
        "opciones": [
          "≈ 8.34×10⁻¹⁰ N",
          "Sigue en MRU (1ª ley de Newton)",
          "78.4 N",
          "Empujamos el suelo hacia atrás y el suelo nos empuja hacia adelante (reacción)"
        ],
        "correcta": 2
      },
      {
        "p": "Si duplicas la masa manteniendo la fuerza constante, ¿qué pasa con la aceleración?",
        "r": "Se reduce a la mitad",
        "opciones": [
          "826 N",
          "Se reduce a la mitad",
          "5 m/s²",
          "30 N"
        ],
        "correcta": 1
      },
      {
        "p": "Un elevador acelera hacia arriba a 2 m/s². Un pasajero de 70 kg, ¿qué fuerza normal siente?",
        "r": "826 N",
        "opciones": [
          "30 N",
          "5 m/s²",
          "10 N",
          "826 N"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "F = ma",
      "Peso = mg",
      "F = kx (Ley de Hooke)",
      "F = G·m₁m₂/r²",
      "G = 6.674×10⁻¹¹ N·m²/kg²"
    ]
  },
  {
    "n": 3,
    "titulo": "Trabajo y leyes de la conservación",
    "puntos": [
      "Trabajo: W=F·d·cosθ (componente de la fuerza en la dirección del desplazamiento).",
      "Potencia: P=W/t (trabajo realizado por unidad de tiempo).",
      "Energía cinética: Ec=½mv². Energía potencial gravitacional: Ep=mgh.",
      "Conservación de la energía mecánica: Em=Ec+Ep permanece constante si no hay fricción.",
      "Conservación del ímpetu (momento): p=mv; en un sistema aislado, el momento total se conserva.",
      "Colisiones elásticas: se conserva la energía cinética. Colisiones inelásticas: no se conserva la Ec, pero sí el momento."
    ],
    "ejercicios": [
      {
        "p": "Calcula el trabajo al aplicar 50 N sobre 4 m en la misma dirección",
        "r": "200 J",
        "opciones": [
          "La colisión elástica",
          "200 J",
          "−29.4 J",
          "2 m/s"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula la potencia si ese trabajo se realiza en 5 s",
        "r": "40 W",
        "opciones": [
          "40 W",
          "12 kg·m/s",
          "≈ 19.8 m/s",
          "36 J"
        ],
        "correcta": 0
      },
      {
        "p": "Calcula la energía cinética de un cuerpo de 2 kg a 6 m/s",
        "r": "36 J",
        "opciones": [
          "≈ 19.8 m/s",
          "36 J",
          "200 J",
          "La colisión elástica"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula la energía potencial de un cuerpo de 3 kg a 10 m de altura (g=9.8)",
        "r": "294 J",
        "opciones": [
          "≈ 19.8 m/s",
          "36 J",
          "294 J",
          "En energía cinética"
        ],
        "correcta": 2
      },
      {
        "p": "Un cuerpo cae desde 20 m sin fricción. Calcula su velocidad al llegar al suelo",
        "r": "≈ 19.8 m/s",
        "opciones": [
          "12 kg·m/s",
          "2 m/s",
          "40 W",
          "≈ 19.8 m/s"
        ],
        "correcta": 3
      },
      {
        "p": "Calcula el momento de un cuerpo de 4 kg a 3 m/s",
        "r": "12 kg·m/s",
        "opciones": [
          "En energía cinética",
          "12 kg·m/s",
          "200 J",
          "40 W"
        ],
        "correcta": 1
      },
      {
        "p": "Dos cuerpos, 2 kg a 5 m/s y 3 kg en reposo, chocan y quedan unidos. Calcula la velocidad final",
        "r": "2 m/s",
        "opciones": [
          "200 J",
          "40 W",
          "12 kg·m/s",
          "2 m/s"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué tipo de colisión conserva tanto el momento como la energía cinética?",
        "r": "La colisión elástica",
        "opciones": [
          "≈ 19.8 m/s",
          "La colisión elástica",
          "36 J",
          "200 J"
        ],
        "correcta": 1
      },
      {
        "p": "Un resorte comprimido almacena energía potencial elástica. ¿En qué se transforma al liberarse?",
        "r": "En energía cinética",
        "opciones": [
          "La colisión elástica",
          "En energía cinética",
          "40 W",
          "12 kg·m/s"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula el trabajo de la fricción sobre un bloque de 5 kg que se desliza 2 m con μ=0.3 (g=9.8)",
        "r": "−29.4 J",
        "opciones": [
          "40 W",
          "200 J",
          "−29.4 J",
          "≈ 19.8 m/s"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "W = F·d·cosθ",
      "P = W/t",
      "Ec = ½mv²",
      "Ep = mgh",
      "p = mv"
    ]
  },
  {
    "n": 4,
    "titulo": "Termodinámica",
    "puntos": [
      "Calor: energía en tránsito por diferencia de temperatura. Temperatura: medida de la energía cinética promedio de las partículas.",
      "Equilibrio térmico: dos cuerpos en contacto terminan a la misma temperatura.",
      "Escala absoluta: Kelvin, K=°C+273.",
      "Capacidad calorífica específica: Q=mcΔT.",
      "1ª Ley de la termodinámica: ΔU=Q−W (conservación de la energía). 2ª Ley: el calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta.",
      "Ecuación de estado del gas ideal: PV=nRT."
    ],
    "ejercicios": [
      {
        "p": "Convierte 25 °C a Kelvin",
        "r": "298 K",
        "opciones": [
          "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta",
          "298 K",
          "300 J",
          "Se reduce a la mitad"
        ],
        "correcta": 1
      },
      {
        "p": "Convierte 373 K a °C",
        "r": "100 °C",
        "opciones": [
          "502,320 J",
          "4 L",
          "Del cuerpo caliente al frío, hasta el equilibrio térmico",
          "100 °C"
        ],
        "correcta": 3
      },
      {
        "p": "Calcula el calor necesario para elevar 2 kg de agua de 20 °C a 80 °C (c=4186 J/kg°C)",
        "r": "502,320 J",
        "opciones": [
          "El calor es energía transferida; la temperatura mide la energía cinética promedio de las moléculas",
          "Del cuerpo caliente al frío, hasta el equilibrio térmico",
          "502,320 J",
          "Se reduce a la mitad"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué ley de la termodinámica establece que la energía no se crea ni se destruye?",
        "r": "La 1ª ley",
        "opciones": [
          "502,320 J",
          "El calor es energía transferida; la temperatura mide la energía cinética promedio de las moléculas",
          "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta",
          "La 1ª ley"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué establece la 2ª ley de la termodinámica?",
        "r": "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta",
        "opciones": [
          "300 J",
          "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta",
          "El calor es energía transferida; la temperatura mide la energía cinética promedio de las moléculas",
          "100 °C"
        ],
        "correcta": 1
      },
      {
        "p": "Un gas ocupa 2 L a 300 K y presión constante. Si se calienta a 600 K, ¿qué volumen ocupa? (Ley de Charles)",
        "r": "4 L",
        "opciones": [
          "4 L",
          "300 J",
          "100 °C",
          "298 K"
        ],
        "correcta": 0
      },
      {
        "p": "Explica la diferencia entre calor y temperatura",
        "r": "El calor es energía transferida; la temperatura mide la energía cinética promedio de las moléculas",
        "opciones": [
          "Se reduce a la mitad",
          "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta",
          "100 °C",
          "El calor es energía transferida; la temperatura mide la energía cinética promedio de las moléculas"
        ],
        "correcta": 3
      },
      {
        "p": "Dos cuerpos a distinta temperatura se ponen en contacto. ¿Hacia dónde fluye el calor?",
        "r": "Del cuerpo caliente al frío, hasta el equilibrio térmico",
        "opciones": [
          "100 °C",
          "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta",
          "298 K",
          "Del cuerpo caliente al frío, hasta el equilibrio térmico"
        ],
        "correcta": 3
      },
      {
        "p": "Calcula ΔU si a un sistema se le dan 500 J de calor y realiza 200 J de trabajo",
        "r": "300 J",
        "opciones": [
          "100 °C",
          "Se reduce a la mitad",
          "300 J",
          "El calor fluye espontáneamente de caliente a frío; la entropía del universo aumenta"
        ],
        "correcta": 2
      },
      {
        "p": "Si la presión de un gas ideal se duplica a temperatura constante, ¿qué pasa con el volumen? (Ley de Boyle)",
        "r": "Se reduce a la mitad",
        "opciones": [
          "La 1ª ley",
          "Se reduce a la mitad",
          "502,320 J",
          "Del cuerpo caliente al frío, hasta el equilibrio térmico"
        ],
        "correcta": 1
      }
    ],
    "datosClave": [
      "K = °C + 273",
      "Q = mcΔT",
      "ΔU = Q − W",
      "PV = nRT"
    ]
  },
  {
    "n": 5,
    "titulo": "Ondas",
    "puntos": [
      "Onda mecánica: perturbación que se propaga en un medio, transportando energía sin transportar materia.",
      "Características: longitud de onda (λ), frecuencia (f), periodo (T=1/f), amplitud; velocidad v=λf.",
      "Reflexión: rebote de la onda al chocar con una superficie. Refracción: cambio de dirección al cambiar de medio.",
      "Difracción: la onda rodea obstáculos. Interferencia: superposición de ondas, constructiva o destructiva.",
      "La energía de una onda es proporcional al cuadrado de su amplitud."
    ],
    "ejercicios": [
      {
        "p": "Una onda tiene f=50 Hz y λ=2 m. Calcula su velocidad",
        "r": "100 m/s",
        "opciones": [
          "Dos ondas en fase se suman, aumentando la amplitud",
          "Difracción",
          "100 m/s",
          "Longitudinal"
        ],
        "correcta": 2
      },
      {
        "p": "Calcula el periodo de una onda con f=25 Hz",
        "r": "0.04 s",
        "opciones": [
          "0.04 s",
          "Se cuadruplica",
          "El rebote de la onda al chocar con una superficie",
          "Refracción"
        ],
        "correcta": 0
      },
      {
        "p": "Si la velocidad del sonido es 340 m/s y λ=0.5 m, calcula la frecuencia",
        "r": "680 Hz",
        "opciones": [
          "100 m/s",
          "Dos ondas en fase se suman, aumentando la amplitud",
          "680 Hz",
          "Dos ondas desfasadas se cancelan parcial o totalmente"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué fenómeno ocurre cuando una onda cambia de dirección al pasar de un medio a otro?",
        "r": "Refracción",
        "opciones": [
          "El rebote de la onda al chocar con una superficie",
          "Difracción",
          "Dos ondas en fase se suman, aumentando la amplitud",
          "Refracción"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué fenómeno permite que el sonido rodee una esquina?",
        "r": "Difracción",
        "opciones": [
          "680 Hz",
          "Difracción",
          "Refracción",
          "Dos ondas desfasadas se cancelan parcial o totalmente"
        ],
        "correcta": 1
      },
      {
        "p": "Explica la interferencia constructiva",
        "r": "Dos ondas en fase se suman, aumentando la amplitud",
        "opciones": [
          "680 Hz",
          "Dos ondas en fase se suman, aumentando la amplitud",
          "Difracción",
          "Se cuadruplica"
        ],
        "correcta": 1
      },
      {
        "p": "Explica la interferencia destructiva",
        "r": "Dos ondas desfasadas se cancelan parcial o totalmente",
        "opciones": [
          "Dos ondas desfasadas se cancelan parcial o totalmente",
          "Difracción",
          "Dos ondas en fase se suman, aumentando la amplitud",
          "680 Hz"
        ],
        "correcta": 0
      },
      {
        "p": "Si la amplitud de una onda se duplica, ¿qué pasa con su energía?",
        "r": "Se cuadruplica",
        "opciones": [
          "Dos ondas desfasadas se cancelan parcial o totalmente",
          "680 Hz",
          "Refracción",
          "Se cuadruplica"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué es la reflexión de una onda?",
        "r": "El rebote de la onda al chocar con una superficie",
        "opciones": [
          "Difracción",
          "El rebote de la onda al chocar con una superficie",
          "Se cuadruplica",
          "Dos ondas desfasadas se cancelan parcial o totalmente"
        ],
        "correcta": 1
      },
      {
        "p": "¿El sonido es una onda longitudinal o transversal?",
        "r": "Longitudinal",
        "opciones": [
          "0.04 s",
          "Dos ondas desfasadas se cancelan parcial o totalmente",
          "Longitudinal",
          "Difracción"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "v = λf",
      "T = 1/f",
      "Energía ∝ amplitud²"
    ]
  },
  {
    "n": 6,
    "titulo": "Electromagnetismo",
    "puntos": [
      "Ley de Coulomb: F=k·q₁q₂/r². Campo eléctrico: E=F/q.",
      "Ley de Ohm: V=IR. Potencia eléctrica: P=VI=I²R.",
      "Circuitos en serie: misma corriente, resistencias se suman. En paralelo: mismo voltaje, se suman los inversos de las resistencias.",
      "Campo magnético: generado por cargas en movimiento (corrientes) e interactúa con otras cargas en movimiento.",
      "Inducción electromagnética (Ley de Faraday): un campo magnético variable induce una corriente en un conductor.",
      "La luz es una onda electromagnética; el espectro EM va de ondas de radio a rayos gamma según su frecuencia."
    ],
    "ejercicios": [
      {
        "p": "Calcula la fuerza entre dos cargas de 2×10⁻⁶ C separadas 0.1 m (k=9×10⁹)",
        "r": "3.6 N",
        "opciones": [
          "10 Ω",
          "Disminuye",
          "3.6 N",
          "3 A"
        ],
        "correcta": 2
      },
      {
        "p": "Calcula la corriente en un circuito con V=12 V y R=4 Ω",
        "r": "3 A",
        "opciones": [
          "3 A",
          "10 Ω",
          "Electromagnética",
          "36 W"
        ],
        "correcta": 0
      },
      {
        "p": "Calcula la potencia disipada en el circuito anterior",
        "r": "36 W",
        "opciones": [
          "Radio < luz visible < rayos X",
          "10 Ω",
          "36 W",
          "Disminuye"
        ],
        "correcta": 2
      },
      {
        "p": "Dos resistencias de 4 Ω y 6 Ω en serie. Calcula la resistencia total",
        "r": "10 Ω",
        "opciones": [
          "Disminuye",
          "10 Ω",
          "3.6 N",
          "≈ 1.125×10⁶ N/C"
        ],
        "correcta": 1
      },
      {
        "p": "Las mismas resistencias en paralelo. Calcula la resistencia equivalente",
        "r": "2.4 Ω",
        "opciones": [
          "2.4 Ω",
          "36 W",
          "Disminuye",
          "3.6 N"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué establece la Ley de Faraday?",
        "r": "Un campo magnético variable induce una corriente (fem) en un conductor",
        "opciones": [
          "Un campo magnético variable induce una corriente (fem) en un conductor",
          "3 A",
          "2.4 Ω",
          "≈ 1.125×10⁶ N/C"
        ],
        "correcta": 0
      },
      {
        "p": "Ordena de menor a mayor frecuencia: luz visible, ondas de radio, rayos X",
        "r": "Radio < luz visible < rayos X",
        "opciones": [
          "Radio < luz visible < rayos X",
          "Electromagnética",
          "36 W",
          "3 A"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de onda es la luz?",
        "r": "Electromagnética",
        "opciones": [
          "Un campo magnético variable induce una corriente (fem) en un conductor",
          "Electromagnética",
          "3 A",
          "10 Ω"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula el campo eléctrico a 0.2 m de una carga de 5×10⁻⁶ C (k=9×10⁹)",
        "r": "≈ 1.125×10⁶ N/C",
        "opciones": [
          "Disminuye",
          "≈ 1.125×10⁶ N/C",
          "Un campo magnético variable induce una corriente (fem) en un conductor",
          "Electromagnética"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué le sucede a la resistencia total de un circuito al añadir más resistencias en paralelo?",
        "r": "Disminuye",
        "opciones": [
          "Un campo magnético variable induce una corriente (fem) en un conductor",
          "36 W",
          "Disminuye",
          "Electromagnética"
        ],
        "correcta": 2
      }
    ],
    "datosClave": [
      "F = k·q₁q₂/r²",
      "k = 9×10⁹ N·m²/C²",
      "V = IR",
      "P = VI = I²R"
    ]
  },
  {
    "n": 7,
    "titulo": "Fluidos",
    "puntos": [
      "Presión: P=F/A. Presión atmosférica ≈101,325 Pa a nivel del mar.",
      "Principio de Pascal: la presión aplicada a un fluido encerrado se transmite íntegramente en todas direcciones.",
      "Principio de Arquímedes: un cuerpo sumergido recibe un empuje igual al peso del fluido que desaloja.",
      "Presión hidrostática: P=ρgh. Tensión superficial y capilaridad: fuerzas en la superficie de los líquidos.",
      "Ecuación de continuidad (fluido incompresible): A₁v₁=A₂v₂.",
      "Ecuación de Bernoulli: P+½ρv²+ρgh = constante. Viscosidad: resistencia interna de un fluido a fluir."
    ],
    "ejercicios": [
      {
        "p": "Calcula la presión ejercida por una fuerza de 100 N sobre un área de 0.5 m²",
        "r": "200 Pa",
        "opciones": [
          "Disminuye",
          "200 Pa",
          "19.6 N",
          "Su resistencia interna a fluir"
        ],
        "correcta": 1
      },
      {
        "p": "Calcula la presión hidrostática a 5 m de profundidad en agua (ρ=1000 kg/m³, g=9.8)",
        "r": "49,000 Pa",
        "opciones": [
          "19.6 N",
          "49,000 Pa",
          "Su resistencia interna a fluir",
          "600 N"
        ],
        "correcta": 1
      },
      {
        "p": "Un cuerpo desaloja 2 litros de agua al sumergirse. Calcula el empuje",
        "r": "19.6 N",
        "opciones": [
          "Disminuye",
          "menor que la del fluido en que está sumergido",
          "19.6 N",
          "Un gato hidráulico transmite la presión de un pistón pequeño a uno grande"
        ],
        "correcta": 2
      },
      {
        "p": "Explica el principio de Pascal con un ejemplo",
        "r": "Un gato hidráulico transmite la presión de un pistón pequeño a uno grande",
        "opciones": [
          "Capilaridad (tensión superficial)",
          "19.6 N",
          "200 Pa",
          "Un gato hidráulico transmite la presión de un pistón pequeño a uno grande"
        ],
        "correcta": 3
      },
      {
        "p": "En un tubo, el área se reduce a la mitad. ¿Qué pasa con la velocidad del fluido?",
        "r": "Se duplica (ecuación de continuidad)",
        "opciones": [
          "Capilaridad (tensión superficial)",
          "Se duplica (ecuación de continuidad)",
          "Disminuye",
          "49,000 Pa"
        ],
        "correcta": 1
      },
      {
        "p": "Según Bernoulli, si la velocidad de un fluido aumenta, ¿qué pasa con su presión?",
        "r": "Disminuye",
        "opciones": [
          "200 Pa",
          "600 N",
          "Disminuye",
          "Capilaridad (tensión superficial)"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué mide la viscosidad de un fluido?",
        "r": "Su resistencia interna a fluir",
        "opciones": [
          "200 Pa",
          "600 N",
          "Capilaridad (tensión superficial)",
          "Su resistencia interna a fluir"
        ],
        "correcta": 3
      },
      {
        "p": "Un objeto flota si su densidad es... (completa)",
        "r": "menor que la del fluido en que está sumergido",
        "opciones": [
          "600 N",
          "Disminuye",
          "Se duplica (ecuación de continuidad)",
          "menor que la del fluido en que está sumergido"
        ],
        "correcta": 3
      },
      {
        "p": "Calcula la fuerza de un fluido a 2000 Pa de presión sobre un área de 0.3 m²",
        "r": "600 N",
        "opciones": [
          "200 Pa",
          "600 N",
          "49,000 Pa",
          "Disminuye"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué fenómeno permite que el agua suba por un tubo delgado?",
        "r": "Capilaridad (tensión superficial)",
        "opciones": [
          "Disminuye",
          "600 N",
          "Su resistencia interna a fluir",
          "Capilaridad (tensión superficial)"
        ],
        "correcta": 3
      }
    ],
    "datosClave": [
      "P = F/A",
      "P = ρgh",
      "Bernoulli: P + ½ρv² + ρgh = cte",
      "Continuidad: A₁v₁ = A₂v₂"
    ]
  },
  {
    "n": 8,
    "titulo": "Óptica",
    "puntos": [
      "Reflexión: el ángulo de incidencia es igual al ángulo de reflexión. Refracción: cambio de dirección al cambiar de medio (Ley de Snell).",
      "Espejos planos: forman imágenes virtuales del mismo tamaño. Espejos esféricos (cóncavos/convexos): imágenes reales o virtuales según la posición del objeto.",
      "Lentes convergentes: concentran los rayos de luz. Lentes divergentes: dispersan los rayos, siempre forman imágenes virtuales.",
      "Dualidad onda-partícula: la luz se comporta como onda (interferencia, difracción) y como partícula (fotones, efecto fotoeléctrico)."
    ],
    "ejercicios": [
      {
        "p": "Si un rayo incide a 30° sobre un espejo plano, ¿a qué ángulo se refleja?",
        "r": "30°",
        "opciones": [
          "Se dispersa en los colores del espectro",
          "El modelo corpuscular (fotones)",
          "30°",
          "Convergente"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué tipo de imagen forma un espejo plano?",
        "r": "Virtual, del mismo tamaño que el objeto",
        "opciones": [
          "Virtual, del mismo tamaño que el objeto",
          "30°",
          "Sí, cuando el objeto está fuera del foco",
          "Divergente"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué tipo de lente se usa para corregir la miopía?",
        "r": "Divergente",
        "opciones": [
          "El cambio de dirección de la luz al pasar de un medio a otro con distinta densidad óptica",
          "Sí, cuando el objeto está fuera del foco",
          "Se dispersa en los colores del espectro",
          "Divergente"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué tipo de lente se usa para corregir la hipermetropía?",
        "r": "Convergente",
        "opciones": [
          "Sí, cuando el objeto está fuera del foco",
          "Se dispersa en los colores del espectro",
          "Virtual, del mismo tamaño que el objeto",
          "Convergente"
        ],
        "correcta": 3
      },
      {
        "p": "¿Puede un espejo cóncavo formar imágenes reales?",
        "r": "Sí, cuando el objeto está fuera del foco",
        "opciones": [
          "El modelo corpuscular (fotones)",
          "Se dispersa en los colores del espectro",
          "Sí, cuando el objeto está fuera del foco",
          "Divergente"
        ],
        "correcta": 2
      },
      {
        "p": "Explica qué es la refracción de la luz",
        "r": "El cambio de dirección de la luz al pasar de un medio a otro con distinta densidad óptica",
        "opciones": [
          "Sí, cuando el objeto está fuera del foco",
          "El cambio de dirección de la luz al pasar de un medio a otro con distinta densidad óptica",
          "Virtual y reducida",
          "Virtual, del mismo tamaño que el objeto"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué modelo explica el efecto fotoeléctrico?",
        "r": "El modelo corpuscular (fotones)",
        "opciones": [
          "El modelo corpuscular (fotones)",
          "30°",
          "Virtual y reducida",
          "El modelo ondulatorio"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué modelo explica la interferencia y difracción de la luz?",
        "r": "El modelo ondulatorio",
        "opciones": [
          "El modelo ondulatorio",
          "El cambio de dirección de la luz al pasar de un medio a otro con distinta densidad óptica",
          "Convergente",
          "Virtual, del mismo tamaño que el objeto"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué le sucede a la luz blanca al pasar por un prisma?",
        "r": "Se dispersa en los colores del espectro",
        "opciones": [
          "El cambio de dirección de la luz al pasar de un medio a otro con distinta densidad óptica",
          "El modelo ondulatorio",
          "Virtual, del mismo tamaño que el objeto",
          "Se dispersa en los colores del espectro"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué tipo de imagen forma siempre una lente divergente?",
        "r": "Virtual y reducida",
        "opciones": [
          "Virtual y reducida",
          "Se dispersa en los colores del espectro",
          "El cambio de dirección de la luz al pasar de un medio a otro con distinta densidad óptica",
          "Divergente"
        ],
        "correcta": 0
      }
    ],
    "datosClave": [
      "Ángulo de incidencia = ángulo de reflexión",
      "Lentes convergentes / divergentes",
      "Dualidad onda-partícula"
    ]
  },
  {
    "n": 9,
    "titulo": "Física contemporánea",
    "puntos": [
      "Modelos atómicos: Thomson (budín de pasas), Rutherford (núcleo positivo con electrones orbitando), Bohr (órbitas de energía cuantizadas).",
      "El experimento de Rutherford demostró la existencia de un núcleo atómico pequeño, denso y de carga positiva.",
      "Radiactividad: emisión espontánea de partículas o energía desde núcleos inestables; tipos: alfa, beta y gamma.",
      "Decaimiento radiactivo: proceso probabilístico caracterizado por la vida media (tiempo en que decae la mitad de una muestra).",
      "Fisión nuclear: división de un núcleo pesado. Fusión nuclear: unión de núcleos ligeros; ambas liberan gran cantidad de energía.",
      "Aplicaciones de la radiactividad: medicina (radioterapia, diagnóstico), generación de energía, datación radiactiva."
    ],
    "ejercicios": [
      {
        "p": "¿Qué demostró el experimento de la lámina de oro de Rutherford?",
        "r": "Que el átomo tiene un núcleo pequeño, denso y de carga positiva",
        "opciones": [
          "Alfa (menor) < beta < gamma (mayor)",
          "El número de protones en su núcleo",
          "Que el átomo tiene un núcleo pequeño, denso y de carga positiva",
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué propuso el modelo atómico de Bohr?",
        "r": "Que los electrones giran en órbitas de energía cuantizadas (niveles definidos)",
        "opciones": [
          "Fusión nuclear (de hidrógeno en helio)",
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros",
          "El número de protones en su núcleo",
          "Que los electrones giran en órbitas de energía cuantizadas (niveles definidos)"
        ],
        "correcta": 3
      },
      {
        "p": "Ordena por poder de penetración: partículas alfa, beta y rayos gamma",
        "r": "Alfa (menor) < beta < gamma (mayor)",
        "opciones": [
          "Alfa (menor) < beta < gamma (mayor)",
          "Radioterapia o diagnóstico por imagen (medicina nuclear)",
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros",
          "Que los electrones giran en órbitas de energía cuantizadas (niveles definidos)"
        ],
        "correcta": 0
      },
      {
        "p": "Si una muestra tiene una vida media de 10 años, ¿qué fracción queda tras 20 años?",
        "r": "1/4 de la muestra original",
        "opciones": [
          "Que los electrones giran en órbitas de energía cuantizadas (niveles definidos)",
          "Que el átomo tiene un núcleo pequeño, denso y de carga positiva",
          "El contador Geiger",
          "1/4 de la muestra original"
        ],
        "correcta": 3
      },
      {
        "p": "¿Qué diferencia hay entre fisión y fusión nuclear?",
        "r": "La fisión divide núcleos pesados; la fusión une núcleos ligeros",
        "opciones": [
          "El contador Geiger",
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros",
          "El número de protones en su núcleo",
          "1/4 de la muestra original"
        ],
        "correcta": 1
      },
      {
        "p": "Menciona una aplicación médica de la radiactividad",
        "r": "Radioterapia o diagnóstico por imagen (medicina nuclear)",
        "opciones": [
          "Radioterapia o diagnóstico por imagen (medicina nuclear)",
          "El contador Geiger",
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros",
          "Alfa (menor) < beta < gamma (mayor)"
        ],
        "correcta": 0
      },
      {
        "p": "¿Qué carga tiene una partícula alfa?",
        "r": "Positiva (equivalente a un núcleo de helio)",
        "opciones": [
          "Que el átomo tiene un núcleo pequeño, denso y de carga positiva",
          "Positiva (equivalente a un núcleo de helio)",
          "Radioterapia o diagnóstico por imagen (medicina nuclear)",
          "1/4 de la muestra original"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué es el número atómico de un elemento?",
        "r": "El número de protones en su núcleo",
        "opciones": [
          "Radioterapia o diagnóstico por imagen (medicina nuclear)",
          "El contador Geiger",
          "El número de protones en su núcleo",
          "Positiva (equivalente a un núcleo de helio)"
        ],
        "correcta": 2
      },
      {
        "p": "¿Qué proceso libera la energía del Sol?",
        "r": "Fusión nuclear (de hidrógeno en helio)",
        "opciones": [
          "1/4 de la muestra original",
          "Fusión nuclear (de hidrógeno en helio)",
          "El número de protones en su núcleo",
          "Alfa (menor) < beta < gamma (mayor)"
        ],
        "correcta": 1
      },
      {
        "p": "¿Qué instrumento se usa para detectar radiactividad?",
        "r": "El contador Geiger",
        "opciones": [
          "El contador Geiger",
          "La fisión divide núcleos pesados; la fusión une núcleos ligeros",
          "Que el átomo tiene un núcleo pequeño, denso y de carga positiva",
          "El número de protones en su núcleo"
        ],
        "correcta": 0
      }
    ],
    "datosClave": [
      "Rutherford → núcleo atómico",
      "Bohr → órbitas cuantizadas",
      "Partículas alfa, beta y gamma"
    ]
  }
];

  if (typeof window !== "undefined") {
    window.SUBJECT_DATA = window.SUBJECT_DATA || {};
    window.SUBJECT_DATA["fisica"] = TEMAS;
  }
  if (typeof window !== "undefined") {
    window.__LAST_LOADED_TEMAS__ = TEMAS;
  }
})();

// Datos: Guía de Química — Examen de ingreso a licenciatura UNAM
const TEMAS = [
{
  n: 1,
  titulo: "Temas básicos",
  puntos: [
    "Sustancias puras: elemento (un solo tipo de átomo) y compuesto (dos o más elementos combinados químicamente).",
    "Mezclas: homogéneas (una sola fase visible, ej. agua salada) y heterogéneas (fases distinguibles, ej. agua y aceite).",
    "Estructura atómica: protón (carga +), electrón (carga −), neutrón (sin carga); número atómico = número de protones; masa atómica ≈ protones + neutrones.",
    "Configuración electrónica: distribución de electrones en niveles y orbitales (s, p, d, f) siguiendo el orden de llenado (Aufbau).",
    "Tabla periódica: metales (izquierda, ceden electrones), no metales (derecha, ganan electrones), metaloides (frontera entre ambos).",
    "Regla del octeto: los átomos tienden a ganar, perder o compartir electrones hasta completar 8 en su capa de valencia.",
    "Electronegatividad: capacidad de un átomo para atraer electrones; determina si el enlace es iónico (diferencia grande) o covalente (diferencia pequeña).",
    "Mol: cantidad de sustancia que contiene 6.022×10²³ partículas (número de Avogadro); la masa molar se expresa en g/mol."
  ],
  ejercicios: [
    { p: "Clasifica: agua salada", r: "Mezcla homogénea" },
    { p: "Clasifica: agua con aceite", r: "Mezcla heterogénea" },
    { p: "Clasifica: oxígeno (O₂)", r: "Sustancia pura, elemento" },
    { p: "Clasifica: sal de mesa (NaCl)", r: "Sustancia pura, compuesto" },
    { p: "Un átomo tiene 11 protones y 12 neutrones. Calcula su número atómico y masa atómica aproximada", r: "Z=11, masa ≈ 23" },
    { p: "¿Cuántos electrones tiene un átomo neutro con número atómico 17?", r: "17" },
    { p: "Escribe la configuración electrónica del sodio (Z=11)", r: "1s² 2s² 2p⁶ 3s¹" },
    { p: "¿Qué tipo de enlace se forma entre un metal y un no metal?", r: "Enlace iónico" },
    { p: "¿Qué tipo de enlace se forma entre dos no metales similares?", r: "Enlace covalente" },
    { p: "Calcula la masa molar aproximada del agua (H₂O): H=1, O=16", r: "18 g/mol" }
  ]
},
{
  n: 2,
  titulo: "Agua",
  puntos: [
    "La molécula de agua es polar por la diferencia de electronegatividad entre H y O, y forma puentes de hidrógeno entre moléculas.",
    "Alto punto de ebullición (100 °C) y de fusión (0 °C), y alta capacidad calorífica específica, debido a los puentes de hidrógeno.",
    "Es un buen disolvente de sustancias polares e iónicas (“disolvente universal”).",
    "Teorías ácido-base: Arrhenius (ácido libera H⁺, base libera OH⁻); Brønsted-Lowry (ácido dona protón, base lo acepta); Lewis (ácido acepta par de electrones, base lo dona).",
    "pH = −log[H⁺]; escala de 0 a 14: ácido si pH<7, neutro si pH=7, básico si pH>7.",
    "Molaridad: M = moles de soluto / litros de disolución."
  ],
  ejercicios: [
    { p: "¿Por qué el agua es una molécula polar?", r: "Por la diferencia de electronegatividad entre O e H y su geometría angular" },
    { p: "¿Qué fuerza intermolecular explica el alto punto de ebullición del agua?", r: "Los puentes de hidrógeno" },
    { p: "Según Arrhenius, ¿qué libera un ácido en disolución acuosa?", r: "Iones H⁺" },
    { p: "Según Brønsted-Lowry, ¿qué hace una base?", r: "Acepta un protón (H⁺)" },
    { p: "Calcula el pH de una disolución con [H⁺]=1×10⁻⁴", r: "pH = 4" },
    { p: "Clasifica una disolución con pH=9", r: "Básica" },
    { p: "Calcula la molaridad de una disolución con 2 moles de soluto en 4 litros", r: "0.5 M" },
    { p: "¿Qué tipo de sustancias disuelve mejor el agua?", r: "Sustancias polares e iónicas" },
    { p: "Menciona dos fuentes de contaminación del agua", r: "Industrial y urbana (o agrícola)" },
    { p: "¿Por qué el agua es esencial para la vida?", r: "Es disolvente universal, regula la temperatura y participa en procesos biológicos" }
  ]
},
{
  n: 3,
  titulo: "Aire",
  puntos: [
    "El aire es una mezcla de gases: ≈78% nitrógeno, ≈21% oxígeno, y otros gases en menor proporción.",
    "Reacciones de combustión: reacción exotérmica del oxígeno con un combustible.",
    "Oxidación-reducción: la oxidación implica pérdida de electrones; la reducción, ganancia; ocurren simultáneamente.",
    "Ciclos biogeoquímicos: el oxígeno, el nitrógeno y el carbono se reciclan entre la atmósfera, los seres vivos y el suelo.",
    "Contaminantes primarios del aire: óxidos de nitrógeno, carbono y azufre, partículas suspendidas e hidrocarburos.",
    "La lluvia ácida se forma cuando óxidos de azufre y nitrógeno reaccionan con el agua atmosférica."
  ],
  ejercicios: [
    { p: "¿Cuál es el gas más abundante en el aire?", r: "Nitrógeno (≈78%)" },
    { p: "¿Qué porcentaje aproximado de oxígeno hay en el aire?", r: "≈21%" },
    { p: "Escribe la reacción general de combustión del carbono", r: "C + O₂ → CO₂" },
    { p: "En una reacción redox, ¿qué le sucede al agente que se oxida?", r: "Pierde electrones" },
    { p: "¿Qué gases causan principalmente la lluvia ácida?", r: "Óxidos de azufre y de nitrógeno" },
    { p: "Menciona un contaminante primario del aire", r: "Óxidos de nitrógeno, de azufre, o partículas suspendidas" },
    { p: "¿Qué es la inversión térmica?", r: "Una capa de aire cálido que atrapa el aire frío contaminado cerca del suelo" },
    { p: "¿Qué gas del ciclo del carbono se libera al quemar combustibles fósiles?", r: "Dióxido de carbono (CO₂)" },
    { p: "La formación de óxido de hierro (herrumbre), ¿es una reacción de oxidación o reducción?", r: "Oxidación" },
    { p: "Menciona una fuente urbana de contaminación del aire", r: "Los vehículos automotores" }
  ]
},
{
  n: 4,
  titulo: "Alimentos",
  puntos: [
    "Carbohidratos: fuente de energía de disponibilidad inmediata; estructura de azúcares simples y complejos.",
    "Lípidos: almacén de energía a largo plazo; estructura de ácidos grasos y glicerol.",
    "Proteínas: formadas por aminoácidos unidos por enlaces peptídicos; incluyen a las enzimas (catalizadores biológicos).",
    "Vitaminas y minerales: no aportan energía directamente, pero son esenciales para el funcionamiento del organismo."
  ],
  ejercicios: [
    { p: "¿Qué macronutriente es la fuente de energía de disponibilidad inmediata?", r: "Los carbohidratos" },
    { p: "¿Qué macronutriente sirve como almacén de energía a largo plazo?", r: "Los lípidos" },
    { p: "¿Qué tipo de enlace une a los aminoácidos en una proteína?", r: "El enlace peptídico" },
    { p: "¿Qué función cumplen las enzimas?", r: "Actúan como catalizadores biológicos, acelerando reacciones" },
    { p: "Menciona dos ejemplos de carbohidratos", r: "Glucosa y almidón (o sacarosa)" },
    { p: "¿De qué están compuestos principalmente los lípidos?", r: "Ácidos grasos y glicerol" },
    { p: "¿Las vitaminas aportan energía directamente al organismo?", r: "No, pero son esenciales para procesos metabólicos" },
    { p: "Menciona un mineral esencial para el organismo", r: "Calcio, hierro o potasio" },
    { p: "¿Qué unidad estructural forma las proteínas?", r: "Los aminoácidos" },
    { p: "¿Qué macronutriente contiene grupos funcionales de aminoácidos?", r: "Las proteínas" }
  ]
},
{
  n: 5,
  titulo: "La energía y las reacciones químicas",
  puntos: [
    "Reacción exotérmica: libera energía (calor) al entorno. Reacción endotérmica: absorbe energía del entorno.",
    "Entalpía (ΔH): cambio de calor a presión constante; negativa en exotérmicas, positiva en endotérmicas.",
    "Energía libre de Gibbs (ΔG): determina si una reacción es espontánea (ΔG<0 → espontánea).",
    "Equilibrio químico: estado en que las velocidades de reacción directa e inversa son iguales. Ley de Le Chatelier: un sistema en equilibrio se ajusta para contrarrestar una perturbación.",
    "Velocidad de reacción: depende de la concentración de reactivos, la temperatura, los catalizadores y la superficie de contacto."
  ],
  ejercicios: [
    { p: "La combustión libera calor, ¿es una reacción exotérmica o endotérmica?", r: "Exotérmica" },
    { p: "La fotosíntesis absorbe energía luminosa, ¿es exotérmica o endotérmica?", r: "Endotérmica" },
    { p: "Si ΔH es negativo, ¿qué tipo de reacción es?", r: "Exotérmica" },
    { p: "Según Le Chatelier, si aumentas la concentración de un reactivo, ¿hacia dónde se desplaza el equilibrio?", r: "Hacia los productos" },
    { p: "Si ΔG < 0, ¿la reacción es espontánea o no espontánea?", r: "Espontánea" },
    { p: "Menciona un factor que aumenta la velocidad de una reacción", r: "Aumento de temperatura, uso de catalizador o mayor concentración" },
    { p: "¿Qué hace un catalizador en una reacción?", r: "Aumenta la velocidad de reacción sin consumirse" },
    { p: "En el equilibrio químico, ¿qué sucede con las concentraciones de reactivos y productos?", r: "Permanecen constantes, aunque la reacción sigue ocurriendo en ambos sentidos" },
    { p: "Si se aumenta la presión en un sistema gaseoso en equilibrio, ¿hacia qué lado se desplaza según Le Chatelier?", r: "Hacia el lado con menor número de moles de gas" },
    { p: "¿Qué mide la entalpía de una reacción?", r: "El intercambio de calor a presión constante" }
  ]
},
{
  n: 6,
  titulo: "Química del carbono",
  puntos: [
    "El carbono forma enlaces tetraédricos (4 enlaces covalentes) y puede formar cadenas con enlaces simples, dobles y triples.",
    "Alcanos: solo enlaces simples C–C (terminación -ano). Alquenos: un doble enlace (-eno). Alquinos: un triple enlace (-ino).",
    "Isomería estructural: compuestos con la misma fórmula molecular pero distinta estructura.",
    "Grupos funcionales: alcohol (–OH), éter (–O–), aldehído (–CHO), cetona (–CO–), ácido carboxílico (–COOH), éster (–COO–), aminas (–NH₂), amidas (–CONH₂), halogenuros.",
    "Reacciones orgánicas: sustitución (un átomo reemplaza a otro), adición (se rompe un enlace múltiple para añadir átomos), eliminación (se pierde una molécula pequeña formando un enlace múltiple), condensación e hidrólisis, y polimerización (unión de monómeros)."
  ],
  ejercicios: [
    { p: "¿Cuántos enlaces covalentes forma típicamente el carbono?", r: "4 (estructura tetraédrica)" },
    { p: "Nombra el compuesto CH₄", r: "Metano (alcano)" },
    { p: "¿Qué terminación tienen los alquenos?", r: "-eno" },
    { p: "¿Qué grupo funcional caracteriza a los alcoholes?", r: "–OH (hidroxilo)" },
    { p: "¿Qué grupo funcional caracteriza a los ácidos carboxílicos?", r: "–COOH" },
    { p: "¿Qué tipo de reacción ocurre cuando un doble enlace se rompe para añadir átomos?", r: "Reacción de adición" },
    { p: "¿Qué es la isomería estructural?", r: "Compuestos con la misma fórmula molecular pero diferente estructura" },
    { p: "¿Qué tipo de reacción forma un polímero a partir de monómeros?", r: "Polimerización" },
    { p: "La formación de un éster a partir de un ácido y un alcohol, con liberación de agua, ¿qué tipo de reacción es?", r: "Condensación (esterificación)" },
    { p: "¿Qué tipo de enlace tiene un alquino entre dos carbonos?", r: "Triple enlace" }
  ]
}
];

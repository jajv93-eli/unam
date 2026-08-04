// Mapa: para cada archivo de datos y número de tema, la lista de "datos clave"
// (fórmulas, fechas, nombres propios, cifras) que se inyectará como campo `datosClave`.
// Formato para Historia: fechas como "AÑO — Evento" para que la línea de tiempo las detecte.

module.exports = {
  "matematicas.js": {
    1: ["i² = −1", "aᵐ·aⁿ = aᵐ⁺ⁿ", "(aᵐ)ⁿ = aᵐⁿ", "a⁻ⁿ = 1/aⁿ", "(a+bi)(c+di) = (ac−bd)+(ad+bc)i"],
    2: ["(a+b)² = a²+2ab+b²", "(a−b)² = a²−2ab+b²", "(a+b)(a−b) = a²−b²", "Teorema del residuo: P(c) = residuo", "Teorema del factor: (x−c) es factor ⟺ P(c)=0"],
    3: ["x = (−b ± √(b²−4ac)) / 2a", "Discriminante = b²−4ac", "Δ>0: 2 raíces reales · Δ=0: 1 raíz doble · Δ<0: raíces complejas"],
    4: ["Multiplicar/dividir por negativo invierte la desigualdad", "Notación de intervalo: [a,b), (a,b], (a,∞)"],
    5: ["Regla de Cramer: xᵢ = det(Aᵢ)/det(A)", "Sistema 2×2: sustitución, igualación o eliminación"],
    6: ["Dominio y rango", "(f+g)(x), (f·g)(x), (f/g)(x)", "(f∘g)(x) = f(g(x))"],
    7: ["rad = grados × π/180", "sen = op/hip · cos = ady/hip · tan = op/ady", "Ley de senos: a/senA = b/senB = c/senC", "Ley de cosenos: c² = a²+b²−2ab·cosC"],
    8: ["log(ab) = log a + log b", "log(aⁿ) = n·log a", "log_a(x) = ln(x)/ln(a)", "aˣ: asíntota y=0 · log_a(x): asíntota x=0"],
    9: ["d = √((x₂−x₁)² + (y₂−y₁)²)", "m = (y₂−y₁)/(x₂−x₁)", "y−y₁ = m(x−x₁)", "Perpendiculares: m₁·m₂ = −1", "d(punto,recta) = |Ax₀+By₀+C|/√(A²+B²)"],
    10: ["x² + y² = r²", "(x−h)² + (y−k)² = r²", "Forma general: x²+y²+Dx+Ey+F=0"],
    11: ["y² = 4px (vértice en origen, eje x)", "(y−k)² = 4p(x−h)", "Lado recto = |4p|"],
    12: ["x²/a² + y²/b² = 1", "a² = b² + c²", "Excentricidad e = c/a  (0<e<1)"],
    13: ["x²/a² − y²/b² = 1", "c² = a² + b²", "Asíntotas: y = ±(b/a)x", "Excentricidad e = c/a  (e>1)"],
    14: ["Ax²+Bxy+Cy²+Dx+Ey+F=0", "A=C → circunferencia", "A≠C mismo signo → elipse", "signos opuestos → hipérbola"],
    15: ["lim(x→0) senx/x = 1", "Formas indeterminadas: 0/0, ∞/∞", "Continuidad: f(a) existe, lim existe, y son iguales"],
    16: ["f'(x) = lim(h→0) [f(x+h)−f(x)]/h", "d/dx(xⁿ) = nxⁿ⁻¹", "(uv)' = u'v+uv'", "(u/v)' = (u'v−uv')/v²", "Regla de la cadena: f'(g(x))·g'(x)"],
    17: ["∫xⁿdx = xⁿ⁺¹/(n+1) + C", "∫eˣdx = eˣ + C", "∫senx dx = −cosx + C", "∫[a,b] f(x)dx = F(b)−F(a)"]
  },
  "espanol.js": {
    1: ["Referencial → informa", "Apelativa → ordena o pide", "Poética → belleza del lenguaje"],
    2: ["Descriptivo", "Narrativo", "Argumentativo"],
    3: ["Idea principal vs. idea secundaria", "Inferencia de datos", "Punto de vista del autor"],
    4: ["Oración = sujeto + predicado", "Sujeto tácito, simple o compuesto", "Predicado verbal o nominal"],
    5: ["Causales: porque, ya que", "Consecutivos: por lo tanto", "Adversativos: pero, sin embargo", "De adición: además, también"],
    6: ["Sinónimos", "Antónimos", "Homófonos", "Analogías"],
    7: ["Agudas: tilde si terminan en n, s o vocal", "Llanas: tilde si NO terminan en n, s o vocal", "Esdrújulas: siempre llevan tilde"]
  },
  "fisica.js": {
    1: ["v = d/t", "v = v₀ + at", "d = v₀t + ½at²", "v² = v₀² + 2ad", "g ≈ 9.8 m/s²"],
    2: ["F = ma", "Peso = mg", "F = kx (Ley de Hooke)", "F = G·m₁m₂/r²", "G = 6.674×10⁻¹¹ N·m²/kg²"],
    3: ["W = F·d·cosθ", "P = W/t", "Ec = ½mv²", "Ep = mgh", "p = mv"],
    4: ["K = °C + 273", "Q = mcΔT", "ΔU = Q − W", "PV = nRT"],
    5: ["v = λf", "T = 1/f", "Energía ∝ amplitud²"],
    6: ["F = k·q₁q₂/r²", "k = 9×10⁹ N·m²/C²", "V = IR", "P = VI = I²R"],
    7: ["P = F/A", "P = ρgh", "Bernoulli: P + ½ρv² + ρgh = cte", "Continuidad: A₁v₁ = A₂v₂"],
    8: ["Ángulo de incidencia = ángulo de reflexión", "Lentes convergentes / divergentes", "Dualidad onda-partícula"],
    9: ["Rutherford → núcleo atómico", "Bohr → órbitas cuantizadas", "Partículas alfa, beta y gamma"]
  },
  "quimica.js": {
    1: ["Z = número de protones", "masa atómica ≈ protones + neutrones", "Número de Avogadro = 6.022×10²³", "Regla del octeto = 8 electrones de valencia"],
    2: ["pH = −log[H⁺]", "pH<7 ácido · pH=7 neutro · pH>7 básico", "M = mol de soluto / L de disolución"],
    3: ["N₂ ≈ 78% del aire", "O₂ ≈ 21% del aire", "C + O₂ → CO₂"],
    4: ["Carbohidratos: energía inmediata", "Lípidos: energía de reserva", "Proteínas: aminoácidos + enlace peptídico"],
    5: ["ΔH < 0 → exotérmica", "ΔG < 0 → espontánea", "Ley de Le Chatelier"],
    6: ["Alcanos: -ano (enlace simple)", "Alquenos: -eno (doble enlace)", "Alquinos: -ino (triple enlace)", "–OH alcohol · –COOH ácido carboxílico"]
  },
  "biologia.js": {
    1: ["Robert Hooke (1665)", "Núcleo · Mitocondria · Ribosoma · Cloroplasto", "Procariota (sin núcleo) vs. eucariota (con núcleo)"],
    2: ["Glucólisis: 2 ATP netos", "Respiración aerobia: 36–38 ATP", "ATP y NADPH"],
    3: ["Mitosis → 2 células idénticas", "Meiosis → 4 células, mitad de cromosomas", "ADN (doble hélice) y ARN"],
    4: ["Mendel — experimentos con chícharos", "Ley de la Segregación", "Ley de la Distribución Independiente"],
    5: ["Oparin-Haldane · Margulis · Lamarck · Darwin-Wallace", "5 reinos: Monera, Protista, Fungi, Plantae, Animalia"],
    6: ["Población → Comunidad → Ecosistema", "Ciclos biogeoquímicos (carbono, nitrógeno, agua)"]
  },
  "historia-universal.js": {
    1: ["476 d.C. — Caída del Imperio Romano de Occidente", "1789 — Inicio de la Edad Contemporánea", "Prehistoria · Edad Antigua · Edad Media · Edad Moderna · Edad Contemporánea"],
    2: ["1776 — Independencia de las Trece Colonias", "1789 — Revolución Francesa", "Voltaire, Rousseau, Montesquieu", "Napoleón Bonaparte"],
    3: ["Karl Marx y Friedrich Engels", "Cavour y Garibaldi — unificación de Italia", "Otto von Bismarck — unificación de Alemania"],
    4: ["1870-1914 — rivalidades imperialistas", "Reparto colonial de África"],
    5: ["1914 — Asesinato del archiduque Francisco Fernando en Sarajevo", "1917 — Revolución Socialista Rusa", "Tratado de Versalles"],
    6: ["1929 — Crisis de Wall Street (Gran Depresión)", "Mussolini — fascismo en Italia", "Hitler — nazismo en Alemania", "Franklin D. Roosevelt — New Deal"],
    7: ["1939 — Invasión alemana a Polonia", "1945 — Bombas atómicas en Hiroshima y Nagasaki", "Creación de la ONU"],
    8: ["Bloque capitalista (EUA) vs. bloque socialista (URSS)", "Guerra Fría", "Muro de Berlín"],
    9: ["1989 — Caída del Muro de Berlín", "1991 — Disolución de la URSS", "Globalización económica y tecnológica"]
  },
  "historia-mexico.js": {
    1: ["1521 — Caída de Tenochtitlan", "Hernán Cortés", "Reformas Borbónicas (siglo XVIII)"],
    2: ["1810 — Grito de Dolores (Miguel Hidalgo)", "José María Morelos — Congreso de Chilpancingo", "Vicente Guerrero", "1821 — Plan de Iguala (Agustín de Iturbide)"],
    3: ["1836 — Independencia de Texas", "1838 — Guerra de los Pasteles", "1846-1848 — Guerra con Estados Unidos", "Tratado de Guadalupe Hidalgo"],
    4: ["1854 — Revolución de Ayutla", "1857 — Constitución liberal", "Benito Juárez — Leyes de Reforma", "1862-1867 — Intervención francesa", "Maximiliano de Habsburgo", "Sebastián Lerdo de Tejada"],
    5: ["1876-1911 — Porfiriato", "Porfirio Díaz", "Huelgas de Cananea y Río Blanco", "Francisco I. Madero"],
    6: ["1910 — Plan de San Luis (Madero)", "1913 — Decena Trágica", "Venustiano Carranza · Pancho Villa · Emiliano Zapata", "1917 — Constitución (Querétaro), artículos 27 y 123"],
    7: ["1929 — Fundación del PNR", "Plutarco Elías Calles — Maximato (1928-1934)", "Lázaro Cárdenas (1934-1940)", "1938 — Expropiación petrolera"],
    8: ["1940-1952 — Unidad Nacional", "1952-1970 — \"Milagro mexicano\"", "1970-1982 — Desarrollo compartido", "1994 — TLCAN"]
  },
  "literatura.js": {
    1: ["Propósito, adecuación, cabalidad, coherencia", "Pirámide invertida (nota informativa)", "Desarrollo, nudo y desenlace"],
    2: ["Épico · Lírico · Dramático", "Realismo: Balzac, Flaubert, Pérez Galdós", "Contemporánea: García Márquez, Borges, Rulfo"],
    3: ["Resumen · Paráfrasis · Cita textual · Comentario", "Ficha bibliográfica vs. ficha hemerográfica"]
  },
  "geografia.js": {
    1: ["Latitud: 0° a 90° (N/S del Ecuador)", "Longitud: 0° a 180° (E/O de Greenwich)", "24 husos horarios de 15° cada uno", "Meridiano 180° — línea de cambio de fecha", "Cinturón de Fuego del Pacífico"],
    2: ["Efecto invernadero", "Migración sur-norte (internacional) y campo-ciudad (nacional)", "FMI y empresas trasnacionales", "1994 — TLCAN"]
  }
};

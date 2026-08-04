// app.js — lógica compartida por cualquier página de materia.
// Cada página de materia debe cargar antes su archivo data/<materia>.js
// (que define window.SUBJECT_DATA[key]) y definir:
//   window.TEMAS, window.SUBJECT_LABEL, window.SUBJECT_KEY, window.SUBJECT_FEATURES

(function () {
  const temas = window.TEMAS || [];
  const subjectLabel = window.SUBJECT_LABEL || "Materia";
  const features = window.SUBJECT_FEATURES || { formulario: false, timeline: false };
  let current = 0;
  let reviewMode = false;
  let formularioOpen = false;
  const solved = temas.map(() => new Map()); // índice ejercicio -> índice opción elegida

  const DATE_RE = /^(\d{3,4}(?:[-–]\d{3,4})?)\s*—\s*(.+)$/;

  function splitDatosClave(lista) {
    const fechas = [];
    const otros = [];
    (lista || []).forEach((item) => {
      const match = item.match(DATE_RE);
      if (match) {
        fechas.push({ year: match[1], label: match[2] });
      } else {
        otros.push(item);
      }
    });
    return { fechas, otros };
  }

  // Selecciona un tema a partir de la URL (#tema-3) si existe, al cargar la página.
  function initialTemaFromHash() {
    const m = (location.hash || "").match(/tema-(\d+)/);
    if (m) {
      const idx = temas.findIndex((t) => t.n === parseInt(m[1], 10));
      if (idx >= 0) return idx;
    }
    return 0;
  }
  current = initialTemaFromHash();

  function renderSidebar() {
    const sb = document.getElementById("sidebar");
    sb.innerHTML = "";

    const brandLabel = document.createElement("p");
    brandLabel.className = "brand";
    brandLabel.innerHTML = '<a href="index.html">Guía de examen · UNAM</a>';

    const brandTitle = document.createElement("h1");
    brandTitle.className = "brand-title";
    brandTitle.textContent = subjectLabel;

    sb.appendChild(brandLabel);
    sb.appendChild(brandTitle);

    const reviewBtn = document.createElement("button");
    reviewBtn.className = "review-toggle-btn" + (reviewMode ? " active" : "");
    reviewBtn.innerHTML = reviewMode
      ? "← Volver a ejercicios"
      : "🖨 Modo repaso exprés";
    reviewBtn.onclick = () => {
      reviewMode = !reviewMode;
      render();
      window.scrollTo(0, 0);
    };
    sb.appendChild(reviewBtn);

    if (!reviewMode) {
      temas.forEach((t, i) => {
        const btn = document.createElement("button");
        btn.className = "tema-btn" + (i === current ? " active" : "");
        btn.innerHTML =
          '<span class="tema-num">' +
          String(t.n).padStart(2, "0") +
          '</span><span>' +
          t.titulo +
          "</span>";
        btn.onclick = () => {
          current = i;
          history.replaceState(null, "", "#tema-" + t.n);
          render();
          window.scrollTo(0, 0);
        };
        sb.appendChild(btn);
      });
    }

    const progWrap = document.createElement("div");
    progWrap.className = "progress-wrap";
    const totalEj = temas.reduce((a, t) => a + t.ejercicios.length, 0);
    const doneEj = solved.reduce((a, s) => a + s.size, 0);
    let correctEj = 0;
    solved.forEach((map, ti) => {
      map.forEach((chosenIdx, ej) => {
        if (chosenIdx === temas[ti].ejercicios[ej].correcta) correctEj++;
      });
    });
    const pct = totalEj ? Math.round((doneEj / totalEj) * 100) : 0;
    progWrap.innerHTML =
      '<div class="progress-label">Progreso de repaso</div>' +
      '<div class="progress-bar"><div class="progress-fill" style="width:' +
      pct +
      '%"></div></div>' +
      '<div class="progress-text">' +
      doneEj +
      " / " +
      totalEj +
      " respondidos · " +
      correctEj +
      " correctos</div>";
    sb.appendChild(progWrap);

    const back = document.createElement("a");
    back.className = "back-link";
    back.href = "index.html";
    back.textContent = "← Todas las materias";
    sb.appendChild(back);
  }

  // ---- Bloque "Datos clave": chips + línea de tiempo opcional ----
  function renderDatosClave(container, t) {
    const datos = t.datosClave || [];
    if (!datos.length) return;

    const h2 = document.createElement("h2");
    h2.className = "section-title";
    h2.textContent = "Datos clave";
    container.appendChild(h2);

    const { fechas, otros } = splitDatosClave(datos);

    if (features.timeline && fechas.length >= 2) {
      const tl = document.createElement("div");
      tl.className = "timeline";
      fechas
        .slice()
        .sort((a, b) => parseInt(a.year) - parseInt(b.year))
        .forEach((f) => {
          const item = document.createElement("div");
          item.className = "timeline-item";
          item.innerHTML =
            '<div class="timeline-year">' +
            f.year +
            '</div><div class="timeline-dot"></div><div class="timeline-label">' +
            f.label +
            "</div>";
          tl.appendChild(item);
        });
      container.appendChild(tl);

      if (otros.length) {
        const chipRow = document.createElement("div");
        chipRow.className = "chip-row";
        otros.forEach((o) => {
          const chip = document.createElement("span");
          chip.className = "chip";
          chip.textContent = o;
          chipRow.appendChild(chip);
        });
        container.appendChild(chipRow);
      }
    } else {
      const chipRow = document.createElement("div");
      chipRow.className = "chip-row";
      datos.forEach((o) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = o;
        chipRow.appendChild(chip);
      });
      container.appendChild(chipRow);
    }
  }

  // ---- Formulario fijo (Matemáticas, Física, Química) ----
  function renderFormularioFlotante(root, t) {
    if (!features.formulario) return;
    const datos = t.datosClave || [];
    if (!datos.length) return;

    const fab = document.createElement("button");
    fab.className = "formulario-fab no-print";
    fab.textContent = formularioOpen ? "✕ Cerrar" : "∑ Formulario";
    fab.onclick = () => {
      formularioOpen = !formularioOpen;
      render();
    };
    root.appendChild(fab);

    if (formularioOpen) {
      const panel = document.createElement("div");
      panel.className = "formulario-panel no-print";
      panel.innerHTML =
        '<div class="formulario-panel-title">Tema ' +
        t.n +
        " — " +
        t.titulo +
        "</div>";
      const list = document.createElement("div");
      list.className = "formulario-list";
      datos.forEach((f) => {
        const row = document.createElement("div");
        row.className = "formulario-item";
        row.textContent = f;
        list.appendChild(row);
      });
      panel.appendChild(list);
      root.appendChild(panel);
    }
  }

  // ---- Modo repaso exprés: todos los temas, condensado, sin ejercicios ----
  function renderReviewMode() {
    const m = document.getElementById("main");
    m.innerHTML = "";
    m.classList.add("review-content");

    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "Modo repaso exprés · " + subjectLabel;
    m.appendChild(eyebrow);

    const h1 = document.createElement("h1");
    h1.className = "tema-title";
    h1.textContent = subjectLabel + " — repaso condensado";
    m.appendChild(h1);

    const printBtn = document.createElement("button");
    printBtn.className = "print-btn no-print";
    printBtn.textContent = "🖨 Imprimir / guardar como PDF";
    printBtn.onclick = () => window.print();
    m.appendChild(printBtn);

    temas.forEach((t) => {
      const block = document.createElement("section");
      block.className = "review-tema-block";

      const h2 = document.createElement("h2");
      h2.className = "review-tema-title";
      h2.textContent = t.n + ". " + t.titulo;
      block.appendChild(h2);

      const ul = document.createElement("ul");
      ul.className = "puntos";
      t.puntos.forEach((pt) => {
        const li = document.createElement("li");
        li.textContent = pt;
        ul.appendChild(li);
      });
      block.appendChild(ul);

      renderDatosClave(block, t);

      m.appendChild(block);
    });

    const foot = document.createElement("footer");
    foot.className = "note";
    foot.textContent =
      "Repaso condensado de " +
      subjectLabel +
      " — solo puntos esenciales y datos clave, sin ejercicios. Ideal para imprimir antes del examen.";
    m.appendChild(foot);
  }

  function renderMain() {
    const m = document.getElementById("main");
    m.classList.remove("review-content");

    // Limpia cualquier formulario fijo previo (vive fuera de #main, en .app)
    document.querySelectorAll(".formulario-fab, .formulario-panel").forEach((el) => el.remove());

    if (reviewMode) {
      renderReviewMode();
      return;
    }

    const t = temas[current];
    m.innerHTML = "";

    const eyebrow = document.createElement("p");
    eyebrow.className = "eyebrow";
    eyebrow.textContent =
      "Tema " + t.n + " de " + temas.length + " · " + subjectLabel;
    m.appendChild(eyebrow);

    const h1 = document.createElement("h1");
    h1.className = "tema-title";
    h1.textContent = t.titulo;
    m.appendChild(h1);

    const h2a = document.createElement("h2");
    h2a.className = "section-title";
    h2a.textContent = "Puntos esenciales";
    m.appendChild(h2a);

    const ul = document.createElement("ul");
    ul.className = "puntos";
    t.puntos.forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      ul.appendChild(li);
    });
    m.appendChild(ul);

    renderDatosClave(m, t);

    const h2b = document.createElement("h2");
    h2b.className = "section-title";
    h2b.textContent = "Ejercicios de práctica (" + t.ejercicios.length + ")";
    m.appendChild(h2b);

    t.ejercicios.forEach((ej, i) => {
      const card = document.createElement("div");
      card.className = "ejercicio" + (solved[current].has(i) ? " solved" : "");
      card.id = "ej-" + i;

      const enun = document.createElement("div");
      enun.className = "ej-enun";
      enun.innerHTML = '<span class="ej-num">' + (i + 1) + ".</span>" + ej.p;
      card.appendChild(enun);

      const optsWrap = document.createElement("div");
      optsWrap.className = "opciones";
      const letras = ["A", "B", "C", "D"];
      const feedback = document.createElement("div");

      function paintButtons(selectedIdx) {
        Array.from(optsWrap.children).forEach((btn, oi) => {
          btn.disabled = true;
          if (oi === ej.correcta) {
            btn.classList.add("correct");
          } else if (oi === selectedIdx) {
            btn.classList.add("incorrect");
          } else {
            btn.classList.add("faded");
          }
        });
      }

      ej.opciones.forEach((opt, oi) => {
        const btn = document.createElement("button");
        btn.className = "opcion-btn";
        btn.innerHTML =
          '<span class="opcion-letra">' + letras[oi] + ".</span><span>" + opt + "</span>";
        btn.onclick = () => {
          solved[current].set(i, oi);
          card.classList.add("solved");
          paintButtons(oi);
          feedback.className =
            "feedback-line " + (oi === ej.correcta ? "correct" : "incorrect");
          feedback.textContent =
            oi === ej.correcta ? "✓ Correcto" : "✗ Incorrecto — la respuesta correcta está marcada";
          renderSidebar();
        };
        optsWrap.appendChild(btn);
      });

      if (solved[current].has(i)) {
        const chosen = solved[current].get(i);
        paintButtons(chosen);
        feedback.className =
          "feedback-line " + (chosen === ej.correcta ? "correct" : "incorrect");
        feedback.textContent =
          chosen === ej.correcta ? "✓ Correcto" : "✗ Incorrecto — la respuesta correcta está marcada";
      }

      card.appendChild(optsWrap);
      card.appendChild(feedback);

      m.appendChild(card);
    });

    const navRow = document.createElement("div");
    navRow.className = "nav-buttons";
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "← Tema anterior";
    prevBtn.disabled = current === 0;
    prevBtn.onclick = () => {
      current--;
      history.replaceState(null, "", "#tema-" + temas[current].n);
      render();
      window.scrollTo(0, 0);
    };
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Siguiente tema →";
    nextBtn.disabled = current === temas.length - 1;
    nextBtn.onclick = () => {
      current++;
      history.replaceState(null, "", "#tema-" + temas[current].n);
      render();
      window.scrollTo(0, 0);
    };
    navRow.appendChild(prevBtn);
    navRow.appendChild(nextBtn);
    m.appendChild(navRow);

    const foot = document.createElement("footer");
    foot.className = "note";
    foot.textContent =
      "Guía basada en el temario oficial de " +
      subjectLabel +
      " para el examen de selección UNAM. Elige la opción que consideres correcta en cada ejercicio para recibir retroalimentación inmediata.";
    m.appendChild(foot);

    renderFormularioFlotante(document.querySelector(".app"), t);
  }

  function render() {
    renderSidebar();
    renderMain();
  }

  render();
})();

// app.js — lógica compartida por cualquier página de materia.
// Cada página de materia debe cargar antes su archivo data/<materia>.js
// (que define `const TEMAS = [...]`) y definir `window.SUBJECT_LABEL`.

(function () {
  const temas = window.TEMAS || [];
  const subjectLabel = window.SUBJECT_LABEL || "Materia";
  let current = 0;
  const solved = temas.map(() => new Map()); // índice ejercicio -> índice opción elegida

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
        render();
        window.scrollTo(0, 0);
      };
      sb.appendChild(btn);
    });

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

  function renderMain() {
    const m = document.getElementById("main");
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

      const ul = document.createElement("div");
      ul.className = "opciones";
      const letras = ["A", "B", "C", "D"];
      const feedback = document.createElement("div");

      function paintButtons(selectedIdx) {
        Array.from(ul.children).forEach((btn, oi) => {
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
        ul.appendChild(btn);
      });

      if (solved[current].has(i)) {
        const chosen = solved[current].get(i);
        paintButtons(chosen);
        feedback.className =
          "feedback-line " + (chosen === ej.correcta ? "correct" : "incorrect");
        feedback.textContent =
          chosen === ej.correcta ? "✓ Correcto" : "✗ Incorrecto — la respuesta correcta está marcada";
      }

      card.appendChild(ul);
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
      render();
      window.scrollTo(0, 0);
    };
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Siguiente tema →";
    nextBtn.disabled = current === temas.length - 1;
    nextBtn.onclick = () => {
      current++;
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
  }

  function render() {
    renderSidebar();
    renderMain();
  }

  render();
})();

// index.js — lógica de la página de inicio: tarjetas de materias + buscador global.
// Requiere que assets/subjects.js y todos los data/*.js ya se hayan cargado
// (cada uno deja su contenido en window.SUBJECT_DATA[key]).

(function () {
  const SUBJECTS = window.SUBJECTS || [];

  // ---- Tarjetas de materias ----
  function renderGrid() {
    const grid = document.getElementById("subject-grid");
    grid.innerHTML = "";
    SUBJECTS.forEach((s, i) => {
      const a = document.createElement("a");
      a.className = "subject-card";
      a.href = s.file;
      a.innerHTML =
        '<span class="num">' +
        String(i + 1).padStart(2, "0") +
        "</span><h3>" +
        s.label +
        "</h3><p>" +
        s.description +
        '</p><span class="tag">Disponible</span>';
      grid.appendChild(a);
    });
  }
  renderGrid();

  // ---- Buscador global ----
  const input = document.getElementById("global-search");
  const resultsBox = document.getElementById("search-results");
  const grid = document.getElementById("subject-grid");

  function norm(s) {
    return (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // quita acentos para buscar sin tilde
  }

  function collectMatches(query) {
    const q = norm(query);
    const matches = []; // { subjectLabel, file, temaN, temaTitulo, snippetType, snippet }

    SUBJECTS.forEach((s) => {
      const temas = (window.SUBJECT_DATA && window.SUBJECT_DATA[s.key]) || [];
      temas.forEach((t) => {
        let hit = null;

        if (norm(t.titulo).includes(q)) {
          hit = { type: "Tema", text: t.titulo };
        }
        if (!hit) {
          const p = (t.puntos || []).find((x) => norm(x).includes(q));
          if (p) hit = { type: "Punto esencial", text: p };
        }
        if (!hit) {
          const d = (t.datosClave || []).find((x) => norm(x).includes(q));
          if (d) hit = { type: "Dato clave", text: d };
        }
        if (!hit) {
          const e = (t.ejercicios || []).find((x) => norm(x.p).includes(q));
          if (e) hit = { type: "Ejercicio", text: e.p };
        }

        if (hit) {
          matches.push({
            subjectLabel: s.label,
            file: s.file,
            temaN: t.n,
            temaTitulo: t.titulo,
            matchType: hit.type,
            snippet: hit.text
          });
        }
      });
    });

    return matches;
  }

  function highlight(text, query) {
    const idx = norm(text).indexOf(norm(query));
    if (idx === -1) return text;
    return (
      escapeHtml(text.slice(0, idx)) +
      "<mark>" +
      escapeHtml(text.slice(idx, idx + query.length)) +
      "</mark>" +
      escapeHtml(text.slice(idx + query.length))
    );
  }

  function escapeHtml(s) {
    const div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  function renderResults(query) {
    const matches = collectMatches(query).slice(0, 40);

    if (!matches.length) {
      resultsBox.innerHTML =
        '<p class="search-empty">Sin resultados para “' + escapeHtml(query) + '”.</p>';
      resultsBox.classList.add("open");
      return;
    }

    // Agrupar por materia
    const bySubject = {};
    matches.forEach((m) => {
      bySubject[m.subjectLabel] = bySubject[m.subjectLabel] || [];
      bySubject[m.subjectLabel].push(m);
    });

    resultsBox.innerHTML = "";
    Object.keys(bySubject).forEach((subjectLabel) => {
      const group = document.createElement("div");
      group.className = "search-group";

      const h4 = document.createElement("div");
      h4.className = "search-group-title";
      h4.textContent = subjectLabel;
      group.appendChild(h4);

      bySubject[subjectLabel].forEach((m) => {
        const item = document.createElement("a");
        item.className = "search-item";
        item.href = m.file + "#tema-" + m.temaN;
        item.innerHTML =
          '<span class="search-item-tema">Tema ' +
          m.temaN +
          " · " +
          escapeHtml(m.temaTitulo) +
          '</span><span class="search-item-type">' +
          m.matchType +
          '</span><span class="search-item-snippet">' +
          highlight(m.snippet, query) +
          "</span>";
        group.appendChild(item);
      });

      resultsBox.appendChild(group);
    });

    resultsBox.classList.add("open");
  }

  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (q.length < 2) {
      resultsBox.classList.remove("open");
      resultsBox.innerHTML = "";
      grid.style.display = "";
      return;
    }
    grid.style.display = "none";
    renderResults(q);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      input.value = "";
      resultsBox.classList.remove("open");
      resultsBox.innerHTML = "";
      grid.style.display = "";
      input.blur();
    }
  });
})();

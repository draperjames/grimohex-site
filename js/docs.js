(() => {
  const docs = [
    ["manual/index", "Manual Index", "The generated GrimoHex documentation index."],
    ["manual/quick-start", "Quick Start", "Make a first beat, load or record samples, and save a project."],
    ["manual/interface-overview", "Interface Overview", "Understand the main screen, top bar, transport, pages, and pad grid."],
    ["manual/ui-reference", "UI Reference", "Browse current screens, controls, sheets, gestures, and interaction details."],
    ["manual/feature-reference", "Feature Reference", "Review the current implementation status of major features."],
    ["manual/transport-and-patterns", "Transport and Patterns", "Pattern length, tempo, swing, playback, banks, and pattern management."],
    ["manual/tracks-and-pads", "Tracks and Pads", "Audio tracks, MIDI tracks, pad modes, selection, and triggering."],
    ["manual/sequencer", "Sequencer", "Steps, pages, parameter locks, timing, conditions, and retrig behavior."],
    ["manual/parameter-pages", "Parameter Pages", "STEP, SOURCE, FILTER, LEVEL, MOTION, and page-level controls."],
    ["manual/sampler", "Sampler", "Sample loading, playback modes, start and end points, and slot behavior."],
    ["manual/sample-recording", "Sample Recording", "Recording sources, capture flow, trimming, and assigning samples."],
    ["manual/sample-slicing", "Sample Slicing", "Slice mode, equal slicing, transient slicing, and slice playback."],
    ["manual/midi", "MIDI", "MIDI tracks, note output, virtual ports, and external gear notes."],
    ["manual/effects", "Effects", "Global effects, sends, sound shaping, and performance processing."],
    ["manual/mixer-and-buses", "Mixer and Buses", "Track levels, panning, sends, buses, and signal routing."],
    ["manual/settings", "Settings", "App settings, audio behavior, and configurable workflow options."],
    ["manual/files-and-projects", "Files and Projects", "Project persistence, imported files, saved work, and storage behavior."],
    ["manual/troubleshooting", "Troubleshooting", "Common audio, sample, project, recording, and MIDI fixes."],
    ["manual/faq", "FAQ", "Short answers to common GrimoHex product and workflow questions."],
    ["manual/known-limitations", "Known Limitations", "Current gaps, partially implemented areas, and expected behavior notes."],
    ["manual/support", "Support", "Support contact guidance and the information to include in reports."],
    ["manual/privacy", "Privacy", "Documentation notes about local data, microphone, files, audio, and MIDI."]
  ].map(([slug, title, description]) => ({
    slug,
    title,
    description,
    path: `docs/${slug}.md`
  }));

  const docsBySlug = new Map(docs.map((doc) => [doc.slug, doc]));

  const escapeHtml = (value) => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const normalizeSlug = (value) => {
    if (!value) return "";
    return value
      .split("#")[0]
      .split("?")[0]
      .replace(/^\.?\//, "")
      .replace(/^docs\//, "")
      .replace(/\.md$/, "")
      .replace(/\/+/g, "/");
  };

  const getDocFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const slug = normalizeSlug(params.get("doc") || "");
    return docsBySlug.get(slug);
  };

  const getCurrentDirectory = (slug) => {
    const parts = slug.split("/");
    parts.pop();
    return parts.length ? `${parts.join("/")}/` : "";
  };

  const resolveRelativeSlug = (href, currentSlug) => {
    const [pathPart, hashPart = ""] = href.split("#");
    if (!pathPart.endsWith(".md")) return null;

    const stack = getCurrentDirectory(currentSlug).split("/").filter(Boolean);
    pathPart.split("/").forEach((part) => {
      if (!part || part === ".") return;
      if (part === "..") {
        stack.pop();
      } else {
        stack.push(part);
      }
    });

    const slug = normalizeSlug(stack.join("/"));
    if (!docsBySlug.has(slug)) return null;
    return `docs.html?doc=${encodeURIComponent(slug)}${hashPart ? `#${hashPart}` : ""}`;
  };

  const renderInline = (text, currentSlug) => {
    let output = escapeHtml(text);

    output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
      const safeLabel = label;
      const decodedHref = href.replace(/&amp;/g, "&");
      const routedHref = resolveRelativeSlug(decodedHref, currentSlug) || decodedHref;
      const isAllowed = /^(https?:|mailto:|#|docs\.html\?doc=|docs\/)/.test(routedHref);
      if (!isAllowed) return safeLabel;
      return `<a href="${escapeHtml(routedHref)}">${safeLabel}</a>`;
    });

    return output;
  };

  const splitTableRow = (line) => line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

  const isTableSeparator = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);

  const renderTable = (lines, startIndex, currentSlug) => {
    const header = splitTableRow(lines[startIndex]);
    let index = startIndex + 2;
    const rows = [];

    while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
      rows.push(splitTableRow(lines[index]));
      index += 1;
    }

    const headHtml = header
      .map((cell) => `<th>${renderInline(cell, currentSlug)}</th>`)
      .join("");
    const bodyHtml = rows
      .map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell, currentSlug)}</td>`).join("")}</tr>`)
      .join("");

    return {
      html: `<div class="docs-table-wrap"><table><thead><tr>${headHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`,
      nextIndex: index
    };
  };

  const renderMarkdown = (markdown, currentSlug) => {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];
      const trimmed = line.trim();

      if (!trimmed) {
        index += 1;
        continue;
      }

      if (trimmed.startsWith("```")) {
        const language = trimmed.slice(3).trim();
        const codeLines = [];
        index += 1;
        while (index < lines.length && !lines[index].trim().startsWith("```")) {
          codeLines.push(lines[index]);
          index += 1;
        }
        index += 1;
        html.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        continue;
      }

      const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);
      if (heading) {
        const level = heading[1].length;
        const text = heading[2].replace(/\s+#*$/, "");
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        html.push(`<h${level} id="${id}">${renderInline(text, currentSlug)}</h${level}>`);
        index += 1;
        continue;
      }

      if (index + 1 < lines.length && line.includes("|") && isTableSeparator(lines[index + 1])) {
        const table = renderTable(lines, index, currentSlug);
        html.push(table.html);
        index = table.nextIndex;
        continue;
      }

      if (/^[-*]\s+/.test(trimmed)) {
        const items = [];
        while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
          items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
          index += 1;
        }
        html.push(`<ul>${items.map((item) => `<li>${renderInline(item, currentSlug)}</li>`).join("")}</ul>`);
        continue;
      }

      if (/^\d+\.\s+/.test(trimmed)) {
        const items = [];
        while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
          items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
          index += 1;
        }
        html.push(`<ol>${items.map((item) => `<li>${renderInline(item, currentSlug)}</li>`).join("")}</ol>`);
        continue;
      }

      const paragraph = [trimmed];
      index += 1;
      while (
        index < lines.length &&
        lines[index].trim() &&
        !/^(#{1,6})\s+/.test(lines[index].trim()) &&
        !/^[-*]\s+/.test(lines[index].trim()) &&
        !/^\d+\.\s+/.test(lines[index].trim()) &&
        !lines[index].trim().startsWith("```") &&
        !(index + 1 < lines.length && lines[index].includes("|") && isTableSeparator(lines[index + 1]))
      ) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      html.push(`<p>${renderInline(paragraph.join(" "), currentSlug)}</p>`);
    }

    return html.join("\n");
  };

  const renderNav = (activeSlug) => {
    const nav = document.getElementById("docs-reader-nav");
    if (!nav) return;

    nav.innerHTML = docs
      .map((doc) => {
        const active = doc.slug === activeSlug ? ' aria-current="page"' : "";
        return `<a href="docs.html?doc=${encodeURIComponent(doc.slug)}"${active}>${escapeHtml(doc.title)}</a>`;
      })
      .join("");
  };

  const showReader = async (doc) => {
    const indexSection = document.getElementById("docs-index-section");
    const readerSection = document.getElementById("docs-reader-section");
    const reader = document.getElementById("docs-reader");
    const pageTitle = document.getElementById("docs-page-title");
    const pageLede = document.getElementById("docs-page-lede");
    if (!indexSection || !readerSection || !reader || !pageTitle || !pageLede) return;

    indexSection.hidden = true;
    readerSection.hidden = false;
    pageTitle.textContent = doc.title;
    pageLede.textContent = doc.description;
    document.title = `${doc.title} | GrimoHex Documentation`;
    renderNav(doc.slug);

    reader.innerHTML = `
      <div class="docs-reader-toolbar">
        <a class="text-link" href="docs.html">All documentation</a>
        <a class="text-link" href="${escapeHtml(doc.path)}">View raw Markdown</a>
      </div>
      <p class="docs-loading">Loading documentation...</p>
    `;

    try {
      const response = await fetch(doc.path, { cache: "no-store" });
      if (!response.ok) throw new Error(`Unable to load ${doc.path}`);
      const markdown = await response.text();
      reader.innerHTML = `
        <div class="docs-reader-toolbar">
          <a class="text-link" href="docs.html">All documentation</a>
          <a class="text-link" href="${escapeHtml(doc.path)}">View raw Markdown</a>
        </div>
        <div class="docs-rendered">
          ${renderMarkdown(markdown, doc.slug)}
        </div>
      `;
    } catch (error) {
      reader.innerHTML = `
        <div class="docs-reader-toolbar">
          <a class="text-link" href="docs.html">All documentation</a>
          <a class="text-link" href="${escapeHtml(doc.path)}">View raw Markdown</a>
        </div>
        <div class="content-block docs-error">
          <h2>Documentation could not load</h2>
          <p>This page is static and loads generated Markdown files from the site. Try opening it from the published website or a local static server.</p>
          <p><a class="text-link" href="${escapeHtml(doc.path)}">Open the source Markdown file</a></p>
        </div>
      `;
      console.error(error);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const doc = getDocFromUrl();
    if (doc) {
      showReader(doc);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.has("doc")) {
      const title = document.getElementById("docs-page-title");
      const lede = document.getElementById("docs-page-lede");
      if (title) title.textContent = "Documentation Not Found";
      if (lede) lede.textContent = "Choose a guide from the documentation index.";
    }
  });
})();

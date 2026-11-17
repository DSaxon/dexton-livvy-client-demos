/*
 * Shared behaviour for all three NCA demos.
 * Each demo defines window.VIEWS = { home(){}, projects(){}, ... }
 * returning HTML strings, plus optional window.afterRender(id).
 * Routes look like  #/incubator  or  #/projects/mill  (scrolls to id="mill").
 */
(function () {
  const D = window.NCA;

  window.esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  window.gal = (name) => `../assets/gallery/${name}.jpg`;
  window.pendingBadge = (cls = "pending") =>
    D.boysBaking.pending ? `<span class="${cls}">Placeholder — content coming from client</span>` : "";

  function parse() {
    const parts = (location.hash.replace(/^#\/?/, "") || "home").split("/");
    const page = window.VIEWS[parts[0]] ? parts[0] : "home";
    return { page, anchor: parts[1] };
  }

  function render() {
    const { page, anchor } = parse();
    const app = document.getElementById("app");
    app.innerHTML = window.VIEWS[page](D);
    const item = D.nav.find((n) => n.id === page);
    document.title = (page === "home" ? "" : item.label + " · ") + D.org.name;
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const on = a.dataset.nav === page;
      a.classList.toggle("active", on);
      on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    document.body.classList.remove("menu-open");
    document.body.dataset.page = page;
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) return requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
    window.scrollTo(0, 0);
    window.afterRender && window.afterRender(page);
  }

  // Mobile menu
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-menu-toggle]");
    if (t) {
      const open = document.body.classList.toggle("menu-open");
      t.setAttribute("aria-expanded", open);
    }
  });

  // Lightbox for gallery images
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = '<button aria-label="Close">×</button><img alt="">';
  document.addEventListener("DOMContentLoaded", () => document.body.appendChild(lb));
  document.addEventListener("click", (e) => {
    const img = e.target.closest("[data-lightbox]");
    if (img) {
      e.preventDefault();
      lb.querySelector("img").src = img.getAttribute("href") || img.src;
      lb.classList.add("open");
    } else if (e.target.closest(".lightbox")) lb.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && lb.classList.remove("open"));

  // Contact form → opens the visitor's email app (demo only; wire to a form service on the live site)
  document.addEventListener("submit", (e) => {
    const f = e.target.closest("[data-mailto-form]");
    if (!f) return;
    e.preventDefault();
    const v = Object.fromEntries(new FormData(f));
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || ""}\nInterested in: ${v.topic || ""}\n\n${v.message}`;
    location.href = `mailto:${D.org.email}?subject=${encodeURIComponent("Website inquiry — " + (v.topic || "General"))}&body=${encodeURIComponent(body)}`;
  });

  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", render);
})();

/*
 * Shared behaviour for the three PPLG demos.
 * Each demo defines window.VIEWS = { home(d){}, about(d){}, ... } returning HTML.
 * Routes: #/services/food scrolls to id="food"; #/book/hear-me-out preselects that session.
 */
(function () {
  const D = window.PPLG;
  window.money = (n) => "$" + n.toLocaleString();
  window.ph = (v, cls = "ph") => (/^\[.*\]$/.test(v) ? `<span class="${cls}">${v}</span>` : v);

  function parse() {
    const [page, arg] = (location.hash.replace(/^#\/?/, "") || "home").split("/");
    return { page: window.VIEWS[page] ? page : "home", arg };
  }

  function render() {
    const { page, arg } = parse();
    document.getElementById("app").innerHTML = window.VIEWS[page](D, arg);
    const item = D.nav.find((n) => n.id === page);
    document.title = (page === "home" ? "" : item.label + " · ") + D.firm.name;
    document.querySelectorAll("[data-nav]").forEach((a) => {
      const on = a.dataset.nav === page;
      a.classList.toggle("active", on);
      on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    document.body.classList.remove("menu-open");
    document.body.dataset.page = page;
    const sel = document.querySelector("select[name=session]");
    if (sel && arg) { sel.value = arg; sel.dispatchEvent(new Event("change", { bubbles: true })); }
    const el = page !== "book" && arg && document.getElementById(arg);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    else window.scrollTo(0, 0);
    window.afterRender && window.afterRender(page);
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-menu-toggle]");
    if (t) t.setAttribute("aria-expanded", document.body.classList.toggle("menu-open"));
  });

  // Session picker → live price
  document.addEventListener("change", (e) => {
    if (e.target.name !== "session") return;
    const s = D.sessions.find((x) => x.id === e.target.value);
    const out = document.querySelector("[data-price]");
    if (out) out.textContent = s ? money(s.price) : "—";
  });

  // Demo-only forms: show a confirmation instead of sending.
  document.addEventListener("submit", (e) => {
    const f = e.target.closest("[data-demo-form]");
    if (!f) return;
    e.preventDefault();
    f.innerHTML = `<div class="sent"><strong>Thank you!</strong><p>This is a demo form. On the live site, this will send your request to the firm${
      f.dataset.demoForm === "book" ? " and take you to secure payment" : ""
    }.</p></div>`;
  });

  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", render);
})();

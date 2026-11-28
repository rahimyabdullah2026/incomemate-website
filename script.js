(function () {
  var header = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (header && toggle && nav) {
    var compact = window.matchMedia("(max-width: 767px)");

    function updateHeaderHeight() {
      document.documentElement.style.setProperty("--nav-height", header.offsetHeight + "px");
    }

    function setMenu(expanded) {
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
      nav.hidden = compact.matches && !expanded;
      updateHeaderHeight();
    }

    function updateNavigation() {
      if (!compact.matches && document.activeElement === toggle) header.querySelector(".brand").focus();
      toggle.hidden = !compact.matches;
      if (compact.matches && nav.contains(document.activeElement)) toggle.focus();
      setMenu(false);
    }

    header.classList.add("nav-enhanced");
    updateNavigation();
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("click", function (e) {
      if (!header.contains(e.target) && toggle.getAttribute("aria-expanded") === "true") {
        if (nav.contains(document.activeElement)) toggle.focus();
        setMenu(false);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    compact.addEventListener("change", updateNavigation);
    if (typeof ResizeObserver === "function") new ResizeObserver(updateHeaderHeight).observe(header);
    else window.addEventListener("resize", updateHeaderHeight);
  }

  var dialog = document.getElementById("doc-dialog");
  if (!dialog || typeof dialog.showModal !== "function") return;
  var title = document.getElementById("dlg-title");
  var body = document.getElementById("dlg-body");
  var opener = null;

  function open(name, trigger) {
    fetch(name + ".html", { credentials: "omit" })
      .then(function (r) { if (!r.ok) throw new Error(); return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, "text/html").querySelector("main.doc");
        if (!doc) throw new Error();
        title.textContent = name === "privacy" ? "Privacy Policy" : "Support";
        body.replaceChildren();
        Array.from(doc.childNodes).forEach(function (n) { body.appendChild(document.importNode(n, true)); });
        opener = trigger || null;
        if (!dialog.open) dialog.showModal();
        body.scrollTop = 0;
        history.replaceState(null, "", "#" + name);
      })
      .catch(function () { window.location.href = name + ".html"; });
  }

  document.querySelectorAll("[data-doc]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      open(a.getAttribute("data-doc"), a);
    });
  });

  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      e.preventDefault();
      dialog.close();
    }
  });
  dialog.querySelector(".dlg-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("close", function () {
    if (location.hash === "#privacy" || location.hash === "#support") history.replaceState(null, "", location.pathname);
    if (opener) opener.focus();
  });

  var h = location.hash.replace("#", "");
  if (h === "privacy" || h === "support") open(h, null);
})();

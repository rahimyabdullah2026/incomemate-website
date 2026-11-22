(function () {
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
  dialog.querySelector(".dlg-close").addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("close", function () {
    if (location.hash === "#privacy" || location.hash === "#support") history.replaceState(null, "", location.pathname);
    if (opener) opener.focus();
  });

  var h = location.hash.replace("#", "");
  if (h === "privacy" || h === "support") open(h, null);
})();

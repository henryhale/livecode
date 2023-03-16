let page, pagedoc, timeoutID;

const packages = [];

export function addPackage(url) {
  packages.push(url);
}

function loadScript(parent, pkgURL, next) {
  const s = document.createElement('script');
  s.setAttribute('async', 'false');
  s.setAttribute('src', pkgURL);
  s.addEventListener('load', next, false);
  parent.appendChild(s);
}

function runScript(code) {
  const stag = document.createElement('script');
  stag.textContent =
    'var __$fn_ = function() { try { ' +
    code +
    ' } catch(err) { console.log(err); } };';
  pagedoc.body.appendChild(stag);
  page.contentWindow.__$fn_.call();
}

export function renderPreview(iframe, { html, css, js }) {
  if (timeoutID) clearTimeout(timeoutID);
  timeoutID = setTimeout(() => {
    page = iframe.value;
    if (!page) return;
    pagedoc = page.contentWindow.document;
    pagedoc.head.innerHTML = '<style>' + css + '</style>';
    pagedoc.body.innerHTML = html;
    if (packages.length) {
      let i = 0;
      function nxt() {
        if (i === packages.length) return runScript(js);
        loadScript(pagedoc.body, packages[i++], nxt);
      }
      nxt();
    } else {
      runScript(js);
    }
  }, 300);
}

let page, pagedoc;

export function setupPreview(iframe) {
  page = iframe.value;
  pagedoc = page.contentWindow.document;
}

export function changeJS(code) {
  if (!page || !pagedoc) return;
  const scriptContent =
    'var __$fn_ = function() { try { ' +
    code +
    ' } catch(err) { console.log(err); } };';
  let stag = pagedoc.querySelector('script#stag');
  if (!stag) {
    stag = document.createElement('script');
    stag.id = 'stag';
    pagedoc.head.appendChild(stag);
  }
  stag.textContent = scriptContent;
  page.contentWindow.__$fn_.call();
}

export function changeHTML(code) {
  if (pagedoc.body) {
    pagedoc.body.innerHTML = code;
  } else {
    alert('not body tag');
  }
}

export function changeCSS(code) {
  if (!pagedoc) return;
  let xtag = pagedoc.querySelector('style#xtag');
  if (!xtag) {
    xtag = document.createElement('style');
    xtag.id = 'xtag';
    pagedoc.head.appendChild(xtag);
  }
  xtag.innerHTML = code;
}

/**
 * TODO: Ability to add packages using cdn links
 */

// const packages = [];

// export function addPackage(url) {
//   packages.push(url);
// }

// function addPackageScript(parent, pkgURL, next) {
//   const s = document.createElement('script');
//   s.setAttribute('async', 'false');
//   s.setAttribute('src', pkgURL);
//   s.addEventListener('load', next, false);
//   parent.appendChild(s);
// }

// export function loadAllPacakages() {
//   if (!pagedoc) return;
//   if (packages.length) {
//     let i = 0;
//     function nxt() {
//       if (i === packages.length) return;
//       addPackageScript(pagedoc.body, packages[i++], nxt);
//     }
//     nxt();
//   }
//   runScript(js);
// }, 300);
// }

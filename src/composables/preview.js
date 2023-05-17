// debounce changes in code, then execute it
let timer;
export default function setupPreview(iframe, html = '', css = '', js = '') {
  if (!iframe) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.writeln(
      `<style type="text/css">${css}</style>
      ${html}
      <script type="text/javascript">
        (() => {
          try {
            ${js}
          } catch(err) {
            console.error(err);
          }
        })();
      </script>`
    );
    doc.close();
  }, 200);
}

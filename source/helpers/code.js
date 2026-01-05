import JSZip from "jszip";

export function generatePageContent({ html, css, js }) {
    return (
        `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style type="text/css">${css}</style></head><body>${html}<script type="module">${js}</` +
        `script></body></html>`
    );
}

function downloadFile(blob, zip = false) {
    const link = document.createElement("a");
    const hash = new Date().getTime().toString(16);
    link.href = URL.createObjectURL(blob);
    link.download = `project-${hash}.${zip ? "zip" : "html"}`;
    link.click();
}

export function exportAsPage({ html = "", css = "", js = "" }) {
    const page = generatePageContent({ html, css, js });
    downloadFile(new Blob([page], { type: "text/html" }), false);
}

export function exportAsZip({ html = "", css = "", js = "" }) {
    const zip = new JSZip();

    zip.file(
        "index.html",
        "<!DOCTYPE html>" +
            '<html lang="en">' +
            "<head>" +
            '    <meta charset="UTF-8">' +
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
            "    <title>Document</title>" +
            '    <link rel="stylesheet" href="./style.css">' +
            "</head>" +
            "<body>" +
            html +
            '    <script src="./main.js"></script>' +
            // '    <script type="module" src="./main.js"></script>' +
            "</body>" +
            "</html>"
    );
    zip.file("style.css", css);
    zip.file("main.js", js);

    zip.generateAsync({ type: "blob" }).then(function (content) {
        downloadFile(content, true);
    });
}

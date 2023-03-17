import { LowSync } from 'lowdb';
import { LocalStorage } from 'lowdb/browser';

const dbName = 'livecode-backup';

const db = new LowSync(new LocalStorage(dbName));

export function restore() {
  db.read();
  return db.data;
}

export function backup(data) {
  db.data = data;
  db.write();
}

export const templateData = {
  'index.html':
    '<div id="app">\n  ' +
    '<h1>Hello, World!</h1>\n  ' +
    '<button>Count: 0</button>\n' +
    '</div>\n',
  'style.css':
    '#app {\n  color: #0d79d1;\n  text-align:center;\n  margin: 4rem 0;\n}\n\n' +
    'button {\n  ' +
    'cursor: pointer;\n  ' +
    'color: inherit;\n  ' +
    'background-color: #e6f4ff;\n  ' +
    'border-radius: 6px;\n  ' +
    'border: 0 none;\n  ' +
    'padding: 0.5rem 0.75rem;\n' +
    '}',
  'main.js':
    'let count = 0;\n\n' +
    'const btn = document.querySelector("button");\n\n' +
    'btn.addEventListener("click", function () {\n  ' +
    'btn.innerHTML = "Count: "+ (++count);\n' +
    '});\n\n' +
    'btn.click();\n',
};

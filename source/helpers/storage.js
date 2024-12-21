export const template = {
	'index.html': '<div id="app">\n  <h1>Hello, World!</h1>\n  <button>Count: 0</button>\n</div>\n',
	'style.css': "#app {\n  color: #0d79d1;\n  text-align:center;\n  margin: 4rem 0;\n}\n\nbutton {\n  cursor: pointer;\n  color: inherit;\n  background-color: #e6f4ff;\n  border-radius: 6px;\n  border: 0 none;\n  padding: 0.5rem 0.75rem;\n}",
	'main.js': 'let count = 0;\n\nconst btn = document.querySelector("button");\n\nbtn.onclick = () => {\n  btn.innerHTML = `Count: ${++count}`;\n};\n\nbtn.click();\n',
};

const STORAGE_KEY = "livecode-backup";

export function restore() {
	try {
		const value = window.localStorage.getItem(STORAGE_KEY);
		if (value) return JSON.parse(value);
	} catch (err) {
		console.error("[livecode] failed to read from local storage: ", err);
	}
	return undefined;
}

export function backup(data) {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	} catch (err) {
		console.error("[livecode] failed to write to local storage: ", err);
	}
}

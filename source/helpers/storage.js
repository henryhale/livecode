function saveData(key, data) {
    try {
        window.localStorage.setItem(key, data);
    } catch (err) {
        console.error("[livecode] failed to write to local storage: ", err);
    }
}

function getData(key, defaultValue = undefined) {
    try {
        const value = window.localStorage.getItem(key);
        if (value) return value;
    } catch (err) {
        console.error("[livecode] failed to read from local storage: ", err);
    }
    return defaultValue;
}

export const template = {
    "index.html":
        '<div id="app">\n  <h1>Hello, World!</h1>\n  <button>Count: 0</button>\n</div>\n',
    "style.css":
        "#app {\n  color: #0d79d1;\n  text-align:center;\n  margin: 4rem 0;\n}\n\nbutton {\n  cursor: pointer;\n  color: inherit;\n  background-color: #e6f4ff;\n  border-radius: 6px;\n  border: 0 none;\n  padding: 0.5rem 0.75rem;\n}",
    "main.js":
        'let count = 0;\n\nconst btn = document.querySelector("button");\n\nbtn.onclick = () => {\n  btn.textContent = `Count: ${++count}`;\n};\n\nbtn.click();\n'
};

// storage key for a new session in a different window or tab
const sessionKey = new URLSearchParams(window.location.search).get("session");

const STORAGE_KEY = sessionKey
    ? `livecode-window-${sessionKey}`
    : "livecode-backup";

export function restore() {
    const data = getData(STORAGE_KEY);
    return data ? JSON.parse(data) : data;
}

export function backup(data) {
    saveData(STORAGE_KEY, JSON.stringify(data));
}

const THEME_KEY = "livecode-theme";

export function saveTheme(theme) {
    saveData(THEME_KEY, theme);
}

export function getTheme() {
    return getData(THEME_KEY, "light");
}

import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { ref } from "vue";

// cache instances of codemirror for every file
const instances = new Map();

//  create a codemirror instance for a specific file and language
export default async function createEditor({ target, initialDoc, lang, file }) {
	if (instances.has(file)) {
		return instances.get(file);
	}

	const doc = ref("");

	const state = {
		doc: initialDoc || "",
		extensions: (await import("./editor-ext")).default(),
	};

	state.extensions.push(
		EditorState.allowMultipleSelections.of(true),
		EditorView.updateListener.of((e) => {
			doc.value = e.state.doc.toString();
		})
	);

	let languagePlugin;

	switch (lang) {
		case "html":
			languagePlugin = (await import("@codemirror/lang-html")).html();
			break;
		case "css":
			languagePlugin = (await import("@codemirror/lang-css")).css();
			break;
		case "js":
			languagePlugin = (
				await import("@codemirror/lang-javascript")
			).javascript();
			break;
		default:
			break;
	}

	if (languagePlugin) {
		state.extensions.push(languagePlugin);
	}

	const view = new EditorView({
		state: EditorState.create(state),
		parent: target,
	});

	const instance = { view, doc };

	instances.set(file, instance);

	return instance;
}

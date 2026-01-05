<script setup>
import { ref, onMounted, watchEffect, onBeforeUnmount } from "vue";
import { useAppStore } from "@/store";

const props = defineProps({
    lang: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
    file: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(["change"]);
const el = ref();

const store = useAppStore();

let editor;

onMounted(async () => {
    const createEditor = (await import("@/helpers/editor")).default;
    editor = await createEditor({
        target: el.value,
        lang: props.lang,
        initialDoc: props.content,
        file: props.file
    });
    watchEffect(() => emit("change", editor.doc.value));
    watchEffect(async () => {
        const mode = store.theme;

        let editorTheme;

        if (mode === "light") {
            const { githubLight } =
                await import("@fsegurai/codemirror-theme-github-light");
            editorTheme = githubLight;
        } else {
            const { githubDark } =
                await import("@fsegurai/codemirror-theme-github-dark");
            editorTheme = githubDark;
        }

        editor.view.dispatch({
            effects: editor.themeCompartment.reconfigure(editorTheme)
        });
    });
});

onBeforeUnmount(() => {
    editor?.view?.destroy();
});
</script>

<template>
    <div ref="el" class="editor"></div>
</template>

<style>
.cm-editor.cm-focused {
    outline: 0 none !important;
}

.cm-editor {
    height: calc(100vh - 78px);
}
</style>

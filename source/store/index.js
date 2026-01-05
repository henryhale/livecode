import { defineStore } from "pinia";
import { ref, reactive, watchEffect } from "vue";
import {
    backup,
    getTheme,
    restore,
    saveTheme,
    template
} from "@/helpers/storage";
import { useToast } from "@/components/ui/toast/use-toast";

const prevSession = restore() || template;

export const useAppStore = defineStore("app", () => {
    const layout = ref(window.innerWidth < 768 ? "row" : "column");

    const code = reactive({
        html: prevSession["index.html"],
        css: prevSession["style.css"],
        js: prevSession["main.js"]
    });

    const { toast } = useToast();

    const saveSession = () => {
        const html = code.html;
        const css = code.css;
        const js = code.js;
        backup({
            "index.html": html,
            "style.css": css,
            "main.js": js
        });
        toast({
            title: "Success",
            description: "Your changes have been saved locally."
        });
    };

    document.addEventListener("keydown", (ev) => {
        if (ev.ctrlKey && ev.key?.toLowerCase() === "s") {
            ev.preventDefault();
            saveSession();
        }
    });

    const theme = ref(getTheme());

    function switchTheme(mode) {
        if (mode == "light") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
        saveTheme(mode);
    }

    watchEffect(() => {
        switchTheme(theme.value);
    });

    return { layout, code, theme, saveSession };
});

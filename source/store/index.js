import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { backup, restore, template } from "@/helpers/storage";
import { useToast } from '@/components/ui/toast/use-toast'

const prevSession = restore() || template

export const useAppStore = defineStore("app", () => {
	const layout = ref(window.innerWidth < 768 ? 'row' : 'column');

	const code = reactive({
		html: prevSession['index.html'],
		css: prevSession['style.css'],
		js: prevSession['main.js'],
	});

	const { toast } = useToast()

	const saveSession = () => {
		const html = code.html
		const css = code.css
		const js = code.js
		backup({ 
			'index.html': html, 
			'style.css': css, 
			'main.js': js 
		})
		toast({
			title: 'Success',
			description: 'Your changes have been saved locally.',
		})
	}

	document.addEventListener('keydown', (ev) => {
		if (ev.ctrlKey && ev.key?.toLowerCase() === 's') {
			ev.preventDefault();
			saveSession();
		}
	});

	return { layout, code, saveSession };
});

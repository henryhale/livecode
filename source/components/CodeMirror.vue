<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const props = defineProps({
	lang: {
		type: String,
		default: '',
	},
	content: {
		type: String,
		default: '',
	},
	file: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['change']);
const el = ref();

let editor;

onMounted(async () => {
	const createEditor = (await import('@/helpers/editor')).default;
	editor = await createEditor({
		target: el.value,
		lang: props.lang,
		initialDoc: props.content,
		file: props.file,
	});
	watchEffect(() => emit('change', editor.doc.value));
});
</script>

<template>
	<div ref="el"></div>
</template>

<style>
.cm-editor.cm-focused {
	outline: 0 none !important;
}
</style>

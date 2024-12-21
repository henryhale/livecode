<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useAppStore } from '@/store'

const store = useAppStore()

const iframe = ref()

const content = computed(() => {
	return `<html><head><style type="text/css">${store.code.css}</style></head><body>${store.code.html}<script type="text/javascript">(function() { try { ${store.code.js} } catch(err) { console.error(err); } })();</` + `script></body></html>`
})

let tid;
function refreshPreview(x) {
	if (!iframe.value) return
	if (tid) clearTimeout(tid);
	tid = setTimeout(() => {
		const doc = iframe.value.contentWindow.document;
		doc.open();
		doc.writeln(content.value);
		doc.close();
	}, 200);
}

watchEffect(() => {
	if (content.value) refreshPreview()
})
</script>

<template>
	<iframe ref="iframe" src="about:blank" frameborder="0" title="preview" class="h-full w-full"></iframe>
</template>
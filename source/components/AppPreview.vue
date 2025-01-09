<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useAppStore } from '@/store'

const store = useAppStore()

const iframe = ref()

const content = computed(() => {
	return `<html><head><style type="text/css">${store.code.css}</style></head><body>${store.code.html}<script type="module">${store.code.js}</` + `script></body></html>`
})

let tid, objectURL;
function refreshPreview(x) {
	if (!iframe.value) return
	if (tid) clearTimeout(tid);
	tid = setTimeout(() => {
		if (objectURL) URL.revokeObjectURL(objectURL)
		const blob = new Blob([content.value], { type: 'text/html' })
		objectURL = URL.createObjectURL(blob)
		iframe.value.src = objectURL
	}, 300);
}

watchEffect(() => {
	if (content.value) refreshPreview()
})
</script>

<template>
	<iframe ref="iframe" src="about:blank" frameborder="0" title="preview" sandbox="allow-scripts" class="h-full w-full"></iframe>
</template>
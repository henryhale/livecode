<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useAppStore } from '@/store'
import { generatePageContent } from '@/helpers/code'

const store = useAppStore()

const iframe = ref()

const content = computed(() => {
	return generatePageContent(store.code)
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
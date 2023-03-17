<script setup>
import { reactive, ref, onMounted, watchEffect } from 'vue';

const props = defineProps({
  lang: {
    type: String,
    default: '',
  },
  initialDoc: {
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
  const createEditor = (await import('../composables/editor')).default;
  editor = await createEditor({
    target: el.value,
    lang: props.lang,
    initialDoc: props.initialDoc,
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

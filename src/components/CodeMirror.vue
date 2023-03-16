<script setup>
import createEditor from '../composables/editor';
import {
  defineProps,
  reactive,
  ref,
  onBeforeUnmount,
  onMounted,
  watchEffect,
} from 'vue';

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

onMounted(() => {
  editor = createEditor({
    target: el.value,
    lang: props.lang,
    initialDoc: props.initialDoc,
    file: props.file,
  });
  watchEffect(() => emit('change', editor.doc.value));
});

onBeforeUnmount(() => {
  // gracefully destroy (editor) instance
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

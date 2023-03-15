<script setup>
import createEditor from './init';
import {
  defineEmits,
  defineProps,
  reactive,
  ref,
  onMounted,
  watchEffect,
} from 'vue';

const props = defineProps({
  lang: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['change']);
const el = ref();
const tmp = ref('');
const cache = {};

let editor;

watchEffect(() => {
  const lang = props.lang;
  console.log('lang changed to ', lang);
  if (!lang) return;
  if (!cache[lang]) {
    cache[lang] = 'new';
  }
  tmp.value = cache[lang];
});

onMounted(() => {
  editor = createEditor(el.value);
  watchEffect(() => editor.setDoc(tmp.value));
  watchEffect(() => editor.setLanguage(props.lang));
  watchEffect(() => {
    const changed = editor.doc.value;
    console.log('current doc changed...', changed);
    cache[props.lang] = changed;
    emit('change', changed);
  });
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

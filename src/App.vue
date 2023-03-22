<script setup>
import NavBar from './components/NavBar.vue';
import CodeMirror from './components/CodeMirror.vue';
import {
  computed,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watchEffect,
} from 'vue';
import {
  changeCSS,
  changeHTML,
  changeJS,
  setupPreview,
} from './composables/preview';
import { backup, restore, templateData } from './composables/storage';

let fileData = restore();
if (!fileData || typeof fileData !== 'object') {
  fileData = templateData;
  backup(fileData);
}

const files = reactive(Object.assign({}, fileData));

function backupFiles(e) {
  if (e.ctrlKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
    console.log('backing up files...');
    backup(files);
    console.log('backup was successful...');
  }
}

const showPreview = ref(true);

const currentTab = ref('index.html');

function setTab(to) {
  currentTab.value = to;
}

function getLang(filename) {
  const ext = filename.split('.').pop();
  if (ext === 'js') return 'javascript';
  return ext;
}

function setCode(file, doc) {
  files[file] = doc;
}

const iframe = ref();

onMounted(() => {
  setupPreview(iframe);

  watchEffect(() => changeCSS(files['style.css']));
  watchEffect(() => {
    changeHTML(files['index.html']);
    changeJS(files['main.js']);
  });

  document.addEventListener('keydown', backupFiles, false);
});

onUnmounted(() => {
  document.removeEventListener('keydown', backupFiles, false);
});
</script>

<template>
  <div class="box">
    <nav-bar>
      <template #brand>
        <img class="w-6 h-6" src="/brand.svg" />
        <span><b>LiveCode</b></span>
      </template>
      <button
        class="btn"
        :class="{ active: showPreview }"
        @click="showPreview = !showPreview"
      >
        {{ !showPreview ? 'Show ' : 'Hide ' }} Preview
      </button>
    </nav-bar>
    <div class="main" :class="{ 'md:flex-row': showPreview }">
      <div
        class="flex-col h-full"
        :class="[showPreview ? 'hidden md:flex md:w-1/2' : 'flex']"
      >
        <div class="tabs">
          <button
            v-for="t in Object.keys(files)"
            :key="t"
            :class="{ active: currentTab === t }"
            @click="setTab(t)"
          >
            {{ t }}
          </button>
        </div>
        <div class="code">
          <div
            v-for="file in Object.keys(files)"
            :key="file"
            v-show="file === currentTab"
          >
            <CodeMirror
              :lang="getLang(file)"
              :file="file"
              :initialDoc="files[file]"
              @change="(doc) => setCode(file, doc)"
            />
          </div>
        </div>
      </div>
      <div
        v-show="showPreview"
        class="h-full"
        :class="{ 'md:w-1/2 md:border md:border-gray-200': showPreview }"
      >
        <iframe
          ref="iframe"
          src="about:blank"
          frameborder="0"
          title="preview"
        ></iframe>
      </div>
    </div>
  </div>
</template>

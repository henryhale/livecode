<script setup>
import NavBar from './components/NavBar.vue';
import CodeEditor from './components/editor/index.vue';
import { computed, reactive, ref, watchEffect } from 'vue';

const files = reactive({
  'index.html': '<h1>hello, world!</h1>',
  'style.css': ':root {}',
  'main.js': 'console.log(true);',
});

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

watchEffect(() => {
  console.log(files['index.html'], files['main.js'], files['style.css']);
});
</script>

<template>
  <div class="box">
    <nav-bar>
      <template #brand>
        <svg
          class="h-6 w-6"
          fill="#0f5cf5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#0f5cf5"
        >
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path
              d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"
            ></path>
          </g>
        </svg>
        <span>LiveCode</span>
      </template>
      <button class="btn">Code</button>
      <button class="btn">Preview</button>
    </nav-bar>
    <div class="main">
      <div>
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
            v-show="currentTab === file"
          >
            <CodeEditor
              :lang="getLang(file)"
              :file="file"
              :initialDoc="files[file]"
              @change="(doc) => setCode(file, doc)"
            />
          </div>
        </div>
      </div>
      <div>
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

<style scoped>
.box {
  @apply w-screen h-screen;
}
.btn {
  @apply px-3 py-1.5;
}
.main {
  @apply h-full flex flex-col md:flex-row pt-11;
}
.main > div {
  @apply h-full md:w-1/2 flex flex-col;
}
.tabs {
  @apply w-full flex flex-row pt-0.5 bg-slate-100;
}
.tabs > button {
  @apply px-4 py-1.5 opacity-50 hover:opacity-100 transition;
}
.tabs > button.active {
  @apply opacity-100 bg-white text-blue-600;
}
.code {
  @apply flex-grow pb-3 overflow-y-auto;
}
iframe {
  @apply h-full w-full;
}
</style>

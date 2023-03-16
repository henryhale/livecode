<script setup>
import AppIcon from './components/AppIcon.vue';
import NavBar from './components/NavBar.vue';
import CodeMirror from './components/CodeMirror.vue';
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';
import { addPackage, renderPreview } from './composables/preview';

const files = reactive({
  'index.html': '<h1>hello, world!</h1>',
  'style.css': 'h1 {\n\tcolor: red;\n}',
  'main.js': 'console.log(\n\tdocument.querySelector("h1")\n);',
});

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
  watchEffect(() => {
    renderPreview(iframe, {
      html: files['index.html'],
      css: files['style.css'],
      js: files['main.js'],
    });
  });
});
</script>

<template>
  <div class="box">
    <nav-bar>
      <template #brand>
        <AppIcon class="w-6 h-6" />
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
            v-show="currentTab === file"
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
        :class="{ 'md:w-1/2': showPreview }"
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

<script setup>
import AppIcon from './components/AppIcon.vue';
import NavBar from './components/NavBar.vue';
import CodeEditor from './components/editor/index.vue';
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';
import { addPackage, renderPreview } from './composables/preview';

const files = reactive({
  'index.html': '<h1>hello, world!</h1>',
  'style.css': ':root {}',
  'main.js': 'console.log(true);',
});

const showCode = ref(true);

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
        :class="{ active: showCode }"
        @click="showCode = true"
      >
        Code
      </button>
      <button
        class="btn"
        :class="{ active: !showCode }"
        @click="showCode = false"
      >
        Preview
      </button>
    </nav-bar>
    <div class="main">
      <div v-show="showCode">
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
      <div v-show="!showCode">
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

<script setup>
import NavBar from '../components/NavBar.vue';
import { ref } from 'vue';

const tabs = ['HTML', 'CSS', 'JavaScript'];

const currentTab = ref('HTML');

function setTab(to) {
  currentTab.value = to;
}
</script>

<template>
  <div>
    <nav-bar title="LiveCode" class="sm:py-2 sm:px-3">
      <template #default>
        <button
          v-for="t in tabs"
          :key="t"
          class="tab"
          :class="{ 'tab-active': currentTab === t }"
          @click="setTab(t)"
        >
          {{ t }}
        </button>
      </template>
      <template #dropdown>
        <li v-for="t in tabs" :key="t" @click="setTab(t)">
          <button :class="{ active: currentTab === t }">{{ t }}</button>
        </li>
      </template>
      <template #other>
        <button class="btn">Preview</button>
      </template>
    </nav-bar>
    <div></div>
  </div>
</template>

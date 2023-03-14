<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  label: {
    type: String,
    default: 'Item',
  },
});
</script>

<template>
  <li>
    <button>{{ label }}</button>
  </li>
</template>

<script setup></script>

<template>
  <div class="nav">
    <div>
      <div>
        <slot name="brand"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  @apply fixed top-0 left-0 right-0 border bg-transparent;
}
.nav > div {
  @apply flex flex-row items-center px-2.5 py-1;
}
.nav > div > div:first-child {
  @apply flex-grow flex flex-row space-x-2;
}
</style>

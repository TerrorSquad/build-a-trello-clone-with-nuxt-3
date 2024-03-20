<template>
  <main>
    <h1>Build a trello clone home page</h1>
    <pre>{{ boardStore.board }}</pre>
  </main>
</template>

<script setup lang="ts">
const boardStore = useBoardStore();
</script>

<style scoped></style>

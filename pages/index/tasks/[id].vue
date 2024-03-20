<template>
  <div class="task-wrapper">
    <div class="task-view">
      <h1>Task: {{ task.id }}</h1>
      <p>{{ task.name }}</p>
      <p>{{ task.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "~/stores/board"
const boardStore = useBoardStore()
const route = useRoute()

const task = computed(() => {
  return boardStore.getTask(route.params.id as string)
})
</script>

<style></style>

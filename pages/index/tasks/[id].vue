<template>
  <div class="task-wrapper">
    <div
      v-if="task"
      class="task-view gap-4"
    >
      <UFormGroup
        label="Task name"
        class="w-full"
      >
        <UInput
          v-model="task.name"
          type="text"
        />
      </UFormGroup>
      <UFormGroup
        label="Description"
        class="w-full"
      >
        <UTextarea
          v-model="task.description"
          placeholder="Description"
      /></UFormGroup>
      <UButton
        icon="i-heroicons-trash"
        color="red"
        @click="deleteTask"
      >
        Delete task
      </UButton>
    </div>
    <div v-else>Task not found...</div>
  </div>
</template>

<script lang="ts" setup>
import { useBoardStore } from "~/stores/board"
const boardStore = useBoardStore()
const route = useRoute()
const router = useRouter()
const taskId = computed(() => {
  return route.params.id as string
})

const task = computed(() => {
  return boardStore.getTask(taskId.value)
})

const deleteTask = () => {
  boardStore.deleteTask({
    taskId: taskId.value,
  })
  router.push({ name: "index" })
}
</script>

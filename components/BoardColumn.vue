<template>
  <UContainer class="column">
    <div class="column-header mb-4">
      <div>
        <UInput
          v-if="editNameState"
          v-model="column.name"
          type="text"
          @keyup.enter="editNameState = false"
        />
        <h2 v-else>
          {{ column.name }}
        </h2>
      </div>
      <div>
        <UButton
          class="i-heroicons-pencil-square mr-2"
          @click="editNameState = !editNameState"
        />
        <UButton
          class="i-heroicons-trash"
          color="red"
          @click="deleteColumn(columnIndex)"
        />
      </div>
    </div>
    <ul>
      <li
        v-for="task in column.tasks"
        :key="task.id"
      >
        <UCard
          class="mb-4"
          @click="goToTask(task.id)"
        >
          <strong>{{ task.name }}</strong>
          <p>{{ task.description }}</p>
        </UCard>
      </li>
    </ul>
  </UContainer>
</template>

<script lang="ts" setup>
defineProps<{
  column: any
  columnIndex: number
}>()

const editNameState = ref(false)

const boardStore = useBoardStore()
const router = useRouter()

const deleteColumn = (index: number) => {
  boardStore.deleteColumn(index)
}

const goToTask = (id: number) => {
  router.push(`/tasks/${id}`)
}
</script>

<style></style>

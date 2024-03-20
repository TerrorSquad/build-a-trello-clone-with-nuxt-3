<template>
  <div class="board-wrapper">
    <main class="board">
      <BoardColumn
        v-for="(column, columnIndex) in boardStore.board.columns"
        :key="column.id"
        class="column"
        :column="column"
        :column-index="columnIndex"
      >
      </BoardColumn>
      <UContainer class="column">
        <UInput
          v-model="newColumnName"
          type="text"
          placeholder="Create new column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="addColumn()"
        />
      </UContainer>
    </main>
    <div
      v-show="isModalOpen"
      class="task-bg"
      @click.self="closeModal"
    >
      <NuxtPage :key="route.fullPath" />
    </div>
  </div>
</template>

<script setup lang="ts">
const boardStore = useBoardStore()

const route = useRoute()
const router = useRouter()

const newColumnName = ref("")

const isModalOpen = computed(() => {
  return route.name === "index-tasks-id"
})

const closeModal = () => {
  router.push({ name: "index" })
}

const addColumn = () => {
  boardStore.addColumn(newColumnName.value)
  newColumnName.value = ""
}
</script>

<style scoped></style>

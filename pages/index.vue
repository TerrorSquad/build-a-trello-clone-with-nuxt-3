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
  </div>
</template>

<script setup lang="ts">
const boardStore = useBoardStore()

const newColumnName = ref("")

const addColumn = () => {
  boardStore.addColumn(newColumnName.value)
  newColumnName.value = ""
}
</script>

<style scoped></style>

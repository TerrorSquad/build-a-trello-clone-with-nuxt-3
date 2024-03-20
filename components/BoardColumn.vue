<template>
  <UContainer class="column">
    <div class="column-header mb-4">
      <div>
        <UInput
          v-if="editNameState"
          v-model="columnName"
          type="text"
          @keyup.enter="editColumnName"
        />
        <h2 v-else>
          {{ column.name }}
        </h2>
      </div>
      <div>
        <UButton
          icon="i-heroicons-pencil-square"
          class="mr-2"
          @click="editNameState = !editNameState"
        />
        <UButton
          icon="i-heroicons-trash"
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
    <UInput
      v-model="newTaskName"
      type="text"
      placeholder="Create new task"
      icon="i-heroicons-plus-circle-solid"
      @keyup.enter="addTask(newTaskName)"
    />
  </UContainer>
</template>

<script lang="ts" setup>
const props = defineProps<{
  column: any
  columnIndex: number
}>()

const columnName = ref<string>(props.column.name)

const editNameState = ref(false)
const newTaskName = ref("")

const boardStore = useBoardStore()
const router = useRouter()

const editColumnName = () => {
  boardStore.editColumnName({
    columnId: props.column.id,
    columnName: columnName.value,
  })
  editNameState.value = false
}

const addTask = (name: string) => {
  boardStore.addTask({
    columnId: props.column.id,
    taskName: name,
  })
  newTaskName.value = ""
}

const deleteColumn = (index: number) => {
  boardStore.deleteColumn(index)
}

const goToTask = (id: number) => {
  router.push(`/tasks/${id}`)
}
</script>

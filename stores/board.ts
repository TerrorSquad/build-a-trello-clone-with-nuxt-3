import { useStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import boardData from "~/data/board.json"

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData)

  const getTask = computed(() => {
    return (taskId: string) => {
      for (const column of board.value.columns) {
        for (const task of column.tasks) {
          if (task.id === taskId) {
            return task
          }
        }
      }
    }
  })

  const addColumn = (columnName: string) => {
    board.value.columns.push({
      id: crypto.randomUUID(),
      name: columnName,
      tasks: [],
    })
  }

  const deleteColumn = (index: number) => {
    board.value.columns.splice(index, 1)
  }
  return {
    /** State */
    board,
    /* Getters */
    getTask,
    /** Actions */
    addColumn,
    deleteColumn,
  }
})

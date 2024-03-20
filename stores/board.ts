import { useStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import boardData from "~/data/board.json"
import type { Board } from "~/models/types"

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage<Board>("board", boardData)

  /** Tasks */
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

  const addTask = ({ columnId, taskName }: { columnId: string; taskName: string }) => {
    for (const column of board.value.columns) {
      if (column.id === columnId) {
        column.tasks.push({
          id: crypto.randomUUID(),
          name: taskName,
          description: "",
        })
      }
    }
  }

  const deleteTask = ({ taskId }: { taskId: string }) => {
    for (const column of board.value.columns) {
      const taskIndex = column.tasks.findIndex((task) => task.id === taskId)
      if (taskIndex !== -1) {
        column.tasks.splice(taskIndex, 1)
        return
      }
    }
  }

  /** Columns */
  const addColumn = (columnName: string) => {
    board.value.columns.push({
      id: crypto.randomUUID(),
      name: columnName,
      tasks: [],
    })
  }

  const editColumnName = ({ columnId, columnName }: { columnId: string; columnName: string }) => {
    for (const column of board.value.columns) {
      if (column.id === columnId) {
        column.name = columnName
      }
    }
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
    addTask,
    deleteTask,
    editColumnName,
    addColumn,
    deleteColumn,
  }
})

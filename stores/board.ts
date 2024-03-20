import { useStorage } from "@vueuse/core"
import { defineStore } from "pinia"
import boardData from "~/data/board.json"

export const useBoardStore = defineStore("boardStore", () => {
  const board = useStorage("board", boardData)

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
    board,
    addColumn,
    deleteColumn,
  }
})

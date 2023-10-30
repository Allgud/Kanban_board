import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { IBoardProps } from '../interfaces'
 

interface IBoardsState {
  boards: {id: string}[] | Partial<IBoardsState>,
  areBoardsFetched: boolean, 
  setBoards: (arg1: { id: string }[]) => void
  addBoard: (arg1: IBoardProps) => void
}

const useBoardStore = create<IBoardsState>()(
  devtools(
    (set) => ({
      boards: [],
      areBoardsFetched: false,
      setBoards: (boards) => set({
        boards,
        areBoardsFetched: true
      }, false, "setBoards"),
      addBoard: (board) => set((prev) => ({
        boards: [board, ...prev.boards]
      }))
    }),
  ),
);

export default useBoardStore
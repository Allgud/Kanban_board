import { create } from "zustand";
import { devtools } from 'zustand/middleware'

interface IToastrState {
  toastrMsg: string,
  setToastr: (msg: string) => void
}

const useToastrStore = create<IToastrState>()(
  devtools(
    set => ({
      toastrMsg: '',
      setToastr: (toastrMsg) => set({toastrMsg}, false, "setToastr")
    })
  )
)

export default useToastrStore

import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IAuthState {
  loader: boolean;
  isAuth: boolean;
  setAuthStatus: (arg1: boolean) => void;
}

const useAuthStore = create<IAuthState>()(
  devtools(
    (set) => ({
      loader: true,
      isAuth: false,
      setAuthStatus: (status) =>
        set({
          isAuth: status,
          loader: false,
        }, false, "setLoginStatus"),
    }),
  )
);

export default useAuthStore;
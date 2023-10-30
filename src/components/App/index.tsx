import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme";
import AppRouter from "../../router/AppRouter";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../../store";
import Loader from "../Loader";
import SnackbarManager from "../SnackbarManager";

function App() {
  const { loader, setAuthStatus } = useAuthStore();
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setAuthStatus(!!user);
    });

    return () => unsubcribe();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarManager />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

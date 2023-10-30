import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthScreen from "../screens/AuthScreen";
import BoardScreen from "../screens/BoardScreen";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <AuthScreen />
          </PublicRoute>
        }
      />
      <Route
        path="/boards"
        element={
          <PrivateRoute>
            <BoardScreen />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth } = useAuthStore();
  return !isAuth ? <Navigate to="/" replace /> : children;
};

export default PrivateRoute;
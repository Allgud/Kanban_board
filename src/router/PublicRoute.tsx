import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";

type PublicRouteProps = {
  children: ReactNode;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuth } = useAuthStore();
  return isAuth ? <Navigate to="/boards" replace /> : children;
};

export default PublicRoute;
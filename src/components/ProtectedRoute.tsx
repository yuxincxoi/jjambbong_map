import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ProtectedRouteProps } from "../interfaces/components/ProtectedRoute.interface";

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

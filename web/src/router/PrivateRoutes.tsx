import { Navigate, Outlet } from "react-router-dom";

import useAuth from "@/hooks/use-auth";
import AuthService from "@/lib/services/auth/AuthService";

const PrivateRoutes = (): JSX.Element => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    AuthService.logout();
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;

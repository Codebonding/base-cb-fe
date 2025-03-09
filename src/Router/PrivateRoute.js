import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("accessToken"); // ✅ Check if user is authenticated

  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
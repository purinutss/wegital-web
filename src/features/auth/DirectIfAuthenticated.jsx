import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function DirectIfAuthenticated({ children }) {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser && authenticatedUser.role === "admin") {
    return <Navigate to={"/users"} />;
  } else if (authenticatedUser && authenticatedUser.role !== "admin") {
    return <Navigate to={"/"} />;
  }
  return children;
}

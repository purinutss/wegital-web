import DirectIfAuthenticated from "../features/auth/DirectIfAuthenticated";
import ProtectedRoute from "../features/auth/ProtectRoute";
import AllUserAdmin from "../pages/AllUserAdmin";
import CheckUserDataAdmin from "../pages/CheckUserDataAdmin";
import LoginPage from "../pages/LoginPage";
import RegisterForAdmin from "../pages/RegisterForAdmin";
import ShowUserData from "../pages/ShowUserData";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <DirectIfAuthenticated>
        <LoginPage />
      </DirectIfAuthenticated>
    )
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ShowUserData />
      </ProtectedRoute>
    )
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <AllUserAdmin />
      </ProtectedRoute>
    )
  },
  {
    path: "/check/:userId",
    element: (
      <ProtectedRoute>
        <CheckUserDataAdmin />
      </ProtectedRoute>
    )
  },
  {
    path: "/register/admin/only",
    element: (
      <DirectIfAuthenticated>
        <RegisterForAdmin />
      </DirectIfAuthenticated>
    )
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

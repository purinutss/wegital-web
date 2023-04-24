import AllUserAdmin from "../pages/AllUserAdmin";
import CheckUserDataAdmin from "../pages/CheckUserDataAdmin";
import LoginPage from "../pages/LoginPage";
import ShowUserData from "../pages/ShowUserData";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/", element: <ShowUserData /> },
  { path: "/users", element: <AllUserAdmin /> },
  { path: "/check/:userId", element: <CheckUserDataAdmin /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

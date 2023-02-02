import Dashboard from "../views/Dashboard";
import Register from "../views/Register";
import Login from "../views/Login";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <div>LOGIN</div>,
  },
  {
    path: "/user/register",
    element: <Register />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
]);

export default router;

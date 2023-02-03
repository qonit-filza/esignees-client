import Dashboard from "../views/Dashboard";
import UploadPdf from "../views/UploadPdf.tsx";
import Home from "../views/LandingPage";
import Register from "../views/Register";
import Login from "../views/Login";
import AdminReg from "../views/adminRegister";
import AdminLog from "../views/adminLogin";

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/user/register",
    element: <Register />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/admin/register",
    element: <AdminReg />,
  },
  {
    path: "/admin/login",
    element: <AdminLog />,
  },

  {
    path: "/upload",
    element: <UploadPdf />,
  },
  {
    path: "/render",
    element: <></>,
  },
  {
    path: "/send",
    element: <></>,
  },
]);

export default router;

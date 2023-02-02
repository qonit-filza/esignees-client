import Dashboard from "../views/Dashboard";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>
    },
    {
        path: '/login',
        element: <div>LOGIN</div>
    }
])

export default router
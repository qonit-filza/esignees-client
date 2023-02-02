const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>HOME</div>
    },
    {
        path: '/login',
        element: <div>LOGIN</div>
    }
])

export default router
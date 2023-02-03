import Dashboard from '../views/Dashboard';
import UploadPdf from '../views/UploadPdf.tsx';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <div>LOGIN</div>,
  },
  {
    path: '/upload',
    element: <UploadPdf />,
  },
  {
    path: '/render',
    element: <></>,
  },
  {
    path: '/send',
    element: <></>,
  },
  //add new route below
]);

export default router;

import router from './routers';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;


import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageOne from './PageOne.jsx'
import { Welcome } from './Welcome.jsx';

function App() {

  const router =createBrowserRouter([
    {
      path:"/",
      element:<Welcome/>
    },
    {
      path:"/page-one",
      element:<PageOne/>
    }
  ]);


  return (
  <RouterProvider router={router}/>
  );
}

export default App

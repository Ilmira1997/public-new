import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { ProfilePage } from './pages/ProfilePage/ProfilePage.tsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.tsx';
import { PostPage } from './pages/PostPage/PostPage.tsx';



function App() {
  
const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>
},
  {
    path:"/main-page",
    element:<MainPage/>
},
  {
    path:"/profile-page",
    element:<ProfilePage/>
},
{
  path:"/register-page",
  element:<RegisterPage/>
}
,{
  path:"/post/:postId",
  element:<PostPage/>,
}
])
  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
    </>
  );
}

export default App;

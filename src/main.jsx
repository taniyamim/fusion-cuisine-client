import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ChefsRecipe from './components/ChefsRecipe/ChefsRecipe.jsx';
import Error from './components/Error/Error.jsx';
import Chefs from './components/Chefs/Chefs.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Terms from './components/Terms/Terms.jsx';
import PrivateRoute from './components/Route/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://chefs-hunter-server-taniyamim.vercel.app/chefs')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/chefRecipe/:id",
        element: <PrivateRoute><ChefsRecipe></ChefsRecipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chefs-hunter-server-taniyamim.vercel.app/chefs/${params.id}`),
      },
      {
        path: "/terms",
        element: <Terms></Terms>
       
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import Posts from './Components/Posts/Posts.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
    {
      path:'/about',
      element: <About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:'/user/:userId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
    },
    {
      path:'/posts',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path:'/post/:id',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      element:<PostDetails></PostDetails>
    }
  ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)

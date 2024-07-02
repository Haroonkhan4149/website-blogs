import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App'
import Home from './pages/Home';
import Blog from './pages/Blog'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    // path: "/",
    // element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/blog/:id",
        element:<Blog/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
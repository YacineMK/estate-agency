import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Admin from "./components/routes/admin";
import Login from "./components/routes/auth/login";
import Dashboard from "./components/routes/dashboard";
import Home from "./components/routes/platform/home";
import Root from "./components/routes/platform/root";
import { Toaster } from "./components/ui/toaster";
import Workers from "./components/routes/platform/workers";
import Clients from "./components/routes/platform/Client";

const isauth = () => {

  return localStorage.getItem("authToken") !== null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: isauth() ? <Root /> : <Navigate to="/login" />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "workers",
        element: <Workers />
      },
      {
        path: "admin",
        element: <Admin />
      },
      {
        path: "/client",
        element: <Clients />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./components/routes/admin";
import Login from "./components/routes/auth/login";
import Signup from "./components/routes/auth/signup";
import Dashboard from "./components/routes/dashboard";
import Home from "./components/routes/platform/home";
import RealEstate from "./components/routes/platform/real-estate";
import Root from "./components/routes/platform/root";
import { Toaster } from "./components/ui/toaster";
import Workers from "./components/routes/platform/workers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "real-estate",
        element: <RealEstate />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "workers",
        element: <Workers />
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Analytics from "./pages/Analytics";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Support from "./pages/support/Support";
import Blog from "./pages/blog/Blog";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true, // default for /dashboard
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <Product />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "features",
          element: <Features />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "Blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Assuming App is the dashboard
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { CustomerTable } from "../pages/customerTable";
import { CustomerAddForm } from "../pages/customerAddForm";
import { Home } from "../pages/Home";
import { Status } from "../pages/status";
import { ErrorPage } from "../pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Default route shows the Login page
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />, // Signup page
  },
  {
    path: "/dashboard",
    element: <App />, // Dashboard component (root of dashboard routes)
    children: [
      {
        path: "/dashboard", // Child route for dashboard
        element: <Home />, // This will render CustomerTable when navigating to /dashboard/customers
      },
      {
        path: "customers", // Child route for dashboard
        element: <CustomerTable />, // This will render CustomerTable when navigating to /dashboard/customers
      },
      {
        path: "status", // Child route for dashboard
        element: <Status />, // This will render CustomerTable when navigating to /dashboard/customers
      },
      {
        path: "customerAdd",
        element: <CustomerAddForm />, // Route for adding customers
      },
    ],
  },
]);

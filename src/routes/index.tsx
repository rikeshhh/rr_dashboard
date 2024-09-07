import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Assuming App is the dashboard
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { CustomerTable } from "../pages/customerTable";
import { CustomerAddForm } from "../pages/customerAddForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Default route shows the Login page
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
        path: "customers", // Child route for dashboard
        element: <CustomerTable />, // This will render CustomerTable when navigating to /dashboard/customers
      },
      {
        path: "customerAdd",
        element: <CustomerAddForm />, // Route for adding customers
      },
    ],
  },
]);

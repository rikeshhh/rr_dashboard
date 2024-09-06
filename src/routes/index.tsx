import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { TopHeader } from "../component/TopHeader";
import { CustomerTable } from "../pages/customerTable";
import { CustomerAddForm } from "../pages/customerAddForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Component to render for this route
    children: [
      {
        path: "",
        element: <TopHeader />,
      },
      {
        path: "/customers",
        element: <CustomerTable />,
      },
      {
        path: "/customerAdd",
        element: <CustomerAddForm />,
      },
    ],
  },
]);

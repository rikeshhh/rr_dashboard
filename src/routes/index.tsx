import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { TopHeader } from "../component/TopHeader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Component to render for this route
    children: [
      {
        path: "",
        element: <TopHeader />,
      },
    ],
  },
]);

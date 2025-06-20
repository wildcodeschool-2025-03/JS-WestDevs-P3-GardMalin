// Import necessary modules from React and React Router
import { createBrowserRouter } from "react-router";
import "./global.css";

// Import the main app component
import App from "./App";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import LoginParent from "./pages/LoginParent/LoginParent";
import Page404 from "./pages/Page404/Page404";
import PageEnConstruction from "./pages/PageEnConstruction/PageEnConstruction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/loginparent",
        element: <LoginParent />,
      },
      {
        path: "/loginadmin",
        element: <LoginAdmin />,
      },
      {
        path: "/maintenance",
        element: <PageEnConstruction />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;

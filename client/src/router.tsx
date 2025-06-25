// Import necessary modules from React and React Router
import { createBrowserRouter } from "react-router";
import "./global.css";

// Import the main app component
import App from "./App";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import LoginParent from "./pages/LoginParent/LoginParent";
import LoginPro from "./pages/LoginPro/LoginPro";
import Page404 from "./pages/Page404/Page404";
import PageUnderConstruction from "./pages/PageUnderConstruction/PageUnderConstruction";
import SpaceParent from "./pages/SpaceParent/SpaceParent";

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
        path: "/loginpro",
        element: <LoginPro />,
      },
      {
        path: "/maintenance",
        element: <PageUnderConstruction />,
      },
      {
        path: "/spaceparent",
        element: <SpaceParent />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;

// Import necessary modules from React and React Router
import { createBrowserRouter } from "react-router";
import "./global.css";

// Import the main app component
import App from "./App";
import Home from "./pages/Home/Home";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import LoginParent from "./pages/LoginParent/LoginParent";
import LoginPro from "./pages/LoginPro/LoginPro";
import Page404 from "./pages/Page404/Page404";
import PageUnderConstruction from "./pages/PageUnderConstruction/PageUnderConstruction";
import ParentInformation from "./pages/ParentInformation/ParentInformation";
import RegistrationChildrenPage from "./pages/RegistrationChildrenPage/RegistrationChildrenPage";
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
        path: "/parent-information",
        element: <ParentInformation />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/spaceparent",
        element: <SpaceParent />,
      },
      {
        path: "/registration-children",
        element: <RegistrationChildrenPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;

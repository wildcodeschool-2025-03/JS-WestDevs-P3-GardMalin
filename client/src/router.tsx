// Import necessary modules from React and React Router
import { createBrowserRouter } from "react-router";
import "./global.css";

// Import the main app component
import App from "./App";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import LoginParent from "./pages/LoginParent/LoginParent";
import LoginPro from "./pages/LoginPro/LoginPro";
import Page404 from "./pages/Page404/Page404";
import PageUnderConstruction from "./pages/PageUnderConstruction/PageUnderConstruction";

import DescriptionNursery from "./pages/DescriptionNursery/DescriptionNursery";
import ParentInformation from "./pages/ParentInformation/ParentInformation";
import RegistrationNurseryPage from "./pages/RegistrationNurseryPage/RegistrationNurseryPage";
import RegistrationParentsPage from "./pages/RegistrationParentsPage/RegistrationParentsPage";
import SpaceParent from "./pages/SpaceParent/SpaceParent";
import SpacePro from "./pages/SpacePro/SpacePro";
import ReservationManagementPro from "./pages/ReservationManagementPro/ReservationManagementPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login-parent",
        element: <LoginParent />,
      },
      {
        path: "/login-admin",
        element: <LoginAdmin />,
      },
      {
        path: "/login-pro",
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
        path: "/",
        element: <Home />,
      },
      {
        path: "/space-parent",
        element: <SpaceParent />,
      },
      {
        path: "/space-pro",
        element: <SpacePro />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/registration-nursery",
        element: <RegistrationNurseryPage />,
      },
      {
        path: "/description-nursery",
        element: <DescriptionNursery />,
      },
      {
        path: "/registration-parents",
        element: <RegistrationParentsPage />,
      },
      {
        path: "/reservation-management-pro",
        element: <ReservationManagementPro />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;

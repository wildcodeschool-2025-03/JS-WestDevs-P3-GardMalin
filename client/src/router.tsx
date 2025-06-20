// Import necessary modules from React and React Router
import { createBrowserRouter } from "react-router";
import "./global.css";

// Import the main app component
import App from "./App";
import LoginParent from "./pages/LoginParent/LoginParent";
import Page404 from "./pages/page404/page404";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/loginparent",
        element: <LoginParent />,
      },
    ],
  },
]);

export default router;

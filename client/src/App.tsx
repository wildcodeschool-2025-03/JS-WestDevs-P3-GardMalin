import { Outlet } from "react-router";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RegistrationNurseryPage from "./pages/RegistrationNurseryPage/RegistrationNurseryPage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <RegistrationNurseryPage />

      <Footer />
    </>
  );
}

export default App;

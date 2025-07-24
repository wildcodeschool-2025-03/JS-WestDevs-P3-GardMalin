import { Outlet } from "react-router";
import "./global.css";

import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ToastContainer position="top-center" closeOnClick />
      </main>
      <Footer />
    </>
  );
}

export default App;

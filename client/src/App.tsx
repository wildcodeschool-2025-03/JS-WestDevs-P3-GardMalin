import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <h1>Bienvenue dans l'application</h1>
    </>
  );
}

export default App;

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import SubscribeParentsPage from "./pages/RegistrationParentsPage/RegistrationParentsPage";

function App() {
  return (
    <>
      <Header />
      <h1>Bienvenue dans l'application</h1>
      <SubscribeParentsPage />
      <Footer />
    </>
  );
}

export default App;

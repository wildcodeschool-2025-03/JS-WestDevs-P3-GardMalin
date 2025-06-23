import "./BackButton.css";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();
  const pagePrecedente = () => {
    navigate(-1);
  };

  return (
    <section className="back-button">
      <button type="button" onClick={pagePrecedente}>
        Page précédente
      </button>
    </section>
  );
}

export default BackButton;

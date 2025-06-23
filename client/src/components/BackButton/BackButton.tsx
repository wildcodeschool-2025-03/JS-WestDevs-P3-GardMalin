import "./BackButton.css";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };

  return (
    <section className="back-button">
      <button type="button" onClick={previousPage}>
        Page précédente
      </button>
    </section>
  );
}

export default BackButton;

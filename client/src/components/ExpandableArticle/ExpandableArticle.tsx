import { useEffect, useState } from "react";
import "./ExpandableArticle.css";

type ExpandableArticleProps = {
  title: string;
  children: React.ReactNode;
};

function ExpandableArticle({ title, children }: ExpandableArticleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) setIsExpanded(true);
      else setIsExpanded(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpanded = () => {
    if (!isDesktop) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <article className={`expandable-article ${isExpanded ? "expanded" : ""}`}>
      <button
        className="header"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        type="button"
      >
        <h3>{title}</h3>
        <span className={`arrow ${isExpanded ? "rotated" : ""}`}>▼</span>
      </button>
      {isExpanded && <div className="content">{children}</div>}
    </article>
  );
}

export default ExpandableArticle;

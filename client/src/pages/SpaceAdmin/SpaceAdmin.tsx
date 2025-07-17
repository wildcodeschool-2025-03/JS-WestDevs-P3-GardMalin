import "./SpaceAdmin.css";

function SpaceAdmin() {
  // function SearchBar(props: SearchBarProps | undefined) {
  //   const [value, setValue] = useState<string>("");

  return (
    <>
      <div className="body-admin">
        <header className="header-space-admin">
          <h1>Espace Administrateur</h1>
        </header>

        <article className="input-search">
          <input
            type="text"
            value=""
            // onChange={handleChange}
            aria-label="Parents ou professionnels"
            placeholder="Parents ou professionnels"
          />
        </article>

        <article className="article-parents">
          <h3>Parents</h3>
          <table>
            <tr>Parent 1</tr>
            <tr>Parent 2</tr>
          </table>
        </article>

        <article className="article-pro">
          <h3>Professionnels</h3>
          <table>
            <tr>Crèche 1</tr>
            <tr>Crèche 2</tr>
          </table>
        </article>
      </div>
    </>
  );
}

export default SpaceAdmin;

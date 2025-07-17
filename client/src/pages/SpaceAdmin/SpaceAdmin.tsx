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

        <section className="input-search">
          <input
            type="text"
            value=""
            // onChange={handleChange}
            aria-label="Parents ou professionnels"
            placeholder="Parents ou professionnels"
          />
        </section>

        <section className="display-results">
          <article className="article-parents">
            <h3>Parents</h3>
            {/* <table>
              <tr>
                <td>Prénoms</td>
                <td>Noms</td>
                <td>ville</td>
                <td>10</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Propriétaire</td>
                <td>Belle-mère</td>
                <td>Moi</td>
                <td>Moi</td>
                <td>Belle-sœur</td>
              </tr>
              <tr>
                <td>Habitudes alimentaires</td>
                <td>Mange tous les restes</td>
                <td>Grignote la nourriture</td>
                <td>Mange copieusement</td>
                <td>Mange jusqu'à ce qu'il éclate</td>
              </tr>
            </table> */}
          </article>

          <article className="article-pro">
            <h3>Professionnels</h3>
          </article>
        </section>
      </div>
    </>
  );
}

export default SpaceAdmin;

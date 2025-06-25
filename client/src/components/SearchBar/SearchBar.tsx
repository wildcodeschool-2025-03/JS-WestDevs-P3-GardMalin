import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./SearchBar.css";

interface Nursery {
  name: string;
  address: string;
  phone: string;
  id?: number;
}

function SearchBar() {
  const [value, setValue] = useState<string>("");
  const [nurseries, setNurseries] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  useEffect(() => {
    fetch("http://localhost:3310/api/nurseries")
      .then((res) => res.json())
      .then((responseData) => {
        setNurseries(responseData);
      });
  }, []);

  return (
    <article className="search-bar">
      <section className="input-search">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          aria-label="Ville, code postal"
          placeholder="Ville, code postal"
        />
        <span className="material-symbols-outlined">location_on</span>
      </section>
      <ul>
        {value &&
          nurseries
            .filter((element: Nursery) => {
              return element.address
                .toLowerCase()
                .startsWith(value.toLowerCase());
              // || element.address.toLowerCase().startsWith(value.toLowerCase())
            })
            .map((element: Nursery) => (
              <li key={element.id}>
                <Link to={"/maintenance"}>{element.name}</Link>
              </li>
            ))}
      </ul>
    </article>
  );
}

export default SearchBar;

import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./SearchBar.css";

interface Nursery {
  name: string;
  postal_code: string;
  city: string;
  phone: string;
  id?: number;
}
interface SearchBarProps {
  searchEstablishment: Nursery[];
  setSearchEstablishment: React.Dispatch<React.SetStateAction<never[]>>;
}

function SearchBar(props?: SearchBarProps | undefined) {
  const [value, setValue] = useState<string>("");
  const [nurseries, setNurseries] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  useEffect(() => {
    if (value !== "") {
      fetch("http://localhost:3310/api/nurseries")
        .then((res) => res.json())
        .then((responseData) => {
          const filterNurseries = responseData.filter((element: Nursery) => {
            return (
              element.city.toLowerCase().startsWith(value.toLowerCase()) ||
              element.postal_code.startsWith(value)
            );
          });
          setNurseries(filterNurseries);
          if (props) {
            props.setSearchEstablishment(filterNurseries);
          }
        });
    }
  }, [value, props]);

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
          nurseries.map((element: Nursery) => (
            <li key={element.id}>
              <Link to={"/maintenance"}>{element.name}</Link>
            </li>
          ))}
      </ul>
    </article>
  );
}

export default SearchBar;

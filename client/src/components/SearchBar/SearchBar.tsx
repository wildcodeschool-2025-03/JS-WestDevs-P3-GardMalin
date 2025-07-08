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
  searchEstablishment?: Nursery[];
  setSearchEstablishment?: React.Dispatch<React.SetStateAction<never[]>>;
  reservationDate?: string;
}

function SearchBar(props: SearchBarProps | undefined) {
  const [value, setValue] = useState<string>("");
  const [nurseries, setNurseries] = useState([]);
  const [filteredNurseries, setFilteredNurseries] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    let baseUrl = "http://localhost:3310/api/nurseries";
    if (props?.reservationDate) {
      baseUrl += `?reservationDate=${props.reservationDate}`;
    }
    console.log(baseUrl);
    fetch(baseUrl)
      .then((res) => res.json())
      .then((responseData) => {
        setNurseries(responseData);
      });
  }, [props?.reservationDate]);

  useEffect(() => {
    if (value !== "") {
      const filterNurseries = nurseries.filter((element: Nursery) => {
        return (
          element.city.toLowerCase().startsWith(value.toLowerCase()) ||
          element.postal_code.startsWith(value)
        );
      });
      setFilteredNurseries(filterNurseries);
      if (props?.setSearchEstablishment) {
        props.setSearchEstablishment(filterNurseries);
      }
    } else {
      setFilteredNurseries([]);
      if (props?.setSearchEstablishment) {
        props.setSearchEstablishment([]);
      }
    }
  }, [value, props?.setSearchEstablishment, nurseries]);

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
      {!props?.setSearchEstablishment && (
        <ul>
          {value &&
            filteredNurseries.map((element: Nursery) => (
              <li key={element.id}>
                <Link to={"/maintenance"}>{element.name}</Link>
              </li>
            ))}
        </ul>
      )}
    </article>
  );
}

export default SearchBar;

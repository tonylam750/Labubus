import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getLabubus } from "../../api";

export default function Labubu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [Labubu, setLabubu] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function loadLabubus() {
      setLoading(true);
      try {
        const data = await getLabubus();
        setLabubu(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadLabubus();
  }, []);

  const displayedLabubu = typeFilter
    ? Labubu.filter((labubu) => labubu.type === typeFilter)
    : Labubu;

  const LabubuElements = displayedLabubu.map((labu) => (
    <div key={labu.id} className="labubu-tile">
      <Link
        to={labu.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
      >
        <img src={labu.imageUrl} />
        <div className="labubu-info">
          <h3>{labu.name}</h3>
          <p>
            {labu.price}
            <span>/kr</span>
          </p>
        </div>
        <i className={`labubu-type ${labu.type} selected`}>{labu.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="labubu-list-container">
      <h1>Utforsk Labubus</h1>
      <div className="labubu-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "original")}
          className={`labubu-type original 
                        ${typeFilter === "original" ? "selected" : ""}`}
        >
          Original
        </button>

        <button
          onClick={() => handleFilterChange("type", "sittende")}
          className={`labubu-type sittende 
                        ${typeFilter === "sittende" ? "selected" : ""}`}
        >
          Sittende
        </button>
        <button
          onClick={() => handleFilterChange("type", "hemmelig")}
          className={`labubu-type hemmelig 
                        ${typeFilter === "hemmelig" ? "selected" : ""}`}
        >
          Hemmelig
        </button>

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="labubu-type clear-filters"
          >
            Fjern filter
          </button>
        ) : null}
      </div>
      <div className="labubu-list">{LabubuElements}</div>
    </div>
  );
}

import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getLabubus } from "../../api";

export default function LabubuDetail() {
  const [currentLabubu, setCurrentLabubu] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function loadLabubus() {
      setLoading(true);
      try {
        const data = await getLabubus(id);
        setCurrentLabubu(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadLabubus();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section className="back-button">
      <Link to=".." relative="path">
        &larr; <span>Tilbake til labubus</span>
      </Link>
      {currentLabubu && (
        <div className="labubu-detail-layout-container">
          <div className="labubu-detail">
            <img src={currentLabubu.imageUrl} />
            <div className="labubu-detail-info-text">
              <i className={`labubu-type ${currentLabubu.type} selected`}>
                {currentLabubu.type}
              </i>
              <h3>{currentLabubu.name}</h3>
            </div>
          </div>

          <nav className="labubu-detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Detaljer
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pris
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Bilder
            </NavLink>
          </nav>
          <Outlet context={{ currentLabubu }} />
        </div>
      )}
    </section>
  );
}

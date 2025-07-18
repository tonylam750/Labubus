import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #Labubu
      </Link>
      <nav>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Om
        </NavLink>
        <NavLink
          to="/labubu"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Labubu
        </NavLink>
        <NavLink
          to="/quiz"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Quiz
        </NavLink>
      </nav>
    </header>
  );
}

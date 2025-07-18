import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Du samler ikke bare figurer, du samler historier.</h1>
      <p>Oppdag magien i Labubu-universet og finn din neste favoritt.</p>
      <Link to="labubu">Finn din labubu</Link>
    </div>
  );
}

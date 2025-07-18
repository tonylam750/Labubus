import bgImg from "../assets/images/labubu.jpeg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" />
      <div className="about-page-content">
        <h1>
          Velkommen til Labubu-universet, en leken blanding av kos, fantasi og
          personlighet!
        </h1>
        <p>
          Opprinnelig skapt av den kreative duoen Kasing Lung og POP MART,
          kommer Labubu fra en fantasiverden fylt med unike skapninger, humor og
          et snev av mørk mystikk. Hver figur forteller sin egen lille historie,
          noen søte, noen skumle, men alle like uforglemmelige.
        </p>
        <p>
          Her deles lidenskapen for Labubu og hele The Monsters-universet. Enten
          du er en ivrig samler, ny i Labubu-verdenen, eller bare nysgjerrig på
          hva som gjør denne karakteren så spesiell, ønsker jeg å inspirere og
          spre gleden som disse små figurene bringer med seg.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Din labubu venter på deg.
          <br />
          Finn din sjelevenn.
        </h2>
        <Link className="link-button" to="/labubu">
          Utforsk labubu-universet
        </Link>
      </div>
    </div>
  );
}

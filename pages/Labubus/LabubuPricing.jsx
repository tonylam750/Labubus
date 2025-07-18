import { useOutletContext } from "react-router-dom";

export default function LabubuPricing() {
  const { currentLabubu } = useOutletContext();
  return (
    <h3 className="labubu-price">
      {currentLabubu.price}
      <span>/kr</span>
    </h3>
  );
}

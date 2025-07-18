import { useOutletContext } from "react-router-dom";

export default function LabubuPhotos() {
  const { currentLabubu } = useOutletContext();
  return <img src={currentLabubu.imageUrl} className="labubu-detail-image" />;
}

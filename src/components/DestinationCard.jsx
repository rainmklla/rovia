import { Link } from "react-router-dom";
import RatingStamp from "./RatingStamp.jsx";
import "../styles/DestinationCard.css";

function DestinationCard({ destination }) {
  const { id, name, country, region, rating, price, tagline, image } = destination;

  return (
    <Link to={`/destinations/${id}`} className="card">
      <div className="card__photo">
        <img src={image} alt={`View of ${name}, ${country}`} loading="lazy" />
        <span className="card__region eyebrow">{region}</span>
      </div>

      <div className="card__perforation" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="card__body">
        <div className="card__text">
          <p className="eyebrow card__country">{country}</p>
          <h3 className="card__name">{name}</h3>
          <p className="card__tagline">{tagline}</p>
          <p className="card__price">
            from <strong>${price}</strong>
          </p>
        </div>
        <RatingStamp rating={rating} />
      </div>
    </Link>
  );
}

export default DestinationCard;
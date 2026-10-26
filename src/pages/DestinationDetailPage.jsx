import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations.js";
import RatingStamp from "../components/RatingStamp.jsx";
import "../styles/DestinationDetailPage.css";

function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === Number(id));

  if (!destination) {
    return (
      <section className="detail-missing container">
        <p className="eyebrow">404 &mdash; unknown itinerary</p>
        <h1>Destination not found</h1>
        <p>
          We couldn't find a destination with id &ldquo;{id}&rdquo;. It may have
          been retired from the catalog, or the link might be off.
        </p>
        <Link to="/destinations" className="btn btn--gold">
          Back to all destinations
        </Link>
      </section>
    );
  }

  const { name, country, region, rating, price, tagline, description, bestSeason, image } =
    destination;

  return (
    <article className="detail">
      <div className="detail__photo">
        <img src={image} alt={`View of ${name}, ${country}`} />
        <div className="detail__photo-overlay container">
          <p className="eyebrow">{region}</p>
          <h1>{name}</h1>
          <p className="detail__country">{country}</p>
        </div>
      </div>

      <div className="detail__body container">
        <div className="detail__main">
          <p className="detail__tagline">{tagline}</p>
          <p className="detail__description">{description}</p>

          <dl className="detail__facts">
            <div>
              <dt className="eyebrow">Best season</dt>
              <dd>{bestSeason}</dd>
            </div>
            <div>
              <dt className="eyebrow">From</dt>
              <dd>${price} / person</dd>
            </div>
          </dl>

          <Link to="/destinations" className="btn btn--ghost">
            ← Back to all destinations
          </Link>
        </div>

        <aside className="detail__aside">
          <RatingStamp rating={rating} size="lg" />
          <p className="detail__aside-label eyebrow">Traveler rating</p>
        </aside>
      </div>
    </article>
  );
}

export default DestinationDetailPage;
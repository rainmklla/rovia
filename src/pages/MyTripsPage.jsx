import { Link } from "react-router-dom";
import "../styles/MyTripsPage.css";

function MyTripsPage() {
  return (
    <section className="trips container">
      <div className="trips__card">
        <div className="trips__icon" aria-hidden="true">
          
        </div>
        <p className="eyebrow">Your itinerary</p>
        <h1>No trips booked yet</h1>
        <p className="trips__copy">
          Trips you plan will show up here — dates, saved destinations, and
          notes, all in one boarding pass. Start by picking somewhere to go.
        </p>
        <Link to="/destinations" className="btn btn--gold">
          Explore destinations
        </Link>
      </div>
    </section>
  );
}

export default MyTripsPage;
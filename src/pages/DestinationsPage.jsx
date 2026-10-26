import { useMemo, useState } from "react";
import destinations from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";
import "../styles/DestinationsPage.css";

function DestinationsPage() {
  const [region, setRegion] = useState("All");

  const regions = useMemo(
    () => ["All", ...new Set(destinations.map((d) => d.region))].sort(),
    []
  );

  const visible =
    region === "All"
      ? destinations
      : destinations.filter((d) => d.region === region);

  return (
    <section className="destinations container">
      <header className="destinations__head">
        <p className="eyebrow">The full catalog</p>
        <h1>All destinations</h1>
        <p className="destinations__sub">
          {destinations.length} places, sorted by nothing but my own preferences.
          Filter by region to narrow it down.
        </p>
      </header>

      <div className="destinations__filters" role="group" aria-label="Filter by region">
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            className={
              "chip" + (region === r ? " chip--active" : "")
            }
            onClick={() => setRegion(r)}
            aria-pressed={region === r}
          >
            {r}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <p className="destinations__empty">No destinations in this region yet.</p>
      )}
    </section>
  );
}

export default DestinationsPage;
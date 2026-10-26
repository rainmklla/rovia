import { Link } from "react-router-dom";
import destinations from "../data/destinations.js";
import FeaturedStack from "../components/FeaturedStack.jsx";
import heroVideo from "../assets/videos/polaroids.mp4";
import "../styles/HomePage.css";

function HomePage() {
  const featured = [...destinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

    return (
        <>
            <section className="hero">
                <video
                    className="hero__video"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="hero__scrim" aria-hidden="true" />
                <div className="hero__inner container">
                    {/* <img src={logo} alt="Rovia logo" className="hero__logo" /> */}
                    {/* <p className="eyebrow hero__eyebrow">Boarding pass to anywhere</p> */}
                    <h1 className="hero__title">
                        Ano, <em>Tara?</em>
                    </h1>
                    <p className="hero__tagline">
                        Collect places, not just photos.
                    </p>
                    <p className="hero__lede">
                        {/* Rovia is a small catalog of {destinations.length} places worth the
                        layover — hand-picked, rated, and ready for your next trip plan. */}
                    </p>
                    <div className="hero__actions">
                        <Link to="/destinations" className="btn btn--gold">
                            Browse all destinations
                        </Link>
                        <Link to="/about" className="btn btn--ghost">
                            About this project
                        </Link>
                    </div>
                </div>
            </section>

            <section className="featured container">
                <div className="featured__head">
                    <p className="eyebrow">Top rated</p>
                    <h2>Featured destinations</h2>
                </div>
                <FeaturedStack destinations={featured} />
            </section>
        </>
    );
}

export default HomePage;
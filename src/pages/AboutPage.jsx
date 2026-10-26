import "../styles/AboutPage.css";

function AboutPage() {
    return (
        <section className="about container">
            <header className="about__head">
                <p className="eyebrow">About this project</p>
                <h1>Rovia</h1>
            </header>

            <p className="about__lede">
                Rovia catalogs a curated set of travel destinations,
                lets visitors browse and filter them, and shows a detail page for
                each one — all pulled from a single shared data source so the
                "Featured" list on the home page and the full catalog are never out
                of sync.
            </p>

            <div className="about__grid">
                <div className="about__block">
                    <p className="eyebrow">Built with</p>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Plain CSS, no framework</li>
                    </ul>
                </div>
                <div className="about__block">
                    <p className="eyebrow">Submitted by</p>
                    <p className="about__name">Rhianna Mikaella R. Gomez</p>
                    <p className="about__section">Section ITE402</p>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
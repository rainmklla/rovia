import { Link } from "react-router-dom";
import "../styles/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-screen">
      <div className="error-screen__stamp" aria-hidden="true">
        <span>VOID</span>
      </div>
      <p className="eyebrow error-screen__eyebrow">Error 404</p>
      <h1>This route never boarded.</h1>
      <p className="error-screen__copy">
        The page you're looking for doesn't exist, or the link got its
        wires crossed somewhere over the Atlantic.
      </p>
      <Link to="/" className="btn btn--gold">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
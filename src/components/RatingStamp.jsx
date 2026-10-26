import "../styles/RatingStamp.css";

function RatingStamp({ rating, size = "md" }) {
  return (
    <div className={`stamp stamp--${size}`} aria-label={`Rated ${rating} out of 5`}>
      <span className="stamp__value">{rating.toFixed(1)}</span>
      <span className="stamp__unit">/ 5</span>
    </div>
  );
}

export default RatingStamp;
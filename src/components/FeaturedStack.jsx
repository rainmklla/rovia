import { useRef, useState } from "react";
import DestinationCard from "./DestinationCard.jsx";
import "../styles/FeaturedStack.css";

function FeaturedStack({ destinations }) {
  const n = destinations.length;
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const draggedFar = useRef(false);

  function goTo(index) {
    setCurrent(((index % n) + n) % n);
  }

  function goNext() {
    goTo(current + 1);
  }

  function goPrev() {
    goTo(current - 1);
  }

  function handlePointerDown(e) {
    setDragging(true);
    draggedFar.current = false;
    startX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!dragging) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 8) draggedFar.current = true;
    setDragX(delta);
  }

  function handlePointerUp() {
    if (!dragging) return;
    setDragging(false);
    const threshold = 90;
    if (dragX < -threshold) {
      goNext();
    } else if (dragX > threshold) {
      goPrev();
    }
    setDragX(0);
  }

  function handleClickCapture(e) {
    if (draggedFar.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  // Shortest signed distance from `current`, wrapped, in range (-n/2, n/2].
  function diffFor(index) {
    let diff = index - current;
    const half = n / 2;
    if (diff > half) diff -= n;
    if (diff <= -half) diff += n;
    return diff;
  }

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel__arrow carousel__arrow--left"
        onClick={goPrev}
        aria-label="Previous destination"
      >
        ←
      </button>

      <div className="carousel__track">
        {destinations.map((destination, index) => {
          const diff = diffFor(index);
          const isCenter = diff === 0;
          const dragOffset = isCenter ? dragX : 0;

          let x = diff * 62; // % of slot width per step
          let scale = 1 - Math.abs(diff) * 0.16;
          let rotate = diff * 9;
          let opacity = 1 - Math.abs(diff) * 0.38;
          let zIndex = 10 - Math.abs(diff);

          if (Math.abs(diff) > 2) {
            opacity = 0;
            zIndex = 0;
          }

          const transform = `translateX(calc(-50% + ${x}% + ${dragOffset}px)) scale(${scale}) rotate(${rotate}deg)`;

          return (
            <div
              key={destination.id}
              className={"carousel__slot" + (isCenter ? " carousel__slot--center" : "")}
              style={{
                transform,
                opacity,
                zIndex,
                transition: dragging && isCenter ? "none" : "transform 0.35s ease, opacity 0.35s ease",
                pointerEvents: Math.abs(diff) > 2 ? "none" : "auto",
              }}
              onPointerDown={isCenter ? handlePointerDown : undefined}
              onPointerMove={isCenter ? handlePointerMove : undefined}
              onPointerUp={isCenter ? handlePointerUp : undefined}
              onPointerLeave={isCenter ? handlePointerUp : undefined}
              onClickCapture={
                isCenter
                  ? handleClickCapture
                  : (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      goTo(index);
                    }
              }
            >
              <DestinationCard destination={destination} />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--right"
        onClick={goNext}
        aria-label="Next destination"
      >
        →
      </button>
    </div>
  );
}

export default FeaturedStack;
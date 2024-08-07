import { useEffect, useState } from "react";
import "../Styles/Carousel.css";

export default function Carousel(prop) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prop.photos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [prop.photos.length]);

  return (
<div className="carousel">
<div className="photo-section">
      <div className="photos">
        {prop.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="work"
            className={index === currentIndex ? "fade-in" : ""}
          />
        ))}
      </div>
    </div>
</div>
  );
}

import { useEffect, useState } from "react";
import "../Styles/Photochanger.css";

export default function Photochanger(prop) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prop.photos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [prop.photos.length]);

  return (
    <div className="photo-section">
      <div className="photos">
        {prop.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            className={index === currentIndex ? "fade-in" : ""}
          />
        ))}
      </div>
    </div>
  );
}

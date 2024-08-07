import { useEffect, useState } from "react";
import styles from "../Styles/Work.module.css";

export default function Work(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [props.images.length]);
  return (
    <>
      <div className={styles["work"]}>
        <h3>Work </h3>
        <div className={styles.imageblock}>
          <div className={styles["worktext"]}>
            <div className={styles.images}>
              {props.vcc.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={
                    index === currentIndex ? styles.fadein : styles[""]
                  }
                />
              ))}
            </div>
          </div>
          <div className={styles.images}>
            {props.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={index === currentIndex ? styles.fadein : styles[""]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

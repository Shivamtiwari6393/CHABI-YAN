import styles from "../Styles/ChiefOfUnicef.module.css";

export default function ChiefOfUnicef() {
  return (
    <>
      <div className={styles["unicef"]}>
        <div className={styles["uniphoto"]}>
          <img src="OIP.jpg" alt="Chief of Unicef" />
          <p>Chief of Unicef U.P.</p>
        </div>
        <div className={styles["text"]}>
          <p>
            <q>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, a
              minus perspiciatis id dolorem reiciendis aut architecto molestiae
              deserunt incidunt soluta consectetur odio praesentium eligendi
              nihil aliquam maxime labore. Quae.
            </q>
          </p>
        </div>
      </div>
    </>
  );
}

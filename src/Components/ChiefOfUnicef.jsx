import styles from "../Styles/ChiefOfUnicef.module.css";

export default function ChiefOfUnicef() {
  return (
    <>
      <div className={styles["hashtag"]}>
        <h4> # Be a Champian for every child</h4>
      </div>
      <div className={styles["unicef"]}>
        <div className={styles["uniphoto"]}>
          <img src="chief_unicef.jpg" alt="Chief of Unicef" />
          <p>Chief of Unicef U.P.</p>
        </div>
        <div className={styles["text"]}>
          <p>
            "Advocacy is a key to social change, protection of rights and
            empowerment of communities.This network of young gems (CHABI-YAN)
            will be catalyst and powerful metaphor in unlocking potential of
            children, empowering them and advocating for the protection of their
            rights."
          </p>
        </div>
      </div>
    </>
  );
}

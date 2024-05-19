import style from "../Styles/About.module.css";
import Photochanger from "./Photochanger";
import "../Styles/Photochanger.css";
export default function About() {
  const photos = ["1.jpg", "2.jpg", "3.jpg"];
  return (
    <>
      <div className={style["about"]}>
        <div className={style["sec1"]}>
          <Photochanger photos={photos}></Photochanger>
        </div>
        <div className={style["sec2"]}>
          <h4>CHABI-YAN </h4>
          <p>
            Children’s Hope for Action & Better Impact-Youth Advocacy Network
            (CHABI-YAN) is a youth led advocacy network striving excellence to
            advocate for the protection of child’s rights and empower them to
            reach their full potential. YAN ’s on-ground interventions are
            complemented with advocacy efforts and policy recommendations.
            Founded on World’ children day 20th November 2023.
            <br />
            <p>
              {" "}
              CHABI-YAN's activities include on-ground interventions, policy
              recommendations, and social media campaigns. One of its goals is
              to create career pathways for young people by providing them with
              skill development, internships, apprenticeships, and
              entrepreneurship opportunities. CHABI-YAN collaborates with
              various universities, government agencies, and private
              organizations to achieve its vision of a better future for India's
              youth .
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

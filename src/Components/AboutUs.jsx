import style from "../Styles/AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={style["AboutUs"]}>
      {/* <h4>Chabi-Yan</h4> */}
      <div className={style["aboutText"]}>
        <p>
          Children’s Hope for Action & Better Impact-Youth Advocacy Network
          (CHABI-YAN) is a youth led advocacy network striving excellence to
          advocate for the protection of child’s rights and empower them to
          reach their full potential. YAN ’s on-ground interventions are
          complemented with advocacy efforts and policy recommendations. Founded
          on World’ children day 20th November 2023.
        </p>
        <p>
          CHABI-YAN's activities include on-ground interventions, policy
          recommendations, and social media campaigns. One of its goals is to
          create career pathways for young people by providing them with skill
          development, internships, apprenticeships, and entrepreneurship
          opportunities. CHABI-YAN collaborates with various universities,
          government agencies, and private organizations to achieve its vision
          of a better future for India's youth .
        </p>
      </div>
      <p>
        <h4 className={style["mvc"]}>MISSION</h4>

        <div className={style["mission"]}>
          To advocate for the protection of child’ rights, to empower them and
          to expand their opportunities to reach their full potential.
        </div>

        <h4 className={style["mvc"]}> VISION</h4>

        <div className={style["vision"]}>
          To strive excellence towards attainment of sustainable development
          goals, peace and social progress.
        </div>

        <h4 className={style["mvc"]}>CORE VALUES OF CHABI-YAN</h4>
        <div className={style["corevalue"]}>
          Care, Respect, Accountability and Integrity.
          <br />
          <br />

          Mission and vision statement of organization plays a pioneering role
          in attaining the overreaching objective, leaves no scope for ambiguity
          and confusion among stakeholders. I have conceptualized both vision &
          mission for the chabi initiative to streamline activities in a
          organized and formalized manner.
        </div>
      </p>
    </div>
  );
}

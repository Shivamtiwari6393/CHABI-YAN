import style from "../Styles/Team.module.css";
export default function Team() {
  return (
    <div className={style["Team"]}>
      <div className={style["coordinator"]}>
        <h4>Coordinator</h4>
        <div className={style["card"]}>
          <img
            src="fahad.jpeg"
            className={style["card-image"]}
            alt="fahad"
          ></img>
          <div className={style["card-name"]}>Fahad Jamal</div>
        </div>
      </div>

      <h4>Core Members</h4>

      <div className={style["coremembers"]}>
        <div className={style["card"]}>
          <img
            src="stfayyaz.jpeg"
            className={style["card-image"]}
            alt="sayed talha fayyaz"
          ></img>
          <div className={style["card-name"]}>Sayed Talha Fayyaz</div>
        </div>
        <div className={style["card"]}>
          <img
            src="afaizyab.jpeg"
            className={style["card-image"]}
            alt="Arisha Faizyab"
          ></img>
          <div className={style["card-name"]}>Arisha Faizyab</div>
        </div>
        <div className={style["card"]}>
          <img
            src="Bfatima.jpeg"
            className={style["card-image"]}
            alt="Bushra Fatima"
          ></img>
          <div className={style["card-name"]}>Bushra Fatima</div>
        </div>
        <div className={style["card"]}>
          <img
            src="Mfiroz.jpeg"
            className={style["card-image"]}
            alt="Mohd Firoz"
          ></img>
          <div className={style["card-name"]}>Mohd Firoz</div>
        </div>
        <div className={style["card"]}>
          <img
            src="mbano.jpeg"
            className={style["card-image"]}
            alt="Mubasshira Bano"
          ></img>
          <div className={style["card-name"]}>Mubasshira Bano</div>
        </div>
      </div>

      <h4>Club Members</h4>

      <div className={style["clubmembers"]}>
        <div className={style["card"]}>
          <img
            src="devendra.jpeg"
            className={style["card-image"]}
            alt="Devender Kumar"
          ></img>
          <div className={style["card-name"]}>Devender Kumar</div>
        </div>
        <div className={style["card"]}>
          <img
            src="image Junaid.jpg"
            className={style["card-image"]}
            alt="Junaid Ali Rayee"
          ></img>
          <div className={style["card-name"]}>Junaid Ali Rayee</div>
        </div>
        <div className={style["card"]}>
          <img
            src="md rizwanul.jpeg"
            className={style["card-image"]}
            alt="Mohd Rizwanul Hasan"
          ></img>
          <div className={style["card-name"]}>Mohd Rizwanul Hasan</div>
        </div>
        <div className={style["card"]}>
          <img
            src="st.jpg"
            className={style["card-image"]}
            alt="Shivam Tiwari"
          ></img>
          <div className={style["card-name"]}>Shivam Tiwari</div>
        </div>
        <div className={style["card"]}>
          <img
            src="shahil.jpeg"
            className={style["card-image"]}
            alt="Sahil Siddique"
          ></img>
          <div className={style["card-name"]}>Sahil Siddique</div>
        </div>
      </div>
    </div>
  );
}

import style from "../Styles/Projects.module.css";
export default function Projects() {
  return (
    <div className={style["Projects"]}>
      <p>
        <img src="./project1.jpeg" alt=" about team , plan , location" />
      </p>
      <p>
        <img
          src="./project2.jpeg"
          alt="about target audience, purpose, key actions"
        />
      </p>
      <p>
        <img
          src="./project3.jpeg"
          alt="about key intervension, timeline, target population"
        />
      </p>
      <p>
        <img
          src="./project4.jpeg"
          alt="about impact of work , change, future sustainable plan, challenges we faced"
        />
      </p>
      <p>
        <img
          src="./project5.jpeg"
          alt="about benefits provided to the people, experiences"
        />
      </p>
    </div>
  );
}

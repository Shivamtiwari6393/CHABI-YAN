import style from "../Styles/Projects.module.css"
export default function Projects() {
  return (
    <div className={style["Projects"]}>
      <p>
        <img src="./project1.jpeg" alt="1" />
      </p>
      <p>
        <img src="./project2.jpeg" alt="2" />
      </p>{" "}
      <p>
        <img src="./project3.jpeg" alt="3" />
      </p>{" "}
      <p>
        <img src="./project4.jpeg" alt="4" />
      </p>{" "}
      <p>
        <img src="./project5.jpeg" alt="5" />
      </p>
    </div>
  );
}

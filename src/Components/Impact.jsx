import { useEffect, useState } from "react";
import styles from "../Styles/Impact.module.css";

export default function Impact(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [props.images.length]);
  return (
    <>
      <h4>Teaching in Mother Tounge :</h4>
      <div className={styles.imageblock}>
        <p>
          <b>
          Enhanced Understanding and Comprehension:</b> Students are more likely to
          understand and comprehend complex concepts when they are taught in
          their mother tongue. Language barriers are reduced, allowing students
          to grasp ideas more easily. <br />
         <b> Improved Academic Performance:</b> Research suggests that students tend to
          perform better academically when they are taught in their mother
          tongue. They can engage more actively in discussions, ask questions,
          and participate in activities, leading to improved learning outcomes.
          <br /> <b>Cultural Preservation:</b> Teaching in the mother tongue helps
          preserve cultural identity and heritage. It allows students to connect
          with their cultural roots, traditions, and values, fostering a sense
          of pride in their linguistic and cultural heritage.
          <br />
          <b>Increased Confidence and Self-Esteem:</b> When students are taught in
          their mother tongue, they feel more confident expressing themselves
          and participating in classroom activities. This boosts their
          self-esteem and encourages them to actively engage in the learning
          process.
          <br /><b> Effective Communication:</b> Teaching in the mother tongue promotes
          effective communication between teachers and students. It eliminates
          misunderstandings and ensures clear communication of ideas,
          instructions, and feedback.
          <br /> <b>Smooth Transition to Additional Languages:</b> Learning in the
          mother tongue provides a strong foundation for acquiring additional
          languages later in life. Once students have a solid grasp of their
          native language, they can more easily learn and master other
          languages.
          <br /><b> Parental Involvement:</b> Parents are more likely to be involved in
          their children's education when it is conducted in their mother
          tongue. They can support their children's learning at home,
          reinforcing concepts taught in the classroom. Reduced Dropout Rates:
          Teaching in the mother tongue has been associated with lower dropout
          rates, as students feel more connected to their education and are less
          likely to become discouraged or disengaged.
        </p>
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
    </>
  );
}

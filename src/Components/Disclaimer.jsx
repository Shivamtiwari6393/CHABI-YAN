import style from "../Styles/Disclaimer.module.css";
export default function Disclaimer() {
  return (
    <div className={style["Disclaimer"]}>
      <h2>Disclaimer</h2>
      <p>
        Welcome to Chabi-Yan, an informational website designed for children
        and the general public. Please read this disclaimer carefully before
        using our website
      </p>

      <h4>Nature of Website</h4>
      <p>
        Chabi-Yan is an informational website created for the purpose of
        providing educational content to children and the general public. The
        information presented here is intended for educational and informational
        purposes only.
      </p>
      <h4>Target Audience?</h4>
      <p>
        Our website is designed to cater to children and the general public.
        While we strive to ensure that our content is appropriate for all age
        groups, parental guidance is advised for younger users.
      </p>
      <h4>Purpose</h4>
      <p>
        The primary purpose of Chabi-Yan is to provide information and
        educational resources on various topics. We aim to offer engaging and
        informative content that encourages learning and exploration.
      </p>
      <h4>User Interaction</h4>
      <p>
        Chabi-Yan allows user interaction through comments, feedback forms, and
        other interactive features. While we encourage respectful and
        constructive participation, we reserve the right to moderate or remove
        any inappropriate content.
      </p>
      <h4>Accuracy of Information</h4>
      <p>
        <ul>
          <li>
            We make every effort to ensure the accuracy and reliability of the
            information presented on our website. However, we cannot guarantee
            the completeness, accuracy, or timeliness of the content. Users are
            encouraged to verify any information obtained from this website
            before making decisions or taking actions based on it. 
          </li>
          <li>
          External Links: Our website may contain links to external websites or
            resources for additional information. We do not endorse or take
            responsibility for the content, accuracy, or reliability of any
            third-party websites linked from our site.
          </li>
        </ul>
      </p>
    </div>
  );
}

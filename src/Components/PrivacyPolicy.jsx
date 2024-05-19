import style from "../Styles/PrivacyPolicy.module.css";
export default function PrivacyPolicy() {
  return (
    <div className={style["privacy-policy"]}>
      <h4>Privacy Policy</h4>
      <p>
        Chabi-Yan is committed to protecting the privacy of its users. This
        Privacy Policy outlines the types of personal information we collect,
        how we use it, and the measures we take to safeguard your information
        when you visit our website.
      </p>

      <h4>Information We Collect</h4>
      <p>
        <ul>
          <li>
            Personal Information: When you interact with our website, we may
            collect personal information such as your name, email address, age
            (if applicable), and any other information you voluntarily provide.
          </li>
          <li>
            Non-Personal Information: We may also collect non-personal
            information such as your IP address, browser type, operating system,
            and other technical details automatically when you visit our
            website.
          </li>
        </ul>
      </p>
      <h4>What is Personal Information?</h4>
      <p>
        For the purposes of this Privacy Policy, “personal information” is any
        information that enables us to identify you, directly or indirectly, by
        reference to any identifiers such as your name, address, phone number,
        email address, identification number, location data, online identifier -
        or one or more other factors specific to you as an individual that would
        allow us to identify you.{" "}
      </p>
      <h4>How We Use Your Information</h4>
      <p>
        <ul>
          <li>Respond to your inquiries or requests.</li>
          <li>Provide you with the services or information you request.</li>
          <li>Customize your experience on our website.</li>
          <li>
            Send you promotional emails or newsletters (if you have opted in to
            receive them).
          </li>
          <li>Improve our website and services.</li>
          <li>
            We may use non-personal information for analytical purposes, to
            monitor and analyze trends, usage, and activities in connection with
            our website.
          </li>
        </ul>
      </p>
      <h4>Data Security</h4>
      <p>
        <ul>
          <li>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            disclosure, alteration, or destruction.
          </li>
        </ul>
      </p>
      <h4>Third Party Links</h4>
      <p>
        <ul>
          <li>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by us. We are not responsible for
            the privacy practices or content of these third-party sites.
          </li>
          <li>
            Protecting the privacy of children is important to us. Our website
            is not directed at children under the age of 18, and we do not
            knowingly collect personal information from children under this age
            without verifiable parental consent.
          </li>
          <li>Customize your experience on our website.</li>
          <li>
            Send you promotional emails or newsletters (if you have opted in to
            receive them).
          </li>
          <li>
            You have the right to opt-out of receiving promotional emails or
            newsletters from us by following the unsubscribe instructions
            provided in those communications.
          </li>
          <li>
            We may use non-personal information for analytical purposes, to
            monitor and analyze trends, usage, and activities in connection with
            our website.
          </li>
          <li>
            We reserve the right to update or change our Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised Privacy Policy on this page.
          </li>

          <li>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at [Contact Email]. By using our website, you
            agree to the terms of this Privacy Policy.
          </li>
        </ul>
      </p>
    </div>
  );
}

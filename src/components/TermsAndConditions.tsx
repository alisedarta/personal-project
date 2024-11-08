import { Fragment } from "react/jsx-runtime";

const termsData = [
  {
    title: "Usage of Our Service",
    content:
      "You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your device. You agree to accept responsibility for all activities that occur under your account.",
  },
  {
    title: "Privacy Policy",
    content:
      "Your personal data is important to us. Please review our Privacy Policy to understand how we handle your information.",
  },
  {
    title: "Modifications",
    content:
      "We may modify the content of our website at any time without prior notice. Any modifications to the Terms and Conditions will be effective immediately upon posting.",
  },
  {
    title: "User Obligations",
    content:
      "Users agree not to misuse the service in any way, including, but not limited to, posting harmful or inappropriate content.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All content on this website is the property of the service or its licensors and is protected by copyright and trademark laws.",
  },
  {
    title: "Limitation of Liability",
    content:
      "The service is not liable for any damages that may arise from the use of, or inability to use, the service or from any content posted on the site.",
  },
  {
    title: "Termination of Access",
    content:
      "We reserve the right to terminate or restrict access to the service at any time, for any reason, without notice.",
  },
  {
    title: "Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the service operates.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding these Terms and Conditions, feel free to contact us via email.",
  },
];

function TermsAndConditions() {
  return (
    <div className="container">
      <h1>Terms & Conditions</h1>
      <div className="terms-and-about">
        <p className="last-updated"> Last updated: October 25, 2024</p>
        {termsData.map((term, index) => (
          <Fragment key={index}>
            <h2>{term.title}</h2>
            <p>{term.content}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default TermsAndConditions;

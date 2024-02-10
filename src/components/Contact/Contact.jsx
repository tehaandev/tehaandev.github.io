import { useEffect } from "react";
import "./Contact.css";

const TITLE = "TP | Let's get in touch";

function Contact() {
  useEffect(() => {
    document.title = TITLE;
  });
  return (
    <main className="container contact-form-container">
      <h1>
        Let's <span className="text-tertiary">talk!</span>
      </h1>
      <iframe
        className="contact-form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfnE8hBuPZ5tXlStQNUn0gUJI2VFSsf4f3NBEZO_gURsicDaA/viewform?embedded=true"
        referrerPolicy="no-referrer"
        sandbox="allow-forms allow-modals allow-scripts allow-same-origin"
      >
        Loading…
      </iframe>
    </main>
  );
}
export default Contact;

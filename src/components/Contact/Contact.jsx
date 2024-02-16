import { Formik, Form, ErrorMessage, Field } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { publishSns } from "../../services/api.service.js";
import publishSNS from "../../services/aws.service.js";
import Button from "../Button/Button.jsx";
import "./Contact.css";

const TITLE = "TP | Let's get in touch";

function Contact() {
  useEffect(() => {
    document.title = TITLE;
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .required("Email is required.")
      .email("Email is invalid."),
    phone: Yup.string(),
    organization: Yup.string(),
    message: Yup.string().required("Message is required."),
  });

  return (
    <main className="container contact-form-container">
      <div className="sub-container">
        <h1>
          Let's <span className="text-tertiary">talk!</span>
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const body = `Date: ${new Date()} \nName: ${values.name} \nEmail: ${values.email} \nPhone: ${values.phone} \nOrganization: ${values.organization} \nMessage: ${values.message}`;
            if (
              (await publishSns("Porfolio: New form submission.", body)) == 201
            ) {
              document.getElementById("submission-status").innerHTML =
                "Thank you for reaching out!";
            } else {
              document.getElementById("submission-status").innerHTML =
                "Error! Please try again.";
            }
          }}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className="field">
                <Field name="name" placeholder="Name" />
                <div className="error-message">
                  <ErrorMessage name="name" component="span" />
                </div>
              </div>
              <div className="field">
                <Field name="email" placeholder="Email" />
                <div className="error-message">
                  <ErrorMessage name="email" component="span" />
                </div>
              </div>
              <div className="field">
                <Field name="phone" placeholder="Phone" />
                <div className="error-message">
                  <ErrorMessage name="phone" component="span" />
                </div>
              </div>
              <div className="field">
                <Field name="organization" placeholder="Organization" />
                <div className="error-message">
                  <ErrorMessage name="organization" component="span" />
                </div>
              </div>
              <div className="field">
                <Field
                  name="message"
                  component="textarea"
                  placeholder="Message"
                />
                <div className="error-message">
                  <ErrorMessage name="message" component="span" />
                </div>
              </div>
              <Button type="submit" text="Submit" />
            </Form>
          )}
        </Formik>
        <p id="submission-status"></p>
      </div>
    </main>
  );
}
export default Contact;

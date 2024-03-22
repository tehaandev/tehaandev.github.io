import { Formik, Form, ErrorMessage, Field } from "formik";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { publishSns } from "../../services/api.service.js";
import Button from "../Button/Button.jsx";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tabs from "../Tabs/Tabs";
import "./Contact.css";

const TITLE = "TP | Let's get in touch";

function Contact() {
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
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <main className="container contact-form-container">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="sub-container">
          <h1>
            Let's <span className="text-tertiary">talk!</span>
          </h1>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              const body = `Date: ${new Date()} \nName: ${values.name} \nEmail: ${values.email} \nPhone: ${values.phone} \nOrganization: ${values.organization} \nMessage: ${values.message}`;
              // const response = await publishSns(
              //   "Porfolio: New form submission.",
              //   body,
              // );
              // if (response === 201) {
              //   console.log(response);
              //   toast.success("Form submitted successfully!");
              // } else {
              //   console.log(response);
              //   toast.error("Form submission failed. Please try again later.");
              // }
              toast.promise(
                publishSns("Porfolio: New form submission.", body),
                {
                  loading: "Submitting...",
                  success: "Form submitted successfully!",
                  error: "Form submission failed. Please try again later.",
                },
              );
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
      <Footer />
      <Tabs />
    </>
  );
}
export default Contact;

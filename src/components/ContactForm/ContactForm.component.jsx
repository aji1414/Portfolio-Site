import React from "react";
import { Formik } from "formik";

import "./ContactForm.styles.scss";

import apiKeys from "../../assets/emailAPI";

let initialValues = {
  fullName: "",
  email: "",
  subject: "",
  message: ""
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (values.fullName === "") { errors.fullName = "Name Required" }
  if (values.subject === "") { errors.subject = "Subject Required" }
  if (values.message === "") { errors.message = "Please Enter Message" }

  return errors;
};


const submitForm = (values) => {
  const { fullName, email, subject, message } = values;
  sendeMail(
    apiKeys.TEMPLATE_ID,
    {
      fullName: fullName,
      message: message,
      subject: subject,
      email: email
    }
  )
}

const sendeMail = (TemplateID, variables) => {
  window.emailjs.send(
    "gmail", TemplateID,
    variables
  ).then(res => {
    alert("Thanks for the email. I will get back to you ASAP!");
    window.location.reload();
  })
    .catch(err => console.log(err));
}


const ContactForm = () => {

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
          <div className="contactFormContainer pb-5 mt-5 d-flex justify-content-center">
            <form className="contactForm mx-auto d-flex flex-column align-items-center" onSubmit={e => e.preventDefault()}>

              <div className="form-group row justify-content-center col-12 col-lg-11">
                <input
                  type="fullName"
                  name="fullName"
                  id="fullName"
                  placeholder="full name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    `${errors.fullName && touched.fullName ? "input-error" : null} inputBox d-flex col-12 col-lg-4`
                  }
                />
                {errors.fullName && touched.fullName && (
                  <span className="error">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group row justify-content-center col-12 col-lg-11">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    `${errors.email && touched.email ? "input-error" : null} inputBox d-flex col-12 col-lg-4`
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-group row justify-content-center col-12 col-lg-11">
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    `${errors.subject && touched.subject ? "input-error" : null} inputBox d-flex col-12 col-lg-4`
                  }
                />
                {errors.subject && touched.subject && (
                  <span className="error">{errors.subject}</span>
                )}
              </div>

              <div className="form-group row justify-content-center col-12">
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    `${errors.message && touched.message ? "input-error" : null} message inputBox d-flex col-12 col-lg-4`
                  }
                />
                {errors.message && touched.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={!(dirty && isValid) ? "formButton disabledButton" : "formButton"}
                disabled={!(dirty && isValid)}
                onClick={() => submitForm(values)}
              >
                Send Message
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ContactForm;

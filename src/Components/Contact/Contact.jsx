import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../allComponents/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";
import "./contactStyle.css";
import contact from "../../assets/email3.svg";

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rij10nc", // From EmailJS Email Services (e.g., 'gmail_service')
        "template_hfbsazk", // From EmailJS Templates (e.g., 'template_123456')
        form.current,
        "ej0N5gNMcUmTkvkcj" // From EmailJS Account → Integration tab
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // Clear form
        },
        (error) => {
          alert("Failed to send: " + error.text);
        }
      );
  };

  return (
    <>
      <div className="contact py-70">
        <div className="container-fluid">
          <SectionTitle
            title={t("contact.title")}
            description={t("contact.description")}
          />
          <div className="row mx-0">
            <div className="col-lg-6 contact-img-container">
              <div
                className="d-flex align-items-center justify-content-center h-100 "
                data-aos="fade-right"
              >
                <img src={contact} className="contact-img" alt="" />
              </div>
            </div>
            <div className="col-lg-6 contact-form">
              <div className="" data-aos="fade-left">
                <form ref={form} onSubmit={sendEmail}>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" required />
                  <label htmlFor="email">Your Email</label>
                  <input type="email" name="email" required />
                  <label htmlFor="message">Your Message</label>
                  <textarea name="message" required></textarea>
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

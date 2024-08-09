import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className={`top-10 relative `}>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import Container from "../common/Container";
import Section from "../common/Section";
import ContactForm from "../../components/ui/ContactForm";
import { MdEmail as Email } from "react-icons/md";
import { FaPhoneAlt as Phone } from "react-icons/fa";
const Contact = () => {
  return (
    <Section
      title="Kontakt"
      desc="Jeśli jesteś zainteresowany moimi usługami skontaktuj się przez formularz, email lub zadzwoń telefonicznie."
      h1
    >
      <div className="flex justify-around">
        <div>
          <h3>Napisz</h3>
          <div className="theme-border bg-primary flex items-center gap-2 p-4">
            <Email size={38} />
            <h4 className="w-full">Kontakt@antonikrasinski.pl</h4>
          </div>
          <h3>Zadzwoń</h3>
          <div className="theme-border bg-primary flex items-center p-4 text-center">
            <Phone size={38} />
            <h4 className="w-full">+48 792 327 596</h4>
          </div>
        </div>
        <div>
          <h2>Skontaktuj Się Przez Formularz</h2>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;

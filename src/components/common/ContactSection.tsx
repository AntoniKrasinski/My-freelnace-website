import React from "react";
import Container from "./Container";
import Section from "./Section";
import ContactForm from "../ui/ContactForm";
import { MdEmail as Email } from "react-icons/md";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import Square from "../ui/Square";
const Contact = () => {
  return (
    <Section
      title="Kontakt"
      desc="Jeśli jesteś zainteresowany moimi usługami skontaktuj się przez formularz, email lub zadzwoń telefonicznie."
      id="kontakt"
    >
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <div>
          <ContactForm />
        </div>
        <div className="theme-border-rounded bg-surface h-fit space-y-6 p-6">
          <h3>Dane Kontaktowe</h3>
          <div className="flex items-center gap-2">
            <Square>
              <Phone size={22} />
            </Square>
            <a className="text-xl font-medium">+48 792 327 596</a>
          </div>
          <div className="flex items-center gap-2">
            <Square>
              <Email size={22} />
            </Square>
            <a className="text-xl font-medium text-nowrap">
              kontakt@antonikrasinski.pl
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

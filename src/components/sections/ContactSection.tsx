import React from "react";
import Container from "../common/Container";
import Section from "../common/Section";
import ContactForm from "../ui/ContactForm";
import { MdEmail as Email } from "react-icons/md";
import { FaPhoneAlt as Phone } from "react-icons/fa";
const Contact = () => {
  return (
    <Section
      title="Kontakt"
      desc="Jeśli jesteś zainteresowany moimi usługami skontaktuj się przez formularz, email lub zadzwoń telefonicznie."
      id="kontakt"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col space-x-4 md:flex-row">
          <div className="">
            <h4>Zadzwoń</h4>
            <a className="button">
              <Phone className="mr-2" />
              792 327 596
            </a>
          </div>
          <div className="">
            <h4>Napisz</h4>
            <a className="button">
              <Email className="mr-2" />
              kontakt@antonikrasinski.pl
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-center">
            Wypełnij Formularz i Otrzymaj Bezpłatną Wycenę
          </h3>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;

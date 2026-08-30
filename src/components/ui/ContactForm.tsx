"use client";
import React from "react";
import { useState } from "react";
import Button from "./Button";
interface Data {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [data, setData] = useState<Data>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="theme-border bg-surface p-6">
      <form
        action=""
        onSubmit={(e): void => {
          e.preventDefault();
          console.log(data);
        }}
        className="flex flex-col"
      >
        <label htmlFor="name">Imię i Nazwisko*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={(e) => {
            handleOnChange(e);
          }}
          required
        />
        <label htmlFor="phone">Numer Telefonu</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={(e) => {
            handleOnChange(e);
          }}
          required
        />
        <label htmlFor="message">Wiadomość*</label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={(e) => {
            handleOnChange(e);
          }}
          required
        ></textarea>
        <div className="flex items-start justify-start p-2">
          <label htmlFor=""></label>
          <input type="checkbox" className="m-1" />
          <p className="smallText">
            * Wyrażam zgodę na przetwarzanie podanych danych osobowych w celu
            kontaktu i przesłania oczekiwanych przeze mnie treści.
          </p>
        </div>
        <div className="flex items-center">
          <Button type="submit">Wyślij</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

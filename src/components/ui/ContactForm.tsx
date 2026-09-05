"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
export interface ContactData {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

const initialData: ContactData = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [data, setData] = useState<ContactData>(initialData);
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!result.success) {
        toast.error("Błąd Podczas Wysyłania Wiadomości. Spróbuj Ponownie.");
        return;
      }
      toast.success("Wiadomość Wysłana!");
      setData(initialData);
    } catch (error) {
      toast.error("Błąd poczas łączenia z serwerem.");
      console.error(error);
    }
  };

  return (
    <div className="theme-border bg-surface p-6">
      <h3>Otrzymaj Bezpłatną Wycenę</h3>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
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
          <input
            required
            id="rodo"
            type="checkbox"
            className="m-1 hover:cursor-pointer"
          />
          <label htmlFor="rodo" className="smallText hover:cursor-pointer">
            * Wyrażam zgodę na przetwarzanie podanych danych osobowych w celu
            kontaktu i przesłania oczekiwanych przeze mnie treści.
          </label>
        </div>
        <div className="flex items-center">
          <button className="button" type="submit">
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Witaj, {firstName}.</h1>
      <p>
        Otrzymałem twoją wiadomość. Skontaktuje się z tobą w sprawie wyceny tak
        szybko jak to będzie możliwe.
      </p>
    </div>
  );
}

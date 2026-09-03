import React from "react";
import InfoSection from "@/components/common/InfoSection";

const page = () => {
  return (
    <>
      <InfoSection>
        <article className="wrap-anywhere">
          <h1>KLAUZULA INFORMACYJNA RODO</h1>

          <section>
            <h2>1. Administrator Danych Osobowych</h2>
            <p>
              Administratorem Twoich danych osobowych jest Antoni Krasiński,
              zamieszkały/a w Żądło, 97-306, kontakt e-mail:
              kontakt@antonikrasinski.pl (dalej: „Administrator”). Administrator
              prowadzi działalność jako osoba fizyczna (działalność
              nierejestrowana).
            </p>
          </section>

          <section>
            <h2>2. Cel i podstawa przetwarzania danych</h2>
            <p>Twoje dane osobowe są przetwarzane w następujących celach:</p>
            <ul>
              <li>
                <strong>Obsługa korespondencji i zapytań:</strong> Przetwarzanie
                danych przekazanych w formularzu kontaktowym lub wiadomości
                e-mail (np. imię, adres e-mail) w celu udzielenia odpowiedzi na
                Twoje pytanie. Podstawą prawną jest prawnie uzasadniony interes
                Administratora (art. 6 ust. 1 lit. f RODO).
              </li>
              <li>
                <strong>Zapewnienie prawidłowego działania strony:</strong>{" "}
                Przetwarzanie danych technicznych (np. adres IP) w celach
                analitycznych i statystycznych. Podstawą prawną jest zgoda
                użytkownika (art. 6 ust. 1 lit. a RODO) lub prawnie uzasadniony
                interes Administratora (art. 6 ust. 1 lit. f RODO).
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Odbiorcy danych</h2>
            <p>
              Twoje dane osobowe mogą być przekazywane wyłącznie podmiotom
              przetwarzającym je na zlecenie Administratora w celu obsługi
              technicznej serwisu, w szczególności dostawcy usług hostingowych:{" "}
              <strong>[Nazwa dostawcy hostingu, np. LH.pl / cyberFolks]</strong>
              . Dane nie są sprzedawane ani przekazywane podmiotom trzecim w
              celach marketingowych.
            </p>
          </section>

          <section>
            <h2>4. Okres przechowywania danych</h2>
            <p>
              Dane przetwarzane w celu obsługi korespondencji przechowywane są
              przez okres niezbędny do zakończenia kontaktu lub do czasu
              zgłoszenia skutecznego sprzeciwu wobec ich przetwarzania.
            </p>
          </section>

          <section>
            <h2>5. Twoje prawa</h2>
            <p>
              W związku z przetwarzaniem danych osobowych przysługują Ci
              następujące prawa:
            </p>
            <ul>
              <li>
                Prawo dostępu do treści swoich danych oraz otrzymania ich kopii,
              </li>
              <li>Prawo do sprostowania (poprawiania) danych,</li>
              <li>Prawo do usunięcia danych („prawo do bycia zapomnianym”),</li>
              <li>Prawo do ograniczenia przetwarzania danych,</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>
                Prawo do wniesienia skargi do organu nadzorczego – Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Dobrowolność podania danych</h2>
            <p>
              Podanie danych osobowych jest dobrowolne, jednak niezbędne do
              nawiązania kontaktu i udzielenia odpowiedzi na przesłaną
              wiadomość.
            </p>
          </section>

          <section>
            <h2>7. Profilowanie i przekazywanie danych poza EOG</h2>
            <p>
              Twoje dane osobowe nie będą wykorzystywane do zautomatyzowanego
              podejmowania decyzji, w tym profilowania, ani nie będą
              przekazywane do państw trzecich (poza Europejski Obszar
              Gospodarczy).
            </p>
          </section>
        </article>
      </InfoSection>
    </>
  );
};

export default page;

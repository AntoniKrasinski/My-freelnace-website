import React from "react";
import InfoSection from "@/components/common/InfoSection";

const page = () => {
  return (
    <>
      <InfoSection>
        <article className="wrap-anywhere">
          <h1>POLITYKA PRYWATNOŚCI STRONY INTERNETOWEJ</h1>

          <section>
            <h2>1. Informacje ogólne</h2>
            <ul>
              <li>
                <strong>Administrator Strony:</strong> Strona internetowa
                znajdująca się pod adresem antonikrasinski.pl jest prowadzona
                przez Antoniego Krasińskiego, kontakt:
                kontakt@antonikrasinski.pl (dalej: „Administrator”).
              </li>
              <li>
                <strong>Działalność nierejestrowana:</strong> Administrator
                prowadzi stronę jako osoba fizyczna i nie posiada
                zarejestrowanej jednoosobowej działalności gospodarczej (JDG).
              </li>
              <li>
                <strong>Szacunek dla prywatności:</strong> Administrator dba o
                ochronę prywatności użytkowników i przetwarza dane osobowe
                zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                2016/679 (RODO).
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Jakie dane są zbierane i w jakim celu?</h2>
            <ul>
              <li>
                <strong>Formularz kontaktowy / e-mail:</strong> Jeśli
                kontaktujesz się z Administratorem przez e-mail lub formularz,
                przekazujesz swój adres e-mail oraz imię (lub inne dane zawarte
                w wiadomości). Dane te są przetwarzane wyłącznie w celu
                udzielenia odpowiedzi na Twoje zapytanie.
              </li>
              <li>
                <strong>Pliki cookies i dane techniczne:</strong> Strona może
                zbierać anonimowe dane techniczne (np. adres IP, typ
                przeglądarki, czas spędzony na stronie) w celach statystycznych
                oraz zapewnienia prawidłowego działania serwisu.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Podstawa prawna przetwarzania danych</h2>
            <p>Dane przetwarzane są na podstawie:</p>
            <ul>
              <li>
                Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
                Administratora (udzielanie odpowiedzi na wiadomości kontaktowe
                oraz analiza ruchu na stronie).
              </li>
              <li>
                Art. 6 ust. 1 lit. a RODO – Twoja zgoda (w przypadku wyrażenia
                zgody na zapisywanie plików cookies).
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Odbiorcy danych</h2>
            <p>
              Twoje dane osobowe nie są sprzedawane ani udostępniane podmiotom
              trzecim, z wyjątkiem podmiotów dostarczających usługi techniczne
              niezbędne do działania strony (np. dostawca hostingu Vercel).
            </p>
          </section>

          <section>
            <h2>5. Czas przechowywania danych</h2>
            <p>
              Dane przekazane w celu kontaktu są przechowywane przez czas
              niezbędny do obsługi korespondencji lub do momentu zgłoszenia
              sprzeciwu wobec ich przetwarzania.
            </p>
          </section>

          <section>
            <h2>6. Prawa użytkownika</h2>
            <p>Posiadasz prawo do:</p>
            <ul>
              <li>Dostępu do swoich danych oraz otrzymania ich kopii,</li>
              <li>Sprostowania (poprawiania) swoich danych,</li>
              <li>Usunięcia danych („prawo do bycia zapomnianym”),</li>
              <li>Ograniczenia przetwarzania danych,</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>
                Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (UODO).
              </li>
            </ul>
            <p>
              W celu realizacji swoich praw skontaktuj się z Administratorem pod
              adresem: kontakt@antonikrasinski.pl.
            </p>
          </section>

          <section>
            <h2>7. Pliki Cookies (Ciasteczka)</h2>
            <ul>
              <li>
                Strona wykorzystuje pliki cookies (małe pliki tekstowe
                zapisywane na Twoim urządzeniu) w celu zapewnienia jej
                prawidłowego funkcjonowania.
              </li>
              <li>
                Może Pan/Pani w każdej chwili zmienić ustawienia dotyczące
                plików cookies w swojej przeglądarce internetowej lub je usunąć.
              </li>
            </ul>
          </section>
        </article>
      </InfoSection>
    </>
  );
};

export default page;

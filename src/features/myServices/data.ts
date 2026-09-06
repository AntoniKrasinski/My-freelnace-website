import type serviceProps from "@/features/myServices/type";

import {
  performanceImg,
  cmsImg,
  domainImg,
  hostingImg,
  seoImg,
  supportImg,
} from "../../assets/images/benefitsImages/benefitsImages";

const services: Record<string, serviceProps> = {
  "landing-page": {
    name: "Landing Page",

    heroTitle: "Landing Page, który zamienia odwiedzających w klientów",

    heroDesc:
      "Projektuję nowoczesne landing page stworzone z myślą o pozyskiwaniu klientów, sprzedaży usług oraz zwiększaniu skuteczności kampanii reklamowych. Każda strona jest szybka, responsywna i zoptymalizowana pod SEO oraz konwersję.",

    sectionTitle: "Dlaczego warto wybrać Landing Page?",

    sectionDesc:
      "Landing page to strona internetowa skupiona na jednym, konkretnym celu – zachęceniu użytkownika do wykonania określonej akcji. Może to być wysłanie formularza kontaktowego, wykonanie telefonu, zapisanie się na usługę lub zakup produktu. Dzięki przemyślanej strukturze, odpowiednio zaprojektowanym sekcjom i optymalizacji pod urządzenia mobilne landing page pomaga zwiększyć liczbę zapytań od potencjalnych klientów i poprawić skuteczność działań marketingowych.",

    benefits: [
      {
        title: "Pomoc w Zakupie Domeny",
        img: domainImg,
      },
      {
        title: "Wdrożenie Strony na Hosting",
        img: hostingImg,
      },
      {
        title: "Optymalizacje Wydajności",
        img: performanceImg,
      },
      {
        title: "Przygotowanie pod SEO",
        img: seoImg,
      },
      {
        title: "Możliwość Edycji Treści",
        img: cmsImg,
      },
      {
        title: "Moje Wsparcie Techniczne",
        img: supportImg,
      },
    ],
  },

  "strona-wizytowka": {
    name: "Strona Wizytówka",

    heroTitle: "Profesjonalna strona wizytówka dla Twojej firmy",

    heroDesc:
      "Tworzę nowoczesne strony wizytówki, które przedstawiają najważniejsze informacje o Twojej firmie, usługach i ofercie. Każda strona jest responsywna, szybka, przejrzysta i przygotowana z myślą o pozyskiwaniu nowych klientów oraz budowaniu profesjonalnego wizerunku firmy w internecie.",

    sectionTitle: "Dlaczego warto stworzyć stronę wizytówkę?",

    sectionDesc:
      "Strona wizytówka to prosta i skuteczna forma obecności firmy w internecie. Pozwala zaprezentować ofertę, najważniejsze informacje o działalności, dane kontaktowe, realizacje oraz opinie klientów w jednym miejscu. Projektuję strony z przejrzystą strukturą i intuicyjną nawigacją, dzięki czemu potencjalny klient może szybko znaleźć potrzebne informacje i skontaktować się z firmą. Strona może również zostać przygotowana pod lokalne SEO, aby zwiększyć widoczność firmy w wynikach wyszukiwania Google.",

    benefits: [
      {
        title: "Pomoc w Zakupie Domeny",
        img: domainImg,
      },
      {
        title: "Wdrożenie Strony na Hosting",
        img: hostingImg,
      },
      {
        title: "Optymalizacje Wydajności",
        img: performanceImg,
      },
      {
        title: "Przygotowanie pod SEO",
        img: seoImg,
      },
      {
        title: "Możliwość Edycji Treści",
        img: cmsImg,
      },
      {
        title: "Moje Wsparcie Techniczne",
        img: supportImg,
      },
    ],
  },

  "strona-internetowa": {
    name: "Strona Internetowa",

    heroTitle: "Profesjonalna strona internetowa",

    heroDesc:
      "Tworzę nowoczesne strony internetowe dla firm i lokalnych usługodawców. Strona jest szybka, estetyczna, responsywna i przygotowana pod pozycjonowanie w Google oraz dalszy rozwój biznesu.",

    sectionTitle: "Co zyskujesz dzięki profesjonalnej stronie internetowej?",

    sectionDesc:
      "Profesjonalna strona internetowa buduje wiarygodność firmy, prezentuje ofertę oraz ułatwia klientom kontakt. Projektuję strony z myślą o użytkownikach i wyszukiwarkach, dzięki czemu są czytelne, szybkie i gotowe do pozycjonowania lokalnego. Każdy projekt jest dopasowany do branży i może zostać rozbudowany o kolejne podstrony lub funkcjonalności.",

    benefits: [
      {
        title: "Pomoc w Zakupie Domeny",
        img: domainImg,
      },
      {
        title: "Wdrożenie Strony na Hosting",
        img: hostingImg,
      },
      {
        title: "Optymalizacje Wydajności",
        img: performanceImg,
      },
      {
        title: "Przygotowanie pod SEO",
        img: seoImg,
      },
      {
        title: "Możliwość Edycji Treści",
        img: cmsImg,
      },
      {
        title: "Moje Wsparcie Techniczne",
        img: supportImg,
      },
    ],
  },

  "sklep-internetowy": {
    name: "Sklep Internetowy",

    heroTitle: "Sklep internetowy gotowy do sprzedaży online",

    heroDesc:
      "Projektuję nowoczesne sklepy internetowe, które pozwalają wygodnie sprzedawać produkty online. Każdy sklep jest responsywny, szybki i przygotowany do dalszego rozwoju oraz pozycjonowania.",

    sectionTitle: "Dlaczego warto stworzyć sklep internetowy?",

    sectionDesc:
      "Sklep internetowy umożliwia sprzedaż produktów przez całą dobę i dotarcie do klientów z całej Polski. Tworzę sklepy z przejrzystą strukturą kategorii, intuicyjnym procesem zakupowym oraz optymalizacją pod SEO i wydajność. Dzięki temu sklep jest gotowy do rozwoju wraz z Twoim biznesem.",

    benefits: [
      {
        title: "Pomoc w Zakupie Domeny",
        img: domainImg,
      },
      {
        title: "Wdrożenie Strony na Hosting",
        img: hostingImg,
      },
      {
        title: "Optymalizacje Wydajności",
        img: performanceImg,
      },
      {
        title: "Przygotowanie pod SEO",
        img: seoImg,
      },
      {
        title: "Możliwość Edycji Treści",
        img: cmsImg,
      },
      {
        title: "Moje Wsparcie Techniczne",
        img: supportImg,
      },
    ],
  },
};

export default services;

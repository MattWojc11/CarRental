import React from 'react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Warunki korzystania</h1>
        
        <div className="max-w-4xl space-y-8 text-zinc-300">
          <section>
            <p className="mb-4">
              Dokument określa zasady korzystania z serwisu internetowego KARZONE oraz prawa i obowiązki Użytkowników.
              Korzystanie z serwisu oznacza akceptację poniższych warunków.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Definicje</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Serwis</strong> - strona internetowa KARZONE dostępna pod adresem www.karzone.pl.</li>
              <li><strong>Użytkownik</strong> - osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z Serwisu.</li>
              <li><strong>Administrator</strong> - KARZONE Sp. z o.o. z siedzibą we Wrocławiu, ul. Przykładowa 123, 50-002 Wrocław.</li>
              <li><strong>Usługi</strong> - wszelkie usługi świadczone przez Administratora na rzecz Użytkowników za pośrednictwem Serwisu.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Zasady ogólne</h2>
            <p className="mb-4">
              Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z obowiązującymi przepisami prawa, 
              normami społecznymi i obyczajowymi oraz postanowieniami niniejszego regulaminu.
            </p>
            <p>
              Administrator zastrzega sobie prawo do modyfikowania technicznego sposobu realizacji Usług, 
              stosownie do zakresu i warunków wynikających z posiadanych uprawnień, a także odpowiednio do 
              posiadanych możliwości technicznych, bez pogarszania ich jakości oraz bez wpływu na zakres praw 
              i obowiązków Stron.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Usługi i zawarcie umowy</h2>
            <p className="mb-4">
              Za pośrednictwem Serwisu, Administrator świadczy usługi umożliwiające Użytkownikom:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Przeglądanie oferty wynajmu pojazdów.</li>
              <li>Wyszukiwanie dostępności pojazdów w określonym terminie.</li>
              <li>Dokonywanie rezerwacji pojazdu.</li>
              <li>Kontakt z obsługą KARZONE.</li>
            </ul>
            <p className="mt-4">
              Umowa najmu pojazdu zostaje zawarta w momencie potwierdzenia rezerwacji przez Użytkownika 
              oraz dokonania płatności zaliczki zgodnie z wybraną opcją.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Odpowiedzialność</h2>
            <p className="mb-4">
              Administrator nie ponosi odpowiedzialności za:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Przerwy w funkcjonowaniu Serwisu wynikające z przyczyn technicznych.</li>
              <li>Szkody wynikłe z korzystania z Serwisu niezgodnie z jego przeznaczeniem.</li>
              <li>Treści zamieszczane przez Użytkowników, które naruszają prawo lub dobra osób trzecich.</li>
              <li>Działania osób trzecich polegające na ingerencji w system komputerowy Użytkownika.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Prawa własności intelektualnej</h2>
            <p className="mb-4">
              Wszelkie prawa do Serwisu, w tym do jego nazwy, domeny internetowej, szaty graficznej, 
              a także do materiałów i informacji w nim zamieszczonych, należą do Administratora lub podmiotów, 
              z którymi Administrator zawarł stosowne umowy.
            </p>
            <p>
              Korzystanie z Serwisu nie oznacza nabycia jakichkolwiek praw do całości lub części Serwisu. 
              Zabronione jest kopiowanie, modyfikowanie lub rozpowszechnianie zawartości Serwisu bez uprzedniej 
              zgody Administratora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Ochrona danych osobowych</h2>
            <p>
              Zasady przetwarzania danych osobowych Użytkowników określa Polityka Prywatności 
              dostępna w Serwisie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">7. Reklamacje</h2>
            <p className="mb-4">
              Użytkownikowi przysługuje prawo do złożenia reklamacji dotyczącej funkcjonowania Serwisu 
              lub realizacji Usług.
            </p>
            <p className="mb-4">
              Reklamacje należy składać drogą elektroniczną na adres: kontakt@karzone.pl 
              lub pisemnie na adres siedziby Administratora.
            </p>
            <p>
              Reklamacja zostanie rozpatrzona w terminie 14 dni od daty jej otrzymania. O decyzji 
              Administratora Użytkownik zostanie poinformowany drogą, którą złożył reklamację.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">8. Postanowienia końcowe</h2>
            <p className="mb-4">
              Administrator zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym czasie. 
              Zmiany wchodzą w życie z dniem ich opublikowania w Serwisie.
            </p>
            <p className="mb-4">
              W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, 
              w szczególności Kodeksu cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.
            </p>
            <p>
              Wszelkie spory powstałe na gruncie niniejszego Regulaminu rozstrzygane będą przez sąd 
              właściwy dla siedziby Administratora.
            </p>
          </section>

          <p className="mt-8 font-semibold">
            Ostatnia aktualizacja: 10.05.2024
          </p>
        </div>
      </div>
    </main>
  );
} 
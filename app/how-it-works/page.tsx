'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState(0);
  
  const faqItems = [
    {
      id: 1,
      question: "Jakie dokumenty są potrzebne do wynajmu?",
      answer: "Do wynajmu potrzebny jest ważny dowód osobisty lub paszport oraz prawo jazdy. W przypadku firm, dodatkowo wymagamy dokumentów rejestracyjnych przedsiębiorstwa (NIP, REGON) oraz upoważnienia dla osoby wypożyczającej, jeśli nie jest ona właścicielem.",
      icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
    },
    {
      id: 2,
      question: "Ile wynosi kaucja?",
      answer: "Wysokość kaucji zależy od kategorii wynajmowanego samochodu i waha się od 2000 zł do 10000 zł. Kaucja jest zwracana w całości po zwrocie pojazdu w stanie niepogorszonym.",
      icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      id: 3,
      question: "Czy jest limit kilometrów?",
      answer: "Standardowo oferujemy 300 km dziennie w cenie wynajmu. Istnieje możliwość wykupienia pakietu bez limitu kilometrów za dodatkową opłatą. Każdy dodatkowy kilometr powyżej limitu to koszt od 1,50 zł do 5 zł w zależności od klasy samochodu.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
      id: 4,
      question: "Jaki jest minimalny wiek kierowcy?",
      answer: "Minimalny wiek kierowcy to 21 lat i posiadanie prawa jazdy od co najmniej 2 lat. Dla samochodów premium i sportowych minimalny wiek to 25 lat i minimum 3 lata doświadczenia jako kierowca.",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    },
    {
      id: 5,
      question: "Czy mogę wynająć auto na jeden dzień?",
      answer: "Tak, oferujemy wynajem nawet na jeden dzień. Jednak w przypadku samochodów premium i sportowych minimalny okres wynajmu może wynosić 2-3 dni, zwłaszcza w sezonie wysokim.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      id: 6,
      question: "Co w przypadku awarii pojazdu?",
      answer: "Wszystkie nasze samochody objęte są ubezpieczeniem assistance. W przypadku awarii, należy niezwłocznie skontaktować się z nami. Zapewniamy pomoc drogową oraz, w miarę możliwości, samochód zastępczy.",
      icon: "M14.7519 11.1679L11.5547 9.03647M16.8889 7.38647L18.1947 6.70951C18.6464 6.48511 19.1706 6.54505 19.5621 6.93653C20.1461 7.52054 20.1461 8.47946 19.5621 9.06347L13.1808 15.4448C12.5771 16.0484 11.7889 16.4279 10.9383 16.52L9 16.7368L9.21684 14.7985C9.30888 13.9479 9.68838 13.1597 10.292 12.556L16.8889 6.05911C17.4729 5.4751 18.4318 5.4751 19.0158 6.05911C19.5998 6.64312 19.5998 7.60204 19.0158 8.18605L16.8889 10.313C16.7278 10.4742 16.7278 10.7315 16.8889 10.8926C17.0501 11.0537 17.3074 11.0537 17.4686 10.8926L19.5955 8.76564C20.4683 7.89285 20.4683 6.4726 19.5955 5.59981C18.7228 4.72699 17.3025 4.72699 16.4297 5.59978L9.83279 12.0967C9.0388 12.8907 8.53513 13.9335 8.40806 15.0565L8.07839 18L11.0219 17.6703C12.1449 17.5433 13.1877 17.0396 13.9817 16.2456L20.363 9.86435C21.2357 8.99156 21.2357 7.57131 20.363 6.69853C19.4902 5.82578 18.0699 5.82563 17.1971 6.69839L15.8913 7.99419"
    },
    {
      id: 7,
      question: "Czy mogę wyjechać samochodem za granicę?",
      answer: "Wyjazd za granicę jest możliwy po wcześniejszym zgłoszeniu i uzyskaniu pisemnej zgody. Dotyczy to tylko krajów Unii Europejskiej. Za wyjazd za granicę pobierana jest dodatkowa opłata obejmująca rozszerzone ubezpieczenie.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      id: 8,
      question: "Jak mogę zapłacić za wynajem?",
      answer: "Akceptujemy płatności gotówką, kartą płatniczą, kartą kredytową oraz przelewem bankowym (w przypadku wcześniejszej rezerwacji). Kaucja może być wpłacona gotówką lub zablokowana na karcie kredytowej.",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    }
  ];
  
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      {/* Nagłówek */}
      <section className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#FFE600]">Strona główna</Link>
            <span>/</span>
            <span className="text-[#FFE600]">Jak to działa</span>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFE600] to-yellow-400">Jak to działa</h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Pierwszy raz korzystasz z naszych usług? Jeśli tak, to w tym miejscu znajdziesz informacje o procesie wynajmu auta, a także odpowiedzi na najczęściej zadawane pytania.
            </p>
          </div>
        </div>
      </section>
      
      {/* Etapy wynajmu */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,230,0,0.05),transparent_60%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-20 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Proces wynajmu samochodu</span>
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {/* Linia łącząca na dużych ekranach */}
            <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
            
            {/* Etap 1 */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_rgba(255,230,0,0.1)]">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFE600] to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-600/20">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">KROK 1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">REZERWACJA SAMOCHODU</h3>
                <p className="text-gray-300">
                  Klient kontaktuje się z nami telefonicznie, mailowo lub dokonuje rezerwacji online poprzez portal rezerwacyjny na stronie internetowej. Istnieje możliwość zarezerwowania pojazdu przez social media (Instagram, Facebook).
                </p>
              </div>
            </div>
            
            {/* Etap 2 */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_rgba(255,230,0,0.1)]">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFE600] to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-600/20">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">KROK 2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">POTWIERDZENIE REZERWACJI</h3>
                <p className="text-gray-300">
                  W celu potwierdzenia i omówienia szczegółów rezerwacji kontaktujemy się telefonicznie. Przedstawiamy ofertę i zbieramy dane klienta. Po rozmowie wysyłamy mailowo podsumowanie oferty oraz umowę do wglądu przed jej podpisaniem.
                </p>
              </div>
            </div>
            
            {/* Etap 3 */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_rgba(255,230,0,0.1)]">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFE600] to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-600/20">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">KROK 3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">ODBIÓR POJAZDU</h3>
                <p className="text-gray-300">
                  W dzień odbioru następuje podpisanie umowy, opłacenie wynajmu (w tym wpłacenie kaucji) oraz oględziny pojazdu. Istnieje możliwość podstawienia oraz zwrotu pojazdu na terenie całej Polski za dodatkową opłatą.
                </p>
              </div>
            </div>
            
            {/* Etap 4 */}
            <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_20px_rgba(255,230,0,0.1)]">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFE600] to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-600/20">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">KROK 4</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-white">STAŁY KONTAKT Z KLIENTEM</h3>
                <p className="text-gray-300">
                  Aby Klienci czuli się pewnie i komfortowo, gwarantujemy stały kontakt w przypadku gdyby pojawiły się różne, dodatkowe pytania lub niespodziewane sytuacje dotyczące obsługi pojazdu.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-20 bg-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4 text-white">Gotowy na jazdę życia?</h3>
            <p className="text-gray-300 mb-8">Sprawdź naszą flotę luksusowych i sportowych samochodów dostępnych do wynajmu.</p>
            <Link 
              href="/cars" 
              className="inline-block bg-gradient-to-r from-[#FFE600] to-yellow-500 text-black px-8 py-4 rounded-lg font-bold transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,230,0,0.3)] group"
            >
              <span className="flex items-center">
                Zobacz dostępne samochody
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Pytania i Odpowiedzi</h2>
            <div className="flex justify-center">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#FFE600]/20 to-yellow-500/20 text-[#FFE600] rounded-full text-xl font-semibold">FAQ</span>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {[0, 1, 2, 3].map((tabIndex) => (
              <button
                key={tabIndex}
                onClick={() => setActiveTab(tabIndex)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tabIndex 
                    ? 'bg-[#FFE600] text-black font-bold' 
                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                }`}
              >
                {tabIndex === 0 ? "Wszystkie" : 
                 tabIndex === 1 ? "Rezerwacja" : 
                 tabIndex === 2 ? "Dokumenty" : "Płatności"}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems
              .filter(item => 
                activeTab === 0 || 
                (activeTab === 1 && [3, 5, 7].includes(item.id)) ||
                (activeTab === 2 && [1, 4, 6].includes(item.id)) ||
                (activeTab === 3 && [2, 8].includes(item.id))
              )
              .map((item) => (
                <div key={item.id} className="bg-zinc-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:border-zinc-700">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 bg-[#FFE600]/20 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-[#FFE600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.question}</h3>
                    </div>
                    <p className="text-gray-300 pl-14">{item.answer}</p>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Masz więcej pytań? Skontaktuj się z nami!</p>
            <Link 
              href="/contact" 
              className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-black/50 group"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Kontakt
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
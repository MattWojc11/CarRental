'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function VoucherPage() {
  const [voucherAmount, setVoucherAmount] = useState(1000);
  const [formType, setFormType] = useState('physical'); // physical lub digital
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  
  const faqItems = [
    {
      question: "Jak długo ważny jest voucher?",
      answer: "Voucher jest ważny przez 12 miesięcy od daty zakupu. W tym czasie obdarowany może wykorzystać go na dowolny dostępny pojazd z naszej floty."
    },
    {
      question: "Czy voucher można przedłużyć?",
      answer: "Tak, istnieje możliwość przedłużenia ważności vouchera o kolejne 3 miesiące. Aby to zrobić, należy skontaktować się z nami minimum 7 dni przed upływem terminu ważności."
    },
    {
      question: "Jak szybko otrzymam zamówiony voucher?",
      answer: "Voucher w formie elektronicznej wysyłamy w ciągu 24 godzin od zaksięgowania płatności. Fizyczny zestaw z kubkiem termicznym wysyłamy w ciągu 2-3 dni roboczych."
    },
    {
      question: "Co jeśli wartość vouchera jest wyższa niż koszt wypożyczenia?",
      answer: "Różnica pozostaje do wykorzystania przy kolejnych wypożyczeniach lub na zakup dodatkowych usług, takich jak przedłużenie czasu wynajmu czy ubezpieczenie."
    },
    {
      question: "Czy voucher można zrealizować w dowolnym dniu?",
      answer: "Tak, voucher można zrealizować w dowolnym dniu, jednak zalecamy wcześniejszą rezerwację wybranego samochodu, szczególnie w przypadku popularnych modeli. Rezerwacji można dokonać z wyprzedzeniem, podając numer vouchera."
    }
  ];
  
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      {/* Nagłówek */}
      <section className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#FFE600]">Strona główna</Link>
            <span>/</span>
            <span className="text-[#FFE600]">Voucher</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Voucher Podarunkowy</h1>
          <p className="text-gray-400">
            Idealny prezent dla miłośnika motoryzacji
          </p>
        </div>
      </section>
      
      {/* Sekcja główna */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Lewa kolumna - Informacja o voucherze */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#FFE600]">VOUCHER TO ŚWIETNY PREZENT DLA FANA MOTORYZACJI</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Zastanawiasz się co dać na prezent miłośnikowi motoryzacji? Przejażdżka sportowym samochodem będzie strzałem w dziesiątkę. 
                Zamów nasz voucher podarunkowy, a spakujemy go dla Ciebie w ozdobny zestaw z kubkiem termicznym. 
                Fana czterech kółek z pewnością ucieszy taki prezent.
              </p>
              
              <div className="bg-zinc-900 p-6 rounded-lg mb-8 border border-zinc-800">
                <h3 className="text-xl font-bold mb-4">Standardowy zestaw zawiera</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FFE600] mr-3">✓</span>
                    <span>voucher podarunkowy do wykorzystania na dowolne, dostępne pojazdy z naszej floty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFE600] mr-3">✓</span>
                    <span>kubek termiczny, który można zabrać w podróż samochodem, bez obaw, że napój się rozleje lub wystygnie</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-gray-300 text-lg leading-relaxed">
                <p className="mb-4">
                  Własnoręcznie zapakujemy voucher wraz z kubkiem termicznym w ozdobne opakowanie, które dodatkowo zabezpieczymy, 
                  aby nie uszkodziło się w transporcie. Prezent wyślemy kurierem pod wskazany przez Ciebie adres. 
                  Koszty przesyłki zawierają się w cenie zestawu.
                </p>
                <p className="mb-4">
                  Jeśli interesuje Cię elektroniczna forma vouchera, to poinformuj nas o tym, a przygotujemy dla Ciebie również taką wersję, 
                  którą następnie prześlemy na wskazany adres mailowy.
                </p>
                <p className="font-semibold mb-4">
                  Zamów wypełniając formularz lub zamów telefonicznie <span className="text-[#FFE600]">+48 111 222 333</span>.
                </p>
                <p>
                  Voucher podarunkowy wypiszemy na wybraną przez Ciebie kwotę, jednak nie mniejszą niż 600 zł. 
                  Kwota ta będzie ceną całego zestawu prezentowego.
                </p>
              </div>
            </div>
            
            {/* Prawa kolumna - Formularz zamówienia */}
            <div className="bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-6">Zamów voucher</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Wartość vouchera</label>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="600"
                        max="10000"
                        step="100"
                        value={voucherAmount}
                        onChange={(e) => setVoucherAmount(parseInt(e.target.value))}
                        className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-400">min. 600 zł</span>
                      <span className="text-xl font-bold text-[#FFE600]">{voucherAmount} zł</span>
                      <span className="text-xs text-gray-400">max. 10 000 zł</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Imię i nazwisko zamawiającego</label>
                    <input 
                      type="text"
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-[#FFE600] focus:border-[#FFE600] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon kontaktowy</label>
                    <input 
                      type="tel"
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-[#FFE600] focus:border-[#FFE600] outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Adres e-mail</label>
                  <input 
                    type="email"
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-[#FFE600] focus:border-[#FFE600] outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Forma vouchera</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="form-type" 
                        value="physical" 
                        checked={formType === 'physical'}
                        onChange={() => setFormType('physical')}
                        className="hidden" 
                      />
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${formType === 'physical' ? 'border-[#FFE600] bg-[#FFE600]' : 'border-gray-400'}`}>
                        {formType === 'physical' && <span className="w-2 h-2 rounded-full bg-black"></span>}
                      </span>
                      <span>Fizyczny zestaw z kubkiem</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="form-type" 
                        value="digital" 
                        checked={formType === 'digital'}
                        onChange={() => setFormType('digital')}
                        className="hidden" 
                      />
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${formType === 'digital' ? 'border-[#FFE600] bg-[#FFE600]' : 'border-gray-400'}`}>
                        {formType === 'digital' && <span className="w-2 h-2 rounded-full bg-black"></span>}
                      </span>
                      <span>Voucher elektroniczny</span>
                    </label>
                  </div>
                </div>
                
                {formType === 'physical' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Adres dostawy</label>
                    <textarea 
                      rows={3}
                      className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-[#FFE600] focus:border-[#FFE600] outline-none"
                      placeholder="Ulica, numer domu, kod pocztowy, miasto"
                    ></textarea>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium mb-2">Wiadomość (opcjonalnie)</label>
                  <textarea 
                    rows={3}
                    className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md focus:ring-[#FFE600] focus:border-[#FFE600] outline-none"
                    placeholder="Jeśli masz specjalne życzenia, napisz je tutaj..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="w-4 h-4 mr-2" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    Akceptuję <Link href="/terms" className="text-[#FFE600] hover:underline">regulamin</Link> oraz <Link href="/privacy-policy" className="text-[#FFE600] hover:underline">politykę prywatności</Link>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-[#FFE600] to-yellow-500 text-black font-bold rounded hover:from-yellow-500 hover:to-[#FFE600] transition duration-300 transform hover:scale-[1.02]"
                >
                  Zamów Voucher - {voucherAmount} zł
                </button>
              </form>
            </div>
          </div>
          
          {/* Dodatkowa sekcja - Dlaczego warto */}
          <div className="mt-12 bg-zinc-900 rounded-lg p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6 text-center">Dlaczego voucher na sportowy samochód to idealny prezent?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-zinc-800 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-[#FFE600] text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Niezapomniane emocje</h4>
                <p className="text-gray-300">
                  Prezent, który zapewni dreszczyk emocji i pozostawi wspomnienia na długi czas.
                </p>
              </div>
              
              <div className="bg-zinc-800 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-[#FFE600] text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Elastyczność</h4>
                <p className="text-gray-300">
                  Obdarowany sam wybiera termin i model samochodu, który najbardziej mu odpowiada.
                </p>
              </div>
              
              <div className="bg-zinc-800 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-[#FFE600] text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Prestiż</h4>
                <p className="text-gray-300">
                  Wyjątkowy prezent, który wyróżnia się spośród standardowych upominków.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-zinc-900 relative">
        {/* Tło ze zdjęciem */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
          <Image 
            src="/images/r81.jpg" 
            alt="Audi R8 w tle" 
            fill
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-10 text-center">Najczęściej zadawane pytania</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-zinc-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-zinc-700 transition-all duration-300"
              >
                <button 
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-bold">{item.question}</h3>
                  <svg 
                    className={`w-6 h-6 text-[#FFE600] transform transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeAccordion === index 
                      ? 'max-h-[500px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-300">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
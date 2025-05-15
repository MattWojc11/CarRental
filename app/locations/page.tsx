'use client';

import Link from 'next/link';

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-28">
      <section className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#FFE600]">Strona główna</Link>
            <span>/</span>
            <span className="text-[#FFE600]">Lokalizacje</span>
          </div>
          <h1 className="text-4xl font-bold">Nasze Lokalizacje</h1>
          <p className="text-gray-400 mt-2 mb-8">
            Odwiedź nas i wybierz swój wymarzony samochód do wynajęcia
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Wrocław - Centrala</h2>
            <div className="bg-zinc-900 p-6 rounded-lg shadow-xl">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#FFE600]">Adres</h3>
                <p className="text-gray-300">
                  Karzone Premium Cars<br />
                  ul. Grabiszyńska 241<br />
                  53-234 Wrocław
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#FFE600]">Godziny otwarcia</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <span>Poniedziałek - Piątek:</span>
                  <span>9:00 - 20:00</span>
                  <span>Sobota:</span>
                  <span>10:00 - 18:00</span>
                  <span>Niedziela:</span>
                  <span>Zamknięte</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#FFE600]">Kontakt</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <span>Telefon:</span>
                  <span>+48 111 222 333</span>
                  <span>Email:</span>
                  <span>kontakt@karzone.pl</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-300 mb-4">
                Nasza centrala we Wrocławiu oferuje dostęp do pełnej floty luksusowych samochodów. 
                Zlokalizowana w dogodnej lokalizacji, z łatwym dojazdem i przestronnym parkingiem.
              </p>
              <p className="text-gray-300">
                Na miejscu nasi doradcy pomogą Ci wybrać idealny samochód dopasowany do Twoich potrzeb.
                Oferujemy również transport do i z lotniska dla naszych klientów.
              </p>
            </div>
          </div>
          
          <div className="w-full h-96 lg:h-[500px]">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              {/* Mapa Google */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.8348268839607!2d16.97770045103194!3d51.08218204766654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc271f81d5ad5%3A0x79a8d7cd1b9f4df5!2sGrabiszy%C5%84ska%20241%2C%2053-234%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1715879384778!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              
              {/* Nakładka na mapę z dojazdem */}
              <div className="absolute bottom-4 left-4 max-w-xs p-4 bg-black/80 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-xl">
                <h3 className="text-lg font-semibold mb-2 text-[#FFE600]">Jak do nas dojechać?</h3>
                <p className="text-gray-200 text-sm">
                  Znajdujemy się w zachodniej części Wrocławia, przy głównej arterii komunikacyjnej.
                  Z centrum miasta dojedziesz do nas w 15 minut samochodem lub komunikacją miejską (linie: 5, 11, 126).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Planujemy ekspansję!</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            W najbliższym czasie planujemy otwarcie nowych oddziałów w Krakowie i Warszawie.
            Śledź nasze media społecznościowe, aby być na bieżąco z nowościami.
          </p>
          <Link href="/contact" className="inline-block bg-[#FFE600] text-black font-bold py-3 px-8 rounded hover:bg-yellow-400 transition">
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </main>
  );
} 
export default function BenefitsSection() {
  return (
    <section className="w-full py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Dlaczego Karzone?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Ekspresowa obsługa</h3>
            <p className="text-gray-400">Minimum formalności, maksimum czasu na przyjemność z jazdy.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Ekskluzywna kolekcja</h3>
            <p className="text-gray-400">Tylko najnowsze i najbardziej luksusowe modele samochodów.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Pełne ubezpieczenie</h3>
            <p className="text-gray-400">Wszystkie nasze samochody posiadają kompleksowe ubezpieczenie.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
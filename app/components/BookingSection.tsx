import SectionHeading from './SectionHeading';

export default function BookingSection() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/5 mb-6 md:mb-0">
            <SectionHeading title="REZERWACJA" />
          </div>
          
          <div className="md:w-4/5">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-16">
                Prosty proces rezerwacji
                <span className="text-zinc-500"> zapewnia komfort i wygodę użytkowania naszych ekskluzywnych pojazdów.</span>
              </h2>
              
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex items-start border-t border-zinc-800 pt-8">
                  <div className="w-12 h-12 bg-[#FFE600] text-black flex items-center justify-center rounded-full font-bold text-xl flex-shrink-0 mr-6 mt-2">01</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Rezerwacja</h3>
                    <p className="text-zinc-400 text-lg">
                      Klient kontaktuje się z nami telefonicznie, mailowo lub dokonuje rezerwacji online poprzez portal rezerwacyjny lub social media.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-start border-t border-zinc-800 pt-8">
                  <div className="w-12 h-12 bg-[#FFE600] text-black flex items-center justify-center rounded-full font-bold text-xl flex-shrink-0 mr-6 mt-2">02</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Potwierdzenie</h3>
                    <p className="text-zinc-400 text-lg">
                      W celu potwierdzenia i omówienia szczegółów rezerwacji kontaktujemy się telefonicznie i mailowo wysyłamy ofertę do zapoznania.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex items-start border-t border-zinc-800 pt-8">
                  <div className="w-12 h-12 bg-[#FFE600] text-black flex items-center justify-center rounded-full font-bold text-xl flex-shrink-0 mr-6 mt-2">03</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Odbiór Auta</h3>
                    <p className="text-zinc-400 text-lg">
                      W dzień odbioru następuje podpisanie umowy, opłacenie wynajmu oraz oględziny pojazdu przed rozpoczęciem wynajmu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
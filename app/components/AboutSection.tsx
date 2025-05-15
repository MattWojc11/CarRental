import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/5 mb-6 md:mb-0">
            <SectionHeading title="O NAS" />
          </div>
          
          <div className="md:w-4/5">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
                Od sportowych supersamochodów po luksusowe limuzyny i SUV-y, kolekcja Karzone 
                <span className="text-zinc-500"> to wyjątkowe połączenie prestiżu, adrenaliny i najwyższej jakości obsługi.</span>
              </h2>
              
              <div className="mt-16 border-t border-zinc-800 pt-12">
                <p className="text-zinc-400 text-lg">
                  Nasza flota to starannie wyselekcjonowane pojazdy, które zdefiniowały nową erę motoryzacji. Ferrari, Lamborghini, 
                  Porsche czy McLaren – każdy z nich to nie tylko samochód, to doświadczenie, które zostaje w pamięci na zawsze. 
                  Dołącz do elitarnego grona klientów, którzy wiedzą, że życie jest zbyt krótkie, by jeździć przeciętnymi autami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
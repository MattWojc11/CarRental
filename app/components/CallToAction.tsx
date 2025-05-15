import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="w-full py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Gotowy na luksusowe doświadczenie?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
          Skontaktuj się z nami już teraz i zarezerwuj wybrany samochód.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-[#FFE600] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FFD700] transition">
            Kontakt
          </Link>
          <Link 
            href="/cars" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
            Zarezerwuj teraz
          </Link>
        </div>
      </div>
    </section>
  );
} 
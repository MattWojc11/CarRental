import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full relative h-screen overflow-hidden">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
      
      {/* Background image */}
      <Image
        src="/images/jaguar-yellow.jpg" 
        alt="Luksusowy samochód" 
        fill 
        className="object-cover animate-subtle-zoom"
        priority
        quality={100}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-between relative z-20">
        {/* Top information */}
        <div className="pt-40 grid grid-cols-1 md:grid-cols-2 gap-8">
          
            
            
          
        </div>
        
        {/* Main Headline */}
        <div className="pb-36 relative">
          <div className="absolute w-20 h-20 -left-4 -top-16 opacity-20 border-t-2 border-l-2 border-[#FFE600]"></div>
          <div className="absolute w-20 h-20 -right-4 -bottom-6 opacity-20 border-r-2 border-b-2 border-[#FFE600]"></div>
          
          <div className="relative">
            <div className="w-20 h-1 bg-[#FFE600] mb-8"></div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tighter mb-6">
              <span className="block transform transition-transform hover:translate-x-2 duration-500">Marzenia na kołach</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] to-yellow-400 transform transition-transform hover:translate-x-4 duration-500">Twoja przygoda czeka.</span>
            </h1>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md md:max-w-lg">
              <Link 
                href="/cars" 
                className="relative overflow-hidden group bg-[#FFE600] text-black px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  ZOBACZ SAMOCHODY
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="absolute inset-0 w-full h-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
              
              <Link 
                href="/contact" 
                className="relative overflow-hidden group bg-transparent text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest border-2 border-white flex items-center justify-center hover:border-[#FFE600] transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center group-hover:text-[#FFE600]">
                  KONTAKT
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  );
} 
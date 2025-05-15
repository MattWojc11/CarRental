'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Car {
  id: string;
  name: string;
  brand: string;
  category: string;
  fuel: string;
  transmission: string;
  doors: number;
  pricePerDay: number;
  horsepower: number;
  engine: string;
  acceleration: number;
  drive: string;
  features: string[];
  image: string;
}

type SortKey = 'pricePerDay' | 'horsepower' | 'acceleration';
type SortOrder = 'asc' | 'desc';

export default function CarsPage() {
  // Rozszerzony model danych samochodów z dodatkowymi parametrami technicznymi
  const carsData: Car[] = [
    {
      id: 'ferrari-f8',
      name: 'Ferrari F8 Tributo',
      brand: 'Ferrari',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 2,
      pricePerDay: 3500,
      horsepower: 720,
      engine: '3.9 L',
      acceleration: 2.9,
      drive: 'RWD',
      features: ['Klimatyzacja', 'System audio premium', 'Skórzana tapicerka', 'Tryb Sport+'],
      image: '/images/ferrariyel1.jpg'
    },
    {
      id: 'lamborghini-huracan',
      name: 'Lamborghini Huracán',
      brand: 'Lamborghini',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 2,
      pricePerDay: 6000,
      horsepower: 640,
      engine: '5.2 L',
      acceleration: 2.9,
      drive: '4x4',
      features: ['Klimatyzacja', 'System audio premium', 'Skórzana tapicerka', 'Tryb Corsa'],
      image: '/images/lambo-yellow.jpg'
    },
    {
      id: 'lamborghini-aventador',
      name: 'Lamborghini Aventador',
      brand: 'Lamborghini',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 2,
      pricePerDay: 1500,
      horsepower: 450,
      engine: '5.0 L',
      acceleration: 3.7,
      drive: 'RWD',
      features: ['Klimatyzacja', 'System audio Meridian', 'Skórzana tapicerka', 'Podgrzewane fotele'],
      image: '/images/jaguar-yellow.jpg'
    },
    {
      id: 'audi-r8',
      name: 'Audi R8 Performance',
      brand: 'Audi',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 2,
      pricePerDay: 3500,
      horsepower: 620,
      engine: '5.2 L',
      acceleration: 3.1,
      drive: '4x4',
      features: ['Klimatyzacja', 'System audio B&O', 'Skórzana tapicerka', 'Virtual Cockpit'],
      image: '/images/r81.jpg'
    },
    {
      id: 'bmw-m3',
      name: 'BMW M3 Competition',
      brand: 'BMW',
      category: 'Sedan',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 4,
      pricePerDay: 2500,
      horsepower: 510,
      engine: '3.0 L',
      acceleration: 3.9,
      drive: 'RWD',
      features: ['Klimatyzacja 4-strefowa', 'System audio Harman Kardon', 'Sportowe fotele M', 'M Driver Package', 'Head-up display', 'Ceramiczne hamulce', 'Pakiet Carbon', 'Adaptacyjne zawieszenie'],
      image: '/images/m31.jpg'
    },
    {
      id: 'porsche-gt3',
      name: 'Porsche 911 GT3',
      brand: 'Porsche',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Manualna',
      doors: 2,
      pricePerDay: 3800,
      horsepower: 510,
      engine: '4.0 L',
      acceleration: 3.4,
      drive: 'RWD',
      features: ['Klimatyzacja', 'System audio Bose', 'Sportowe fotele kubełkowe', 'Pakiet Weissach', 'System nawigacji', 'Ceramiczne hamulce', 'Wyścigowe zawieszenie', 'Launch Control'],
      image: '/images/porshgt3.jpg'
    },
    {
      id: 'mercedes-amg-gtr',
      name: 'Mercedes AMG GTR',
      brand: 'Mercedes',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 2,
      pricePerDay: 4000,
      horsepower: 585,
      engine: '4.0 L V8',
      acceleration: 3.6,
      drive: 'RWD',
      features: ['Klimatyzacja', 'System audio Burmester', 'Carbon fiber body', 'AMG Performance'],
      image: '/images/mgtr1.jpg'
    },
  ];

  // Stan dla filtrów
  const [selectedBrand, setSelectedBrand] = useState<string>('Wszystkie');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc'); // 'asc' lub 'desc'
  const [sortBy, setSortBy] = useState<SortKey>('pricePerDay'); // 'pricePerDay', 'horsepower', 'acceleration'
  
  // Unikalne marki dla filtra
  const brands: string[] = ['Wszystkie', ...new Set(carsData.map(car => car.brand))];

  // Filtrowanie samochodów
  useEffect(() => {
    let result = [...carsData];
    
    if (selectedBrand !== 'Wszystkie') {
      result = result.filter(car => car.brand === selectedBrand);
    }
    
    // Sortowanie
    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    
    setFilteredCars(result);
  }, [selectedBrand, sortOrder, sortBy]);

  // Aktualizacja filtru marki
  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setIsDropdownOpen(false);
  };

  // Aktualizacja sortowania
  const handleSortChange = (by: SortKey) => {
    if (sortBy === by) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(by);
      setSortOrder('asc');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      {/* Page Header */}
      <section className="w-full bg-black pt-32 pb-16 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Wypożyczalnia samochodów sportowych</h1>
          <p className="text-xl max-w-2xl text-gray-400">
            CARZONE to wypożyczalnia dla miłośników supersamochodów, które charakteryzują się niebywałymi osiągami, niepowtarzalną stylistyką i właściwościami jezdnymi, gwarantującymi niezapomniane wrażenia.
          </p>
        </div>
      </section>

      {/* Filters Section - przeniesiona nad listę samochodów */}
      <section className="w-full bg-zinc-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Dropdown wyboru marki */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-64 bg-black border border-zinc-700 py-3 px-4 rounded hover:border-[#FFE600] transition duration-300"
              >
                <span>
                  {selectedBrand === 'Wszystkie' ? 'Wybierz markę' : selectedBrand}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-50 w-64 mt-2 bg-black border border-zinc-700 rounded shadow-lg py-1 max-h-60 overflow-y-auto">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandChange(brand)}
                      className={`w-full text-left px-4 py-2 hover:bg-zinc-800 transition-colors ${
                        selectedBrand === brand ? 'bg-zinc-800 text-[#FFE600]' : 'text-gray-300'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sortowanie */}
            <div className="flex gap-2">
              <span className="text-gray-300 mr-2 self-center">Sortuj:</span>
              <button 
                onClick={() => handleSortChange('pricePerDay')}
                className={`px-3 py-2 text-sm transition-colors rounded ${
                  sortBy === 'pricePerDay' 
                    ? "bg-[#FFE600] text-black font-bold" 
                    : "bg-transparent border border-zinc-700 text-gray-300 hover:border-[#FFE600]"
                }`}
              >
                Cena {sortBy === 'pricePerDay' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button 
                onClick={() => handleSortChange('horsepower')}
                className={`px-3 py-2 text-sm transition-colors rounded ${
                  sortBy === 'horsepower' 
                    ? "bg-[#FFE600] text-black font-bold" 
                    : "bg-transparent border border-zinc-700 text-gray-300 hover:border-[#FFE600]"
                }`}
              >
                Moc {sortBy === 'horsepower' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button 
                onClick={() => handleSortChange('acceleration')}
                className={`px-3 py-2 text-sm transition-colors rounded ${
                  sortBy === 'acceleration' 
                    ? "bg-[#FFE600] text-black font-bold" 
                    : "bg-transparent border border-zinc-700 text-gray-300 hover:border-[#FFE600]"
                }`}
              >
                Przyśpieszenie {sortBy === 'acceleration' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="w-full py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-zinc-900 rounded overflow-hidden hover:bg-zinc-800 transition duration-300 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Zdjęcie samochodu */}
                  <div className="relative h-64 md:h-auto min-h-[280px]">
                    <Image 
                      src={car.image} 
                      alt={car.name} 
                      fill 
                      className="object-contain bg-zinc-900"
                    />
                  </div>
                  
                  {/* Dane samochodu */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-3">{car.name}</h2>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1.5 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          {car.category}
                        </span>
                        <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1.5 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                          {car.doors} drzwi
                        </span>
                        <span className="bg-zinc-800 text-gray-300 text-xs px-3 py-1.5 rounded inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {car.fuel}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="font-bold text-2xl mb-2 text-[#FFE600]">{car.pricePerDay} zł <span className="text-sm text-gray-400 font-normal">/ doba</span></div>
                    </div>
                  </div>
                  
                  {/* Parametry i przycisk rezerwacji */}
                  <div className="p-6 bg-zinc-800 flex flex-col justify-between border-l border-zinc-700">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">Przyspieszenie</div>
                        <div className="text-xl font-semibold text-white">{car.acceleration} s</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">Moc</div>
                        <div className="text-xl font-semibold text-white">{car.horsepower} KM</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">Silnik</div>
                        <div className="text-xl font-semibold text-white">{car.engine}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-400 mb-1">Napęd</div>
                        <div className="text-xl font-semibold text-white">{car.drive}</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/cars/${car.id}`} 
                      className="bg-[#FFE600] text-black py-3 px-6 rounded text-center font-bold hover:bg-[#FFD700] transition duration-300 w-full"
                    >
                      Rezerwacja
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja Top 3 */}
      <section className="w-full py-16 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Top 3 samochody</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCars.slice(0, 3).map((car) => (
              <div key={car.id} className="bg-black rounded overflow-hidden hover:bg-zinc-950 transition duration-300">
                <div className="h-60 relative">
                  <Image 
                    src={car.image} 
                    alt={car.name} 
                    fill 
                    className="object-contain bg-zinc-900"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">{car.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">{car.horsepower} KM | {car.acceleration} s</div>
                    <div className="font-bold text-[#FFE600]">{car.pricePerDay} zł</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-black border-t border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nie znalazłeś wymarzonego samochodu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
            Nasza oferta jest stale poszerzana. Skontaktuj się z nami, a postaramy się spełnić Twoje oczekiwania.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-[#FFE600] text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FFD700] inline-block transition duration-300">
              Kontakt telefoniczny
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black inline-block transition duration-300">
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </section>
      
      {/* Jak to działa */}
      <section className="w-full py-16 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Jak to działa</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-2">Wybór samochodu</h3>
              <p className="text-gray-400">Wybierz samochód i termin wynajmu za pomocą naszej strony internetowej.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-2">Rezerwacja</h3>
              <p className="text-gray-400">Dokonaj rezerwacji i wniesienia opłaty wstępnej online lub telefonicznie.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-2">Odbiór</h3>
              <p className="text-gray-400">Odbierz samochód w jednej z naszych lokalizacji lub skorzystaj z dostawy pod wskazany adres.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFE600] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold text-xl mb-2">Zwrot</h3>
              <p className="text-gray-400">Zwróć samochód w umówionym miejscu i terminie. To wszystko!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
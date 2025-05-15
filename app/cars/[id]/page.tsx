'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// Interfejs dla danych samochodu (zgodny z interfejsem z strony cars)
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
  images?: string[]; // Dodajemy opcjonalną tablicę zdjęć
}

// Interfejs dla formularza rezerwacji
interface ReservationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateFrom: string;
  dateTo: string;
  additionalInfo: string;
}

export default function CarDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const carId = params.id as string;
  
  // Stan dla danych samochodu
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Stan dla galerii zdjęć
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [showPhotoGallery, setShowPhotoGallery] = useState<boolean>(false);
  
  // Stan dla formularza rezerwacji
  const [reservationForm, setReservationForm] = useState<ReservationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateFrom: '',
    dateTo: '',
    additionalInfo: '',
  });
  
  // Stan dla obsługi przesyłania formularza
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  
  // Przykładowa baza danych samochodów
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
      features: ['Klimatyzacja', 'System audio premium', 'Skórzana tapicerka', 'Tryb Sport+', 'Dyfuzor Carbon', 'Elektronicznie sterowane fotele', 'Nawigacja satelitarna', 'Bluetooth'],
      image: '/images/ferrariyel1.jpg',
      images: [
        '/images/ferrariyel1.jpg',
        '/images/ferrariyel2.jpg',
        '/images/ferrariyel3.jpg'
      ]
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
      features: ['Klimatyzacja', 'System audio premium', 'Skórzana tapicerka', 'Tryb Corsa', 'Carbon Ceramic hamulce', 'System kamer 360°', 'Pakiet Aerodynamiczny', 'Nawigacja'],
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
      features: ['Klimatyzacja', 'System audio Meridian', 'Skórzana tapicerka', 'Podgrzewane fotele', 'Aktywny wydech sportowy', 'Tryb Dynamic', 'Podgrzewana kierownica', 'Bluetooth'],
      image: '/images/jaguar-yellow.jpg'
    },
    {
      id: 'porsche-911',
      name: 'Porsche 911 Carrera',
      brand: 'Porsche',
      category: 'Sportowy',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 2,
      pricePerDay: 2200,
      horsepower: 450,
      engine: '3.0 L',
      acceleration: 3.4,
      drive: '4x4',
      features: ['Klimatyzacja', 'System Porsche Communication', 'Skórzana tapicerka', 'Sport Chrono', 'PASM - Porsche Active Suspension Management', 'Elektrycznie regulowane fotele', 'Wyświetlacz head-up', 'Porsche Dynamic Light System'],
      image: '/images/porsche-black.jpg'
    },
    {
      id: 'mercedes-s',
      name: 'Mercedes S-Class',
      brand: 'Mercedes',
      category: 'Sedan',
      fuel: 'Hybrid',
      transmission: 'Automat',
      doors: 4,
      pricePerDay: 1200,
      horsepower: 500,
      engine: '4.0 L',
      acceleration: 4.5,
      drive: '4x4',
      features: ['Klimatyzacja', 'System MBUX', 'Masaż foteli', 'Ambient lighting', 'Burmester Surround Sound', 'Panoramiczny dach', 'Asystent jazdy', 'MAGIC BODY CONTROL'],
      image: '/images/car-dark-top.jpg'
    },
    {
      id: 'range-rover',
      name: 'Range Rover',
      brand: 'Land Rover',
      category: 'SUV',
      fuel: 'Diesel',
      transmission: 'Automat',
      doors: 5,
      pricePerDay: 1800,
      horsepower: 350,
      engine: '3.0 L',
      acceleration: 6.1,
      drive: '4x4',
      features: ['Klimatyzacja 4-strefowa', 'System Meridian', 'Skórzana tapicerka', 'Panoramiczny dach', 'Terrain Response 2', 'Podgrzewane i wentylowane fotele', 'System kamer 360°', 'Head-up display'],
      image: '/images/car-dark-top.jpg'
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
      features: ['Klimatyzacja', 'System audio B&O', 'Skórzana tapicerka', 'Virtual Cockpit', 'Pakiet Carbon', 'Magnetic Ride', 'Dynamiczny układ kierowniczy', 'System kamer parkowania'],
      image: '/images/r81.jpg',
      images: [
        '/images/r81.jpg',
        '/images/r82.jpg',
        '/images/r83.jpg'
      ]
    },
    {
      id: 'bmw-m5',
      name: 'BMW M5 Competition',
      brand: 'BMW',
      category: 'Sedan',
      fuel: 'Benzyna',
      transmission: 'Automat',
      doors: 4,
      pricePerDay: 2000,
      horsepower: 625,
      engine: '4.4 L',
      acceleration: 3.3,
      drive: 'M xDrive',
      features: ['Klimatyzacja', 'System audio Harman Kardon', 'Skórzana tapicerka', 'M Driver Package', 'Head-up display', 'Adaptacyjne światła LED', 'Elektryczna regulacja foteli', 'System asystujący kierowcy Professional'],
      image: '/images/luxury-dark.jpg'
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
      features: ['Klimatyzacja', 'System audio Burmester', 'Carbon fiber body', 'AMG Performance', 'Ceramiczne hamulce', 'Aktywna aerodynamika', 'Sportowe fotele', 'Pakiet torowy'],
      image: '/images/mgtr1.jpg',
      images: [
        '/images/mgtr1.jpg',
        '/images/mgtr2.jpg'
      ]
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
      image: '/images/m31.jpg',
      images: [
        '/images/m31.jpg',
        '/images/m32.jpg',
        '/images/m33.jpg'
      ]
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
      image: '/images/porshgt3.jpg',
      images: [
        '/images/porshgt3.jpg'
      ]
    },
  ];
  
  // Pobranie danych samochodu na podstawie ID
  useEffect(() => {
    // Symulacja pobierania danych
    setLoading(true);
    const foundCar = carsData.find(c => c.id === carId);
    if (foundCar) {
      setCar(foundCar);
    } else {
      // Jeśli nie znaleziono samochodu, przekieruj na stronę główną
      router.push('/cars');
    }
    setLoading(false);
  }, [carId, router, carsData]);

  // Obsługa zmiany w formularzu
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReservationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Wysłanie formularza rezerwacji
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      // Symulacja wysyłania danych (w rzeczywistej aplikacji byłoby tu API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Formularz wysłany:', {
        carId,
        ...reservationForm
      });
      
      // Resetowanie formularza po udanym wysłaniu
      setReservationForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateFrom: '',
        dateTo: '',
        additionalInfo: '',
      });
      
      setSubmitSuccess(true);
    } catch (_) {
      setSubmitError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Obliczanie całkowitej ceny wynajmu
  const calculateTotalPrice = () => {
    if (!car || !reservationForm.dateFrom || !reservationForm.dateTo) return 0;
    
    const dateFrom = new Date(reservationForm.dateFrom);
    const dateTo = new Date(reservationForm.dateTo);
    const diffTime = Math.abs(dateTo.getTime() - dateFrom.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return car.pricePerDay * diffDays;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Ładowanie...</div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Nie znaleziono samochodu</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-28">
      {/* Nagłówek strony */}
      <section className="pt-10 pb-6 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#FFE600]">Strona główna</Link>
            <span>/</span>
            <Link href="/cars" className="hover:text-[#FFE600]">Pojazdy</Link>
            <span>/</span>
            <span className="text-[#FFE600]">{car.name}</span>
          </div>
          <h1 className="text-4xl font-bold">{car.name}</h1>
          <p className="text-gray-400 mt-2">
            {car.category} | {car.brand} | {car.engine} | {car.horsepower} KM
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Lewa strona - informacje o samochodzie (3/5 szerokości) */}
          <div className="lg:col-span-3">
            {/* Zdjęcie samochodu */}
            <div className="relative h-[500px] rounded-lg overflow-hidden mb-8">
              {car.images ? (
                <>
                  <div 
                    className="absolute inset-0 z-10 cursor-pointer" 
                    onClick={() => setShowPhotoGallery(true)}
                  ></div>
                  <Image 
                    src={car.images[currentPhotoIndex]} 
                    alt={car.name} 
                    fill 
                    className="object-contain bg-zinc-900"
                    priority
                  />
                  {/* Kontrolki galerii */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {car.images.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentPhotoIndex === index ? 'bg-[#FFE600]' : 'bg-white/50'}`}
                        aria-label={`Przejdź do zdjęcia ${index + 1}`}
                      />
                    ))}
                  </div>
                  {/* Przyciski nawigacji */}
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    onClick={() => setCurrentPhotoIndex(prev => (prev === 0 ? car.images!.length - 1 : prev - 1))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                    onClick={() => setCurrentPhotoIndex(prev => (prev === car.images!.length - 1 ? 0 : prev + 1))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              ) : (
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  className="object-contain bg-zinc-900"
                  priority
                />
              )}
            </div>
            
            {/* Miniatury zdjęć */}
            {car.images && (
              <div className="grid grid-cols-3 gap-2 mb-8">
                {car.images.map((img, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 cursor-pointer rounded overflow-hidden border-2 ${currentPhotoIndex === index ? 'border-[#FFE600]' : 'border-transparent'}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  >
                    <Image 
                      src={img} 
                      alt={`${car.name} - zdjęcie ${index + 1}`} 
                      fill 
                      className="object-contain bg-zinc-800"
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Sekcja z informacjami o osiągach */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold border-b border-zinc-800 pb-4 mb-4">Osiągi i specyfikacja</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Moc</div>
                  <div className="text-xl font-bold">{car.horsepower} <span className="text-sm">KM</span></div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">0-100 km/h</div>
                  <div className="text-xl font-bold">{car.acceleration} <span className="text-sm">s</span></div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Silnik</div>
                  <div className="text-xl font-bold">{car.engine}</div>
                </div>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Napęd</div>
                  <div className="text-xl font-bold">{car.drive}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Specyfikacja</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-400">Marka:</span>
                      <span>{car.brand}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Kategoria:</span>
                      <span>{car.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Paliwo:</span>
                      <span>{car.fuel}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Skrzynia biegów:</span>
                      <span>{car.transmission}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">Liczba drzwi:</span>
                      <span>{car.doors}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wyposażenie</h3>
                  <ul className="space-y-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-4 w-4 text-[#FFE600] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Opis samochodu */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold border-b border-zinc-800 pb-4 mb-4">O {car.name}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {car.name} to wyjątkowy samochód łączący niezrównane osiągi z luksusem i technologią na najwyższym poziomie. 
                Dzięki potężnemu silnikowi {car.engine} generującemu {car.horsepower} KM mocy, ten {car.category.toLowerCase()} 
                samochód przyspiesza od 0 do 100 km/h w zaledwie {car.acceleration} sekundy, zapewniając niezapomniane wrażenia z jazdy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Jego zaawansowane systemy elektroniczne, precyzyjny układ kierowniczy i doskonałe hamulce 
                sprawiają, że prowadzi się go z niezwykłą łatwością zarówno na autostradzie, jak i na krętych górskich drogach. 
                Luksusowe wnętrze wykończone najwyższej jakości materiałami oraz bogate wyposażenie 
                gwarantują komfort podczas każdej podróży.
              </p>
            </div>
            
            {/* Zasady wynajmu */}
            <div>
              <h2 className="text-2xl font-bold border-b border-zinc-800 pb-4 mb-4">Zasady wynajmu</h2>
              <div className="bg-zinc-900 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFE600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Minimalny wiek kierowcy: 25 lat</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFE600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Wymagane prawo jazdy od minimum 3 lat</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFE600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kaucja zwrotna: 5000 zł</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFE600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Limit dzienny kilometrów: 300 km (każdy dodatkowy km: 5 zł)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFE600] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pełne ubezpieczenie AC/OC w cenie wynajmu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Prawa strona - formularz rezerwacji (2/5 szerokości) */}
          <div className="lg:col-span-2 bg-zinc-900 p-6 rounded-lg h-fit sticky top-32">
            <h2 className="text-2xl font-bold mb-6">Rezerwacja</h2>
            
            {/* Cena */}
            <div className="mb-6 border-b border-zinc-800 pb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Cena za dobę:</span>
                <span className="text-xl font-bold text-[#FFE600]">{car.pricePerDay} zł</span>
              </div>
              {reservationForm.dateFrom && reservationForm.dateTo && (
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">Całkowita cena:</span>
                  <span className="text-xl font-bold text-[#FFE600]">{calculateTotalPrice()} zł</span>
                </div>
              )}
            </div>
            
            {/* Komunikaty po wysłaniu formularza */}
            {submitSuccess && (
              <div className="bg-green-900 border border-green-600 text-green-200 px-4 py-3 rounded mb-6">
                Twoja rezerwacja została przyjęta! Skontaktujemy się z Tobą wkrótce, aby potwierdzić szczegóły.
              </div>
            )}
            
            {submitError && (
              <div className="bg-red-900 border border-red-600 text-red-200 px-4 py-3 rounded mb-6">
                {submitError}
              </div>
            )}
            
            {/* Formularz rezerwacji */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="firstName">
                    Imię *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={reservationForm.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="lastName">
                    Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={reservationForm.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={reservationForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="phone">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={reservationForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="dateFrom">
                    Data odbioru *
                  </label>
                  <input
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    value={reservationForm.dateFrom}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="dateTo">
                    Data zwrotu *
                  </label>
                  <input
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    value={reservationForm.dateTo}
                    onChange={handleInputChange}
                    required
                    min={reservationForm.dateFrom || new Date().toISOString().split('T')[0]}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="additionalInfo">
                  Dodatkowe informacje
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={reservationForm.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#FFE600] text-black py-3 px-4 rounded font-bold hover:bg-[#FFD700] transition ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Wysyłanie...' : 'Zarezerwuj teraz'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal galerii zdjęć */}
      {showPhotoGallery && car.images && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Przycisk zamknięcia */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#FFE600]"
            onClick={() => setShowPhotoGallery(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Główne zdjęcie */}
          <div className="relative h-[80vh] w-[90vw]">
            <Image 
              src={car.images[currentPhotoIndex]} 
              alt={car.name} 
              fill 
              className="object-contain"
              priority
            />
          </div>
          
          {/* Przyciski nawigacji */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentPhotoIndex(prev => (prev === 0 ? car.images!.length - 1 : prev - 1));
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentPhotoIndex(prev => (prev === car.images!.length - 1 ? 0 : prev + 1));
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Wskaźniki */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
            {car.images.map((_, index) => (
              <button 
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentPhotoIndex(index);
                }}
                className={`w-4 h-4 rounded-full ${currentPhotoIndex === index ? 'bg-[#FFE600]' : 'bg-white/50'}`}
                aria-label={`Przejdź do zdjęcia ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
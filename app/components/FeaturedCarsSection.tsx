import Link from 'next/link';
import CarCard from './CarCard';

export default function FeaturedCarsSection() {
  const featuredCars = [
    {
      name: "BMW M3 Competition",
      imageSrc: "/images/m31.jpg",
      price: "2500 zł / dzień",
      features: "Sedan | Benzyna | 510 KM",
      slug: "bmw-m3"
    },
    {
      name: "Porsche 911 GT3",
      imageSrc: "/images/porshgt3.jpg",
      price: "3800 zł / dzień",
      features: "Sportowy | Benzyna | 510 KM",
      slug: "porsche-gt3"
    },
    {
      name: "Mercedes AMG GTR",
      imageSrc: "/images/mgtr1.jpg",
      price: "4000 zł / dzień",
      features: "Sportowy | Benzyna | 585 KM",
      slug: "mercedes-amg-gtr"
    }
  ];

  return (
    <section className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">BESTSELLERY KARZONE :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard 
              key={car.slug}
              name={car.name}
              imageSrc={car.imageSrc}
              price={car.price}
              features={car.features}
              slug={car.slug}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            href="/cars" 
            className="inline-block border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Zobacz wszystkie samochody
          </Link>
        </div>
      </div>
    </section>
  );
} 
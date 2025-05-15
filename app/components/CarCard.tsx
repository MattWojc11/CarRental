import Image from 'next/image';
import Link from 'next/link';

interface CarCardProps {
  name: string;
  imageSrc: string;
  price: string;
  features: string;
  slug: string;
}

export default function CarCard({ name, imageSrc, price, features, slug }: CarCardProps) {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <div className="h-64 relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain bg-zinc-900"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{features}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{price}</span>
          <Link
            href={`/cars/${slug}`}
            className="bg-[#FFE600] text-black px-4 py-2 rounded-full hover:bg-[#FFD700]">
            Zarezerwuj
          </Link>
        </div>
      </div>
    </div>
  );
} 
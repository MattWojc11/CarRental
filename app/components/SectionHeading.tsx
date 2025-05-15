interface SectionHeadingProps {
  title: string;
  color?: 'yellow' | 'white' | 'zinc';
}

export default function SectionHeading({ title, color = 'yellow' }: SectionHeadingProps) {
  const getLineColor = () => {
    switch (color) {
      case 'yellow':
        return 'bg-[#FFE600]';
      case 'white':
        return 'bg-white';
      case 'zinc':
        return 'bg-zinc-500';
      default:
        return 'bg-[#FFE600]';
    }
  };
  
  return (
    <div className="flex items-center">
      <div className={`w-12 h-px ${getLineColor()} mr-4`}></div>
      <h2 className="text-lg uppercase font-medium tracking-wider text-white">{title}</h2>
    </div>
  );
} 
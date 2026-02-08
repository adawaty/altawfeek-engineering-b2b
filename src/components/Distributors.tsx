import { useLanguage } from "@/contexts/LanguageContext";
import bavariaLogo from "@/assets/images/bavaria-logo.png";
import apolloLogo from "@/assets/images/apollo-logo.png";
import sriLogo from "@/assets/images/sri-logo.jpg";

export default function Distributors() {
  const { t } = useLanguage();

  const distributors = [
    { name: "Bavaria Fire Fighting", logo: bavariaLogo, url: "#" },
    { name: "Apollo Fire Detectors", logo: apolloLogo, url: "#" },
    { name: "SRI Malaysia", logo: sriLogo, url: "#" },
  ];

  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground uppercase tracking-widest text-sm font-bold mb-8">
          {t.distributors.title}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {distributors.map((dist) => (
            <div key={dist.name} className="h-16 md:h-20 flex items-center justify-center">
              <img 
                src={dist.logo} 
                alt={dist.name} 
                className="max-h-full max-w-[180px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

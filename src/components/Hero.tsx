import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/images/hero-sprinkler.jpg";

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Fire Protection Engineering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
            <ShieldCheck className="h-4 w-4" />
            <span>{t.hero.iso_badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-in-up delay-100">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 h-14 px-8 text-lg rounded-none uppercase tracking-wide font-bold cursor-pointer">
              <a href="/services">
                {t.hero.cta_primary}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-2 border-white bg-black/20 hover:bg-white hover:text-primary h-14 px-8 text-lg rounded-none uppercase tracking-wide font-bold backdrop-blur-sm cursor-pointer">
              <a href="/contact">
                {t.hero.cta_secondary}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Diagonal Strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
    </section>
  );
}

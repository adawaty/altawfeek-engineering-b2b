import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Distributors from "@/components/Distributors";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Distributors />
      
      {/* Home Page uses simplified versions or call-to-actions to full pages */}
      
      {/* About Teaser */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-accent font-bold uppercase tracking-widest mb-2">{t.home.about_teaser_subtitle}</div>
            <h2 className="text-4xl font-bold mb-6 text-primary">{t.home.about_teaser_title}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t.home.about_teaser_desc}
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold">
                {t.home.read_more}
              </Button>
            </Link>
          </div>
          <div className="bg-secondary p-8 rounded-2xl relative">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
             <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <div className="text-3xl font-bold text-primary mb-1">15+</div>
                   <div className="text-xs text-muted-foreground uppercase">{t.home.stats_exp}</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <div className="text-3xl font-bold text-primary mb-1">500+</div>
                   <div className="text-xs text-muted-foreground uppercase">{t.home.stats_clients}</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <div className="text-3xl font-bold text-primary mb-1">1k+</div>
                   <div className="text-xs text-muted-foreground uppercase">{t.home.stats_projects}</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <div className="text-3xl font-bold text-primary mb-1">100%</div>
                   <div className="text-xs text-muted-foreground uppercase">{t.home.stats_success}</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Teaser - Reuse component but could be simplified */}
      <Services />

      {/* Projects Teaser */}
      <div className="bg-white">
        <Projects />
        <div className="text-center pb-20">
          <Link href="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8">
              {t.home.view_all_projects} <ArrowRight className={dir === 'rtl' ? "rotate-180 mr-2" : "ml-2"} />
            </Button>
          </Link>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

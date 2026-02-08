import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-secondary/30 py-12 mb-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-primary uppercase tracking-wide">{t.nav.about}</h1>
                <div className="w-20 h-1 bg-accent mx-auto mt-4" />
            </div>
        </div>

        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-accent font-bold uppercase tracking-widest mb-2">{t.home.about_teaser_subtitle}</div>
              <h2 className="text-4xl font-bold mb-6 text-primary">{t.home.about_teaser_title}</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {t.home.about_teaser_desc}
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                 {t.about.mission}
              </p>
              <ul className="space-y-4">
                {t.about.features.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-primary">
                    <div className="h-2 w-2 bg-accent rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
               <div className="bg-secondary p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                  <h3 className="text-2xl font-bold text-primary mb-6">{t.about.values_title}</h3>
                  <div className="space-y-6">
                     <div>
                        <h4 className="font-bold text-lg mb-1">{t.about.values.integrity.title}</h4>
                        <p className="text-muted-foreground">{t.about.values.integrity.desc}</p>
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">{t.about.values.excellence.title}</h4>
                        <p className="text-muted-foreground">{t.about.values.excellence.desc}</p>
                     </div>
                     <div>
                        <h4 className="font-bold text-lg mb-1">{t.about.values.safety.title}</h4>
                        <p className="text-muted-foreground">{t.about.values.safety.desc}</p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-primary text-white p-8 rounded-2xl">
                   <h3 className="text-2xl font-bold mb-4">{t.about.consulting.title}</h3>
                   <p className="mb-6 opacity-90">{t.about.consulting.desc}</p>
                   <a href="/contact" className="inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded transition-colors">
                      {t.about.consulting.button}
                   </a>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

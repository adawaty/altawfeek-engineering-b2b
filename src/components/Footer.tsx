import { useLanguage } from "@/contexts/LanguageContext";
// import LogoFull from "@/assets/images/altawfeek-logo-full.png"; // Removed image
import { Link } from "wouter";

export default function Footer() {
  const { t, language } = useLanguage(); // Added language
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-foreground border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col gap-1 mb-6 group">
              <span className={cn(
                 "text-2xl font-heading font-bold uppercase tracking-tight leading-none text-foreground group-hover:text-primary transition-colors", 
                 language === 'en' ? "tracking-wider" : "font-sans"
              )}>
                {language === 'en' ? 'AlTawfeek' : 'التوفيق'}
              </span>
              <span className={cn(
                 "text-xs font-body font-bold uppercase tracking-widest text-accent",
                 language === 'en' ? "" : "font-sans"
              )}>
                 {language === 'en' ? 'Engineering & Supply' : 'للهندسة والتوريدات'}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.about_desc}
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">{t.nav.products}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.bavaria}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.apollo}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.sri}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.maintenance}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{t.contact.address}</li>
              <li><a href="mailto:info@altawfeek-engineering.com" className="hover:text-primary transition-colors">info@altawfeek-engineering.com</a></li>
              <li><a href="tel:+201005751057" className="hover:text-primary transition-colors">+20 100 575 1057</a></li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">{t.footer.follow}</h4>
             <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1GUAzaJsWS/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">FB</a>
             </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} AlTawfeek Engineering. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

// Helper needed for Footer since I used cn but forgot to import it
import { cn } from "@/lib/utils";

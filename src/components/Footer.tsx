import { useLanguage } from "@/contexts/LanguageContext";
import LogoFull from "@/assets/images/altawfeek-logo-full.png";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-foreground border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white p-3 rounded-xl shadow-sm">
              <img src={LogoFull} alt="AlTawfeek Engineering" className="h-16 w-auto" />
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

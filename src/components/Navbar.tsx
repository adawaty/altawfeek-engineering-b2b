import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import LogoFull from "@/assets/images/altawfeek-logo-full.png";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { t, language, setLanguage, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update links to point to routes instead of anchors
  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/services" }, // Mapped 'Products' nav to Services page
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // Check if we are on the home page (transparent header initially)
  const isHome = location === '/';

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-md py-2 dark:bg-background/95" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
           <img 
             src={LogoFull} 
             alt="AlTawfeek Engineering" 
             className={cn("h-16 w-auto object-contain transition-all duration-300", scrolled || !isHome ? "drop-shadow-sm" : "drop-shadow-lg")} 
           />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors",
                (scrolled || !isHome) ? "text-foreground" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLang}
            className={cn("gap-2", (scrolled || !isHome) ? "text-foreground" : "text-white hover:text-white hover:bg-white/20")}
          >
            <Globe className="h-4 w-4" />
            {language === 'en' ? 'العربية' : 'English'}
          </Button>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white gap-2 rounded-full px-6 cursor-pointer">
              <Phone className="h-4 w-4" />
              {t.nav.quote}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-primary">
              <Menu className={cn("h-6 w-6", (scrolled || !isHome) ? "text-foreground" : "text-white")} />
            </Button>
          </SheetTrigger>
          <SheetContent side={dir === 'rtl' ? 'right' : 'left'}>
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Button variant="outline" onClick={toggleLang} className="justify-start gap-2">
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              </Button>
              <Link href="/contact">
                <Button className="bg-accent text-white justify-start gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  {t.nav.quote}
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

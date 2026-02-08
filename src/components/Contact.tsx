import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
            <div className="w-20 h-1 bg-accent mb-8" />
            
            <p className="text-lg text-white/80 mb-12 max-w-md">
              {t.contact.intro}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{t.contact.phone_label}</h4>
                  <a href="tel:+201005751057" className="text-white/80 font-mono block hover:text-white transition-colors">+20 100 575 1057</a>
                  <a href="tel:+201101007157" className="text-white/80 font-mono block hover:text-white transition-colors">+20 110 100 7157</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{t.contact.email_label}</h4>
                  <a href="mailto:info@altawfeek-engineering.com" className="text-white/80 font-mono hover:text-white transition-colors">info@altawfeek-engineering.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{t.contact.address}</h4>
                  <p className="text-white/80">{t.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-foreground p-8 rounded-lg shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.form_name}</label>
                  <Input placeholder={t.contact.form_name} className="bg-secondary/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.form_phone}</label>
                  <Input placeholder={t.contact.form_phone} className="bg-secondary/50 border-border/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.contact.form_email}</label>
                <Input type="email" placeholder={t.contact.form_email} className="bg-secondary/50 border-border/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.contact.form_message}</label>
                <Textarea placeholder={t.contact.form_message} className="min-h-[120px] bg-secondary/50 border-border/50" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                {t.contact.submit}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

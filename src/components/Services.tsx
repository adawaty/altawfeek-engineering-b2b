import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Bell, DraftingCompass } from "lucide-react";
import suppressionImg from "@/assets/images/suppression.jpg";
import heroAlarmImg from "@/assets/images/hero-alarm.jpg";
import extinguisherImg from "@/assets/images/extinguisher.jpg";

export default function Services() {
  const { t, dir } = useLanguage();

  const services = [
    {
      id: "firefighting",
      icon: Flame,
      image: suppressionImg,
      title: t.services.firefighting.title,
      desc: t.services.firefighting.desc,
    },
    {
      id: "alarm",
      icon: Bell,
      image: heroAlarmImg,
      title: t.services.alarm.title,
      desc: t.services.alarm.desc,
    },
    {
      id: "consulting",
      icon: DraftingCompass,
      image: extinguisherImg, // Using extinguisher as placeholder for consulting/engineering
      title: t.services.consulting.title,
      desc: t.services.consulting.desc,
    },
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardHeader className="relative">
                <div className="absolute -top-6 right-6 bg-accent text-white p-3 rounded-lg shadow-md group-hover:-translate-y-2 transition-transform">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-primary mt-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground mb-6 line-clamp-3">
                  {service.desc}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-accent font-bold group-hover:translate-x-2 transition-transform">
                  {t.services.learn_more} <ArrowRight className={dir === 'rtl' ? "rotate-180 mr-2" : "ml-2"} size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

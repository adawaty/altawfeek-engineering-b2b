import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import pumpImg from "@/assets/images/project-pump.jpg";
import foamImg from "@/assets/images/project-foam.jpg";
import alarmImg from "@/assets/images/hero-alarm.jpg";
import sprinklerImg from "@/assets/images/hero-sprinkler.jpg";

export default function Projects() {
  const { t, dir } = useLanguage();

  const projectImages = [pumpImg, foamImg, alarmImg, sprinklerImg];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-muted-foreground uppercase tracking-widest font-bold">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.projects.items.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-4 right-4 z-20 bg-accent text-white border-none">
                  {t.projects.completed}
                </Badge>
              </div>
              <CardContent className="p-6 bg-secondary/20 h-full relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-accent border-l-transparent group-hover:border-l-accent transition-colors" />
                
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  {project.client}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-background font-body flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-secondary/30 py-12 mb-8">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-primary uppercase tracking-wide">{t.nav.projects}</h1>
                <div className="w-20 h-1 bg-accent mx-auto mt-4" />
            </div>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

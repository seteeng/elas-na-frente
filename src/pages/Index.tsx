import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import ObjetivosSection from "@/components/ObjetivosSection";
import EmpreendedorasSection from "@/components/EmpreendedorasSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PilaresSection />
        <ObjetivosSection />
        <EmpreendedorasSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

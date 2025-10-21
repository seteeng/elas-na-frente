import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 leading-tight">
              O que é a Rede Mulheres Empreendedoras?
            </h1>
            <p className="text-lg md:text-xl text-primary mb-8 leading-relaxed">
              Construímos e apoiamos iniciativas capazes de empoderar empreendedoras,
              possibilitando independência financeira e de decisão pessoal.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Acesse o Georreferenciamento da Rede Mulheres
            </Button>
          </div>

          <div className="animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Mulheres Empreendedoras reunidas"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

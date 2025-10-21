import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat flex items-end"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 pb-12 md:pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            O que é a Rede Mulheres Empreendedoras?
          </h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed">
            Construímos e apoiamos iniciativas capazes de empoderar empreendedoras,
            possibilitando independência financeira e de decisão pessoal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

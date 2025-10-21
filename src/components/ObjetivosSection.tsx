import { Map, GraduationCap, DollarSign, Briefcase, Users, Trophy } from "lucide-react";

const ObjetivosSection = () => {
  const objetivos = [
    {
      icon: Map,
      title: "MAPEAMENTO",
      description: "Cadastramento da mulher na Rede",
    },
    {
      icon: GraduationCap,
      title: "CAPACITAÇÃO",
      description: "Disponibilizar cursos de capacitação técnica para a qualificação do seu negócio",
    },
    {
      icon: DollarSign,
      title: "GERAÇÃO DE RENDA",
      description: "Oportunizar a independência financeira e decisão pessoal",
    },
    {
      icon: Briefcase,
      title: "AUTONOMIA DE TRABALHO",
      description: "A mulher como dona do seu próprio negócio",
    },
    {
      icon: Users,
      title: "FORMAÇÃO DA REDE",
      description: "Estímulo da integração e a complementação do trabalho entre elas para as demandas existentes",
    },
    {
      icon: Trophy,
      title: "SUCESSO",
      description: "Reconhecimento da conquistas individuais e coletivas das Mulheres da Rede, valorizando suas trajetórias",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Objetivos
          </h2>
          <p className="text-lg md:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            O "Rede Mulheres Empreendedoras" tem por objetivo inserir a mulher num espaço
            em que ela se reconheça como empreendedora
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {objetivos.map((objetivo, index) => (
            <div
              key={objetivo.title}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-purple rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <objetivo.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                {objetivo.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {objetivo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjetivosSection;

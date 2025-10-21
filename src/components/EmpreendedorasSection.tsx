import { Card, CardContent } from "@/components/ui/card";

const EmpreendedorasSection = () => {
  const empreendedoras = [
    {
      name: "Iza",
      business: "Bazar Iza",
      description: "Trabalha com vendas online de Lingerie, Roupas, Brinquedos e opções de Presentes.",
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Maria",
      business: "Costura Criativa",
      description: "Especializada em roupas sob medida e customização de peças.",
      color: "from-pink-400 to-purple-400",
    },
    {
      name: "Ana",
      business: "Doces da Ana",
      description: "Produção artesanal de doces e bolos personalizados.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-pink-100/50 to-purple-100/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-6">
          Mulheres Empreendedoras
        </h2>
        <p className="text-center text-lg text-primary mb-16">
          Conheça alguns exemplos de mulheres que já empreendem!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {empreendedoras.map((emp, index) => (
            <Card
              key={emp.name}
              className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-40 bg-gradient-to-br ${emp.color} flex items-center justify-center`}>
                <div className="text-white text-6xl font-bold opacity-50">
                  {emp.name[0]}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{emp.name}</h3>
                <p className="text-accent font-semibold mb-3">{emp.business}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {emp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpreendedorasSection;
